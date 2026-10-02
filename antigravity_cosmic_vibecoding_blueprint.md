# High-Fidelity Vibecoding Blueprint — COSMIC Website Reference dari Video

## 1. Hasil reverse-engineering visual

> Catatan penting: video adalah rekaman kamera dari sebuah monitor. Elemen yang termasuk **referensi website** adalah area layar browser/monitor; meja, laptop, tangan, lampu, dan overlay `CLAUDE CAN YOU DO THIS?` bukan bagian dari website.

### Struktur halaman yang terlihat

1. **Global navigation**
   - Logo wordmark **COSMIC** berwarna putih di kiri.
   - Menu ringan di kanan: link seperti `About`, tombol/CTA berbentuk pill, dan hamburger/menu icon.
   - Navbar berada di atas hero/background dan menggunakan warna putih dengan kontras tinggi.

2. **Hero / Section 01**
   - Full-bleed fantasy/sci-fi environment.
   - Dominan navy/deep blue dengan aksen magenta, crimson, violet.
   - Headline besar serif/old-style display: `A Metaverse Medieval Game`.
   - Supporting copy kecil tepat di bawah headline.
   - CTA berbentuk rounded pill.
   - Background art menjadi fokus utama; text berada di area yang relatif lebih tenang agar tetap terbaca.

3. **Section 02**
   - Background berganti secara cinematic dari hero menuju cosmic/fantasy scene.
   - Headline di kiri: `Extraordinary Trading Strategies`.
   - Body copy berada di bawah heading.
   - Visual utama berupa objek/creature sci-fi-fantasy besar di sisi kanan.
   - Komposisi terasa seperti editorial landing page, bukan card-grid SaaS biasa.

4. **Section 03**
   - Background bergeser ke scene yang lebih blue/deep-space.
   - Heading di kiri: `Evolutionary NFTs & Lucrative Play 2 Earn Gaming`.
   - Supporting paragraph di bawahnya.
   - Di bawah/kanan terdapat beberapa collectible/NFT cards dengan visual game-art.

5. **Motion language**
   - Smooth scrolling.
   - Background crossfade/parallax antar section.
   - Large visual objects bergerak lambat relatif terhadap text.
   - Text masuk dengan fade + slight translate.
   - Pergantian scene tidak terasa seperti page reload; harus terasa seperti satu dunia visual yang berlanjut.

### Art direction

- Mood: dark fantasy + futuristic metaverse + premium editorial.
- Visual hierarchy: **artwork > large serif headline > small body copy > CTA**.
- Hindari tampilan template SaaS standar.
- Layout harus terasa immersive dan cinematic.
- Gunakan negative space yang cukup untuk headline dan copy.

---

# 2. MASTER PROMPT — siap dipaste ke Antigravity / AI coding agent

