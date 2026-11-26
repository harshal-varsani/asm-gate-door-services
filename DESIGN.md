---
name: ASM Gate & Door Services
description: Garage doors, gates, automation and repairs for New Zealand homes and businesses, built like a sectional door.
colors:
  bronze: "#a8835a"
  bronze-hi: "#c29d72"
  bronze-lo: "#8e6c46"
  bronze-ink: "#7a5a36"
  bronze-glint: "#d8bc98"
  ironsand: "#141517"
  basalt: "#1d1e21"
  graphite: "#292a2e"
  steel: "#3a3b40"
  ash: "#a8a6a0"
  mist: "#d9d7d1"
  bone: "#f7f6f3"
  limestone: "#eeece7"
  concrete: "#dedbd4"
  pumice: "#c9c5bc"
  ink: "#17181a"
  ink-soft: "#55534e"
  error: "#b3261e"
typography:
  display:
    fontFamily: "'Archivo Variable', 'Archivo', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "clamp(3.25rem, 1.6rem + 6.2vw, 6rem)"
    fontWeight: 800
    lineHeight: 0.94
    letterSpacing: "-0.035em"
    fontVariation: "'wdth' 125"
  headline-lg:
    fontFamily: "'Archivo Variable', 'Archivo', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "clamp(2.5rem, 1.45rem + 4vw, 4.75rem)"
    fontWeight: 760
    lineHeight: 0.98
    letterSpacing: "-0.028em"
    fontVariation: "'wdth' 118"
  headline:
    fontFamily: "'Archivo Variable', 'Archivo', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "clamp(2rem, 1.35rem + 2.4vw, 3.5rem)"
    fontWeight: 760
    lineHeight: 1.02
    letterSpacing: "-0.028em"
    fontVariation: "'wdth' 118"
  title:
    fontFamily: "'Archivo Variable', 'Archivo', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "clamp(1.375rem, 1.15rem + 0.8vw, 1.875rem)"
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "-0.018em"
    fontVariation: "'wdth' 118"
  title-sm:
    fontFamily: "'Archivo Variable', 'Archivo', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "clamp(1.125rem, 1.06rem + 0.25vw, 1.25rem)"
    fontWeight: 680
    lineHeight: 1.25
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 108"
  lead:
    fontFamily: "'Archivo Variable', 'Archivo', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "clamp(1.125rem, 1.02rem + 0.42vw, 1.375rem)"
    fontWeight: 400
    lineHeight: 1.5
  body:
    fontFamily: "'Archivo Variable', 'Archivo', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
    fontFeature: "'kern', 'liga', 'calt'"
  small:
    fontFamily: "'Archivo Variable', 'Archivo', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "'Archivo Variable', 'Archivo', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 620
    lineHeight: 1.35
    letterSpacing: "0.01em"
    fontVariation: "'wdth' 106"
  control:
    fontFamily: "'Archivo Variable', 'Archivo', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "0.875rem"
    fontWeight: 650
    lineHeight: 1.1
    letterSpacing: "0.08em"
    fontVariation: "'wdth' 112"
rounded:
  none: "0px"
  radius: "2px"
spacing:
  s-2: "0.5rem"
  s-3: "0.75rem"
  s-4: "1rem"
  s-5: "1.5rem"
  s-6: "2rem"
  s-7: "3rem"
  s-8: "4rem"
  s-9: "6rem"
  gutter: "clamp(1rem, 0.4rem + 2.6vw, 3.5rem)"
  section: "clamp(4.5rem, 2.8rem + 6.5vw, 9rem)"
