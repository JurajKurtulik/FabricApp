# Fabric Apps + Rayfin — Live Web Presentation Implementation Specification

**Project:** From Insight to Action  
**Format:** Full-screen animated web presentation for GitHub Pages  
**Source narrative:** Existing 19-slide PowerPoint, *From Insight to Action - Fabric Apps and Rayfin.pptx*  
**Primary audience:** Microsoft partner / technical decision makers / architects  
**Target presentation duration:** ~30 minutes  
**Primary goal:** Explain Microsoft Fabric Apps and Rayfin as a coherent story: from insight, to action, to operational application development on Fabric.

---

# 1. Executive intent

This project is **not** a PowerPoint-to-HTML conversion.

The existing PowerPoint is the **content and narrative source of truth**, but the web experience should be reimagined as a cinematic, modern, animated presentation that feels closer to a Microsoft product keynote, an interactive product story, or a premium technology microsite.

The presentation should preserve the same 19-scene story:

1. From Insight to Action
2. Fabric already tells us what is happening
3. But then what?
4. A small workflow becomes a full stack
5. Meet Fabric Apps
6. Fabric Apps + Rayfin
7. You write the app. Fabric runs the platform.
8. A report explains. An app enables action.
9. When the workflow begins, the app begins
10. What happened vs. what we did
11. One event. Two experiences.
12. The pattern repeats everywhere
13. Start with the business model
14. GitHub Copilot changes the build experience
15. Idea → Code → Fabric
16. Make the runway clear first
17. Four questions before building
18. Where this fits
19. Fabric does not have to stop at insight

The new implementation must **not** simply reproduce the current PowerPoint layouts. The current deck contains many rectangular cards and static compositions; the web version should instead use spatial diagrams, dynamic paths, particles, product icons, light, depth, and continuous ambient motion.

---

# 2. Non-negotiable presentation principles

## 2.1 Everything for a scene appears when the scene opens

There are **no internal “beats,” fragment reveals, or presenter-controlled progressive builds**.

When the presenter navigates to a scene:

- the scene performs one coherent entrance animation;
- all of the scene’s meaningful content becomes visible during that entrance;
- after the entrance settles, the full scene remains visible;
- ambient motion continues subtly while the presenter speaks.

The presenter should not need to press Space multiple times to complete one screen.

One navigation action = one full scene.

## 2.2 The presentation must feel alive even when nothing is clicked

Every scene should contain subtle ambient motion appropriate to its concept, for example:

- drifting particles;
- slow-moving light strands;
- a breathing glow;
- orbital motion;
- data pulses moving through connectors;
- subtle parallax;
- animated chart traces;
- a slowly rotating technical diagram;
- a blinking code cursor;
- a moving gradient or energy field.

Ambient motion must be restrained enough that the speaker remains the focus.

## 2.3 Avoid “PowerPoint with web animations”

Do not build:

- repeated card grids;
- title + bullets on every screen;
- generic dashboard tiles;
- identical fade-up transitions;
- generic icon-library replacements for Microsoft product marks;
- excessive glassmorphism;
- meaningless motion.

The presentation should use a small number of strong visual metaphors and transform them across scenes.

## 2.4 Preserve visual continuity between scenes

Where practical, the ending state of one scene should inspire or visually transform into the next.

Examples:

- Fabric system → unresolved pulse → “But then what?”
- action words → one workflow → exploding infrastructure stack
- infrastructure stack → collapses into managed Fabric App
- dashboard + app → shared event → workflow continuum
- code model → Copilot agent → delivery loop
- opportunity words → final Fabric-to-action light path

Transitions should feel like one continuous story rather than nineteen unrelated pages.

## 2.5 Use official branded assets

Use official Microsoft / Fabric / GitHub / Rayfin product assets where available.

Required branded assets may include:

- Microsoft Fabric
- Fabric Apps
- Rayfin
- Power BI
- Real-Time Intelligence
- OneLake
- Lakehouse
- Warehouse
- Eventhouse
- GitHub Copilot
- Microsoft Copilot if referenced

If a required official icon is not present in the repository:

1. do not silently replace it with a generic icon;
2. use a clearly neutral temporary placeholder if needed;
3. add the missing item to `ASSETS_TODO.md`;
4. keep the component structured so the real SVG/PNG can be dropped in later.

Do not redraw or approximate Microsoft logos with CSS.

---

# 3. Narrative arc

The deck should feel like one argument.

## Act A — The gap

Fabric already gives us data, analytics, AI, governance, and real-time insight.

But insight is often not the end of the process.

Eventually somebody needs to:

- approve;
- investigate;
- assign;
- escalate;
- resolve;
- track.

At that point, the organization often leaves the analytics experience and enters another application or manual process.

## Act B — The shift

Fabric Apps bring the operational application closer to Fabric.

Rayfin provides the code-first development model used to build it.

The developer focuses on:

- business model;
- business logic;
- user experience.

Fabric and Rayfin provide much of the backend/platform plumbing.

## Act C — Where it fits

Power BI / RTI and Fabric Apps are complementary.

Analytics helps the user understand.

An app helps the user decide, act, and track state.

The key architecture principle is:

> Fabric data tells us **what happened**.  
> App-owned state tells us **what we did about it**.

## Act D — How it is built

Rayfin starts from the application model.

TypeScript entities drive:

- database schema;
- API surface;
- typed client.

GitHub Copilot helps turn business intent into implementation inside this structured project.

Deployment then follows a compact build/test/deploy loop.

## Act E — Close

The practical opportunity filter is:

> Where do users already have insight, but still leave Fabric to act?

Final takeaway:

> Fabric does not have to stop at insight.  
> Fabric Apps + Rayfin extend the journey into action.

---

# 4. Technical architecture

## 4.1 Recommended stack

Use:

- **React**
- **TypeScript**
- **Vite**
- **Framer Motion**
- **SVG** for diagrams, connectors, paths, product marks, and lightweight visual systems
- **Canvas 2D** for particles / star-field effects / selected ambient backgrounds
- **CSS** for layout, typography, gradients, glow, blur, depth, masks, and responsive scaling

Do not make the entire deck depend on Three.js or WebGL.

Three.js is allowed only if the opening effect genuinely requires it and there is a reliable CSS/Canvas fallback. In most cases, Canvas 2D plus Framer Motion is preferred.

The presentation must remain stable and predictable on a typical modern Windows laptop in Microsoft Edge or Chrome.

## 4.2 Suggested project structure