```text
You are a senior Creative Frontend Engineer, UI/UX reverse-engineering specialist, motion designer, and design-systems engineer.

Your task is to build a HIGH-FIDELITY recreation of the website shown inside the uploaded reference video for the brand **COSMIC**.

BRAND
- Brand name: COSMIC
- Wordmark displayed in the navbar: COSMIC
- Never use the previous brand name Levora anywhere in the final website.
- Update document title, metadata, navigation, CTA copy, README, and asset references to use COSMIC where applicable.

IMPORTANT REFERENCE INTERPRETATION:
- The uploaded video is a camera recording of a computer monitor.
- ONLY recreate the website visible inside the browser/monitor.
- Do NOT reproduce the desk, laptop, hands, room lighting, or the outer text overlay.
- Treat the reference video as the single visual source of truth.
- The goal is visual fidelity, not generic similarity.

PRIMARY OBJECTIVE
Create a cinematic dark-fantasy / sci-fi metaverse landing page for the brand **COSMIC** with:
1. A floating minimal navbar.
2. A full-screen immersive hero.
3. Large editorial serif typography.
4. Rich fantasy/sci-fi artwork using layered background scenes.
5. Scroll-driven scene transitions.
6. Smooth parallax motion.
7. Text reveal animations.
8. Premium spacing and restrained UI.
9. Strong desktop visual fidelity while remaining responsive on mobile.

DESIGN DIRECTION
- Dark navy / midnight / violet base.
- Accents of magenta, crimson, electric blue, and warm red/orange.
- Premium fantasy game aesthetic.
- Strong cinematic atmosphere.
- Subtle glow only where visible in the reference.
- No generic SaaS gradients.
- No excessive glassmorphism.
- No excessive rounded cards.
- No unnecessary shadows.
- Keep the visual language editorial and immersive.

TECH STACK
Use:
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion for component-level animation
- GSAP + ScrollTrigger for scroll-driven cinematic transitions if needed
- Lenis or an equivalent smooth-scroll solution if compatible
- CSS variables for design tokens
- Local optimized image assets in /public/assets

IMPLEMENTATION PRINCIPLE
Build the page in two layers:
A. Structural fidelity: geometry, spacing, typography, section height, placement.
B. Motion fidelity: parallax, crossfade, reveal, object movement.
Do not add animation until the static composition is visually close.

PAGE ARCHITECTURE
Create these reusable components:
- SiteShell
- Navbar
- HeroSection
- FeatureSection
- NFTSection
- BackgroundScene
- BackgroundCrossfade
- RevealText
- ParallaxVisual
- ScrollProgress
- CTAButton

Use a data-driven section configuration, for example:
const sections = [
  {
    id: 'hero',
    eyebrow: '',
    title: 'A Metaverse Medieval Game',
    body: '...',
    background: '/assets/scene-01.webp',
    visual: '/assets/hero-subject.webp'
  },
  {
    id: 'trading',
    title: 'Extraordinary Trading Strategies',
    body: '...',
    background: '/assets/scene-02.webp',
    visual: '/assets/trading-creature.webp'
  },
  {
    id: 'nft',
    title: 'Evolutionary NFTs & Lucrative Play 2 Earn Gaming',
    body: '...',
    background: '/assets/scene-03.webp',
    visual: '/assets/nft-group.webp'
  }
]

LAYOUT RULES
- Hero and major feature sections should feel close to 100vh on desktop.
- Use max-width containers, but keep artwork edge-to-edge.
- Headline width should be constrained so wrapping resembles the reference.
- Prefer large desktop typography with clamp() rather than arbitrary media-query jumps.
- Keep text blocks around 35–50% width on desktop when appropriate.
- On mobile, switch to stacked compositions while preserving order and hierarchy.
- Preserve intentional negative space.

NAVBAR
- Absolute/fixed overlay at the top.
- White **COSMIC** wordmark on the left.
- Small navigation links on the right.
- One compact pill CTA.
- Minimal hamburger icon.
- Navbar background should remain transparent unless readability requires a very subtle backdrop.

HERO
- Full viewport composition.
- Large fantasy scene as background.
- Add a subtle dark overlay only to improve readability.
- Left/center-left content block.
- Large serif display title.
- Small supporting text.
- One rounded CTA.
- Add a subtle visual depth/parallax layer to the major subject.

SECTION TRANSITIONS
The page should feel like a continuous cinematic scroll.
- Background image A should crossfade into B.
- Foreground object should move slightly slower/faster than the page.
- Text should reveal with opacity + y-translation.
- Avoid flashy transitions.
- Keep motion slow, elegant, and premium.
- Use viewport-based progress rather than hard-coded time sequences.

SECTION 02
- Large heading on the left.
- Body copy beneath.
- Large fantasy/sci-fi subject on the right.
- Background should be atmospheric and abstract enough for readable copy.
- Subject can slightly drift/scale during scroll.

SECTION 03
- Shift the palette toward deep blue while retaining magenta accents.
- Large heading and paragraph on the left.
- A group of NFT/game collectible cards should appear toward the lower/right area.
- Cards should have subtle depth and hover motion.
- Do not make cards look like a standard ecommerce grid.

TYPOGRAPHY
Use a pairing close to the reference:
- Display: premium serif / editorial serif.
- Body: clean modern sans-serif.
- Optional UI accent: compact sans-serif.
Do not use more than 2–3 families.

Choose a practical web-safe or Google-hosted font pairing that visually resembles the reference. Keep font loading optimized.

DESIGN TOKENS
Define CSS variables for:
- page background
- text primary
- text muted
- accent magenta
- accent violet
- accent crimson
- max content width
- nav height
- section spacing
- display font sizes
- body font sizes
- animation easings

ACCESSIBILITY
- Respect prefers-reduced-motion.
- Maintain sufficient contrast.
- Buttons must have keyboard focus states.
- Semantic headings.
- Alt text for meaningful images.
- Decorative images must be marked decorative.

PERFORMANCE
- Use AVIF/WebP where possible.
- Preload the first hero image.
- Lazy-load later heavy imagery.
- Avoid huge unoptimized PNGs.
- Use CSS transform/opacity for motion instead of layout-changing properties.
- Avoid excessive scroll listeners; prefer IntersectionObserver, Motion, or ScrollTrigger.

ASSET SYSTEM
Create:
/public/assets/
  scenes/
  subjects/
  cards/
  icons/
  fonts/

Create an asset manifest in:
/src/data/assets.ts
and reference it from the section configuration.
Never scatter raw image paths throughout components.

COPY FIDELITY
The visible reference contains copy resembling:
- "A Metaverse Medieval Game"
- "Extraordinary Trading Strategies"
- "Evolutionary NFTs & Lucrative Play 2 Earn Gaming"
Treat these as reference copy and preserve the visual line lengths. If some words in the video are unreadable, use concise neutral placeholder copy with similar character length rather than inventing a large amount of unrelated marketing content.

IMPORTANT RESTRICTIONS
- Do not reproduce the outer video recording.
- Do not create a generic landing-page interpretation.
- Do not replace the composition with a standard hero + 3 cards + footer template.
- Do not add sections that are not supported by the reference unless required for usability.
- Do not over-animate.
- Do not use emoji as UI icons.
- Do not use random stock photography.
- Do not use proprietary logos, characters, or artwork unless they are owned/licensed.

BUILD SEQUENCE
Phase 1 — Reverse engineer
1. Analyze the uploaded video.
2. Identify section order.
3. Estimate section heights.
4. Estimate navbar dimensions.
5. Identify text alignment.
6. Identify background transitions.
7. Identify major visual assets.
8. Create an implementation map before coding.

Phase 2 — Asset preparation
1. Build an asset manifest.
2. Assign one primary scene/background to each section.
3. Assign one subject visual where needed.
4. Assign card assets to the NFT section.
5. Optimize all assets.

Phase 3 — Static implementation
1. Build the entire page with motion temporarily disabled.
2. Match geometry, typography, spacing, image crop, and hierarchy.
3. Verify desktop first.

Phase 4 — Motion implementation
1. Add navbar entrance.
2. Add background crossfade.
3. Add subject parallax.
4. Add text reveal.
5. Add card hover movement.
6. Add subtle scroll progress indicator if present in reference.

Phase 5 — Responsive
Create layouts for:
- desktop 1440px
- laptop 1280px
- tablet 768px
- mobile 390px
Do not simply shrink desktop. Recompose carefully.

PHASE 6 — VISUAL QA
Run a visual comparison against the reference.
Check:
- vertical rhythm
- title line breaks
- artwork crop
- navbar position
- button dimensions
- section transition speed
- text/image balance
- mobile stacking

When something differs, prioritize fixes in this order:
1. composition
2. typography
3. image crop/scale
4. spacing
5. motion
6. micro-details

DELIVERABLES
Return:
1. Working source code.
2. Component tree.
3. Asset manifest.
4. List of external dependencies.
5. Short README explaining how to replace assets.
6. A visual QA checklist.
7. Any assumptions made because the reference video did not expose the entire page.

SUCCESS CRITERIA
A human viewing the implementation side-by-side with the reference should immediately perceive the same:
- page composition
- visual hierarchy
- atmosphere
- typography scale
- section rhythm
- imagery treatment
- motion language

Do not stop at "functionally correct". Iterate until the implementation is visually convincing.
```

