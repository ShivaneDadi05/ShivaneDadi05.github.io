# shivanedadi.com

Personal site: writing, research, art. Built with Astro, deployed to GitHub Pages.

## Day-to-day: how to add things

**A blog post** — make `src/content/blog/my-post.md`:

```md
---
title: "Post title"
date: 2026-08-01
description: "Optional. Used for RSS and search results."
draft: false
---

Write here. Markdown. Math works: $E_0$ inline, $$...$$ for display.
Code blocks are syntax-highlighted automatically.
```

Set `draft: true` to keep something out of the site while you work on it.

**A research project** — make `src/content/research/thing.md`:

```md
---
title: "Project title"
year: 2026
role: "Lead"                       # optional
summary: "One or two sentences."
paper: "https://arxiv.org/..."     # optional
code: "https://github.com/..."     # optional
poster: "https://..."              # optional
order: 1                           # lower numbers appear first
---
```

**An artwork** — drop the image file into `src/assets/art/`. That's it.
It appears in the collage automatically, resized and converted to WebP at build time.

> Images must live in `src/assets/`, **not** `public/`. Only files under `src/`
> get optimized. Anything in `public/` is served raw at full size.

**Your CV** — put `cv.pdf` in `public/`.

**Publishing** — `git add . && git commit -m "new post" && git push`.
GitHub Actions rebuilds and deploys automatically. Takes about a minute.

## Running it locally

```
npm install     # first time only
npm run dev     # http://localhost:4321, live-reloads as you edit
npm run build   # production build into dist/ — run before pushing if unsure
```

## Where to change how it looks

Almost everything is in the token block at the top of `src/styles/global.css`:
colors, fonts, type scale, spacing scale. Change a value there and it
propagates everywhere.

The five recurring patterns (`.label`, `.rule`, `.plus-list`, `.entry`,
`.collage`) are defined just below the tokens. The art collage is the
`.collage` rule — change `columns: 3` to alter the grid.

## Fonts

Currently using system serif. To use your own:

1. Put `.woff2` files in `src/assets/fonts/`
2. Uncomment and fill in the `fonts` block in `astro.config.mjs`
3. Change `--font-serif` in `global.css` to `var(--font-serif-custom)`

Don't put font files in `public/` — Astro copies them at build time and
you'd end up with duplicates.

## Deploying / domain

- `site` in `astro.config.mjs` is `https://shivanedadi.com`. No `base` is set,
  which is correct for a custom domain.
- `public/CNAME` contains the domain. Don't delete it.
- DNS: four A records on the apex to `185.199.108.153`, `.109.153`, `.110.153`,
  `.111.153`; four AAAA to `2606:50c0:8000::153` through `8003::153`;
  CNAME `www` → `<username>.github.io`.
- In the repo: Settings → Pages → Source = **GitHub Actions**.

## Maintenance notes (for future you, months from now)

- `package-lock.json` is committed. Don't delete it — it pins every dependency
  to an exact version so builds stay reproducible.
- Node version is pinned to 22 in `.github/workflows/deploy.yml`.
- Dependabot alerts on this repo are mostly noise: this is a static site with no
  server, so build-time dependencies can't be exploited by visitors. Safe to ignore
  or turn off.
- A broken build never takes the site down. It only means the newest change
  didn't publish; the last successful deploy keeps serving.

## Delete when ready

- `src/content/blog/hello.md` and `second-post.md` (test posts)
- `src/content/research/qetu-drift.md` (placeholder)
- `src/assets/art/piece-*.jpg` (solid-color test images)
- The placeholder intro paragraph in `src/pages/index.astro`
