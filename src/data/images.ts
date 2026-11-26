/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  Image registry
 * ─────────────────────────────────────────────────────────────────────────────
 *  Every photo on the site is referenced by a key from this file, so swapping
 *  in ASM's own photography is a one-line change per image.
 *
 *  CURRENT IMAGES ARE REPRESENTATIVE STOCK PHOTOGRAPHY, not ASM projects.
 *  Source: Unsplash (https://unsplash.com/license — free for commercial use,
 *  no attribution required). They are served from Unsplash's image CDN with
 *  automatic AVIF/WebP and responsive sizes.
 *
 *  TO USE YOUR OWN PHOTO
 *    1. Put the file in  src/assets/photos/  (JPG or PNG, at least 2400px wide
 *       for full-width images, 1600px for others).
 *    2. Import it at the top of this file:
 *         import myDoor from '../assets/photos/my-door.jpg';
 *    3. Replace the entry's `src` with the import and set `stock: false`:
 *         cedarDoor: { src: myDoor, alt: '…', stock: false },
 *    Astro then optimises it at build time (AVIF/WebP, responsive sizes).
 *
 *  Fields
 *    src       Unsplash photo id (string) or an imported local image.
 *    alt       Describe what is in the photo, for screen readers and SEO.
 *    position  CSS object-position used when the frame crops the photo.
 *    stock     true = representative stock image (may be labelled on the site).
 *    origin    Provenance of the file.
 * ─────────────────────────────────────────────────────────────────────────────
 */
import type { ImageMetadata } from 'astro';

export interface SiteImage {
  src: string | ImageMetadata;
  alt: string;
  position?: string;
  stock: boolean;
  origin?: string;
}

const unsplash = (id: string) => `https://images.unsplash.com/photo-${id}`;

const stock = (id: string, alt: string, position?: string): SiteImage => ({
  src: id,
  alt,
  position,
  stock: true,
  origin: `Unsplash licence — ${unsplash(id)}`,
});

