/**
 * "Film" design: a 26-second short of a call-out, rendered live with three.js.
 * Built entirely from boxes, cylinders and cones: no video file, no images.
 *
 *   Scene 1  0.0–6.5s   Stuck      the sliding gate jams half open at dusk
 *   Scene 2  6.5–12s    We turn up the van pulls up outside
 *   Scene 3  12–19.5s   Fixed      the gate closes, then glides open
 *   Scene 4  19.5–26s   Sorted     the garage door rolls up, lights on inside
 *
 * The page UI (captions, scrubber, play/pause) lives in FilmHero.astro and
 * drives this module through the returned controller.
 */
import * as THREE from 'three';

export const DURATION = 26;
export const CHAPTERS = [0, 6.5, 12, 19.5, DURATION] as const;

export interface FilmController {
  play(): void;
  pause(): void;
  seek(t: number): void;
  readonly playing: boolean;
  readonly time: number;
  dispose(): void;
}

interface Options {
  canvas: HTMLCanvasElement;
  /** Called every rendered frame with the current time and chapter index. */
  onTime?: (t: number, chapter: number) => void;
  /** Start playing immediately. */
  autoplay?: boolean;
  /** Time to show when not autoplaying. */
  startAt?: number;
}

/* ───────────────────────────────────────────── easing helpers */
const clamp = (n: number, a = 0, b = 1) => Math.min(b, Math.max(a, n));
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const span = (t: number, a: number, b: number) => clamp((t - a) / (b - a));
const smooth = (t: number) => t * t * (3 - 2 * t);
const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
const easeInOut = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
export const chapterAt = (t: number) => {
  for (let i = CHAPTERS.length - 2; i >= 0; i--) if (t >= CHAPTERS[i]) return i;
  return 0;
};

/* ───────────────────────────────────────────── palette */
const C = {
  skyTop: 0x0d0f24,
  skyMid: 0x3b2a5c,
  skyLow: 0xd9786a,
  fog: 0x2b2142,
  ground: 0x1b1a24,
  lawn: 0x1d2a2a,
  road: 0x141319,
  path: 0x35333d,
  concrete: 0x4a4752,
  plaster: 0x9a96a3,
  cladding: 0xc6c1cf,
  trim: 0xe9e5ee,
  roof: 0x272536,
  steel: 0x24242c,
  door: 0xd8d4de,
  glass: 0xffc27a,
  amber: 0xffb866,
  red: 0xff4d3d,
  green: 0x63e6a1,
  tree: 0x1d3a3c,
  trunk: 0x2b2224,
  van: 0xeceaf1,
};

