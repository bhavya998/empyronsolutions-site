# Empyron Solutions website

Production marketing site for Empyron Solutions, an independent AI and data engineering studio based in Koblenz, Germany.

## Stack and rendering

- Node.js 24 LTS for local development and CI
- Next.js 16 App Router + React 19 + TypeScript
- Tailwind CSS 4
- Static export to `out/` for the existing GitHub Pages custom-domain deployment
- React client components only for the mobile navigation and contact form; the page content is pre-rendered to HTML

GitHub Pages serves static files, so there is no persistent Node.js server in production. Next.js and Node.js are used to build the pre-rendered site. This keeps hosting compatible with the existing `gh-pages` branch while giving search engines and social previews complete page HTML and metadata.

## Commands

```bash
npm install
npm run dev       # Next.js dev server at http://localhost:3000
npm run lint
npm run build     # static export to out/
npm run preview   # preview out/ at http://localhost:4173
npm run deploy    # build and publish out/ to the gh-pages branch
```

Use Node 24 (`.nvmrc`). GitHub Actions runs lint and the static production build on pushes and pull requests.

## Contact form

Create a form at [Formspree](https://formspree.io) and set `NEXT_PUBLIC_FORMSPREE_ID` in `.env.local` before building. If it is not configured, the form opens a prefilled email draft instead.

## Source layout

- `src/app/` — Next.js route, metadata, sitemap, robots, Impressum, and privacy rules
- `src/components/` — page sections and interactive client components
- `src/components/TechStack.tsx` — MCP/agents, hybrid retrieval, fine-tuning, and inference technologies
- `public/` — static images and the GitHub Pages custom-domain `CNAME`
