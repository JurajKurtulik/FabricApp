# From Insight to Action

A 19-scene live presentation about Fabric Apps and Rayfin, built with React, TypeScript, Vite, Framer Motion, SVG and Canvas 2D. The supplied specification governs content and design. The supplied PowerPoint informed the narrative; it is not included in this public web-app repository or exported as HTML.

## Run

Requires Node.js 22.12+ (or Node 24) and npm.

```sh
npm ci
npm run dev
npm run build
npm test
npm run preview
```

Open the URL printed by Vite, including `/FabricApp/`. Direct scene links use `/FabricApp/#/10`. All presentation assets are local and resolved through `import.meta.env.BASE_URL` and `public/assets/manifest.json`.

## Present

- Right / Down / PageDown / Space: next complete scene
- Left / Up / PageUp: previous scene
- Home / End: first / last
- F: fullscreen
- N: speaker notes and elapsed timer
- O: scene overview (also available via the navigation button)
- Esc: close overlay and leave fullscreen

One action advances one full scene. Navigation fades after 2.5 seconds of inactivity. All content appears automatically during entrance; the last scene does not auto-advance. The stage scales proportionally to preserve titles and logos on smaller screens. Notes are only mounted when explicitly opened. Reduced-motion preferences disable animated effects. Canvas pauses on tab hiding and is limited to 100 particles with DPR capped at 2.

## GitHub Pages

The Vite base is `/FabricApp/`. `.github/workflows/deploy.yml` installs with `npm ci`, builds, validates notes/assets and deploys `dist` through GitHub Pages. Pushes to `main` or `master` and manual workflow dispatch are supported.

GitHub Pages is configured with **Settings → Pages → Build and deployment → Source: GitHub Actions**. If organizational policy disables Actions or Pages, an administrator must enable it. The target URL is `https://JurajKurtulik.github.io/FabricApp/`.

Repository: https://github.com/JurajKurtulik/FabricApp. The complete source and selected official assets are published here. The deployment workflow targets GitHub Pages; its latest run is available under Actions.

## Source map

- `src/scenes/`: 19 individual scene components
- `src/presentation/`: navigation, stage, notes and overview
- `src/content/`: ordered titles and verbatim speaker notes
- `src/motion/`: capped Canvas field, SVG paths, pulses and motion tokens
- `src/visuals/`: local brand assets and reusable diagram/UI primitives
- `ASSETS_TODO.md`: official asset provenance and missing logos
- `QA_REPORT.md`: completed checks and limitations

The shown code and application UI are explanatory examples, not a working Fabric backend. Speaker notes preserve the supplied early-stage feature narrative, rather than asserting current feature availability.

## Browser validation

With `npm run preview` running in a separate terminal:

```sh
npx playwright install chromium
npm run test:browser
npm run test:soak
```

The browser suite checks all 19 scenes at four viewport sizes, keyboard navigation, fullscreen, notes, overview, reduced motion, hash refresh, missing images and runtime errors. The soak test runs for 45 real minutes by default; `SOAK_MINUTES` can shorten it for a smoke check. `BROWSER_CHANNEL=msedge` uses installed Edge instead of bundled Chromium. Results are written to ignored `.audit/` files.