```text
src/
  main.tsx
  App.tsx

  presentation/
    Presentation.tsx
    SceneFrame.tsx
    Navigation.tsx
    Progress.tsx
    PresenterOverlay.tsx
    usePresentationNavigation.ts
    presentation.types.ts

  scenes/
    Scene01Genesis.tsx
    Scene02FabricSystem.tsx
    Scene03ActionGap.tsx
    Scene04FullStack.tsx
    Scene05FabricApps.tsx
    Scene06FabricAppsRayfin.tsx
    Scene07Focus.tsx
    Scene08ReportVsApp.tsx
    Scene09WorkflowBoundary.tsx
    Scene10DataArchitecture.tsx
    Scene11TwoExperiences.tsx
    Scene12Patterns.tsx
    Scene13BusinessModel.tsx
    Scene14Copilot.tsx
    Scene15DeliveryLoop.tsx
    Scene16Runway.tsx
    Scene17FourQuestions.tsx
    Scene18Opportunity.tsx
    Scene19Takeaway.tsx

  motion/
    ParticleField.tsx
    ConvergingParticles.tsx
    DataPulse.tsx
    LightTrail.tsx
    DrawPath.tsx
    Orbit.tsx
    AmbientGlow.tsx
    KineticText.tsx
    EnergyBurst.tsx
    motionTokens.ts

  visuals/
    FabricUniverse.tsx
    FabricWorkspace.tsx
    ProductOrbit.tsx
    BusinessEvent.tsx
    AnalyticsSurface.tsx
    ApplicationSurface.tsx
    WorkflowGraph.tsx
    CodeSurface.tsx
    DeliveryRing.tsx
    Runway.tsx

  content/
    scenes.ts
    speakerNotes.ts

  styles/
    tokens.css
    global.css
    presentation.css
    scenes.css

public/
  assets/
    microsoft/
    fabric/
    rayfin/
    github/
    ui/
```

Keep scene content separate from reusable visual primitives.

## 4.3 Presentation state

The application needs only lightweight state:

```ts
type PresentationState = {
  sceneIndex: number;
  isFullscreen: boolean;
  showNavigation: boolean;
  showPresenterOverlay: boolean;
};
```

Do not add Redux or a large state-management library.

## 4.4 URL model

Use hash routing so GitHub Pages works without server rewrites.

Examples:

```text
/#/1
/#/2
...
/#/19
```

Refreshing a deep-linked scene must reopen the same scene.

## 4.5 Navigation

Required controls:

- `ArrowRight`, `ArrowDown`, `PageDown`, `Space` → next scene
- `ArrowLeft`, `ArrowUp`, `PageUp` → previous scene
- `Home` → first scene
- `End` → last scene
- `F` → fullscreen
- `N` → optional speaker-note overlay
- `O` → optional overview
- `Esc` → close overlays / leave fullscreen if browser permits

Navigation controls should be visually minimal and hidden or low-opacity until pointer movement.

Do not require clicking small controls during a live presentation.

---

# 5. Layout and responsive behavior

## 5.1 Primary format

Design for **16:9, 1920×1080**.

The viewport should always show one scene at a time.

No vertical document scrolling in presentation mode.

## 5.2 Scaling strategy

Each scene should use a fixed conceptual stage such as:

```text
1920 × 1080
```

and scale proportionally to the viewport using CSS.

Allow small cropping in extreme aspect ratios, but never crop core titles or product logos.

## 5.3 Safe area

Keep important content approximately inside:

```text
x: 96–1824
y: 70–1010
```

Keep scene number, progress, and small UI outside the primary narrative focal zone.

---

# 6. Visual design system

## 6.1 Overall art direction

Desired feeling:

> Microsoft Fabric product keynote + premium technology microsite + living data visualization.

Not:

> corporate template deck.

The atmosphere should feel:

- modern;
- enterprise;
- technical;
- confident;
- cinematic;
- polished;
- spacious;
- intentional.

## 6.2 Base palette

Use a near-black / dark navy world.

Suggested CSS tokens:

```css
--bg-0: #05070a;
--bg-1: #071019;
--bg-2: #0a1420;

--text-primary: #f5f7fb;
--text-secondary: rgba(235, 242, 250, 0.72);
--text-muted: rgba(220, 230, 240, 0.48);

--fabric-teal: #37e6d1;
--fabric-cyan: #39c6ff;
--fabric-blue: #5a8cff;
--fabric-violet: #8b6cff;
--fabric-magenta: #dc5cff;
--fabric-green: #6ee7a8;

--line-soft: rgba(92, 216, 228, 0.17);
--line-active: rgba(92, 235, 219, 0.82);
```

Exact values may be adjusted to match supplied official branding assets.

## 6.3 Gradient language

Use gradients as light, energy, and depth—not as decorative rainbow fills everywhere.

Preferred spectrum:

```text
teal → cyan → blue → violet → magenta
```

Examples:

- subtle radial glow behind Fabric;
- light filament gradients;
- data pulses;
- active connector paths;
- edge highlights;
- energy burst.

## 6.4 Typography

Preferred first choice:

- `Segoe UI Variable`
- fallback: `Segoe UI`, `Inter`, `Arial`, sans-serif

Use large keynote typography.

Typical title size at 1920×1080:

```text
72–110px
```

Key statement:

```text
90–150px
```

Body/support text:

```text
26–38px
```

Use uppercase sparingly for section labels.

Avoid tiny PowerPoint-style captions unless they are structural labels.

## 6.5 Cards

Cards are allowed only when the concept truly benefits from them.

Do not use repeated grids of six identical rounded rectangles.

Prefer:

- nodes;
- orbiting labels;
- spatial diagrams;
- floating surfaces;
- paths;
- system maps;
- split visual worlds;
- actual UI mockups;
- dimensional layers.

## 6.6 Backgrounds

The visual universe should remain coherent across scenes.

Possible recurring elements:

- faint technical grid;
- very low-opacity noise texture;
- particle depth field;
- thin flowing light strands;
- soft radial glows;
- horizon-like gradient;
- subtle vignette.

Do not reuse the exact same static image on every screen.

Background behavior should adapt to the scene.

---

# 7. Motion design system

## 7.1 Motion goals

Motion should:

- explain;
- connect;
- create depth;
- focus attention;
- keep the scene alive.

Motion should not:

- distract;
- make text hard to read;
- imply false interactivity;
- force the speaker to wait several seconds before content becomes usable.

## 7.2 Scene entrance

Each scene has one entrance sequence.

Target:

```text
0.8–1.8 seconds
```

Complex opening scene may take:

