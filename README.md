# modestotech.github.io

Personal site for Modesto Software: landing page, resume and contact page.

**Stack:** [Eleventy](https://www.11ty.dev/) + Tailwind CSS/daisyUI, deployed to GitHub Pages.

## Develop

```sh
npm ci        # install
npm run dev   # local server with live reload
npm test      # build + sanity tests (test/)
```

Pushing to `main` builds, tests and deploys via `.github/workflows/build-and-deploy.yml`.

## Where things live

- `src/*.md` – pages
- `src/_data/site.json` – name, title, career start year
- `src/_data/resumeData.json` – resume content
- `src/js/utils/contactUtils.js` – contact details (base64-encoded)
- `src/_includes/` – layouts
- `.github/dependabot.yml` – Dependabot config

## Analytics: GoatCounter

[GoatCounter](https://www.goatcounter.com/) is a privacy-friendly, EU-hosted analytics service. It counts page views without cookies: a visitor is recognised only by a non-reversible hash of IP + browser that rotates daily, so nothing is stored on their device and nobody can be tracked across days or sites. That's why the site has no cookie banner, and it avoids the GDPR problems Google Analytics has had in Sweden.

Dashboard: <https://modestosoftware.goatcounter.com>. The script tag and its CSP entries are in `src/_includes/base.njk`.

## Dependency updates: Dependabot

[Dependabot](https://docs.github.com/en/code-security/dependabot) is GitHub's built-in bot that opens PRs when npm packages or GitHub Actions have new versions. It keeps dependencies patched without manual checking. The workflow pins actions to commit SHAs (so a hijacked version tag can't push code to the site), and Dependabot is what keeps those pins up to date.
