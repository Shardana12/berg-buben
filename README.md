# Berg Buben – Sito bilingue (Vite + React + TypeScript)

Vetrina bilingue **tedesco (principale) / inglese** per il brand Berg Buben, con i contenuti gestiti nel repo e i link/immagini che puntano allo shop `lebensmittel-sonderposten.de`. Pensata per il deploy su Vercel.

## Requisiti

Node.js 18 o superiore.

## Avvio in locale

```
npm install
npm run dev
```

Apre `http://localhost:5173`. Tedesco su `/`, inglese su `/en`.

## Build di produzione

```
npm run build
```

Output statico nella cartella `dist/`. Anteprima con `npm run preview`.

## Struttura

```
src/
  config/site.ts        Hero (testi bilingui), brand, URL shop, dati Impressum
  content/products.ts   Prodotti/storie (dati tipizzati, un oggetto per prodotto)
  locales/de.json        Stringhe interfaccia tedesche
  locales/en.json        Stringhe interfaccia inglesi
  lib/paths.ts           Logica prefisso lingua (/en)
  components/            Header, Footer, Hero, Seal, ProductCard, Seo, ...
  pages/                 Home, ProductStory, Impressum, Datenschutz, NotFound
  styles/global.css      Design system completo (token colore/tipografia + stili)
```

## Cambiare l'hero

Tutto in `src/config/site.ts`: `hero.eyebrow`, `hero.title`, `hero.subtitle` (ognuno con `de` e `en`) e `hero.ctaHref` (il link del pulsante).

## Aggiungere un prodotto

In `src/content/products.ts` copia l'oggetto `landjaeger`, cambia `slug` e i campi, e aggiungilo all'array `products`. Ogni prodotto ha:

- `slug` – finisce nell'URL `/produkt/<slug>`
- `imageUrl` e `shopUrl` – **placeholder**: sostituiscili con l'immagine e la pagina reali dello shop
- `name`, `category`, `excerpt` – con versione `de` e `en`
- `facts` – lo Steckbrief (label/valore) per lingua
- `body` – il testo della storia come blocchi `p` / `h` / `ul`, per lingua

La pagina prodotto e la card nella home si generano da soli.

## Immagini e link dallo shop

`imageUrl` e `shopUrl` in `products.ts` puntano a `lebensmittel-sonderposten.de`. Finché l'immagine non esiste, la card mostra un riquadro placeholder on-brand (niente immagini rotte). Appena hai le URL reali le incolli lì.

## Deploy su Vercel

1. Push del repo su GitHub.
2. Su Vercel: **New Project** → importa il repo.
3. Framework preset: **Vite**. Build command `npm run build`, output directory `dist`.
4. Deploy. Il file `vercel.json` gestisce già il rewrite SPA (tutte le route servono `index.html`).

Ogni `git push` fa un redeploy automatico.

## Pagine legali (da completare)

`Impressum` e `Datenschutzerklärung` sono **strutture con placeholder**. I dati reali (obbligatori per un sito commerciale tedesco, TMG + DSGVO) vanno messi in `src/config/site.ts` (blocco `contact`) e nel testo di `src/pages/Datenschutz.tsx`.

## Prossimo passo consigliato: SEO

Questa è una SPA renderizzata lato client: debole per Google e per i preview social. Passo 2 consigliato: aggiungere il prerender statico con `vite-react-ssg`, che genera un HTML per ogni pagina mantenendo lo stesso codice React. I meta tag per pagina (title, description, hreflang, Open Graph) sono già gestiti dal componente `Seo`.

## Se in futuro serve Sanity

I contenuti sono dietro un layer isolato: per passare a Sanity si riscrive solo `src/content/products.ts` (le stesse strutture `Product`/`Block` mappano sul Portable Text), senza toccare pagine, componenti o stili.