components:
  button-primary:
    backgroundColor: "{colors.bronze}"
    textColor: "{colors.ironsand}"
    typography: "{typography.control}"
    rounded: "{rounded.radius}"
    padding: "0.9rem 1.5rem"
    height: "3.25rem"
  button-primary-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.bone}"
  button-primary-compact:
    backgroundColor: "{colors.bronze}"
    textColor: "{colors.ironsand}"
    typography: "{typography.control}"
    rounded: "{rounded.radius}"
    padding: "0.75rem 1.2rem"
    height: "2.875rem"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.bone}"
    typography: "{typography.control}"
    rounded: "{rounded.radius}"
    padding: "0.9rem 1.5rem"
    height: "3.25rem"
  button-dark:
    backgroundColor: "{colors.ironsand}"
    textColor: "{colors.bone}"
    typography: "{typography.control}"
    rounded: "{rounded.radius}"
    padding: "0.9rem 1.5rem"
    height: "3.25rem"
  button-dark-hover:
    backgroundColor: "{colors.bronze}"
    textColor: "{colors.ironsand}"
  link-arrow:
    textColor: "{colors.ink}"
    typography: "{typography.control}"
    padding: "0.4rem 0"
  icon-button:
    backgroundColor: "transparent"
    textColor: "{colors.bone}"
    rounded: "{rounded.radius}"
    size: "2.875rem"
  text-field:
    backgroundColor: "{colors.bone}"
    textColor: "{colors.ink}"
    rounded: "{rounded.radius}"
    padding: "0.8rem 0.95rem"
    height: "3.25rem"
  choice-tile:
    backgroundColor: "{colors.bone}"
    textColor: "{colors.ink}"
    rounded: "{rounded.radius}"
    padding: "0.75rem 1rem"
    height: "3.25rem"
  choice-tile-selected:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.bone}"
  chip:
    backgroundColor: "transparent"
    textColor: "{colors.ink-soft}"
    rounded: "{rounded.radius}"
    padding: "0.5rem 0.9rem"
  chip-selected:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.bone}"
  nav-link:
    textColor: "{colors.mist}"
    padding: "0.75rem 0.85rem"
  nav-link-active:
    textColor: "{colors.bone}"
  stock-tag:
    backgroundColor: "rgb(20 21 23 / 0.78)"
    textColor: "{colors.mist}"
    rounded: "{rounded.none}"
    padding: "0.28rem 0.5rem"
  action-bar-quote:
    backgroundColor: "{colors.bronze}"
    textColor: "{colors.ironsand}"
    typography: "{typography.control}"
    rounded: "{rounded.radius}"
    height: "3.125rem"
  dark-panel:
    backgroundColor: "{colors.ironsand}"
    textColor: "{colors.bone}"
    rounded: "{rounded.none}"
    padding: "2rem"
---

# Design System: ASM Gate & Door Services

## Overview

**Creative North Star: "The Sectional Door"**

Every page is built the way a sectional garage door is built: a stack of full-width horizontal panels in two materials, ironsand steel and pale limestone, joined at machined groove lines, with anodised bronze as the only hardware. The visitor reads the site top to bottom the way they would read a door: panel, seam, panel. Photography fills panels edge to edge or sits in hard-edged frames; type is cut from one variable family whose width axis does the work a second typeface would normally do.

The mood is architectural, industrial and quietly premium: heavy expanded display type over dark photographs, generous section padding, long ruled lists instead of card grids, and a single warm metal accent that only ever appears where something can be pressed, is active, or is a small piece of hardware. Density is low on marketing bands and higher in the catalogue and quote form, where ruled rows and spec tables carry the detail.

Motion borrows from the door itself. On the home page a stack of charcoal panels lifts off the hero photograph on load; across the site, photographs open with a vertical clip wipe as they enter the viewport. Both disappear under reduced motion, and text is never hidden waiting for an animation. The system rejects the generic trade-site look the brief ruled out: template layouts, excessive gradients, cartoon illustration, rounded card grids, colourful layouts and decorative animation.

