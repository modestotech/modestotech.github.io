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
