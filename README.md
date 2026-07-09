# INTAS — official website

Static marketing site for INTAS — business consulting, custom enterprise software, and e-wedding cards & games.

## Structure

```
site/                     ← the deployable website (static, no build step)
  index.html              Home
  services.html           Services
  about.html              About
  contact.html            Contact (mailto-based form)
  assets/
    css/styles.css        Design system
    js/i18n.js            TH / EN bilingual engine (data-i18n keys)
    js/main.js            Mobile nav + contact form
    img/                  Photos
INTAS Website.html        Original design-tool bundle (reference)
```

## Run locally

```bash
cd site
python -m http.server 8080
# open http://localhost:8080
```

## Languages

Fully bilingual **Thai / English**. Every text node carries a `data-i18n` key;
translations live in `site/assets/js/i18n.js`. The toggle (TH/EN in the nav)
persists the choice in `localStorage`.

## Deploy

`site/` is a plain static folder — deploy to Netlify, Vercel, Cloudflare Pages,
or GitHub Pages. No build step required.