---

# 3. Prompt tahap 2 — khusus asset hunting

```text
Before coding the final visuals, create an asset acquisition plan for the reference website.

For each asset, provide:
- asset ID
- where it appears
- asset type
- ideal dimensions
- aspect ratio
- visual description
- 5–10 search keywords
- whether to use stock, open-license, or AI-generated art
- required crop
- whether transparent background is needed
- output format

Asset groups:
A01 — Hero background
A02 — Hero foreground subject
A03 — Trading section background
A04 — Trading section foreground creature/object
A05 — NFT/game section background
A06–A09 — NFT collectible cards
A10 — Logo/wordmark
A11 — UI icons
A12 — Fonts

Prioritize sources with explicit commercial-use licensing. Do not recommend copying a site's proprietary artwork or logo without permission.

Also produce image-generation prompts for any asset where stock search is unlikely to produce a close enough match.
```

---

# 4. Keyword pencarian aset

## Hero background

Cari dengan kombinasi:

- `dark fantasy medieval metaverse landscape purple red blue`
- `cinematic fantasy game environment crimson violet moon`
- `surreal medieval sci fi landscape neon purple`
- `fantasy game key art dark blue magenta red`
- `epic medieval alien world concept art`

Target visual: scene lebar, fokus utama jangan tepat di tengah karena area kiri/kanan harus memberi ruang untuk headline.

