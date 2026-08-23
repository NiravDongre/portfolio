# Nirav — Portfolio

A backend & full-stack developer portfolio, built with React + Vite.

## Run it

```bash
npm install
npm run dev       # starts a local dev server with hot reload
```

Then open the URL it prints (usually http://localhost:5173).

```bash
npm run build      # production build, output in dist/
npm run preview    # preview the production build locally
npm run lint        # check the code with oxlint
```

## Customize

Everything you're likely to want to change lives in the `PROFILE` object
at the top of `src/App.jsx`: name, tagline, bio, socials, tech stack, and
the four placeholder projects. Replace the placeholder `#` links with
real GitHub/demo URLs and they'll become clickable automatically.

**Photo:** `PROFILE.photoUrl` is empty by default, which shows a plain
placeholder. To add your own photo, drop a file in `src/assets/` (e.g.
`photo.jpg`) and at the top of `src/App.jsx`:

```js
import photo from './assets/photo.jpg';
// then in PROFILE:
photoUrl: photo,
```

A hosted image URL works too — just paste it into `photoUrl` directly.

**Colors & fonts:** all theme values are CSS variables at the top of
`src/index.css`, under `.nrv-root` (light) and `.nrv-root.dark` (dark).
Changing a value there updates it everywhere.

## Structure

```
src/
  App.jsx       — all page content and layout (PROFILE object + JSX)
  index.css     — theme variables, fonts, and all styling
  main.jsx      — Vite/React entry point (rarely needs edits)
index.html      — page title/meta
```

## Deploy

The `dist/` folder from `npm run build` is a static site — it can be
deployed as-is to Vercel, Netlify, GitHub Pages, or any static host.
