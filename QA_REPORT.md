# Validation report

## Completed

- Read the full specification and inspected text and notes from all 19 PowerPoint slides. Inspected all three embedded JPEGs. Inventoried Microsoft Fabric v6.1.0, Microsoft 365 and Azure assets.
- Created IMPLEMENTATION_PLAN.md before application source code.
- Implemented exactly 19 scene components; one navigation action advances a whole scene, with no reveal-step state.
- Production TypeScript/Vite build passed. TypeScript strict mode and unused-local/parameter checks enabled.
- Clean isolated npm install and production build passed; npm reported no dependency vulnerabilities.
- Automated validation passed for scene count, exact specification speaker-note text, local manifest assets, deployed asset copies, and `/FabricApp/` build references.
- Edge production browser suite passed all 19 scenes at 1366×768, 1920×1080, 2560×1440 and 390×844. No clipped titles/logos or broken images.
- All specified navigation keys, first/last boundaries, notes, overview, fullscreen entry/exit, deep-link refresh, malformed/out-of-range hashes, and reduced-motion fallback passed.
- No page runtime errors or failed HTTP asset requests in the full browser suite.
- Inspected rendered screenshots of all 19 scenes. Fixed the scene 13 code/pipeline overlap and reviewed the final code composition and layer diagram.
- Chrome representative-scene smoke checks passed. A simulated document-hidden event stopped Canvas painting and paused CSS ambient motion; restoration resumed painting.
- Two-minute wall-clock soak passed, with one Canvas and one settled scene, no runtime errors, and successful subsequent first/last navigation.
- Added reproducible `test:browser` and a default 45-minute `test:soak` command.

## Limits

- The full 45-minute wall-clock soak and 20+ minute animation review have not been run. The short soak is not evidence that the entire long-duration acceptance criterion passed.
- 60fps on a typical presentation laptop is a target, not a measured guarantee. Canvas uses 100 particles, a DPR cap of 2, no per-frame object creation, cancellation on hidden documents, and cleanup on unmount.
- GitHub Pages deployment succeeded on 24 September 2026 in JurajKurtulik/FabricApp. GitHub Actions ran npm ci, build, validation, artifact upload and deployment successfully. Live opening and refreshed /FabricApp/#/10 were verified, with official assets loaded and no captured runtime errors.
- Rayfin and GitHub Copilot logos are absent. Text names are used. The supplied official Apps item graphic is used; no dedicated Fabric Apps wordmark was verified. See ASSETS_TODO.md.

## Deployment

`deploy.yml` runs on pushes to main/master and manual dispatch. It uses Node 22, npm ci, build and validation, then uploads dist and deploys through the github-pages environment. Repository Pages source must be set to GitHub Actions.

## Publication

Repository: https://github.com/JurajKurtulik/FabricApp

Live presentation: https://jurajkurtulik.github.io/FabricApp/

Verified deployment: https://github.com/JurajKurtulik/FabricApp/actions/runs/36038476501

Pages source is already set to GitHub Actions. The original PowerPoint remains local and is not required to build or run the site.
