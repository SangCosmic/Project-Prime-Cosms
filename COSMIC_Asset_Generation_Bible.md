# COSMIC — Asset Generation Bible

## 01. Purpose

Dokumen ini adalah master reference untuk menghasilkan seluruh aset visual website **COSMIC** dengan visual language yang konsisten: cinematic dark-fantasy + sci-fi + medieval + cosmic/metaverse.

Targetnya bukan membuat semua gambar terlihat sama, tetapi membuat semuanya terasa berasal dari **satu universe yang sama**.

Gunakan dokumen ini bersama video referensi website COSMIC. Prioritaskan komposisi, negative space, subject placement, warna, dan atmosfer yang terlihat pada referensi.

---

# 02. COSMIC Visual DNA

## Core keywords

- dark fantasy
- medieval sci-fi
- cosmic metaverse
- surreal game world
- cinematic AAA game art
- premium editorial composition
- mysterious
- atmospheric
- volumetric fog
- deep perspective
- magical technology
- violet / indigo / crimson / blue atmosphere
- restrained glowing accents

## Color direction

Dominant:
- Deep navy
- Midnight blue
- Indigo
- Dark violet

Secondary:
- Purple
- Magenta
- Crimson
- Burgundy

Accent:
- Warm orange
- Amber
- Subtle cyan
- White typography

Avoid:
- candy gradients
- pastel rainbow
- flat SaaS blue
- excessive neon cyberpunk
- cartoon colors
- oversaturated green

## Material language

Prefer:
- stone
- aged metal
- dark glass
- obsidian
- celestial dust
- mist
- wet surfaces
- organic alien surfaces
- magical energy
- subtle emissive details

Avoid:
- generic stock-photo realism
- plastic 3D toy appearance
- cheap gaming UI
- excessive chrome
- overly glossy surfaces

---

# 03. Master Style Prompt

Use this block as the shared foundation for every image prompt.

```text
Dark fantasy metaverse universe, medieval world fused with subtle futuristic and cosmic technology, cinematic AAA game concept art, premium editorial art direction, deep navy and indigo shadows, rich violet and magenta atmosphere, restrained crimson and warm orange emissive highlights, dramatic volumetric fog, layered atmospheric perspective, mysterious and elegant mood, realistic painterly materials, sophisticated lighting, deep cinematic depth, subtle particles, premium visual design, believable scale, highly detailed but not visually noisy, refined composition, no typography, no logo, no watermark
```

Append a composition block after the master style prompt instead of rewriting the style each time.

---

# 04. Global Negative Prompt

Use this on almost every asset where the generation tool supports negative prompting.

```text
text, typography, letters, logo, watermark, UI, HUD, browser window, screenshot, laptop, desk, hands, frame, border, stock photo look, cartoon, anime, childish, low detail, low resolution, flat lighting, plastic toy, oversaturated rainbow colors, generic cyberpunk, excessive neon, noisy composition, duplicated objects, malformed anatomy, extra limbs, extra fingers, floating random objects, compression artifacts
```

For transparent subjects additionally use:

```text
background, landscape, room, floor, horizon, scenery, cast shadow, text, watermark
```

---

# 05. Composition Rules for Website Assets

## Hero

The hero image must leave deliberate negative space for typography.

For left-aligned headline:
- keep the left 35–45% visually calmer
- put the strongest focal subject on the right 45–55%
- avoid high-contrast detail directly behind the headline

For centered headline:
- place the strongest visual mass above/below the text area
- keep the center readable

## Section artwork

Prefer asymmetric composition.

Recommended:
- subject on right
- text on left
- strong depth from foreground → middle → background

## Subject assets

Prefer isolated PNG/WebP assets with transparent backgrounds so CSS/GSAP can control:
- x
- y
- scale
- rotation
- opacity
- blur
- parallax depth

---

# 06. Prompt Set — Hero / World Environments

## Prompt 01 — COSMIC Hero World

```text
[MASTER STYLE PROMPT]
A vast surreal medieval-fantasy cosmic world at dusk, colossal ancient architecture emerging from mist, distant mountains, faint celestial structures in the sky, mysterious floating fragments, deep blue and violet atmosphere with restrained crimson glow, premium cinematic game key art, extremely wide composition, monumental sense of scale, strongest visual subject on the right side, calm negative space on the left for large editorial typography, sophisticated lighting, no text, no logo, 16:9
```

## Prompt 02 — Floating Citadel

