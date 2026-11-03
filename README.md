# Dinepod website

Astro-powered editorial website for Dinepod, hosted on Cloudflare Pages. Designed to start as a brand/CMS site and later connect to the Dinepod booking experience.

## Deploy to Cloudflare Pages
- Framework preset: Astro
- Build command: `npm run build`
- Build output directory: `dist`
- Production branch: `main`

## Local development
```sh
npm install
npm run dev
```

## CMS
The Decap CMS interface is available at `/admin`. The GitHub backend requires a secure OAuth Worker configured with a GitHub OAuth App. Set the Worker URL in `public/admin/config.yml` as `base_url`. Never put a GitHub personal access token or OAuth client secret in browser code or this repository.

Content collections: stories, chefs, experiences. Editorial content is kept separate from future transactional booking data.