```text
3–4.5 seconds
```

By the end of the entrance, **all scene content is visible**.

No fragment-level advance is required.

## 7.3 Ambient motion

Ambient loops should generally run:

```text
8–30 seconds
```

per cycle.

They should be slow and low-amplitude.

Examples:

- orbital rotation: 18–30s;
- breathing glow: 5–8s;
- connector pulse: 3–6s;
- background filament drift: 12–25s;
- particle drift: continuous.

## 7.4 Scene transitions

Target:

```text
0.7–1.2 seconds
```

Use continuity where possible.

Do not transition every scene with the same fade.

Possible transitions:

- shared element scale/morph;
- zoom into a node;
- dissolve into particles;
- path extension;
- background color-field shift;
- connected camera/perspective move;
- mask reveal;
- energy sweep.

## 7.5 Suggested motion tokens

```ts
export const motionTokens = {
  fast: 0.32,
  normal: 0.65,
  sceneEnter: 1.05,
  sceneTransition: 0.9,
  cinematic: 1.6,
  opening: 4.0,
  ambient: 16,
  ambientSlow: 26,

  easeOut: [0.16, 1, 0.3, 1],
  easeInOut: [0.65, 0, 0.35, 1],
  cinematicEase: [0.22, 1, 0.36, 1]
};
```

## 7.6 Reduced motion

Respect:

```css
@media (prefers-reduced-motion: reduce)
```

Provide static or minimal-motion alternatives.

The full presentation experience may default to normal motion, but accessibility must not be ignored.

---

# 8. Global visual primitives

## ParticleField

Responsibilities:

- low-density depth particles;
- configurable palette;
- adjustable speed;
- optional connection lines;
- ability to pause when scene is inactive.

## ConvergingParticles

Used primarily in Scene 1.

Responsibilities:

- particles originate at edges / offscreen / depth;
- converge to focal point;
- acceleration curve;
- optional trails;
- callback when convergence completes.

## EnergyBurst

Used in opening and optionally closing.

Components:

- radial flash;
- expanding shockwave ring;
- outward particles;
- bloom/glow;
- controlled duration.

## DataPulse

Reusable moving light traveling on an SVG path.

Used in scenes 2, 8, 9, 10, 11, and 12.

## Orbit

Reusable orbital layout for logos/nodes.

Support:

- slow continuous rotation;
- different radii;
- depth/scale effects;
- non-rotating labels so text remains readable.

## DrawPath

SVG path drawing animation.

Used for:

- connector diagrams;
- timeline;
- workflow;
- runway;
- source→state link.

## FabricUniverse

Shared atmospheric container:

- deep background;
- optional grid;
- glow layers;
- light strands;
- particles;
- vignetting.

Should accept scene-specific intensity and accent values.

---

# 9. Scene-by-scene specification

---

## Scene 01 — From Insight to Action

### Purpose

Create immediate impact and establish the Fabric visual world.

This scene should feel like a product reveal, not a conventional title slide.

### On-screen content

Primary:

**FROM INSIGHT TO ACTION**

Secondary:

**Building operational applications with Microsoft Fabric Apps & Rayfin**

Small tertiary line:

**An early-stage partner walkthrough · 30 minutes**

Use the official Microsoft Fabric mark.

### Composition

- near-black full-screen background;
- focal convergence point approximately 64–68% from the left and 48% from the top;
- Fabric logo settles on the right;
- title on the left;
- subtitle beneath title;
- tertiary line small and subtle.

### Entrance animation

Sequence:

1. Begin almost black.
2. After roughly 300–500ms, tiny Fabric-colored particles appear from all screen edges and apparent depth.
3. Particles drift inward.
4. Motion accelerates toward a single convergence point.
5. Particle trails stretch.
6. Everything compresses into a bright point.
7. Hold for ~150ms.
8. Trigger a bright white/cyan Fabric-spectrum flash.
9. Expanding shockwave ring.
10. Particles scatter outward.
11. Official Fabric logo emerges from the remaining light.
12. Logo stabilizes on right.
13. Title and subtitle resolve on left during the same overall entrance sequence.
14. All content is fully visible by the end of the opening sequence.

Do not require user input to reveal title/subtitle.

### Ambient motion

After entrance:

- sparse particles orbit/drift around Fabric logo;
- low-intensity Fabric-colored glow breathes;
- faint light filament slowly moves in background.

### Transition to Scene 02

The Fabric logo remains visually important.

The surrounding particles expand into a system of product/workload nodes.

### Speaker notes

Thank you for the time today.

What I would like to do is give you an early look at a new application pattern that is emerging around Microsoft Fabric.

We already know Fabric as a platform for bringing data together, analyzing it, building reports, using real-time intelligence and applying AI.

But today I want to focus on what happens after we find an insight.

What if the user does not only need to see something?

What if they actually need to do something about it?

That is where Fabric Apps and Rayfin become interesting.

So rather than starting with technology, I want to start with that problem.

**Transition:** Let us begin with a situation that most of us already know very well.

---

## Scene 02 — Fabric already tells us what is happening

### Purpose

Establish that Fabric already covers detection, understanding, unification, AI enrichment, and trust/governance.

### On-screen content

Title:

**Fabric already tells us what is happening**

Labels / concepts:

- Real-Time Intelligence — DETECT
- Power BI — UNDERSTAND
- OneLake — UNIFY
- AI / Copilot — ENRICH
- Governance — TRUST

### Composition

Do not use five boxes.

Place Fabric centrally.

Arrange official icons around it in a loose orbital / constellation system.

Each node:

- official icon;
- product/capability name;
- one short verb.

Connections should form a coherent Fabric ecosystem.

### Entrance animation

- central Fabric mark already inherits visual energy from Scene 01;
- orbital nodes move from depth into their positions;
- connection lines draw;
- data pulses begin traveling;
- all nodes and labels become visible during the scene entrance.

### Ambient motion

- orbital system rotates extremely slowly;
- data pulses move along selected connectors;
- background grid drifts subtly.

### Transition to Scene 03

Most system nodes recede into darkness.

One unresolved data pulse remains center stage.

### Speaker notes

Imagine that we are monitoring a business process in Fabric.

It could be manufacturing, banking, logistics, healthcare, energy, or almost anything else.

Data is arriving continuously.

Fabric processes it.

Real-Time Intelligence detects an issue.

Power BI helps us understand it.

Maybe we see a suspicious transaction.

Maybe we see a machine that is behaving abnormally.

Maybe we see an order that is going to miss its SLA.

At this point, Fabric has done an excellent job.