```text
[MASTER STYLE PROMPT]
A gigantic floating medieval citadel suspended inside a cosmic atmosphere, ancient stone architecture blended with subtle futuristic energy systems, violet nebula behind the fortress, crimson light leaking from windows and portals, atmospheric fog below, cinematic perspective, enormous scale, right-weighted composition, generous empty space on the left for website headline, no text, no logo, 16:9
```

## Prompt 03 — Cosmic Valley

```text
[MASTER STYLE PROMPT]
A dark fantasy valley stretching into infinite cosmic space, medieval ruins integrated into alien geological formations, layered mountains fading into blue mist, faint magenta nebula, crimson magical light in the distant horizon, elegant premium game concept art, low visual noise, right-side focal point, left-side negative space for typography, wide cinematic landscape, no text, 16:9
```

## Prompt 04 — Ancient Portal World

```text
[MASTER STYLE PROMPT]
Ancient medieval ruins surrounding a colossal circular cosmic portal, subtle futuristic mechanisms embedded in weathered stone, crimson and orange energy glowing inside the portal, deep indigo sky, violet atmospheric clouds, volumetric haze, cinematic dark fantasy, subject slightly right of center, large quiet area on the left, premium AAA visual, no text, 16:9
```

## Prompt 05 — Night Kingdom

```text
[MASTER STYLE PROMPT]
A mysterious medieval kingdom at night under a gigantic violet cosmic sky, distant towers and ruined architecture, subtle magical energy trails, deep blue fog, selective crimson highlights, cinematic moonlight, sophisticated dark fantasy, high depth and scale, calm left side for editorial headline, visual focus on the right, no text, no logo, 16:9
```

---

# 07. Prompt Set — Backgrounds / Atmosphere

## Prompt 06 — Violet Nebula

```text
[MASTER STYLE PROMPT]
Abstract cosmic nebula atmosphere designed as a cinematic website background, flowing violet and indigo clouds, very subtle magenta highlights, faint stars and celestial dust, deep dark gradients, smooth visual areas for white typography, elegant premium mood, no planets, no text, no logo, ultra-wide background
```

## Prompt 07 — Crimson Energy Fog

```text
[MASTER STYLE PROMPT]
Dark atmospheric fog with restrained crimson and warm orange energy glowing from within, deep navy surroundings, subtle violet reflections, cinematic volumetric depth, elegant abstract composition, low detail behind the center-left, designed for layered website composition, no text, no objects, ultra-wide
```

## Prompt 08 — Blue Cosmic Storm

```text
[MASTER STYLE PROMPT]
Slow-looking cosmic storm made of deep blue and indigo clouds, subtle violet illumination, delicate particles, premium cinematic atmosphere, sophisticated contrast, large low-detail zones for typography, no stars overload, no text, ultra-wide
```

## Prompt 09 — Magical Mist

```text
[MASTER STYLE PROMPT]
Dense cinematic magical mist drifting across a dark fantasy environment, layered blue-violet fog, faint crimson glow in the distance, atmospheric perspective, realistic volumetric light, subtle particles, elegant and mysterious, no visible text, no logo, wide background
```

## Prompt 10 — Cosmic Horizon

```text
[MASTER STYLE PROMPT]
Minimal cinematic cosmic horizon, dark indigo foreground fading into violet and magenta atmospheric clouds, tiny warm glowing points in the distance, luxurious restrained composition, premium website background, strong negative space, no text, ultra-wide
```

---

# 08. Prompt Set — Main Creatures / Hero Objects

## Prompt 11 — Crimson Cosmic Creature

```text
[MASTER STYLE PROMPT]
Single floating alien-fantasy creature designed for a premium metaverse game, organic sculptural anatomy, dark crimson and burnt orange emissive surfaces, subtle circular energy ring around the body, elegant asymmetrical silhouette, mysterious and majestic, three-quarter view, isolated subject, transparent background, no environment, no text, no shadow
```

## Prompt 12 — Celestial Guardian

```text
[MASTER STYLE PROMPT]
Single celestial guardian creature, fusion of medieval mythical beast and futuristic cosmic organism, dark obsidian body, restrained violet and crimson energy lines, subtle glowing eyes, elegant silhouette, high-end game asset, isolated, transparent background, no environment, no text
```

## Prompt 13 — Cosmic Dragon

```text
[MASTER STYLE PROMPT]
Single massive cosmic dragon, medieval-fantasy anatomy mixed with subtle alien biomechanical details, deep navy and black scales, tiny crimson emissive accents, violet celestial reflections, sophisticated creature design, premium AAA game asset, isolated transparent background, no environment, no text
```

## Prompt 14 — Floating Relic