## Section 02 background

- `surreal cosmic cloud background purple magenta`
- `fantasy nebula landscape violet red`
- `abstract cosmic game environment purple`
- `dark magical sky magenta blue cinematic`

## Section 02 foreground object

Dari video terlihat objek seperti creature/kapal/struktur sci-fi fantasy berwarna merah-oranye dengan bentuk cincin bercahaya.

Cari:

- `red sci fi creature glowing ring 3d`
- `alien fantasy ufo red orange glowing ring`
- `surreal flying creature concept art neon red`
- `fantasy sci fi structure red glowing circular ring`

## NFT cards / game collectibles

- `fantasy game character collectible card 3d`
- `metaverse NFT character card concept`
- `stylized fantasy creature game asset`
- `3d fantasy collectible character isolated`

## Logo

Jangan mencari atau mengambil logo milik proyek referensi untuk produksi kecuali memang berhak menggunakannya. Buat wordmark milik brand sendiri dengan ukuran, weight, dan jarak visual yang serupa.

---

# 5. Tempat mencari aset

### Untuk foto/texture generik
- Unsplash
- Pexels
- Pixabay

### Untuk 3D / game-style assets
- Sketchfab (cek lisensi per asset)
- Kenney
- OpenGameArt (cek lisensi per asset)
- Poly Haven untuk HDRI/texture/background material

### Untuk artwork yang sangat spesifik
- Generate sendiri menggunakan image generator.
- Gunakan stock marketplace berlisensi bila perlu hasil komersial dengan hak yang jelas.

### Untuk font
- Google Fonts
- Adobe Fonts
- Font self-hosted yang memang memiliki lisensi web embedding

---

# 6. Cara membuat asset AI agar konsisten

Gunakan satu style bible sebelum menghasilkan banyak gambar.

## Style bible

```text
Dark fantasy metaverse game art, cinematic high contrast lighting, deep navy shadows, saturated violet and magenta atmosphere, crimson red highlights, subtle warm orange emissive details, premium AAA game concept art, surreal medieval + sci-fi fusion, volumetric fog, layered depth, painterly realism, dramatic but elegant composition, no typography, no logo, no watermark.
```

## Hero scene prompt

```text
Wide cinematic dark-fantasy metaverse environment, medieval castle/fortress combined with surreal sci-fi architecture, enormous crimson stone structure, deep electric-blue sky, magenta atmospheric glow, foreground silhouette framing, volumetric mist, premium AAA game key art, strong depth, realistic painterly rendering, dramatic lighting, subject-weighted composition with negative space on the left for typography, 16:9, no text, no logo, no watermark.
```

## Trading creature prompt

```text
A surreal red-orange sci-fi fantasy creature or floating structure with a glowing circular ring around its upper body, hovering in a purple cosmic sky, luminous orange energy, elegant alien-meets-medieval design, cinematic AAA game concept art, deep blue and violet atmosphere, dramatic rim light, isolated readable silhouette, 4:5, no text, no logo, no watermark.
```

## NFT card prompt

```text
A premium fantasy metaverse collectible character, highly detailed 3D game asset, jewel-like emissive accents, dark navy environment, violet and magenta highlights, polished AAA game art, centered subject, portrait composition suitable for an NFT collectible card, no text, no logo, no watermark.
```

---

# 7. Asset preparation rules

### Background scenes
- Hero: ideal 2400–3000 px wide.
- Secondary scenes: minimum 2000 px wide.
- Prefer WebP/AVIF.
- Prepare both desktop and mobile crops when the focal point is difficult to preserve.

### Foreground objects
- Prefer transparent PNG/WebP if separated from background.
- Keep the original high-resolution master.
- Add CSS transform rather than baking motion into the asset.

