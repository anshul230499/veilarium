# Veilarium — Enchanted Atlas build

This version reorganizes Veilarium around discovery rather than a wall of cards.

## What changed

- Painterly historical artworks replace the placeholder SVG imagery in the experience
- A portal-based homepage: Tradition / Realm / Celestial / Random
- Illuminated featured gallery
- Tradition chapters that reveal a small curated set first
- Full 84-entry catalog moved into a collapsible Grand Index
- Random discovery from multiple points in the site
- Artwork credit visible on gallery, chapter and entity views
- Full Art, Source & Rights section
- Every artwork record stores title, artist, date, collection, rights status and source link
- Collection artwork is explicitly labeled when it is not a literal depiction of the selected entity
- Celestial-parallel and loka sections remain interactive

## Art rights

The included remote images are sourced from Wikimedia Commons records selected for Public Domain / CC0 status. The website links each image back to its Commons source record.

Important: always preserve `source`, `license`, artist, title and date fields when replacing artwork.

## Deployment

Upload the **contents** of this folder to the root of the GitHub `veilarium` repository, not the ZIP itself. Vercel should then deploy `main` automatically.

No build step is required.