```text
[MASTER STYLE PROMPT]
Single ancient floating relic from a cosmic medieval civilization, circular stone-metal structure, subtle crimson energy core, violet magical particles, worn obsidian and aged brass materials, mysterious premium game prop, isolated transparent background, no environment, no text
```

## Prompt 15 — Cosmic Orb Mechanism

```text
[MASTER STYLE PROMPT]
Single spherical cosmic mechanism, ancient medieval artifact fused with futuristic technology, obsidian shell, glowing warm orange core, delicate violet energy rings, realistic materials, sophisticated premium prop design, isolated transparent background, no environment, no text
```

## Prompt 16 — Flying Familiar

```text
[MASTER STYLE PROMPT]
Single small floating fantasy familiar, elegant alien-bird-inspired silhouette, dark blue and violet feathers, subtle crimson emissive details, magical particles around the body, premium game collectible, isolated transparent background, no environment, no text
```

## Prompt 17 — Warrior Avatar

```text
[MASTER STYLE PROMPT]
Single original fantasy metaverse warrior avatar, medieval armor constructed from dark aged metal and obsidian, subtle cosmic energy embedded in the armor, deep violet reflections and restrained crimson glow, sophisticated silhouette, premium collectible character, three-quarter view, isolated transparent background, no environment, no text
```

## Prompt 18 — Mage Avatar

```text
[MASTER STYLE PROMPT]
Single original cosmic mage avatar, dark medieval robe fused with subtle futuristic details, violet magical energy orbiting the hands, restrained crimson highlights, mysterious face partially obscured by hood, premium collectible character, full body, isolated transparent background, no environment, no text
```

---

# 09. Prompt Set — NFT / Collectible Card Characters

## Prompt 19 — NFT Hero

```text
[MASTER STYLE PROMPT]
Original collectible fantasy character for a premium metaverse NFT card, heroic medieval silhouette, dark obsidian armor, subtle cosmic energy, violet atmosphere around the character, restrained crimson highlights, highly polished game collectible aesthetic, centered full-body composition, transparent background, no card frame, no text
```

## Prompt 20 — NFT Beast

```text
[MASTER STYLE PROMPT]
Original collectible cosmic beast for a premium fantasy game, elegant alien anatomy, deep indigo body, crimson emissive markings, subtle violet aura, sophisticated sculptural silhouette, centered full-body composition, isolated transparent background, no card frame, no text
```

## Prompt 21 — NFT Rogue

```text
[MASTER STYLE PROMPT]
Original mysterious medieval cosmic rogue character, layered dark cloth and aged metal, violet edge light, subtle orange energy artifact, elegant silhouette, premium game collectible, centered full body, isolated transparent background, no text, no card frame
```

## Prompt 22 — NFT Oracle

```text
[MASTER STYLE PROMPT]
Original cosmic oracle character from a dark medieval metaverse, long ceremonial robes, floating relics, violet and deep blue energy, restrained crimson highlights, premium collectible art direction, centered full body, isolated transparent background, no card frame, no text
```

## Prompt 23 — NFT Knight

```text
[MASTER STYLE PROMPT]
Original futuristic medieval knight from a cosmic fantasy universe, weathered obsidian armor, subtle luminous symbols, violet reflections, crimson energy core, sophisticated AAA game collectible aesthetic, centered full-body portrait, transparent background, no text, no card frame
```

## Prompt 24 — NFT Artifact

```text
[MASTER STYLE PROMPT]
Original legendary cosmic artifact for a collectible game, ancient medieval relic fused with futuristic geometry, deep black stone and aged metal, warm orange core, violet energy rings, premium isolated object, transparent background, no text, no card frame
```

---

# 10. Prompt Set — FX / Overlay Assets

## Prompt 25 — Magic Glow

```text
soft cinematic magical energy glow, violet and crimson, subtle volumetric bloom, elegant light falloff, transparent background, no object, no text, no watermark
```

## Prompt 26 — Cosmic Particles

```text
premium cinematic cosmic particles, tiny glowing dust motes, sparse distribution, violet and warm orange highlights, transparent background, no text, no watermark
```

## Prompt 27 — Fog Overlay

```text
cinematic volumetric fog overlay, soft layered wisps, deep neutral translucent mist, transparent background, designed for compositing over dark fantasy artwork, no text
```

## Prompt 28 — Energy Ring

```text
single elegant circular cosmic energy ring, subtle violet and crimson emissive edge, fine particles, translucent center, transparent background, clean silhouette, no text, no logo
```

## Prompt 29 — Cosmic Dust

```text
subtle celestial dust cloud, tiny stars and particles concentrated around edges with low-density center, violet and blue atmosphere, transparent background, designed for cinematic compositing, no text
```