export const images = {
  // ── Home hero reel (one slide per core service) ──────────────────────────
  heroGates: stock(
    '1719773745404-d2e57e1af9bf',
    'Timber driveway gates between stone pillars, opening onto a leafy drive and a family home',
    '55% 62%',
  ),
  heroGarage: stock(
    '1793807796102-12abb098b6d7',
    'A timber home on a green hillside with three dark sectional garage doors and a curved driveway',
    '42% 45%',
  ),
  heroAccess: stock(
    '1748027869634-fc2e545cfb0c',
    'A technician in a hard hat fitting an access-control keypad beside a glass entrance door',
    '38% 35%',
  ),
  heroService: stock(
    '1625148230889-8195e85aae6b',
    'A tradesperson with a tool belt of screwdrivers and pliers beside a service van and ladder',
    '45% 55%',
  ),
  archGateHouse: stock(
    '1780377816572-e48c80e9e3cd',
    'A contemporary home with a black slatted sliding gate, timber garage door and breeze-block screen',
    '50% 62%',
  ),

  // ── Atmosphere ───────────────────────────────────────────────────────────
  hero: stock(
    '1627657252490-17109e997eda',
    'A dark corrugated-steel garage with its door raised, a grey SUV parked inside under warm lights',
    '62% 50%',
  ),
  duskHome: stock(
    '1762811054947-605b20298615',
    'A modern white home lit at dusk, with a planted pathway leading to the entrance',
    '50% 60%',
  ),
  garageDark: stock(
    '1592483955472-7dff4ef1df92',
    'Car tail-lights glowing inside a dark garage behind open timber doors',
    '40% 50%',
  ),

  // ── Garage doors ─────────────────────────────────────────────────────────
  cedarDoor: stock(
    '1775430766327-ca7d9f93f563',
    'A horizontal cedar-look garage door with slim glazed inserts on a charcoal-clad garage',
    '50% 55%',
  ),
  glassDoors: stock(
    '1770756051811-1612ac8bedfa',
    'Two black-framed glass garage doors on a white board-and-batten home',
    '50% 60%',
  ),
  glassDoorsHouse: stock(
    '1771366260867-7e07094579d7',
    'A modern white home with frosted glass garage doors and potted plants',
    '50% 55%',
  ),
  sectionalGrey: stock(
    '1696992812596-3c0d4d2d1299',
    'A charcoal flush-panel sectional garage door beside a red brick wall',
    '60% 50%',
  ),
  sectionalWhite: stock(
    '1675747158954-4a32e28812c0',
    'A white ribbed sectional garage door with a row of windows across the top panel',
    '50% 45%',
  ),
  rollerWhite: stock(
    '1601835991665-66595682d6c5',
    'A close view of a white roller door curtain inside its frame',
    '50% 50%',
  ),
  tiltDoor: stock(
    '1778226817693-7f42d8f27eb6',
    'A one-piece dark garage door on a gabled house, framed by trees and hedging',
    '50% 70%',
  ),
  insulatedDoor: stock(
    '1486502272329-d1ecf81efe63',
    'A dark green sectional garage door with snow falling in front of it',
    '50% 50%',
  ),
  twoStorey: stock(
    '1777106322601-578dc9213ace',
    'A two-storey modern home with a dark sectional garage door and black window joinery',
    '50% 60%',
  ),
  newBuild: stock(
    '1783125127341-81112b795c23',
    'A new single-level home with three garage doors and a wide concrete driveway',
    '55% 55%',
  ),
  basementEntry: stock(
    '1776638697239-3159c0a80b87',
    'An illuminated basement car-park entry with a roller door at the end of a concrete ramp',
    '50% 60%',
  ),
  commercialRoller: stock(
    '1794515689950-b8657acbaafd',
    'A black roller shutter and steel access door on a brick commercial building',
    '65% 50%',
  ),
  loadingDocks: stock(
    '1780367261654-45395777b560',
    'A row of loading docks with roller doors along a commercial building',
    '50% 55%',
  ),

  // ── Gates ────────────────────────────────────────────────────────────────
  gateSlat: stock(
    '1788009145769-e278b44782ee',
    'A horizontal-slat steel gate and fence between two rendered homes',
    '30% 60%',
  ),
  gatePedestrian: stock(
    '1759355787286-f1c5fd456a0d',
    'A black steel pedestrian gate between rendered pillars at the entrance of a modern home',
    '50% 55%',
  ),
  gateVertical: stock(
    '1787002973888-dc0b5477ed09',
    'A black vertical-bar gate set into a pale rendered wall',
    '60% 60%',
  ),
  fenceArchitectural: stock(
    '1790249194835-55d918557f79',
    'A low modern home behind a long black steel fence with matching gates',
    '50% 62%',
  ),
  gateTimber: stock(
    '1779813377622-df4c5a982230',
    'Timber batten gates and fencing in front of a contemporary home with subtropical planting',
    '50% 65%',
  ),
  gateLattice: stock(
    '1743657405622-556b6be5deef',
    'A steel gate with a bold diamond lattice pattern',
    '50% 50%',
  ),
  gateDriveway: stock(
    '1645005049035-c35644b627ba',
    'Black steel driveway gates between stone pillars, opening onto a tree-lined drive',
    '55% 60%',
  ),
  gateCommercial: stock(
    '1787672358207-908761513e64',
    'A security wall with a slatted steel gate and electric fence wires along the top',
    '50% 55%',
  ),

  // ── Automation & access ──────────────────────────────────────────────────
  opener: stock(
    '1795575634378-a7c17f3e0b4a',
    'A garage door opener motor mounted to the ceiling with its drive rail',
    '50% 50%',
  ),
  wallConsole: stock(
    '1795575634440-2ad900768508',
    'A garage door wall console with a green status light',
    '50% 50%',
  ),
  gateKeypad: stock(
    '1760866613530-e3e09e013c42',
    'A keypad and intercom panel mounted beside a steel gate',
    '70% 50%',
  ),
  intercom: stock(
    '1694174439282-ee8cdf0ec6ba',
    'A wall-mounted video intercom panel with camera and keypad',
    '50% 40%',
  ),
  smartAccess: stock(
    '1558002038-1055907df827',
    'A hand holding a phone beside a smart lock fitted to a door',
    '50% 50%',
  ),
  phoneApp: stock(
    '1783419036401-1c01c1039267',
    'Hands holding a phone with a control app open on screen',
    '50% 50%',
  ),

  // ── Workshop & service ───────────────────────────────────────────────────
  repairBench: stock(
    '1568236700632-c0cfc08f486a',
    'A technician working on a mechanical assembly at a workbench',
    '50% 40%',
  ),
  toolsWall: stock(
    '1744302571304-2d7deb9916cd',
    'Clamps and hand tools hanging on a workshop wall',
    '50% 50%',
  ),
  sparks: stock(
    '1598302936625-6075fbd98dd7',
    'Steel being ground in a workshop with sparks flying',
    '40% 50%',
  ),
} satisfies Record<string, SiteImage>;

export type ImageKey = keyof typeof images;
