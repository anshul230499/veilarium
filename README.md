# Veilarium — Atlas of the Unseen

A static, dependency-free prototype for an illustrated, source-first encyclopedia of sacred beings, cosmologies, realms, celestial parallels and recorded encounter traditions.

## Why this build is different

- Original site identity and original SVG illustration system
- No stock fantasy art
- Cross-cultural comparisons explicitly labeled **parallel, not equivalent**
- Celestial Lens for traditional planetary/astral associations
- Interactive beings index
- Interactive sample loka cosmology
- Encounter taxonomy that separates devotional, textual, folkloric and later esoteric material
- Source / rights architecture built into the interface
- Responsive on desktop and mobile
- No build step and no npm dependencies

## Local preview

Open `index.html` directly, or run:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploy to GitHub + Vercel

1. Create a GitHub repository named `veilarium`.
2. Upload the contents of this folder to the repository root.
3. In Vercel, choose **Add New → Project**.
4. Import the GitHub repository.
5. Framework Preset: **Other**.
6. No build command is required.
7. Output directory: leave blank / repository root.
8. Deploy.

## Suggested repo names

1. `veilarium`
2. `veilarium-atlas`
3. `atlas-of-the-unseen`

A web search performed on August 28, 2026 did not surface an obvious existing GitHub project using the exact term “Veilarium,” but that is not trademark or legal clearance.

## Editorial rule for parallels

A record may be connected across cultures only when the connection is labeled. Suggested relationship types:

- Traditional astral deity
- Direct solar/lunar deity
- Shared celestial phenomenon
- Textually attested syncretism
- Historical borrowing / transmission
- Folkloric parallel
- Later esoteric correspondence
- Modern comparative interpretation

Do not silently convert resemblance into equivalence.

## Image rights model

Every non-original image should store:

- Title
- Maker / artist
- Date / period
- Collection
- Permanent source URL
- Rights status
- License
- Required attribution
- Record ID

Recommended rights values:

- `PUBLIC DOMAIN`
- `CC0`
- `CC BY`
- `CC BY-SA`
- `LICENSED`
- `ORIGINAL`

## Important

The current content is a foundation/prototype, not a completed scholarly encyclopedia. Before publishing individual factual records as authoritative, attach record-level sources and have sensitive living-religion entries reviewed carefully.