### NFT cards
- 700–1000 px wide is usually enough for web UI.
- Keep consistent aspect ratio.
- Name files predictably: `nft-01.webp`, `nft-02.webp`, etc.

### Naming

```text
scene-01-hero.webp
scene-02-trading.webp
scene-03-nft.webp
subject-hero.webp
subject-trading.webp
nft-01.webp
nft-02.webp
nft-03.webp
nft-04.webp
logo.svg
icon-menu.svg
```

---

# 8. Architecture

```text
app/
  page.tsx
  globals.css

components/
  SiteShell.tsx
  Navbar.tsx
  HeroSection.tsx
  FeatureSection.tsx
  NFTSection.tsx
  BackgroundScene.tsx
  BackgroundCrossfade.tsx
  RevealText.tsx
  ParallaxVisual.tsx
  ScrollProgress.tsx
  CTAButton.tsx

src/
  data/
    sections.ts
    assets.ts
  lib/
    motion.ts
    utils.ts

public/
  assets/
    scenes/
    subjects/
    cards/
    icons/
    fonts/
```

### Data flow

```text
Reference Video
   ↓
Reference Map
   ↓
Asset Manifest
   ↓
Section Data
   ↓
Reusable Components
   ↓
Static Fidelity
   ↓
Motion Layer
   ↓
Responsive Recomposition
   ↓
Visual QA
```

---

# 9. Agent rules untuk mencegah AI ngaco

```text
RULE 01 — Reference is the source of truth.
RULE 02 — Never invent major layout blocks without evidence from the reference.
RULE 03 — Build static geometry before motion.
RULE 04 — Do not use random stock images when the art direction can be recreated deliberately.
RULE 05 — Do not change headline proportions just because default Tailwind typography looks convenient.
RULE 06 — Keep the background imagery immersive and edge-to-edge.
RULE 07 — Use restrained motion; premium, slow, cinematic.
RULE 08 — Reuse a consistent design-token system.
RULE 09 — All asset paths must come from the asset manifest.
RULE 10 — Every major visual decision should be traceable to the reference video.
RULE 11 — Optimize imagery before shipping.
RULE 12 — Respect reduced-motion accessibility.
RULE 13 — Do not copy third-party logos/artwork unless licensed.
RULE 14 — When uncertain, preserve the reference structure rather than adding a new UX pattern.
RULE 15 — After implementation, perform at least one visual refinement pass.
```

---

# 10. Implementation plan

## Milestone 1 — Reference map
Output:
- section list
- estimated section height
- typography hierarchy
- color palette approximation
- asset list
- animation list

## Milestone 2 — Static page
Build:
- navbar
- hero
- section 02
- section 03
- initial responsive layouts

Acceptance:
- desktop screenshot already looks similar before animation is enabled.

## Milestone 3 — Motion
Add:
- fade/translate text reveal
- parallax image layers
- section background crossfade
- hover interaction for cards
- smooth-scroll behavior

Acceptance:
- motion enhances the reference instead of becoming a new design.

## Milestone 4 — Visual QA
Compare screenshots at:
- 1440 × 900
- 1280 × 800
- 768 × 1024
- 390 × 844

Fix differences by priority:
composition → typography → imagery → spacing → motion → micro-details

---

# 11. Prompt QA / visual refinement

```text
Review the implementation against the uploaded reference video like a visual QA engineer.

Do not give me a generic critique.
Inspect the actual rendered page and identify concrete mismatches in:
- section height
- headline scale
- line wrapping
- left/right alignment
- navbar spacing
- image crop
- foreground subject size
- background darkness
- visual balance
- transition timing
- mobile composition

For every mismatch, directly modify the code and assets configuration.
Do not stop after listing issues.
Perform another review after the modifications.
Prioritize the highest-impact visual differences first.
```

---

# 12. Prinsip terpenting untuk mencapai hasil "persis"

Jangan memberi AI satu prompt lalu berharap hasil akhirnya otomatis identik. Workflow yang lebih efektif adalah:

**Reference → Decompose → Asset Hunt/Generate → Static Match → Motion Match → Responsive Match → Visual QA → Refinement**

Terutama untuk website seperti di video, kualitas hasil lebih banyak ditentukan oleh **ketepatan artwork + crop + typography + scroll choreography** daripada sekadar framework yang digunakan.
