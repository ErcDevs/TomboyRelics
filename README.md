# tomboy-relics-fresh

This template should help get you started developing with Vue 3 in Vite.

# TomboyRelics

LIVE SITE: https://tomboyrelics.com ← ONLY main branch
SANDBOX: https://tomboyrelics-dev.pages.dev ← dev branch (safe to break)

WORKFLOW:
1. Always work on `dev` branch
2. Test on -dev URL
3. Merge to main when perfect


## Store setup (Square checkout)

Products live in `src/data/ore.js`; shipping and contact settings in `src/data/site.js`.
Checkout runs through Cloudflare Pages Functions in `functions/api/` which create a
Square-hosted checkout page. Prices are read on the server, so they can't be edited in the browser.
Paid items are detected from Square orders (`/api/sold`) and drop out of the shop automatically.

Set these in Cloudflare → Workers & Pages → tomboyrelics → Settings → Variables and Secrets
(set Production and Preview separately):

| Name | Production | Preview (dev) |
|---|---|---|
| `SQUARE_ENV` | `production` | `sandbox` |
| `SQUARE_LOCATION_ID` | production location id | sandbox location id |
| `SQUARE_ACCESS_TOKEN` (encrypt as Secret) | production access token | sandbox access token |

Get the token and location id at developer.squareup.com → your app → Credentials / Locations.
Never commit the access token.

Private tools (pricing, eBay listing) are only available locally: `npm run dev`, then
`/tools/pricing` and `/tools/ebay`. They are not part of the public site.

Relics are archived in `archive/` and are not published.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd) 
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