It has told us that something is happening.

**Transition:** But now comes a very simple question.

---

## Scene 03 — But then what?

### Purpose

Introduce the gap between insight and business action.

### On-screen content

Large:

**But then what?**

Support:

**THE USER HAS TO DO SOMETHING.**

Action words:

- APPROVE
- INVESTIGATE
- ASSIGN
- ESCALATE
- RESOLVE
- TRACK

### Composition

No rectangular action cards.

Use kinetic floating words at different spatial depths.

`INVESTIGATE` may be slightly more prominent but should not imply a demo-specific scenario.

A partially completed workflow path can connect the action words.

### Entrance animation

- remaining pulse from Scene 02 stops;
- title grows/resolves from that point;
- action words enter from different directions and settle;
- faint workflow path draws between them but intentionally remains visually incomplete;
- all words are visible by end of entrance.

### Ambient motion

- action words drift only a few pixels;
- unfinished path carries a small pulse that reaches the gap and stops;
- subtle glow pulses at the unresolved point.

### Transition to Scene 04

Action words contract toward one representative workflow.

Infrastructure components explode outward from it.

### Speaker notes

The user now needs to act.

Somebody needs to investigate the transaction.

Somebody might need to assign the issue to a colleague.

They may need to add a note.

They may need to approve something.

They may need to escalate it.

And eventually they need to resolve it.

This is no longer only analytics.

This is a business process.

And historically, this is often the point where we leave the analytics platform and start building a separate application.

**Transition:** And that creates another problem.

---

## Scene 04 — A small workflow becomes a full stack

### Purpose

Show the disproportion between a simple business need and the platform infrastructure traditionally required.

### On-screen content

Title:

**A small workflow becomes a full stack**

Center:

**Investigate an exception**

Surrounding concepts:

- Database
- API
- Authentication
- Hosting
- Permissions
- Deployment
- Frontend
- Monitoring

### Composition

Central workflow requirement.

Infrastructure capabilities occupy rings / layers around it.

Use abstract technical symbols and official Microsoft platform icons only where appropriate.

### Entrance animation

- central workflow arrives first as part of overall scene entrance;
- infrastructure nodes burst outward;
- thin connectors snap/draw into place;
- camera/composition subtly zooms back to reveal the full stack;
- by ~1.4s the full system is visible.

### Ambient motion

- slow orbital motion;
- subtle tiny status/data signals;
- central workflow glows calmly while infrastructure feels busy.

### Transition to Scene 05

The chaotic infrastructure contracts and reorganizes.

A Fabric workspace boundary forms around it.

### Speaker notes

The business requirement can be very small.

Maybe all we want is a page where an analyst can open an exception, create a case, add a note and close the investigation.

But the moment we say, “Let us build an application,” the technical scope becomes much larger.

We need a database.

We need APIs.

We need authentication.

We need hosting.

We need permissions.

We need deployment.

We need a frontend.

And we still need to connect all of that securely back to our enterprise data.

The application can be simple.

The infrastructure around it often is not.

**Transition:** Fabric Apps are designed to reduce that gap.

---

## Scene 05 — Meet Fabric Apps

### Purpose

Present Fabric Apps as the architectural shift: the application becomes a Fabric item.

### On-screen content

Title:

**Meet Fabric Apps**

Key statement:

**An application becomes a Fabric item.**

Inside managed structure:

- YOUR APPLICATION
- AUTH
- DATA
- API
- HOSTING

### Composition

A clean Fabric workspace boundary or managed environment forms around the application.

Use depth and glowing perimeter rather than a simple large rectangle.

### Entrance animation

- infrastructure from Scene 04 collapses inward;
- a Fabric workspace boundary draws around it;
- components reorder into a clean managed structure;
- Fabric Apps branding appears;
- statement resolves.

### Ambient motion

- light runs around workspace perimeter;
- tiny status pulses between application and managed services;
- subtle depth drift.

### Transition to Scene 06

Workspace structure separates vertically into two conceptual layers: Fabric App and Rayfin.

### Speaker notes

This is the idea behind Fabric Apps.

Instead of treating the application as something completely separate from Fabric, the application itself becomes a Fabric item.

It lives inside a Fabric workspace.

Fabric can provide the managed services around the application, including authentication, application data, APIs and frontend hosting.

So the developer can spend more time on the application and less time assembling infrastructure.

And importantly, the application is now much closer to the Fabric data estate that it is designed to work with.

**Transition:** And the technology that gives developers the programming model for this is Rayfin.

---

## Scene 06 — Fabric Apps + Rayfin

### Purpose

Explain the difference between the two terms without turning the slide into a comparison table.

### On-screen content

Title:

**Fabric Apps + Rayfin**

Top concept:

**Fabric App**  
*What runs in Fabric*

Lower concept:

**Rayfin**  
*How developers build it*

### Composition

Use an exploded technical layer diagram.

Upper layer:

- deployed app/runtime;
- Fabric Apps branding.

Lower layer:

- Rayfin SDK / CLI / TypeScript development model.

A thin luminous vertical connector links them.

### Entrance animation

- managed system from previous scene separates into layers;
- upper layer rises;
- lower layer settles beneath;
- labels resolve;
- official Rayfin asset appears if available.

### Ambient motion

- subtle vertical data/API pulses;
- very slow layer drift / parallax.

### Transition to Scene 07

The two layers widen into developer responsibility versus managed platform responsibility.

### Speaker notes

It helps to separate two names.

A Fabric App is the thing that we deploy and run inside Microsoft Fabric.

Rayfin is the development framework and SDK that we use to build that application.

So I think about it this way.

Fabric App is the runtime and managed experience.

Rayfin is the programming model.

With Rayfin, we describe the application in TypeScript, connect it to data, define the data that belongs to the application, build the user experience, and then deploy it into Fabric.

**Transition:** The easiest way to understand this is to look at what Rayfin removes from the developer’s to-do list.

---

## Scene 07 — You write the app. Fabric runs the platform.

### Purpose

Show the abstraction boundary.

### On-screen content

Title:

**You write the app. Fabric runs the platform.**

Left / developer focus:

- Business model
- Business logic
- User experience

Right / managed capabilities:

- Database
- APIs
- Authentication
- Hosting
- Deployment

### Composition

Avoid two box columns.

Left side should feel calm, human, focused.

Right side should feel like an active managed platform field.

Use icons, lines, and a layered service environment.

### Entrance animation

Both halves enter as one complete composition.

The platform services power on with subtle animated signals.

All labels visible at end of entrance.