## Prompt 30 — Light Streak

```text
minimal cinematic magical light streak, soft violet to warm orange glow, curved elegant motion path, transparent background, no text, no logo
```

---

# 11. Image-to-Video Prompt Set

Use a still generated from the prompts above as the first frame/reference image.

## Video 01 — Hero Atmosphere

```text
Preserve the original image composition exactly.
Create extremely subtle cinematic motion.
Slow atmospheric fog drifting from left to right.
Very gentle movement in distant clouds.
Tiny particles moving slowly through the scene.
No camera shake.
No new objects.
No morphing.
No geometry changes.
Keep the typography-safe negative space unchanged.
Premium slow-burn fantasy game cinematic.
5–8 seconds.
Seamless-looking motion.
```

## Video 02 — Floating Creature

```text
Preserve the creature design and silhouette exactly.
Animate only subtle hovering motion.
Very slow vertical float.
Tiny rotational movement around its vertical axis.
Energy ring slowly rotates.
Small emissive pulses.
No anatomy changes.
No new limbs.
No deformation.
Cinematic premium game asset animation.
5–6 seconds.
```

## Video 03 — Cosmic Fog

```text
Preserve the original composition.
Create slow-moving violet and indigo atmospheric clouds.
Subtle parallax between foreground mist and background nebula.
Very slow movement.
No dramatic zoom.
No new elements.
No color explosion.
Elegant website background motion.
6–8 seconds.
```

## Video 04 — Energy Portal

```text
Preserve the ancient circular portal exactly.
Subtle rotation of the energy ring.
Very slow particles orbit the portal.
Crimson core gently pulses.
Fog moves naturally through the scene.
Keep architecture stable.
No object morphing.
No camera shake.
Premium dark fantasy cinematic.
5–7 seconds.
```

## Video 05 — NFT Character Idle

```text
Preserve the original character design exactly.
Create a premium idle animation.
Very subtle breathing.
Tiny cloth movement.
Small floating cosmic particles.
Minimal light movement across armor.
No facial transformation.
No anatomy changes.
No exaggerated movement.
5 seconds.
```

---

# 12. Recommended Generation Workflow

## Step 1 — Style exploration

Generate 20–30 hero/environment concepts.

Do not select based only on which image looks coolest.
Select based on:
- typography-safe negative space
- focal point
- crop flexibility
- consistency with COSMIC palette
- potential for parallax

## Step 2 — Lock the style

Choose 2–3 master references.
Use them as visual anchors for all later generations.

## Step 3 — Create environment layers

Generate:
- background sky
- distant mountains
- architecture
- foreground silhouettes
- fog
- particles

## Step 4 — Create transparent subjects

Generate:
- creature
- warrior
- relic
- artifact
- NFT characters

Transparent assets should be generated separately whenever possible.

## Step 5 — Composite

Combine layers in Photoshop, Photopea, Figma, Blender, After Effects, or another compositor.

## Step 6 — Make motion versions

Use image-to-video only on scenes that benefit from movement.

## Step 7 — Optimize

Preferred web output:
- WebP / AVIF for stills
- WebM / MP4 for motion
- PNG only where transparency or lossless output is important

---

# 13. Asset Naming Convention

Use deterministic names.

```text
cosmic_scene_01_hero_v01.webp
cosmic_scene_01_hero_v02.webp
cosmic_subject_creature_01_v01.webp
cosmic_subject_warrior_01_v01.webp
cosmic_nft_knight_01_v01.webp
cosmic_fx_fog_01.webp
cosmic_fx_particles_01.webp
cosmic_video_hero_01_v01.webm
```

Never use names such as:

```text
final.png
final-final.png
new2.png
image(4).png
best-final-really-final.png
```

---

# 14. Asset Manifest Example

```ts
export const cosmicAssets = {
  scenes: {
    hero: '/cosmic/environment/cosmic_scene_01_hero_v01.webp',
    trading: '/cosmic/environment/cosmic_scene_02_trading_v01.webp',
    nft: '/cosmic/environment/cosmic_scene_03_nft_v01.webp',
  },
  subjects: {
    creature: '/cosmic/characters/cosmic_subject_creature_01_v01.webp',
    warrior: '/cosmic/characters/cosmic_subject_warrior_01_v01.webp',
  },
  fx: {
    fog: '/cosmic/fx/cosmic_fx_fog_01.webp',
    particles: '/cosmic/fx/cosmic_fx_particles_01.webp',
    glow: '/cosmic/fx/cosmic_fx_glow_01.webp',
  },
} as const;
```

---

# 15. Website Motion Strategy

