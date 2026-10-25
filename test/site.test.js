// Sanity checks against the built site in _site/ (run `npm run build` first)
const { test } = require("node:test");
const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");

const siteDir = path.join(__dirname, "..", "_site");
const pages = ["index.html", "resume/index.html", "contact/index.html", "404.html"];

const read = (file) => fs.readFileSync(path.join(siteDir, file), "utf8");

function listFiles(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? listFiles(full) : [full];
  });
}

function resolvesToFile(url) {
  const target = path.join(siteDir, decodeURI(url.split(/[?#]/)[0]));
  const candidates = [target, path.join(target, "index.html")];
  return candidates.some((c) => fs.existsSync(c) && fs.statSync(c).isFile());
}

test("pages exist and have a title", () => {
  for (const page of pages) {
    assert.match(read(page), /<title>[^<]+<\/title>/, page);
  }
});

test("only cookieless analytics, no cookie banner", () => {
  for (const page of pages) {
    const html = read(page);
    assert.doesNotMatch(html, /googletagmanager|google-analytics|cookieconsent/, page);
    assert.strictEqual(html.match(/<script[^>]*data-goatcounter=/g)?.length, 1, page);
  }
});

test("served JS contains no plain-text email or phone number", () => {
  const ownScripts = listFiles(path.join(siteDir, "js"))
    .filter((f) => f.endsWith(".js"));
  for (const file of ownScripts) {
    const js = fs.readFileSync(file, "utf8");
    assert.doesNotMatch(js, /[\w.+-]+@[\w-]+\.[a-z]{2,}/i, file);
    assert.doesNotMatch(js, /\+\d{9,}/, file);
  }
});

test("resume and contact are noindex", () => {
  for (const page of ["resume/index.html", "contact/index.html"]) {
    assert.match(read(page), /<meta name="robots" content="noindex">/, page);
  }
  assert.doesNotMatch(read("index.html"), /name="robots"/);
});

test("sitemap lists the start page but no noindex pages", () => {
  const locs = [...read("sitemap.xml").matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  assert.deepStrictEqual(locs, ["https://modestosoftware.com/"]);
  assert.match(read("robots.txt"), /^Sitemap: https:\/\/modestosoftware\.com\/sitemap\.xml$/m);
});

test("start page has Open Graph tags with absolute image URL", () => {
  const html = read("index.html");
  assert.match(html, /<meta property="og:title" content="[^"]+">/);
  assert.match(html, /<meta property="og:description" content="[^"]+">/);
  assert.match(html, /<meta property="og:image" content="https:\/\/[^"]+\.(png|jpe?g|webp)">/);
});

test("local links and assets resolve", () => {
  for (const page of pages) {
    const urls = [...read(page).matchAll(/(?:src|href)="(\/[^"]*)"/g)].map((m) => m[1]);
    for (const url of urls) {
      assert.ok(resolvesToFile(url), `${page} -> ${url}`);
    }
  }
});

test("resume and contact have every contact slot", () => {
  for (const page of ["resume/index.html", "contact/index.html"]) {
    const slots = [...read(page).matchAll(/data-contact="(\w+)"/g)].map((m) => m[1]).sort();
    assert.deepStrictEqual(slots, ["email", "github", "linkedin", "phone"], page);
  }
});

test("scrollbar gutter is always reserved, so pages don't shift", () => {
  // daisyUI 5 adds a :root rule that only reserves it on scrolling pages; we exclude it
  const rules = read("output.css").match(/[^{}]*\{[^{}]*scrollbar-gutter[^}]*\}/g) || [];
  assert.deepStrictEqual(rules, ["html{scrollbar-gutter:stable}"]);
});