### Ambient motion

- right-side connectors pulse;
- service nodes glow;
- left side stays visually calmer.

### Transition to Scene 08

Managed platform field fades into a shared event that branches into an analytics experience and app experience.

### Speaker notes

The promise here is not that application development disappears.

We still need to understand the business process.

We still need to design a good user experience.

And we still need to write application logic.

But we do not necessarily need to hand-build every infrastructure component around that application.

We define the data model.

Rayfin can generate the database schema and the data APIs.

Fabric brokers authentication through Microsoft Entra ID.

The frontend can be hosted as part of the application.

And the same deployment workflow pushes these pieces into Fabric.

So the developer is working at a higher level of abstraction.

**Transition:** That also changes where an app like this fits next to Power BI.

---

## Scene 08 — A report explains. An app enables action.

### Purpose

Explain complementarity between analytics and operational apps.

### On-screen content

Title:

**A report explains. An app enables action.**

Analytics side:

**POWER BI / RTI**  
**Why is this happening?**

Context words:

- Trends
- Context
- Drivers

App side:

**FABRIC APP**  
**What should I do next?**

Action words:

- Open case
- Assign
- Resolve

### Composition

Use one shared business event at center.

Left:

- believable dashboard-like analytics surface;
- animated line/chart;
- Power BI / RTI official branding.

Right:

- polished enterprise operational app mockup;
- case/action controls.

The two sides must look like different experiences around the same event.

### Entrance animation

- central event appears;
- left and right experience surfaces expand outward from it;
- graphs/UI load simultaneously;
- full slide visible after entrance.

### Ambient motion

- chart line gently animates;
- central event sends occasional pulses to both experiences;
- app status indicator subtly breathes.

### Transition to Scene 09

Central event contracts into a luminous point on the Observe→Track continuum.

### Speaker notes

I do not see Fabric Apps as a replacement for Power BI.

They solve a different part of the experience.

Power BI is excellent when I want to explore, understand, compare and analyze.

Real-Time Intelligence is excellent when I need to detect what is happening now.

A Fabric App becomes interesting when the user needs a custom operational experience around that data.

For example, the dashboard can tell me that this transaction looks suspicious.

The app can let me open the transaction, assign an investigator, add notes, escalate the case and record the final decision.

So the technologies complement each other.

One helps me understand.

The other helps me act.

**Transition:** And this gives us a useful rule for deciding when an app is actually needed.

---

## Scene 09 — When the workflow begins, the app begins

### Purpose

Give the audience a simple decision rule.

### On-screen content

Title:

**When the workflow begins, the app begins**

Journey:

**OBSERVE → UNDERSTAND → DECIDE → ACT → TRACK**

Zone labels:

- ANALYTICS
- APPLICATION

### Composition

One large horizontal continuum.

Analytics zone visually covers Observe / Understand.

Application zone begins around Decide and becomes dominant through Act / Track.

### Entrance animation

- line draws across screen;
- labels and stages resolve in place;
- one bright pulse travels once across the full sequence during entrance;
- everything visible afterward.

### Ambient motion

- soft energy continues to move very slowly along the path;
- “Decide” remains a subtle hinge / glow point.

### Transition to Scene 10

At Decide, the continuum splits into two conceptual planes:

- what happened;
- what we did.

### Speaker notes

A simple rule I use is this.

If the user only needs to observe and understand the data, a report may be enough.

If the user now needs to make a decision, trigger an action and keep track of what happened afterwards, we are entering application territory.

That can be a case.

An approval.

An exception.

A task.

An assignment.

Or a business workflow.

This is the space where Fabric Apps can make sense.

**Transition:** The architecture also reflects this separation very cleanly.

---

## Scene 10 — What happened vs. what we did

### Purpose

Teach the most important architecture principle.

### On-screen content

Title:

**What happened vs. what we did**

Left:

**WHAT HAPPENED**

- Lakehouse
- Warehouse
- Eventhouse
- Semantic model

Right:

**WHAT WE DID**

- Case
- Owner
- Status
- Notes
- Decision

### Composition

No giant rectangular containers.

Left side should feel like a flowing Fabric data world.

Right side should feel like an operational workflow/state graph.

A business record remains anchored on the left.

A thin correlation line connects it to an application-owned case/state object on the right.

This visually communicates “reference, do not duplicate.”

### Entrance animation

- left data universe and right app-state graph materialize simultaneously;
- correlation path draws;
- a data pulse travels across the correlation line once;
- all labels visible by end.

### Ambient motion

- source-side data continues flowing;
- app state nodes pulse slowly;
- correlation link glows subtly.

### Transition to Scene 11

The correlated business record moves into the center and becomes the single event viewed through two lenses.

### Speaker notes

There is one architectural concept that I think is particularly important.

We do not need to copy all of our Fabric data into the application database.

The business data can remain where it belongs.

A transaction stays in the Lakehouse.

An event can stay in Eventhouse.

A governed analytical model can remain in Fabric.

The application reads that data.

What the application owns is the state of the business process around it.

For example: who is investigating the transaction, what notes were added, whether it was escalated, and what final decision was made.

I like to describe this as:

The Fabric data tells us what happened.

The application data tells us what we did about it.

**Transition:** Let us make that more concrete.

---

## Scene 11 — One event. Two experiences.

### Purpose

Reinforce that the same business event can drive analytics and action without becoming two separate copies.

### On-screen content

Title:

**One event. Two experiences.**

Center:

**BUSINESS EVENT**

Left:

**Dashboard — ANALYZE**

Right:

**Application — ACT**

### Composition

One central event object.

Two lenses/surfaces expand out:

- analytics lens;
- operational app lens.

The event remains singular and visually central.

### Entrance animation

- business event comes forward;
- two experiences expand around it;
- both complete at same time.

### Ambient motion

- analytics visual moves gently;
- app state indicator moves subtly;
- shared event sends periodic low-intensity pulse.

### Transition to Scene 12

The central event becomes a central Fabric data node.

The two experience paths multiply into industry/use-case constellations.

### Speaker notes

Imagine one suspicious business event.

The exact same event can be used in two very different experiences.

In the dashboard, I may compare it with historical patterns.

I may monitor trends, volume, geography, device, category or performance.

In the app, I am looking at one specific event because I need to do something with it.

I need to investigate it.

I need to record a decision.

That difference sounds small, but it changes the entire user experience.

**Transition:** And the same pattern applies far beyond one scenario.

---

## Scene 12 — The pattern repeats everywhere

### Purpose