Do not make the whole site one giant video.

Recommended structure:

```text
Scene 01
  ↓
static/layered environment
  + subtle video atmosphere
  + parallax foreground
  + text reveal
  ↓
Scene transition
  ↓
Scene 02
  ↓
static/layered environment
  + floating subject
  + text reveal
  ↓
Scene transition
  ↓
Scene 03
  ↓
NFT layers
  + subtle character motion
```

The scroll position should control the scene state.

Recommended animation primitives:

```text
opacity
transform
scale
translateX
translateY
rotate
filter: blur()
clip-path
background-position
```

Avoid animating expensive layout properties when possible.

---

# 16. COSMIC Asset Quality Checklist

Before accepting any generated asset, ask:

### Style
- Does it belong to the same universe as the other assets?
- Is the dark fantasy + cosmic identity obvious?

### Composition
- Is the focal point in the intended location?
- Is there sufficient negative space for text?

### Color
- Is navy/indigo dominant?
- Are violet/crimson accents controlled?
- Is the image too neon?

### Production
- Can it be cropped responsively?
- Can it support parallax?
- Is it high resolution enough?
- Does it have unnecessary text/logo/watermark?

### Consistency
- Does lighting direction match the other assets?
- Do materials feel related?
- Does scale feel believable within the same world?

---

# 17. Licensing / Rights Checklist

Before putting an asset into the production website, record:

```text
asset name
source
creator
license type
commercial use allowed?
modification allowed?
redistribution restrictions?
AI training / attribution requirements?
expiry or subscription conditions?
```

Never assume that an asset visible on a stock marketplace is automatically free to use commercially.

For AI-generated assets, also check the current terms of the provider and retain the generation source/project when available.

For recognizable third-party characters, logos, game IP, or artwork from another website, use original replacements unless you have the necessary rights.

---

# 18. Master Prompt for AI Coding Agent

```text
You are building the COSMIC website from an uploaded visual reference.

Treat the COSMIC Asset Generation Bible as the visual source of truth for generated assets.

Rules:
1. Do not invent a new visual style.
2. Keep all generated assets inside the COSMIC dark-fantasy cosmic universe.
3. Reuse visual anchors across scenes.
4. Prefer layered assets over one giant flattened image when parallax is beneficial.
5. Use transparent subject assets wherever possible.
6. Preserve negative space required by typography.
7. Keep the image focal point aligned with the website composition.
8. Never add text or logos inside generated artwork.
9. Do not use random stock images that conflict with the visual system.
10. Optimize all production assets for web performance.
11. Keep motion subtle and cinematic.
12. Use the reference video for composition and choreography, but use original or properly licensed assets.
13. Complete static visual fidelity before implementing advanced motion.
14. After implementation, perform visual QA and fix the largest differences first.
```

---

# 19. Suggested Tool Stack

## Image generation

Suitable categories include:
- Midjourney
- FLUX-based image generators
- Leonardo

## 3D / environment assets

Suitable marketplaces include:
- Fab / Unreal ecosystem
- Unity Asset Store
- ArtStation Marketplace
- KitBash3D

## Video generation

Image-to-video platforms known for this type of workflow include:
- Runway
- Kling
- Luma
- Pika

Always verify current pricing, capabilities, commercial rights, and output limits before production use.

## Compositing

Useful options:
- Photoshop
- Photopea
- Figma
- After Effects
- Blender

## Website motion

Recommended:
- GSAP
- ScrollTrigger
- Framer Motion
- Lenis / equivalent smooth-scroll solution

---

# 20. Final Production Recipe

```text
REFERENCE VIDEO
      ↓
VISUAL BREAKDOWN
      ↓
STYLE ANCHORS
      ↓
GENERATE HERO CONCEPTS
      ↓
LOCK ART DIRECTION
      ↓
GENERATE ENVIRONMENT LAYERS
      ↓
GENERATE CREATURE / NFT SUBJECTS
      ↓
GENERATE FX OVERLAYS
      ↓
COMPOSITE SCENES
      ↓
GENERATE SHORT MOTION LOOPS
      ↓
OPTIMIZE WEB ASSETS
      ↓
IMPLEMENT COSMIC WEBSITE
      ↓
GSAP / PARALLAX / CROSSFADE
      ↓
RESPONSIVE RECOMPOSITION
      ↓
VISUAL QA AGAINST REFERENCE
      ↓
FINAL POLISH
```

## Golden rule

**Do not optimize for the number of assets. Optimize for visual consistency and controllable composition.**

A smaller set of carefully directed assets will produce a more convincing COSMIC website than dozens of unrelated images.
