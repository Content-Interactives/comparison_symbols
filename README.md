# Comparison Symbols

React SPA for practicing comparison symbols (&gt;, &lt;, =). Vite + Tailwind; static deploy to GitHub Pages.

**Live:** https://content-interactives.github.io/comparison_symbols/

**Curriculum and standards:** [Standards.md](Standards.md)

## Stack

- React 19, Vite 7, JavaScript (JSX)
- Tailwind CSS 3, `canvas-confetti`

## Scripts

| Command | Purpose |
|--------|---------|
| `npm run dev` | Dev server |
| `npm run build` | Build → `dist/` |
| `npm run preview` | Preview `dist/` |
| `npm run lint` | ESLint |
| `npm run deploy` | Build + `gh-pages -d dist` |

## Configuration

`vite.config.js`: `base: '/comparison_symbols/'` for GitHub Pages.

## Layout

`src/main.jsx` entry; components under `src/`.