Show breadth without resorting to six identical cards.

### On-screen content

Title:

**The pattern repeats everywhere**

Use cases:

- FRAUD → Investigate
- MANUFACTURING → Resolve exception
- RETAIL → Approve change
- LOGISTICS → Handle delay
- DATA PLATFORM → Triage quality
- FIELD SERVICE → Dispatch technician

### Composition

Constellation / radial network.

Center:

**FABRIC DATA**

Around it, six domain nodes.

Each node should have:

- domain label;
- appropriate icon/visual;
- action label.

### Entrance animation

- central node expands;
- six use-case nodes radiate outward into fixed positions;
- paths draw;
- all visible by the end of entrance.

### Ambient motion

- low-frequency pulses from center to each use case;
- very slow constellation drift;
- restrained individual node glow.

### Transition to Scene 13

One use-case node transforms into a developer model / code object.

### Speaker notes

This pattern is not limited to one industry.

In manufacturing, it can be an exception management application around equipment telemetry.

In logistics, it can be a workflow for orders that are going to miss an SLA.

In retail, perhaps a pricing or promotion approval application.

In a data platform team, it can be a data quality triage application.

In field service, it can be a technician application connected to Fabric data.

The industries are different.

But the pattern is almost always the same.

Fabric detects or exposes something important.

A person needs to make a decision.

The application manages that decision and its state.

**Transition:** So now we know where it fits. The next question is: what does building one actually look like?

---

## Scene 13 — Start with the business model

### Purpose

Explain Rayfin’s code-first model.

### On-screen content

Title:

**Start with the business model**

Example entities:

- Case
- Note
- Escalation

Pipeline:

**TypeScript → SQL schema → GraphQL API → typed client**

Support line:

**The app model is code. The backend follows.**

### Composition

Developer/editor-inspired visual world.

Left:

- elegant TypeScript entity snippets / model shapes.

Right:

- generated backend artifacts.

Do not show huge amounts of source code.

### Entrance animation

- code surface appears;
- entities type or resolve quickly;
- pipeline connectors draw;
- SQL/API/client icons or objects resolve;
- all visible by end of entrance.

### Ambient motion

- cursor blink;
- tiny code shimmer;
- a data pulse travels through TypeScript → SQL → API → client periodically.

### Transition to Scene 14

Copilot glow/agent appears beside the same code environment.

### Speaker notes

One of the main ideas in Rayfin is that we start from the application model.

Suppose our application needs three concepts.

A case.

A note.

And an escalation.

We describe those entities in TypeScript.

Rayfin can then use that definition to generate the underlying database schema and the APIs that expose the data.

So instead of beginning by manually creating SQL tables, then building REST controllers, then building client types, we start from the application model.

**Transition:** And because the application model is code, it also works very naturally with coding agents.

---

## Scene 14 — GitHub Copilot changes the build experience

### Purpose

Show agentic development in a structured Rayfin project.

### On-screen content

Title:

**GitHub Copilot changes the build experience**

Key statement:

**Describe intent. Let the agent handle more of the plumbing.**

Prompt example:

> Read Fabric data.  
> Create cases. Add notes.  
> Escalate and close.

Generated/modified areas:

- Entities
- React UI
- Queries
- Validation
- Build fixes

### Composition

Left:

- prompt / Copilot conversation.

Center/right:

- project graph / editor / files changing.

Use official GitHub Copilot asset.

### Entrance animation

- prompt arrives already complete or types quickly during scene entrance;
- a Copilot light/orb travels through project nodes;
- affected components light up;
- all meaningful labels visible by end.

### Ambient motion

- subtle agent cursor movement;
- occasional pulses among files;
- terminal/build status gently animates.

### Transition to Scene 15

The project graph reorganizes into a circular delivery loop.

### Speaker notes

This is where GitHub Copilot becomes very relevant.

Instead of asking Copilot to generate random application code, we can give it a structured Rayfin project and a very clear business requirement.

We can say:

Build me an operational workflow.

These are my existing Fabric data sources.

These are the actions the user needs to perform.

This is the application state that needs to persist.

Now inspect the Rayfin project and implement it.

Copilot can help create the entities, build the React pages, connect the data, fix TypeScript issues and iterate on the experience.

The important part is that the agent is working inside a defined platform model rather than inventing the entire backend architecture.

**Transition:** From there, the development loop becomes quite compact.

---

## Scene 15 — Idea → Code → Fabric

### Purpose

Show the simple iterative delivery loop.

### On-screen content

Title:

**Idea → Code → Fabric**

Loop:

- Describe
- Build
- Test
- Deploy
- Learn

Command:

```text
npx rayfin up
```

### Composition

Large circular loop with Fabric at or near Deploy.

Terminal command appears in an integrated terminal-style element, not a generic card.

### Entrance animation

- delivery ring draws;
- stages resolve around ring;
- one luminous marker makes a single complete pass during entrance;
- terminal command resolves;
- entire composition visible.

### Ambient motion

- marker continues moving slowly around loop;
- Deploy/Fabric node glows when marker passes.

### Transition to Scene 16

The circular loop stretches into a forward runway/path.

### Speaker notes

The workflow is intentionally quite simple.

We describe the application.

We build and test it locally.

We connect it to Fabric services.

And when we are ready to deploy, Rayfin provides a single deployment workflow.

`rayfin up`

On deployment, Rayfin synchronizes the application configuration, applies the generated application database schema and publishes the frontend.

We can then iterate and deploy again.

So the development loop is much closer to normal modern web development than to building a traditional data platform workload.

**Transition:** Of course, simple deployment does not mean there are no prerequisites.

---

## Scene 16 — Make the runway clear first

### Purpose

Present prerequisites without turning them into a checklist slide.

### On-screen content

Title:

**Make the runway clear first**

Checkpoints:

1. TENANT
2. CAPACITY
3. WORKSPACE
4. TOOLS
5. DATA ACCESS

Support:

**Check supported region and item permissions before a POC.**

### Composition

Use a literal or semi-abstract futuristic runway / path toward a Fabric mark.

Five checkpoints along the route.

Perspective depth is encouraged.

### Entrance animation

- runway sweeps into view;
- five checkpoints light in sequence as part of the single entrance animation;
- final “ready” glow appears;
- all remain visible afterward.

This sequence should complete automatically; no user interaction.

### Ambient motion

- light moves slowly down runway;
- checkpoint edge lights pulse very gently.

### Transition to Scene 17

Runway converges into central application node, with four design-question nodes orbiting it.

### Speaker notes