export function createFilm({ canvas, onTime, autoplay = true, startAt = 0 }: Options): FilmController | null {
  let renderer: THREE.WebGLRenderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
  } catch {
    return null;
  }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFShadowMap;

  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog(C.fog, 26, 78);
  const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 300);

  const disposables: { dispose(): void }[] = [];
  const mat = (color: number, opts: THREE.MeshStandardMaterialParameters = {}) => {
    const m = new THREE.MeshStandardMaterial({ color, roughness: 0.82, metalness: 0.05, flatShading: true, ...opts });
    disposables.push(m);
    return m;
  };
  const glow = (color: number, intensity = 2) => mat(color, { emissive: color, emissiveIntensity: intensity, roughness: 1 });
  const geoCache = new Map<string, THREE.BufferGeometry>();
  const boxGeo = (w: number, h: number, d: number) => {
    const k = `${w}|${h}|${d}`;
    let g = geoCache.get(k);
    if (!g) {
      g = new THREE.BoxGeometry(w, h, d);
      geoCache.set(k, g);
      disposables.push(g);
    }
    return g;
  };
  /** Box positioned by its centre. */
  const box = (w: number, h: number, d: number, m: THREE.Material, x: number, y: number, z: number, parent: THREE.Object3D = scene) => {
    const mesh = new THREE.Mesh(boxGeo(w, h, d), m);
    mesh.position.set(x, y, z);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    parent.add(mesh);
    return mesh;
  };
  /** Many identical boxes in one draw call. */
  const instanced = (w: number, h: number, d: number, m: THREE.Material, points: [number, number, number][], parent: THREE.Object3D = scene) => {
    const mesh = new THREE.InstancedMesh(boxGeo(w, h, d), m, points.length);
    const o = new THREE.Object3D();
    points.forEach((p, i) => {
      o.position.set(...p);
      o.updateMatrix();
      mesh.setMatrixAt(i, o.matrix);
    });
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    parent.add(mesh);
    return mesh;
  };

  /* ─────────────────────────────────────────── sky, stars, light */
  {
    const g = new THREE.SphereGeometry(160, 32, 20);
    const pos = g.getAttribute('position');
    const colors: number[] = [];
    const top = new THREE.Color(C.skyTop), mid = new THREE.Color(C.skyMid), low = new THREE.Color(C.skyLow);
    const c = new THREE.Color();
    for (let i = 0; i < pos.count; i++) {
      const y = pos.getY(i) / 160; // -1..1
      if (y < 0.02) c.copy(low);
      else if (y < 0.22) c.lerpColors(low, mid, smooth(y / 0.22));
      else c.lerpColors(mid, top, smooth(clamp((y - 0.22) / 0.5)));
      colors.push(c.r, c.g, c.b);
    }
    g.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    const m = new THREE.MeshBasicMaterial({ vertexColors: true, side: THREE.BackSide, fog: false, depthWrite: false });
    disposables.push(g, m);
    scene.add(new THREE.Mesh(g, m));

    const starPos: number[] = [];
    let seed = 7;
    const rand = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
    for (let i = 0; i < 520; i++) {
      const th = rand() * Math.PI * 2;
      const ph = Math.acos(lerp(0.98, 0.18, rand()));
      starPos.push(140 * Math.sin(ph) * Math.cos(th), 140 * Math.cos(ph), 140 * Math.sin(ph) * Math.sin(th));
    }
    const sg = new THREE.BufferGeometry();
    sg.setAttribute('position', new THREE.Float32BufferAttribute(starPos, 3));
    const sm = new THREE.PointsMaterial({ color: 0xffffff, size: 1.6, sizeAttenuation: false, transparent: true, opacity: 0.75, fog: false });
    disposables.push(sg, sm);
    scene.add(new THREE.Points(sg, sm));
  }

  scene.add(new THREE.HemisphereLight(0x7a68b0, 0x1a1422, 1.1));
  const rim = new THREE.DirectionalLight(0xff9a6b, 2.2);
  rim.position.set(-14, 7, -18);
  scene.add(rim);
  const key = new THREE.DirectionalLight(0x9fb0ff, 0.9);
  key.position.set(9, 14, 12);
  key.castShadow = true;
  key.shadow.mapSize.set(2048, 2048);
  Object.assign(key.shadow.camera, { left: -16, right: 16, top: 16, bottom: -16, near: 1, far: 50 });
  key.shadow.bias = -0.0006;
  scene.add(key);

  /* ─────────────────────────────────────────── ground, street, driveway */
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(220, 220), mat(C.ground));
  ground.rotation.x = -Math.PI / 2;
  ground.receiveShadow = true;
  scene.add(ground);
  disposables.push(ground.geometry);

  box(60, 0.02, 4.4, mat(C.road, { roughness: 0.95 }), 0, 0.01, 8.6); // road
  instanced(1.6, 0.025, 0.12, glow(0xe8e2d0, 0.25), Array.from({ length: 16 }, (_, i) => [-28 + i * 3.8, 0.02, 8.6]));
  box(60, 0.12, 0.18, mat(C.plaster), 0, 0.06, 6.35); // kerb
  box(60, 0.06, 2.2, mat(C.path), 0, 0.03, 5.25); // footpath
  box(36, 0.04, 12, mat(C.lawn), 0, 0.02, -2); // front yard
  box(3.8, 0.06, 6.6, mat(C.concrete), -1.0, 0.04, 0.9); // driveway (garage to gate)
  box(4.8, 0.07, 2.25, mat(C.concrete), -0.9, 0.035, 5.25); // vehicle crossing

  /* ─────────────────────────────────────────── house */
  const house = new THREE.Group();
  scene.add(house);
  const clad = mat(C.cladding);
  const trim = mat(C.trim);
  const roofM = mat(C.roof, { roughness: 0.7 });
  // living wing (left) and room (right) either side of the garage
  box(4.0, 2.9, 7.0, clad, -4.8, 1.45, -5.7, house);
  box(3.2, 2.9, 7.0, clad, 2.4, 1.45, -5.7, house);
  // garage: side walls, header, back wall
  box(0.25, 2.9, 7.0, clad, -2.75, 1.45, -5.7, house);
  box(0.25, 2.9, 7.0, clad, 0.75, 1.45, -5.7, house);
  box(3.25, 0.55, 0.32, clad, -1.0, 2.62, -2.36, house);
  box(3.6, 0.1, 0.4, trim, -1.0, 2.35, -2.25, house); // door head trim
  // garage interior: a room seen from inside (BackSide so the outside face is open)
  const interiorM = mat(0x5a4d45, { side: THREE.BackSide });
  const interior = new THREE.Mesh(boxGeo(3.25, 2.9, 6.9), interiorM);
  interior.position.set(-1.0, 1.45, -5.75);
  interior.receiveShadow = true;
  house.add(interior);
  box(0.5, 1.6, 2.4, mat(0x3a3330), -2.35, 0.8, -7.6, house); // shelving
  box(2.2, 0.6, 0.6, mat(0x6b5a4c), -1.1, 0.3, -8.6, house); // bench
  // weatherboards
  const boards: [number, number, number][] = [];
  for (let y = 0.25; y < 2.85; y += 0.24) {
    boards.push([-4.8, y, -2.19], [2.4, y, -2.19]);
  }
  const boardMeshL = instanced(4.0, 0.025, 0.03, mat(0x9d97a8), boards.filter((_, i) => i % 2 === 0), house);
  const boardMeshR = instanced(3.2, 0.025, 0.03, mat(0x9d97a8), boards.filter((_, i) => i % 2 === 1), house);
  boardMeshL.castShadow = boardMeshR.castShadow = false;
  // corner trims
  [-6.8, -2.8, 0.8, 4.0].forEach((x) => box(0.12, 2.9, 0.12, trim, x, 1.45, -2.18, house));
  // windows (warm, lit)
  const windowM = glow(C.glass, 1.6);
  const addWindow = (x: number, w: number, h: number, y = 1.55) => {
    box(w + 0.16, h + 0.16, 0.06, trim, x, y, -2.17, house);
    box(w, h, 0.07, windowM, x, y, -2.15, house);
    box(0.05, h, 0.09, trim, x, y, -2.13, house);
    box(w, 0.05, 0.09, trim, x, y + h * 0.18, -2.13, house);
  };
  addWindow(-5.6, 1.5, 1.2);
  addWindow(-3.9, 0.7, 1.2);
  addWindow(2.4, 1.6, 1.1);
  // front door (living wing side)
  // hip roof: a four-sided cone, rotated and stretched over the plan
  {
    const g = new THREE.ConeGeometry(1, 1, 4, 1);
    g.rotateY(Math.PI / 4);
    disposables.push(g);
    const roof = new THREE.Mesh(g, roofM);
    roof.scale.set(11.8 / Math.SQRT2, 1.9, 8.4 / Math.SQRT2);
    roof.position.set(-1.2, 2.9 + 0.95, -5.7);
    roof.castShadow = true;
    house.add(roof);
    box(11.4, 0.18, 8.0, mat(0x1d1c28), -1.2, 2.92, -5.7, house); // soffit/fascia
    box(11.5, 0.16, 0.1, trim, -1.2, 2.86, -1.68, house); // gutter line
  }
  // chimney
  box(0.6, 1.4, 0.6, mat(0x5d5866), -4.6, 4.0, -6.8, house);

  /* ─────────────────────────────────────────── garage door (rolls up on a track) */
  const doorPanels: THREE.Mesh[] = [];
  const PANEL_H = 0.46, PANELS = 5, DOOR_TOP = 2.32, DOOR_Z = -2.3;
  {
    const doorM = mat(C.door, { roughness: 0.55, metalness: 0.15 });
    const grooveM = mat(0xa9a4b2);
    for (let i = 0; i < PANELS; i++) {
      const p = new THREE.Mesh(boxGeo(3.15, PANEL_H - 0.02, 0.05), doorM);
      p.castShadow = p.receiveShadow = true;
      // two shallow ribs per panel
      const rib = new THREE.Mesh(boxGeo(3.05, 0.02, 0.02), grooveM);
      rib.position.set(0, 0.07, 0.03);
      const rib2 = rib.clone();
      rib2.position.y = -0.09;
      p.add(rib, rib2);
      house.add(p);
      doorPanels.push(p);
    }
  }
  const garageLight = new THREE.PointLight(0xffc98a, 0, 14, 2);
  garageLight.position.set(-1.0, 2.4, -4.2);
  house.add(garageLight);
  const garageBulb = box(0.5, 0.06, 0.18, glow(0xfff1d6, 0), -1.0, 2.84, -4.6, house);

  const placeDoor = (lift: number) => {
    // Each panel follows the track: up the opening, round a short curve, then back under the ceiling.
    for (let i = 0; i < PANELS; i++) {
      const s = i * PANEL_H + PANEL_H / 2 + lift;
      const p = doorPanels[i];
      const bend = span(s, DOOR_TOP - 0.18, DOOR_TOP + 0.24);
      if (s <= DOOR_TOP - 0.18) {
        p.position.set(-1.0, s, DOOR_Z);
        p.rotation.x = 0;
      } else if (bend < 1) {
        const a = bend * (Math.PI / 2);
        const r = 0.27;
        p.position.set(-1.0, DOOR_TOP - 0.18 + Math.sin(a) * r * 1.5, DOOR_Z - (1 - Math.cos(a)) * r * 1.5);
        p.rotation.x = -a;
      } else {
        p.position.set(-1.0, DOOR_TOP + 0.22, DOOR_Z - 0.4 - (s - DOOR_TOP - 0.24));
        p.rotation.x = -Math.PI / 2;
      }
    }
  };

  /* ─────────────────────────────────────────── fence, posts, sliding gate */
  const FENCE_Z = 4.0;
  const plasterM = mat(C.plaster);
  const capM = mat(0xb9b5c1);
  const steelM = mat(C.steel, { metalness: 0.55, roughness: 0.45 });
  const pillar = (x: number, h = 1.9) => {
    box(0.42, h, 0.42, plasterM, x, h / 2, FENCE_Z);
    box(0.52, 0.08, 0.52, capM, x, h + 0.04, FENCE_Z);
  };
  const slats: [number, number, number][] = [];
  const fenceRun = (x0: number, x1: number) => {
    box(x1 - x0, 0.5, 0.3, plasterM, (x0 + x1) / 2, 0.25, FENCE_Z); // plinth
    box(x1 - x0, 0.05, 0.05, steelM, (x0 + x1) / 2, 1.62, FENCE_Z); // top rail
    for (let x = x0 + 0.1; x < x1 - 0.05; x += 0.16) slats.push([x, 1.07, FENCE_Z]);
  };
  pillar(-12);
  pillar(-8.2);
  pillar(-4.4);
  fenceRun(-12, -8.2);
  fenceRun(-8.2, -4.4);
  fenceRun(-4.4, -3.35);
  pillar(-3.35, 2.0);
  pillar(1.55, 2.0); // motor post
  fenceRun(1.55, 5.2);
  pillar(5.2);
  fenceRun(5.2, 9);
  pillar(9);
  fenceRun(9, 13);
  pillar(13);
  instanced(0.05, 1.1, 0.05, steelM, slats);

  // motor housing and warning lamp on the right post
  box(0.42, 0.34, 0.3, mat(0x3a3a44), 1.95, 0.27, FENCE_Z - 0.45);
  const lampM = glow(C.red, 0);
  const lamp = new THREE.Mesh(new THREE.SphereGeometry(0.1, 12, 8), lampM);
  disposables.push(lamp.geometry);
  lamp.position.set(1.55, 2.17, FENCE_Z);
  scene.add(lamp);
  const lampLight = new THREE.PointLight(C.red, 0, 7, 2);
  lampLight.position.set(1.55, 2.3, FENCE_Z + 0.2);
  scene.add(lampLight);

  // the gate: frame plus vertical slats, origin at its left (leading) edge
  const GATE_W = 4.75, GATE_Z = FENCE_Z - 0.3, GATE_X0 = -3.25;
  const gate = new THREE.Group();
  scene.add(gate);
  {
    const frameM = mat(0x2e2e38, { metalness: 0.6, roughness: 0.4 });
    box(GATE_W, 0.08, 0.08, frameM, GATE_W / 2, 0.22, 0, gate);
    box(GATE_W, 0.08, 0.08, frameM, GATE_W / 2, 1.72, 0, gate);
    box(GATE_W, 0.05, 0.06, frameM, GATE_W / 2, 0.97, 0, gate);
    box(0.08, 1.58, 0.08, frameM, 0.04, 0.97, 0, gate);
    box(0.08, 1.58, 0.08, frameM, GATE_W - 0.04, 0.97, 0, gate);
    const gs: [number, number, number][] = [];
    for (let x = 0.16; x < GATE_W - 0.1; x += 0.13) gs.push([x, 0.97, 0]);
    instanced(0.05, 1.46, 0.05, frameM, gs, gate);
    // amber accent rail, the brand stripe
    box(GATE_W - 0.2, 0.035, 0.07, glow(C.amber, 0.6), GATE_W / 2, 1.5, 0.01, gate);
    // wheels
    const wg = new THREE.CylinderGeometry(0.09, 0.09, 0.05, 14);
    wg.rotateX(Math.PI / 2);
    disposables.push(wg);
    [0.5, GATE_W - 0.5].forEach((x) => {
      const w = new THREE.Mesh(wg, steelM);
      w.position.set(x, 0.1, 0);
      gate.add(w);
    });
  }
  box(11, 0.03, 0.08, steelM, 0.8, 0.02, GATE_Z); // ground track

  /* ─────────────────────────────────────────── street light, trees, neighbours */
  {
    const poleM = mat(0x2c2b33, { metalness: 0.5 });
    const pg = new THREE.CylinderGeometry(0.07, 0.09, 4.6, 8);
    disposables.push(pg);
    const pole = new THREE.Mesh(pg, poleM);
    pole.position.set(-6.5, 2.3, 6.1);
    pole.castShadow = true;
    scene.add(pole);
    box(1.2, 0.08, 0.12, poleM, -6.0, 4.58, 6.1);
    box(0.5, 0.06, 0.22, glow(0xffe3b0, 3), -5.5, 4.52, 6.1);
    const sl = new THREE.PointLight(0xffc98a, 30, 16, 1.8);
    sl.position.set(-5.5, 4.3, 6.2);
    scene.add(sl);
  }
  const treeM = mat(C.tree);
  const trunkM = mat(C.trunk);
  const cone = new THREE.ConeGeometry(1, 1, 7);
  const trunkG = new THREE.CylinderGeometry(0.12, 0.16, 1, 6);
  disposables.push(cone, trunkG);
  const tree = (x: number, z: number, h: number) => {
    const t = new THREE.Mesh(trunkG, trunkM);
    t.scale.set(1, h * 0.25, 1);
    t.position.set(x, h * 0.125, z);
    scene.add(t);
    for (let k = 0; k < 3; k++) {
      const c = new THREE.Mesh(cone, treeM);
      const r = h * (0.32 - k * 0.07);
      c.scale.set(r, h * 0.42, r);
      c.position.set(x, h * (0.38 + k * 0.2), z);
      c.castShadow = true;
      scene.add(c);
    }
  };
  tree(-8.6, -4.5, 5.2);
  tree(-9.8, -8, 6.4);
  tree(6.2, -3.8, 4.6);
  tree(7.6, -7.5, 6.8);
  tree(10.5, -1.5, 5);
  tree(-12.5, -2, 4.4);
  tree(13.5, -9, 7.5);
  tree(-15, -10, 7);
  // neighbouring houses, low silhouettes with a lit window or two
  const nM = mat(0x2a2638);
  const nwM = glow(C.glass, 1.2);
  const neighbour = (x: number, z: number, w: number) => {
    box(w, 2.6, 5, nM, x, 1.3, z);
    const g = new THREE.ConeGeometry(1, 1, 4);
    g.rotateY(Math.PI / 4);
    disposables.push(g);
    const r = new THREE.Mesh(g, roofM);
    r.scale.set((w + 0.8) / Math.SQRT2, 1.6, 5.8 / Math.SQRT2);
    r.position.set(x, 3.4, z);
    scene.add(r);
    box(0.9, 0.8, 0.05, nwM, x - w * 0.2, 1.5, z + 2.53);
  };
  neighbour(-17, -6, 7);
  neighbour(17, -5, 7.5);
  neighbour(-26, -9, 8);
  neighbour(27, -8, 8);
  // houses across the street (dark, facing away)
  box(9, 2.8, 5, nM, -14, 1.4, 22);
  box(8, 2.8, 5, nM, 8, 1.4, 22.5);

  /* ─────────────────────────────────────────── the van */
  const van = new THREE.Group();
  scene.add(van);
  const wheels: THREE.Mesh[] = [];
  const VAN_Z = 8.0, WHEEL_R = 0.36, VAN_PARK_X = 8.8;
  const beaconM = glow(C.amber, 0);
  const headM = glow(0xfff4dd, 0);
  {
    const body = mat(C.van, { roughness: 0.4, metalness: 0.2 });
    const dark = mat(0x15151b, { roughness: 0.3, metalness: 0.4 });
    box(3.5, 1.85, 1.9, body, -0.45, 1.27, 0, van); // load area
    box(1.3, 1.25, 1.88, body, 1.95, 0.97, 0, van); // bonnet/cab base
    // sloped windscreen block
    const ws = box(0.9, 0.95, 1.82, dark, 1.42, 1.98, 0, van);
    ws.rotation.z = -0.5;
    box(0.06, 0.55, 1.6, dark, 0.95, 1.85, 0.0, van);
    box(0.12, 0.25, 1.95, dark, 2.6, 0.5, 0, van); // bumper
    box(0.06, 0.16, 0.36, headM, 2.62, 0.95, 0.62, van);
    box(0.06, 0.16, 0.36, headM, 2.62, 0.95, -0.62, van);
    box(0.05, 0.14, 0.3, glow(C.red, 0.8), -2.21, 1.0, 0.7, van);
    box(0.05, 0.14, 0.3, glow(C.red, 0.8), -2.21, 1.0, -0.7, van);
    box(0.5, 0.12, 0.35, beaconM, 0.6, 2.27, 0, van); // roof beacon
    box(2.2, 0.06, 0.06, dark, -0.5, 2.24, 0.75, van); // roof rack
    box(2.2, 0.06, 0.06, dark, -0.5, 2.24, -0.75, van);
    // side livery: amber stripe and wordmark, drawn to a canvas texture
    const tc = document.createElement('canvas');
    tc.width = 1024;
    tc.height = 384;
    const g = tc.getContext('2d')!;
    g.fillStyle = '#ffb866';
    g.fillRect(0, 250, 1024, 46);
    g.fillStyle = '#16161c';
    g.font = '700 150px "DM Sans", system-ui, sans-serif';
    g.textBaseline = 'alphabetic';
    g.fillText('ASM', 40, 190);
    g.font = '600 46px "DM Sans", system-ui, sans-serif';
    g.fillText('GATE & DOOR SERVICES', 44, 352);
    const tex = new THREE.CanvasTexture(tc);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.anisotropy = 4;
    const decalM = new THREE.MeshBasicMaterial({ map: tex, transparent: true, fog: true });
    disposables.push(tex, decalM);
    const decalG = new THREE.PlaneGeometry(3.2, 1.2);
    disposables.push(decalG);
    const decal = new THREE.Mesh(decalG, decalM);
    decal.position.set(-0.45, 1.25, 0.96);
    van.add(decal);
    // wheels
    const wg = new THREE.CylinderGeometry(WHEEL_R, WHEEL_R, 0.28, 16);
    wg.rotateX(Math.PI / 2);
    disposables.push(wg);
    const tyre = mat(0x111114, { roughness: 0.9 });
    const hub = mat(0x8a8794, { metalness: 0.6 });
    [[1.7, 0.86], [1.7, -0.86], [-1.45, 0.86], [-1.45, -0.86]].forEach(([x, z]) => {
      const w = new THREE.Mesh(wg, tyre);
      w.position.set(x, WHEEL_R, z);
      w.castShadow = true;
      const h = box(0.1, 0.1, 0.3, hub, 0, 0, 0, w);
      h.castShadow = false;
      van.add(w);
      wheels.push(w);
    });
  }
  const headL = new THREE.SpotLight(0xfff1d6, 0, 22, 0.5, 0.6, 1.4);
  headL.position.set(2.7, 0.95, 0);
  headL.target.position.set(9, 0, 0);
  van.add(headL, headL.target);
  const beaconL = new THREE.PointLight(C.amber, 0, 6, 2);
  beaconL.position.set(0.6, 2.6, 0);
  van.add(beaconL);
  van.position.set(-60, 0, VAN_Z);

  /* ─────────────────────────────────────────── shots (camera per scene) */
  type V3 = [number, number, number];
  const shots: { from: V3; to: V3; lookFrom: V3; lookTo: V3; fov: number }[] = [
    { from: [7.6, 1.45, 11.6], to: [5.7, 1.35, 9.7], lookFrom: [0.0, 1.05, 3.4], lookTo: [0.4, 1.0, 3.6], fov: 38 },
    { from: [-9.5, 2.4, 14.4], to: [-1.5, 2.1, 14.0], lookFrom: [-4, 1.0, 8], lookTo: [8.5, 1.1, 6.5], fov: 38 },
    { from: [5.4, 1.25, 9.8], to: [4.5, 1.3, 8.9], lookFrom: [-0.4, 1.0, 3.6], lookTo: [0.2, 1.05, 3.6], fov: 40 },
    { from: [-0.9, 1.55, 12.4], to: [-0.9, 1.45, 9.6], lookFrom: [-1.0, 1.25, -2.6], lookTo: [-1.0, 1.3, -2.6], fov: 38 },
  ];
  const vFrom = new THREE.Vector3(), vTo = new THREE.Vector3(), look = new THREE.Vector3(), lookTo = new THREE.Vector3();
  let aspect = 1;

  /* ─────────────────────────────────────────── timeline */
  const apply = (t: number) => {
    const ch = chapterAt(t);
    const local = span(t, CHAPTERS[ch], CHAPTERS[ch + 1]);

    // gate offset (metres slid to the right)
    let gateOff = 1.9;
    if (t < 12) {
      const hum = (t % 2.2) < 1.1 && t < 6.5;
      gateOff = 1.9 + (hum ? Math.sin(t * 46) * 0.018 : 0);
    } else if (t < 15.2) gateOff = lerp(1.9, 0, easeInOut(span(t, 12.9, 15.2)));
    else if (t < 16.4) gateOff = 0;
    else gateOff = lerp(0, 4.65, easeInOut(span(t, 16.4, 19.3)));
    gate.position.set(GATE_X0 + gateOff, 0, GATE_Z);

    // warning lamp: red blink while faulty, amber while moving, green once fixed
    let lampColor = C.red, lampOn = 0;
    if (t < 12.6) lampOn = Math.floor(t * 2.2) % 2 === 0 ? 1 : 0.08;
    else if (t < 15.2 || (t > 16.4 && t < 19.3)) {
      lampColor = C.amber;
      lampOn = Math.floor(t * 3) % 2 === 0 ? 1 : 0.3;
    } else {
      lampColor = C.green;
      lampOn = 1;
    }
    lampM.color.setHex(lampColor);
    lampM.emissive.setHex(lampColor);
    lampM.emissiveIntensity = 1.3 * lampOn;
    lampLight.color.setHex(lampColor);
    lampLight.intensity = 3.2 * lampOn;

    // van: arrives during scene 2, parked afterwards
    let vanX = -60, vanSpeed = 0;
    if (t >= 6.5) {
      const k = span(t, 6.6, 11.2);
      vanX = lerp(-26, VAN_PARK_X, easeOut(k));
      vanSpeed = k < 1 ? 1 : 0;
    }
    van.position.x = vanX;
    const travelled = vanX + 26;
    wheels.forEach((w) => (w.rotation.z = -travelled / WHEEL_R));
    const lightsOn = t >= 6.5 && t < 13.5 ? 1 : 0;
    headM.emissiveIntensity = lightsOn ? 3 : 0.2;
    headL.intensity = lightsOn ? 40 : 0;
    const beacon = t >= 6.5 && t < 12.5 ? (Math.floor(t * 4) % 2 === 0 ? 1 : 0.15) : 0;
    beaconM.emissiveIntensity = beacon * 3;
    beaconL.intensity = beacon * 4;
    void vanSpeed;

    // garage door lifts in scene 4; the inside warms up as it opens
    const lift = 2.6 * easeInOut(span(t, 20.4, 24.4));
    placeDoor(lift);
    const inside = smooth(span(t, 20.2, 23));
    garageLight.intensity = 34 * inside;
    (garageBulb.material as THREE.MeshStandardMaterial).emissiveIntensity = 3 * inside;

    // camera
    const s = shots[ch];
    const e = smooth(local);
    vFrom.set(...s.from);
    vTo.set(...s.to);
    camera.position.lerpVectors(vFrom, vTo, e);
    look.set(...s.lookFrom);
    lookTo.set(...s.lookTo);
    look.lerp(lookTo, e);
    if (ch === 1) look.x = Math.min(look.x, vanX + 1.2); // follow the van in
    if (aspect < 0.95) {
      // portrait: pull back along the view so the subject still fits
      const pull = aspect < 0.65 ? 1.22 : 1.1;
      camera.position.sub(look).multiplyScalar(pull).add(look);
    }
    camera.fov = aspect < 0.95 ? s.fov + (aspect < 0.65 ? 18 : 10) : s.fov;
    camera.updateProjectionMatrix();
    camera.lookAt(look);

    onTime?.(t, ch);
  };

  /* ─────────────────────────────────────────── loop, sizing, visibility */
  let time = clamp(startAt, 0, DURATION - 0.001);
  let playing = false;
  let raf = 0;
  let last = 0;
  let onScreen = true;

  const resize = () => {
    const w = canvas.clientWidth || canvas.parentElement?.clientWidth || 1;
    const h = canvas.clientHeight || canvas.parentElement?.clientHeight || 1;
    aspect = w / h;
    renderer.setSize(w, h, false);
    camera.aspect = aspect;
    camera.updateProjectionMatrix();
  };
  const draw = () => {
    apply(time);
    renderer.render(scene, camera);
  };
  const frame = (now: number) => {
    raf = 0;
    const dt = last ? Math.min(0.1, (now - last) / 1000) : 0;
    last = now;
    if (playing) time = (time + dt) % DURATION;
    draw();
    if (playing && onScreen && !document.hidden) raf = requestAnimationFrame(frame);
  };
  const kick = () => {
    if (!raf && playing && onScreen && !document.hidden) {
      last = 0;
      raf = requestAnimationFrame(frame);
    }
  };

  const ro = new ResizeObserver(() => {
    resize();
    if (!playing) draw();
  });
  ro.observe(canvas);
  const io = new IntersectionObserver(([entry]) => {
    onScreen = entry.isIntersecting;
    kick();
  });
  io.observe(canvas);
  const onVis = () => kick();
  document.addEventListener('visibilitychange', onVis);

  resize();
  // Repaint once web fonts are ready so the van livery uses DM Sans.
  document.fonts?.ready.then(() => {
    const tex = disposables.find((d) => d instanceof THREE.CanvasTexture) as THREE.CanvasTexture | undefined;
    if (tex) tex.needsUpdate = true;
  });
  draw();
  if (autoplay) {
    playing = true;
    kick();
  }

  return {
    play() {
      playing = true;
      kick();
    },
    pause() {
      playing = false;
      if (raf) cancelAnimationFrame(raf);
      raf = 0;
      draw();
    },
    seek(t: number) {
      time = clamp(t, 0, DURATION - 0.001);
      if (!playing) draw();
    },
    get playing() {
      return playing;
    },
    get time() {
      return time;
    },
    dispose() {
      playing = false;
      if (raf) cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      document.removeEventListener('visibilitychange', onVis);
      disposables.forEach((d) => d.dispose());
      renderer.dispose();
    },
  };
}