**Key Characteristics:**
- Two materials only: ironsand darks and limestone/bone lights, alternating band by band.
- One accent: anodised bronze, for actions, active states, rules and small hardware (icons).
- Bands meet at a 2px groove seam (dark line over light line), like the joint between two door panels.
- Archivo Variable throughout; expanded width (118 to 125) and heavy weight for headings, normal width for reading.
- Square geometry: 2px radius on controls, 0 on frames and panels.
- Ruled rows and hairlines instead of boxed, shadowed cards.
- Door-like motion: hero door lift and vertical image wipes, all off under reduced motion.
- Honest by construction: unconfirmed facts carry a dotted underline; stock photos carry a "Representative image" tag.

## Colors

A cool steel dark and a warm stone light, with one muted anodised-bronze accent; nothing else is allowed colour.

### Primary
- **Anodised Bronze** (#a8835a): the action fill. Primary buttons, the mobile quote bar, checked checkboxes, the skip link, text selection, the 2px active indicator under nav links and beside the active catalogue entry, the link-arrow underline, symptom ticks, and icon strokes on dark (phone, check, arrow). Text on it is always Ironsand (5.3:1).
- **Polished Bronze** (#c29d72): hover state of bronze fills; also the check mark in the quote form's success state and the active filter count.
- **Pressed Bronze** (#8e6c46): active/pressed state of bronze fills and the checked-checkbox border; scrollbar thumb hover.
- **Bronze Ink** (#7a5a36): bronze as text or icon colour on light grounds (5.3:1 on limestone): required-field asterisks, arrows in the service index and area list, focus outlines on light bands, FAQ toggles on light.
- **Bronze Glint** (#d8bc98): bronze as text on dark grounds: current breadcrumb, active mobile-menu item, hover colour for links and titles on dark.

### Neutral
- **Ironsand** (#141517): the dark ground. Page body, dark bands, header, footer, mobile menu, dark buttons, text on bronze. All photo scrims are Ironsand at partial alpha.
- **Basalt** (#1d1e21): raised dark surface; the mega-menu panel and the dark context's surface token.
- **Graphite** (#292a2e): hairlines on dark (row dividers, trust-rail separators), photo-frame placeholder fill, dark-button hover.
- **Steel** (#3a3b40): stronger dark borders: icon-button and chip outlines on dark, the mobile call button, scrollbar thumb.
- **Ash** (#a8a6a0): secondary text on dark (7.4:1): leads in dark bands, footer headings, breadcrumbs, summaries.
- **Mist** (#d9d7d1): soft primary text on dark: nav links at rest, hero lead, list text, the stock tag.
- **Bone** (#f7f6f3): lightest ground and text on dark. Field and tile fills, the bone band ground, headings on dark.
- **Limestone** (#eeece7): the default light ground (`main` and light bands).
- **Concrete** (#dedbd4): light hairlines and row dividers; photo-thumbnail placeholder fill.
- **Pumice** (#c9c5bc): stronger light border: field and tile outlines, ruled-list rules, chip outlines on light.
- **Ink** (#17181a): text on light; selected tile and chip fill; the comparison table's top rule.
- **Ink Soft** (#55534e): secondary text on light (6.1:1): leads, hints, summaries, data labels.

### Feedback
- **Signal Red** (#b3261e): form errors only: invalid field border plus a 3px inset left edge, error text with a 2px dash, alert icon and border. Never decorative.

### Named Rules
**The One Hardware Rule.** Bronze is the only accent, and it appears only on actions, active and selected states, 2px rules and indicators, and small hardware details such as icons. It is never a band ground, a card fill, a heading colour, or a decorative wash.

**The Two Materials Rule.** Every surface is ironsand or limestone/bone. A band declares its material with a context (dark, light or bone), which remaps foreground, soft text, line, strong line, accent text and surface together; components read those semantic roles and never hard-code a material.

**The Bronze-by-Context Rule.** Bronze fills carry Ironsand text, never white. Bronze as text uses Bronze Ink on light grounds and Bronze Glint on dark grounds, so it always clears AA.

## Typography

**Display Font:** Archivo Variable (with Archivo, ui-sans-serif, system-ui, Segoe UI, sans-serif)
**Body Font:** Archivo Variable (same stack)
**Label/Mono Font:** none distinct; numbers use tabular figures

**Character:** One grotesque family used as two voices through its width axis: expanded (118 to 125) and heavy (700 to 800) for headings, so they read like stamped steel signage, and normal width at 400 for comfortable reading. Kerning, ligatures and contextual alternates are on globally.

### Hierarchy
- **Display** (800, clamp(3.25rem, 1.6rem + 6.2vw, 6rem), 0.94, width 125): inner-page hero headings and the closing call-to-action band. Caps at 6rem; balanced wrapping; usually 10 to 14ch wide.
- **Headline Large** (760, clamp(2.5rem, 1.45rem + 4vw, 4.75rem), 0.98, width 118): h1 outside heroes; also the residential/commercial panel headings, pushed to 800 and width 125.
- **Headline** (760, clamp(2rem, 1.35rem + 2.4vw, 3.5rem), 1.02, width 118): every section heading (h2) and catalogue category titles.
- **Title** (700, clamp(1.375rem, 1.15rem + 0.8vw, 1.875rem), 1.12, width 118): h3, pillar and value titles, rail card names, the quote form heading.
- **Title Small** (680, clamp(1.125rem, 1.06rem + 0.25vw, 1.25rem), 1.25, width 108): h4, FAQ questions, project and process step titles.
- **Lead** (400, clamp(1.125rem, 1.02rem + 0.42vw, 1.375rem), 1.5): one-paragraph intros under headings, in the soft foreground, 40 to 52ch.
- **Body** (400, 1.0625rem, 1.6): reading text; prose capped at 68ch, summaries at 44 to 62ch; `text-wrap: pretty`.
- **Small** (400, 0.9375rem): hints, secondary meta, footer text.
- **Label** (620, 0.8125rem, 0.01em, width 106, sentence case): data and field labels such as spec terms, comparison row heads, footer column heads and contact detail names.
- **Control** (650, 0.875rem, 0.08em, width 112, UPPERCASE): buttons, link-arrows, the header CTA and the mobile action bar. The only uppercase tracked type in the system.

Process-step numerals are the one light cut: 300 weight, width 118, -0.04em, tabular, in the soft foreground, because the numbers carry sequence rather than emphasis.

### Named Rules
**The Width-Is-Rank Rule.** Hierarchy is set by width as much as size: 125 for display, 118 for headings, 106 to 112 for labels and controls, 100 for anything read in sentences. Reading text is never expanded.

**The Controls-Only Caps Rule.** Uppercase with 0.08em tracking belongs to controls alone. Labels are sentence case at 0.01em, and no kicker or eyebrow line ever sits above a heading: the heading opens the band.

## Layout

Bands are full-bleed; content sits in a centred wrap of 90rem maximum plus a fluid gutter (clamp(1rem, 0.4rem + 2.6vw, 3.5rem)) each side. Vertical rhythm comes from one section padding (clamp(4.5rem, 2.8rem + 6.5vw, 9rem); a tight variant uses 62% of it) and a 4px-based scale from 0.5rem to 6rem. Hero and CTA bands size themselves instead: the home hero fills the viewport (clamp(36rem, 100svh, 68rem)), inner heroes take 78vh, and content sits bottom-left over the photograph.

Wide layouts are asymmetric fractional splits rather than equal columns: 5fr/7fr (service index, FAQ, why, area, repairs), 7fr/5fr (gates, section heads), 4fr/8fr (automation), 2.6fr/9.4fr (catalogue index and items). Section heads become a split at 62rem with the heading at left and the lead pushed to the right, bottom-aligned. Headings, FAQ intros, the service photo stage and the catalogue index stick at the header height plus 2rem while their content scrolls.

Breakpoints are 40rem, 48rem, 56rem, 62rem, 64rem and 80rem. Below 64rem the desktop nav and mega menu give way to a full-screen dialog menu and a call icon; below 48rem a fixed bottom bar offers Call and Get a quote once the visitor scrolls. Horizontal rails scroll-snap on touch, with arrow buttons from 48rem.

### Named Rules
**The Groove Seam Rule.** Every band of a page meets the next at a 2px groove, a dark 1px line over a light 1px line (light groove on light bands, dark groove on dark bands and the footer). The major ruled lists inside a band open on the same groove. Bands never meet at a gap, a hard border, or a fade.

**The Alternating Ground Rule.** Adjacent bands never share a ground: dark, limestone and bone take turns down the page. Forms always sit on a light ground, even inside a dark band.

**The Ruled Row Rule.** Repeated items (services, pillars, process steps, FAQs, symptoms, service areas, controls) are ruled rows separated by 1px hairlines in the band's line or strong-line colour, not boxed cards in a grid.

## Elevation & Depth

The system is flat. Depth comes from material change (ironsand against limestone), the groove seams, and Ironsand scrims laid over photographs so type stays legible: bottom-up and left-to-right gradients in the heroes, a 100-degree wash in the CTA band. Pinned rails (the hero trust strip, the mobile catalogue index) are near-opaque with a light blur rather than glassy.

### Shadow Vocabulary
- **Overlay drop** (`box-shadow: 0 30px 60px -30px rgb(0 0 0 / 0.7)`): only for the services mega menu, which floats over the page.
- **Selected edge** (`box-shadow: inset 3px 0 0 var(--bronze)`): a bronze bar on the left edge of the selected service tile.
- **Error edge** (`box-shadow: inset 3px 0 0 var(--error)`): the same bar in Signal Red on an invalid field.
- **Focus halo** (`box-shadow: 0 0 0 3px color-mix(in srgb, var(--bronze) 45%, transparent)`): text fields on focus, with the border turning Ink.

### Named Rules
**The Flat Panel Rule.** Surfaces sit flat. A shadow appears only when something floats over the page (the mega menu) or marks state (selected, invalid, focused); resting cards and sections never cast one.

## Shapes

Square and machined. Controls (buttons, fields, tiles, chips, icon buttons, checkboxes, focus outlines) take a 2px radius; photo frames, dark panels, credential chips, the stock tag and the FAQ toggle box are fully square. The only circle in the system is the form's sending spinner. Photographs are cropped hard to fixed ratios (16/10, 16/9, 4/3, 5/4, 4/5, 1/1) inside frames that clip overflow and show Graphite before the image loads. Icons are one stroke family: 24px grid, 1.6 stroke, square caps, mitred joins. The placeholder logo mark is a door opening with three panels, the lowest in bronze.

### Named Rules
**The Square Edge Rule.** Nothing exceeds a 2px radius. No pills, no rounded cards, no circular avatars or icon badges.

## Components

### Buttons
Solid, square and confident, set in the uppercase control style.
- **Shape:** squared edges (2px), 1px border in the fill colour, minimum height 3.25rem.
- **Primary:** Anodised Bronze fill with Ironsand text, 0.9rem by 1.5rem padding; an arrow icon follows the label and slides 3px right on hover.
- **Hover / Focus (the door fill):** a panel in the band's foreground colour (Ink on light grounds, Bone on dark) rises from the bottom edge over 0.5s on the door easing, and the label inverts to the band's ground; pressed drops 1px. Keyboard focus shows the same fill plus a 2px bronze outline at 3px offset (Bronze Ink on light grounds).
- **Ghost:** transparent with a 45% foreground border, taking the band's foreground colour; hover uses the same rising foreground panel. Used beside a primary, never alone as the main action.
- **Dark:** Ironsand fill with Bone text for actions on light bands where bronze would compete (Report a fault); its rising panel is Anodised Bronze with Ironsand text.
- **Compact:** the header CTA, 2.875rem high with 0.75rem by 1.2rem padding.
- **Link-arrow:** uppercase control text over a 1px bronze rule; on hover a 2px foreground line sweeps across the rule from the left (0.5s) and the trailing arrow slides 4px; the secondary action inside bands.
- **Hover chip:** on photo cards (projects, the garage-door rail, service categories) hover darkens the bottom of the frame and raises a small Bone chip with a control-type label and Bronze Ink arrow ("View project", "Ask about sectional") 10px into place.

### Chips
- **Style:** 1px strong-line border, 2px radius, 0.875 to 0.9375rem semibold text, transparent or Bone fill (catalogue index on mobile, project filters, gate-type links on dark).
- **State:** selected or active fills with Ink and turns text Bone; hover darkens the border to Ink (or bronze on dark). Static descriptive chips ("Good for" lists, credentials) are square, Bone or Limestone filled, with a hairline border; the "Good for" chips lead with a Bronze Ink check icon.

### Cards / Containers
- **Corner Style:** square (0).
- **Background:** none. Cards are a photo frame plus text separated by a bottom hairline; the only filled container is the dark contact panel (Ironsand, 2rem padding) and the light safety note (Bone, hairline border).
- **Shadow Strategy:** none at rest (see Elevation & Depth).
- **Border:** a 1px strong-line rule under the title row.
- **Internal Padding:** none on photo cards (frame, then a 1rem gap, then the title row with 0.75rem bottom padding); 2rem in the dark contact panel. Image hover scales the photograph 1.04 to 1.05 over about 1.1s inside its frame.

### Inputs / Fields
- **Style:** Bone fill, 1px Pumice border, 2px radius, 3.25rem minimum height, 1rem text; textareas start at 8.5rem and resize vertically. Labels sit above in 0.9375rem semibold sentence case; hints below in Ink Soft.
- **Focus:** border turns Ink with a 3px bronze halo at 45%.
- **Error / Disabled:** Signal Red border plus a 3px inset red edge, message below led by a short red dash; an alert panel for send failures. Disabled buttons drop to 55% opacity.
- **Choice tiles:** service and property-type radios are full tiles; selected fills Ink with Bone text and a bronze left edge. The checkbox is a square that fills bronze with an Ironsand check.
- **Photo drop zone:** dashed Ink Soft border that turns solid on hover or drag, with a Bronze Ink upload icon.

### Navigation
- **Desktop (from 64rem):** sticky Ironsand header, 4.75rem tall, with a dark groove under it. Links in Mist at 0.9375rem, weight 560, width 106; hover and current turn Bone and grow a 2px bronze underline from the left. Services opens a Basalt mega menu of four photo cards with sub-links.
- **Overlay mode:** over full-bleed heroes the header is transparent with an Ironsand scrim and becomes solid once the page scrolls 24px.
- **Mobile:** call and menu icon buttons (2.875rem squares, Steel border, bronze border on hover). The menu is a full-screen Ironsand dialog that wipes down over the page (420ms, door easing); services are listed large (width 115, weight 720) with bronze arrows, the current item in Bronze Glint.
- **Mobile action bar:** below 48rem, a fixed bottom bar slides up after 45% of a viewport of scroll: Call (Steel outline) and Get a quote (bronze), both in control type.

### Hero Service Reel
The home hero is a reel of four full-bleed, colourful photographs, one per core service (gates, garage doors, automation, repairs & servicing), cross-fading over 1.2s with a slow 1.08 to 1 settle. A bottom-right panel (Ironsand at 62% with blur, a 2px bronze top rule) holds the slide caption, an "Explore" link and four labelled tabs whose 2px bars fill in Polished Bronze over 6.5s to advance the reel. Autoplay starts after the door lift, pauses on hover of the controls, on keyboard focus and with the pause button, and is off under reduced motion; tabs remain clickable and slides swipe on touch. Scrims darken only the bottom and left of the frame so the right side keeps full colour.

### Hero Door Lift (signature)
On the home hero a stack of six charcoal door panels and a bottom seal covers the reel and lifts away (translateY to -102% over 1.55s on the door easing, after 0.35s), revealing the image like a garage door opening. Headline, lead and actions are visible from the first frame and only rise 14px into place. The trust strip is the door's bottom rail: four plain facts on a near-opaque Ironsand rail under a dark groove, each with a bronze check. Under reduced motion the door is not rendered.

### Image Wipe Reveal (signature)
Photo frames marked for reveal open with a vertical clip wipe, the clip edge rising from the bottom of the frame to the top (like a door lifting) over 1.1s on the door easing, while the image settles from 1.06 to 1 scale over 1.6s. It runs only when scripting is on and motion is allowed; otherwise images are simply visible.

### Service Index
The four services as a large typographic index of ruled rows (headline-sized names with arrows). On wide screens, hovering or focusing a row swaps the photograph in a sticky 4/5 stage and advances its arrow in Bronze Ink; on phones each row carries its own photo.

### Catalogue Index
On service pages, a sticky list of category names: a horizontal chip rail on phones, a vertical index on wide screens where the active entry gains a bronze 2px tick and full Ink text as its section scrolls into view.

### Placeholder and Provenance Markers
Unconfirmed business facts (phone, email, service area, hours, credentials, some trust facts and FAQ answers) render with a dotted underline at 45% of the text colour, offset 0.25em, so they never pass as final. Stock photographs that could be read as ASM's own work (project cards, featured projects, the lightbox) carry a small square "Representative image" tag (Ironsand at 78%, a 14% white hairline, Mist text at 0.71875rem) in a corner of the frame; illustrative photos of product types, heroes and atmosphere carry none, and the footer states that some photography is representative.

### Named Rules
**The Visible Placeholder Rule.** Anything the business has not confirmed is shown with the dotted placeholder underline until real content replaces it; it is never styled to look final.

**The Provenance Tag Rule.** Every stock photograph that can be read as ASM's own work carries the "Representative image" tag.

**The Door Motion Rule.** Motion moves like a door: vertical lifts and vertical clip wipes on the door easing (cubic-bezier(0.7, 0, 0.18, 1)), small state changes on the expo-out easing at 160 to 320ms. Every animation is off under reduced motion, and no text waits on one to appear.

## Do's and Don'ts

### Do:
- **Do** build every page as a stack of full-width bands that alternate between ironsand, limestone and bone, each joined to the next by the 2px groove seam.
- **Do** keep bronze for actions, active and selected states, 2px rules and indicators, and small hardware such as icons; use Bronze Ink for bronze text on light and Bronze Glint on dark.
- **Do** set headings in Archivo Variable at width 118 to 125 and weight 700 to 800 with tight negative tracking, and reading text at width 100, weight 400, 1.6 line height.
- **Do** set data and field labels in sentence case (0.8125rem, weight 620, 0.01em tracking).
- **Do** present repeated items as ruled rows with 1px hairlines, opening on a groove.
- **Do** frame photography edge to edge or in square frames at fixed ratios, with an Ironsand scrim wherever type sits on an image.
- **Do** mark unconfirmed facts with the dotted placeholder underline and tag stock photos that could pass as ASM projects "Representative image".
- **Do** keep a quote action and a call action within reach on every page and every phone screen.
- **Do** give every animation a reduced-motion fallback and keep text visible from the first frame.

### Don't:
- **Don't** put kicker or eyebrow text above a heading.
- **Don't** use uppercase tracked lettering outside controls (buttons, link-arrows, the header CTA, the mobile action bar).
- **Don't** use bronze as a band ground, card fill, heading colour or decorative wash, and don't put white text on a bronze fill.
- **Don't** introduce a second accent colour or a third ground material.
- **Don't** round anything beyond 2px or use pills, rounded cards or circular badges.
- **Don't** box repeated items in shadowed cards or lay them out as a row of equal icon cards.
- **Don't** separate bands with gaps, hard borders or fades instead of the groove seam.
- **Don't** use gradients as fills; gradients exist only as photo scrims, the groove itself and the hero door's panel shading.
- **Don't** expand the width axis of reading text.
- **Don't** mix icon families or use glyph icons; use the single 1.6-stroke, square-cap set.
