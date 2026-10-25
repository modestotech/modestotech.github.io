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

test("analytics scripts wait for cookie consent", () => {
  const html = read("index.html");
  const analyticsTags = html.match(/<script[^>]*(googletagmanager|analytics\.js)[^>]*>/g);
  assert.ok(analyticsTags && analyticsTags.length === 2);
  for (const tag of analyticsTags) {
    assert.match(tag, /type="text\/plain"/, tag);
    assert.match(tag, /data-category="analytics"/, tag);
  }
});

test("served JS contains no plain-text email or phone number", () => {
  const ownScripts = listFiles(path.join(siteDir, "js"))
    .filter((f) => f.endsWith(".js") && !f.endsWith("cookieconsent.umd.js"));
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

test("local links and assets resolve", () => {
  for (const page of pages) {
    const urls = [...read(page).matchAll(/(?:src|href)="(\/[^"]*)"/g)].map((m) => m[1]);
    for (const url of urls) {
      assert.ok(resolvesToFile(url), `${page} -> ${url}`);
    }
  }
});