Before starting a proof of concept, I would validate the environment first.

Fabric Apps currently need to be enabled at tenant level.

The workspace needs Fabric capacity.

The developer needs the appropriate workspace permissions.

We also need to confirm that the feature is available in the region where we want to deploy.

And on the developer machine we need the normal development tooling, including Node, the Rayfin CLI and an editor such as Visual Studio Code.

I would check these points before beginning the implementation.

They are simple checks, but they avoid losing time later.

**Transition:** Then there are four design questions that I would answer before building anything serious.

---

## Scene 17 — Four questions before building

### Purpose

Give the partner a concise architecture/design framework.

### On-screen content

Title:

**Four questions before building**

Questions:

**SOURCE**  
Where does the business data live?

**STATE**  
What must the app itself own?

**USERS**  
Who may do what in the app?

**LIFECYCLE**  
How will we deploy and operate it?

### Composition

Central:

**APPLICATION**

Four orbiting/connected conceptual nodes around it.

Each node should remain readable and stable even if the orbit graphic moves slowly.

### Entrance animation

- application center appears;
- four nodes move into orbit;
- connector paths draw;
- all questions visible at once after entrance.

### Ambient motion

- very slow orbital motion;
- central glow;
- light occasionally passes through four connections.

### Transition to Scene 18

Four nodes drift away, leaving the conceptual question “Where this fits?”

### Speaker notes

For an early implementation, I would keep the design discussion very focused.

First: where does the existing business data live?

Second: what new state does the application itself need to create?

Third: who will use the application, and what are they allowed to do?

And fourth: how do we want to deploy, govern and operate the solution?

If these four things are clear, the rest of the design becomes much easier.

Especially the second question.

The application should not become another unnecessary copy of the Fabric data estate.

**Transition:** So I want to close with one practical question.

---

## Scene 18 — Where this fits

### Purpose

Move from technology back to the partner’s own environment.

### On-screen content

Small title:

**Where this fits**

Large question:

**Where do users have insight,  
but still leave Fabric to act?**

Action words:

**APPROVE · INVESTIGATE · ASSIGN · ESCALATE · RESOLVE**

### Composition

Minimal.

Large question dominates left/center.

Behind it, faint workflow paths move across the canvas.

Action words live along or near those paths.

### Entrance animation

- technical complexity from Scene 17 fades down;
- question resolves with large clear typography;
- action words and faint paths appear in same entrance;
- full scene immediately usable.

### Ambient motion

- faint workflow lines flow slowly;
- action words drift subtly along path;
- very soft background Fabric light.

### Transition to Scene 19

Action words and paths converge to one light point.

That light becomes the opening of the closing Fabric light field.

### Speaker notes

We have covered what Fabric Apps are, what Rayfin does, how the architecture works, and how the development experience looks.

So I want to close with one practical question.

Where do users already have the insight they need, but still have to leave the experience to complete the process?

Maybe they see something in a report and then send an email.

Maybe they export data to Excel.

Maybe they open another system to approve, assign, investigate, or resolve something.

Those are the scenarios where I would start looking at Fabric Apps.

Not because we want to build an app everywhere, but because there is a clear workflow gap between insight and action.

**Transition:** And that leads to the one idea I would leave you with.

---

## Scene 19 — Fabric does not have to stop at insight

### Purpose

Create a memorable close and visually mirror Scene 01.

### On-screen content

Small:

**THE TAKEAWAY**

Large:

**Fabric does not have  
to stop at insight.**

Accent:

**Fabric Apps + Rayfin extend the journey into action.**

Footer:

**INSIGHT → DECISION → ACTION**

### Composition

Dark world.

Fabric-colored light streams emerge from a bright point or Fabric mark and move outward toward the right edge.

The opening sequence converged **into Fabric**.

The closing sequence should conceptually move **from Fabric outward into action**.

### Entrance animation

- Scene 18 paths collapse toward a point;
- bright but controlled Fabric glow;
- colored light streams expand outward;
- title resolves;
- supporting line resolves;
- Insight → Decision → Action lights sequentially during the same entrance;
- all content visible at end.

### Ambient motion

- light continues flowing outward;
- subtle particles drift through beam;
- title remains stable and highly readable.

### End state

Do not auto-advance.

Presentation can remain on this scene indefinitely.

Optional subtle hint in corner:

`Esc — exit fullscreen`

### Speaker notes

If there is one thing I would leave you with, it is this.

Fabric does not have to stop at insight.

Power BI and Real-Time Intelligence help us understand what is happening.

Fabric Apps give us a way to build the operational experience around that insight.

And Rayfin gives developers the application model and managed backend capabilities to make that practical.

So the opportunity is not simply to build another application.

It is to bring the application closer to the data, the platform, and the business process that already exist in Fabric.

That is the pattern I would evaluate.

And from there, the next step is simply to choose one focused workflow and test whether this approach creates value.

---

# 10. Navigation UI

Navigation should not compete with the presentation.

## Default audience view

At the bottom or right edge:

- slim progress line;
- current scene number, e.g. `08 / 19`;
- optional tiny previous/next arrows that appear on hover.

Never show a large toolbar.

## Scene progress

Use a subtle progress track.

It should communicate location without making the deck look like a web application.

Example:

```text
━━━━━━━━━━━━━━━━━━━━━━──────
08 / 19
```

or a vertical minimal indicator.

## Cursor idle behavior

After 2–3 seconds without pointer movement:

- fade navigation chrome to ~15% opacity or hide it;
- keep only minimal progress marker if desired.

---

# 11. Optional presenter overlay

This feature is helpful but secondary to the core deck.

Toggle with `N`.

Presenter overlay may show:

- current scene number and title;
- speaker notes;
- next scene title;
- elapsed presentation timer.

It must never appear in audience view unless intentionally enabled.

Do not make presenter overlay necessary to present the deck.

---

# 12. Speaker notes implementation

Speaker notes should live in a structured file:

```ts
export const speakerNotes = {
  1: `...`,
  2: `...`,
  ...
};
```

Do not render them into the normal audience DOM unless presenter overlay is active.

Keep speaker notes exactly as provided in this specification unless the user explicitly edits them later.

---

# 13. Asset rules

Create:

```text
public/assets/manifest.json
```

Example:

```json
{
  "fabric": {
    "logo": "/assets/fabric/fabric.svg",
    "lakehouse": "/assets/fabric/lakehouse.svg",
    "warehouse": "/assets/fabric/warehouse.svg",
    "eventhouse": "/assets/fabric/eventhouse.svg",
    "realTimeIntelligence": "/assets/fabric/rti.svg",
    "oneLake": "/assets/fabric/onelake.svg"
  },
  "microsoft": {
    "powerBI": "/assets/microsoft/power-bi.svg"
  },
  "github": {
    "copilot": "/assets/github/copilot.svg"
  },
  "rayfin": {
    "logo": "/assets/rayfin/rayfin.svg"
  }
}
```

The app should load branded assets from this manifest so assets can be replaced centrally.

Never embed remote logo URLs as critical presentation dependencies.

---

# 14. Performance requirements

Target:

- Microsoft Edge and Chrome;
- 1920×1080;
- 60fps on a typical modern laptop;
- no large runtime network calls;
- no blocking third-party CDN requirement;
- all critical assets bundled locally;
- no giant background videos;
- no auto-playing audio;
- no heavy 3D engine unless proven necessary.

Canvas animation must:

- stop or throttle when its scene is inactive;
- stop or throttle when document is hidden;
- account for device pixel ratio;
- cap particle count at a sensible number.

Use `requestAnimationFrame`.

Avoid allocating objects continuously inside animation loops.

---

# 15. GitHub Pages deployment

The final project must build as a static site.

Recommended Vite configuration should support a repository subpath.

Use:

```ts
export default defineConfig({
  base: './'
});
```

or an equivalent configuration appropriate for the final repository name.

Required commands:

```bash
npm install
npm run dev
npm run build
npm run preview
```

Provide a GitHub Actions Pages workflow if the repository does not already contain one.

The deployment must work from a clean clone.

---

# 16. Accessibility and resilience

Required:

- keyboard navigation;
- meaningful ARIA labels on controls;
- sufficient text contrast;
- reduced-motion mode;
- no important information encoded only by color;
- all branded image elements must have appropriate alt text where relevant;
- presentation remains understandable if Canvas animations fail.

If an animation fails, the static layout must still communicate the slide.

---

# 17. Implementation plan for the coding agent

## Phase 1 — Audit

Before writing scene code:

1. inspect the supplied PowerPoint;
2. inspect the supplied official asset library;
3. inspect the reference repositories/sites;
4. identify reusable navigation and motion patterns;
5. create `IMPLEMENTATION_PLAN.md`;
6. create `ASSETS_TODO.md` for missing official assets.

Do not begin by copying PowerPoint HTML.

## Phase 2 — Foundation

Implement:

- React/Vite shell;
- scene navigation;
- hash URLs;
- fullscreen;
- progress indicator;
- `SceneFrame`;
- motion tokens;
- FabricUniverse;
- reduced motion.

## Phase 3 — Opening prototype

Build Scene 01 first.

Do not proceed until:

- particle convergence is smooth;
- burst is polished;
- official Fabric logo appears correctly;
- title/subtitle composition works;
- ambient state is stable.

This scene establishes the entire quality bar.

## Phase 4 — Core reusable primitives

Implement and validate:

- DataPulse;
- Orbit;
- DrawPath;
- AmbientGlow;
- shared transition helpers;
- product asset component;
- diagram labels.

## Phase 5 — Build all scenes

Build scenes 2–19 using the specification above.

Each scene gets its own component.

Avoid one giant `App.tsx`.

## Phase 6 — Transition pass

After all scenes work individually, add cross-scene continuity.

Do not attempt complex shared transitions before scene layouts are stable.

## Phase 7 — Polish

Review:

- spacing;
- typography;
- icon consistency;
- gradients;
- ambient motion speed;
- scene transition timing;
- legibility;
- 1080p stage;
- mobile/tablet fallback;
- GitHub Pages behavior.

## Phase 8 — QA

Test:

- Arrow navigation;
- Space navigation;
- Home/End;
- fullscreen;
- direct hash links;
- refresh on `/#/10`;
- build from clean clone;
- GitHub Pages path;
- animation after 20+ minutes;
- tab switching;
- reduced-motion setting;
- 1366×768;
- 1920×1080;
- 2560×1440.

---

# 18. Acceptance criteria

The implementation is complete only when all of the following are true:

1. There are exactly 19 primary presentation scenes matching the narrative.
2. Each scene is a full-screen presentation scene.
3. No scene requires internal progressive-reveal clicks.
4. All meaningful scene content is visible after the single entrance animation.
5. Ambient motion continues on most scenes without distracting from the speaker.
6. Scene 01 includes the particle convergence → flash/burst → Fabric logo reveal.
7. Scene 19 visually mirrors Scene 01 with Fabric light extending toward action.
8. The deck does not resemble a direct PowerPoint HTML export.
9. Repeated rectangular card grids are avoided.
10. Official Fabric / Microsoft / GitHub / Rayfin branding is used where provided.
11. Missing official assets are tracked explicitly.
12. Power BI vs Fabric App is clearly shown as complementary, not replacement.
13. “What happened” vs “what we did” is visually clear in Scene 10.
14. Rayfin code-first model is visually clear in Scene 13.
15. GitHub Copilot agentic development is visually clear in Scene 14.
16. The deck works with keyboard-only navigation.
17. The deck can run fully from GitHub Pages.
18. A production build completes without errors.
19. There are no runtime console errors during the presentation.
20. The presentation remains stable if left open for at least 45 minutes.

---

# 19. Quality bar

The project should feel **noticeably more polished** than the existing reference web presentations.

The implementation should not simply copy their layouts.

Use them as evidence of preferred interaction patterns:

- full-screen scenes;
- keyboard navigation;
- ambient motion;
- interactive technical storytelling;
- presenter-friendly pacing;
- GitHub Pages deployment.

This new presentation should improve on them through:

- stronger cinematic scene composition;
- better cross-scene continuity;
- more disciplined motion language;
- better official branding;
- fewer boxes/cards;
- higher visual depth;
- stronger opening and closing sequences;
- more sophisticated use of SVG paths, particles, light, and spatial diagrams.

The audience should feel that they are watching a **live Fabric product story**, not a PowerPoint deck rendered in a browser.

---

# 20. Final instruction to the coding agent

Treat the PowerPoint as the source of truth for **narrative and content**, not for layout.

Treat this specification as the source of truth for **experience, architecture, motion, visual composition, and implementation behavior**.

Do not simplify the design back into ordinary slides unless required for accessibility fallback.

Do not invent additional slides.

Do not introduce progressive reveal beats.

Do not replace official product branding with generic placeholders when the correct assets are available.

Build the entire experience end-to-end, test it locally, run a production build, and leave the repository ready for GitHub Pages deployment.
