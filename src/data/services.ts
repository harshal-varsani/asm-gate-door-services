/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  Services — the content for the four service pages, the navigation menu,
 *  the home page service index and the quote form's service options.
 * ─────────────────────────────────────────────────────────────────────────────
 *  To remove a service ASM doesn't offer, delete its category object.
 *  To change copy, edit the strings. Anchors (`id`) become URL fragments,
 *  e.g. /garage-doors/#sectional — keep them lowercase-with-dashes.
 *
 *  Descriptions explain products in general terms. Brand names, warranty
 *  terms and lead times are intentionally left out until ASM confirms them.
 * ─────────────────────────────────────────────────────────────────────────────
 */
import type { ImageKey } from './images';

export interface Spec {
  label: string;
  value: string;
}

export interface Category {
  id: string;
  name: string;
  short: string;
  image: ImageKey;
  summary: string;
  body: string;
  suits: string[];
  specs?: Spec[];
}

export interface Faq {
  q: string;
  a: string;
}

export interface Comparison {
  heading: string;
  intro: string;
  columns: string[];
  rows: { label: string; values: string[] }[];
}

export interface ServicePage {
  slug: 'garage-doors' | 'gates' | 'automation-access' | 'repairs-maintenance';
  path: string;
  name: string;
  navBlurb: string;
  image: ImageKey;
  /** Optional photo for the home page service index (avoids repeating a photo used elsewhere on the home page). */
  homeImage?: ImageKey;
  seoTitle: string;
  seoDescription: string;
  heading: string;
  intro: string;
  /** Value sent with the quote form when arriving from this page. */
  formService: string;
  categories: Category[];
  comparison?: Comparison;
  /** Optional "what affects the price" explainer (no prices are quoted). */
  priceFactors?: { heading: string; intro: string; factors: { title: string; text: string }[] };
  faqs: Faq[];
}

export const garageDoors: ServicePage = {
  slug: 'garage-doors',
  path: '/garage-doors/',
  name: 'Garage doors',
  navBlurb: 'Sectional, roller, tilt, insulated and architectural doors.',
  image: 'cedarDoor',
  seoTitle: 'Garage Doors: Sectional, Roller & Tilt',
  seoDescription:
    'New and replacement garage doors: sectional, roller, tilt, insulated, custom and architectural, supplied, installed and automated by ASM.',
  heading: 'Garage doors',
  intro:
    'The garage door is often the largest moving part of a house, and one of the first things you see from the street. We help you choose the right type for the opening, the way you use the space and the architecture of the home, then install it properly.',
  formService: 'garage-door',
  categories: [
    {
      id: 'sectional',
      name: 'Sectional garage doors',
      short: 'Sectional',
      image: 'sectionalGrey',
      summary: 'Horizontal panels that lift straight up and run back along the ceiling.',
      body: 'Because a sectional door rises vertically before travelling back under the ceiling, it never swings out over the driveway, so you can park right up to it. It is the most versatile choice for modern homes, pairs naturally with an automatic opener, and comes in flush, ribbed, timber-look and glazed finishes.',
      suits: ['Most modern homes', 'Short driveways', 'Automated garages', 'Insulated options'],
      specs: [
        { label: 'Opens', value: 'Vertically, then back along the ceiling' },
        { label: 'Space needed', value: 'Headroom above the opening and ceiling depth for the tracks' },
        { label: 'Finishes', value: 'Flush, ribbed, timber-look, glazed panels' },
      ],
    },
    {
      id: 'roller',
      name: 'Roller doors',
      short: 'Roller',
      image: 'rollerWhite',
      summary: 'A curtain of steel that coils onto a drum above the opening.',
      body: 'Roller doors are compact, tough and economical. They need very little headroom and leave the ceiling clear, which makes them the go-to for garages with low lintels, sheds, workshops and commercial units. They automate easily and suit high-use openings.',
      suits: ['Low headroom', 'Sheds and workshops', 'Commercial units', 'Value-focused projects'],
      specs: [
        { label: 'Opens', value: 'Coils up onto a drum above the opening' },
        { label: 'Space needed', value: 'Room for the drum above or behind the lintel' },
        { label: 'Finishes', value: 'Steel colours; heavier gauges for commercial use' },
      ],
    },
    {
      id: 'tilt',
      name: 'Tilt doors',
      short: 'Tilt',
      image: 'tiltDoor',
      summary: 'One rigid panel that pivots up and over to sit under the ceiling.',
      body: 'A tilt door gives an uninterrupted face with no panel joints, so it can be clad in timber or another material to match the house. It is a clean solution for character homes and custom facades. Because the bottom of the door swings outward as it opens, allow clearance in front of it.',
      suits: ['Matching the cladding', 'Character homes', 'Single wide panels', 'Custom faces'],
      specs: [
        { label: 'Opens', value: 'Pivots up and in as one panel' },
        { label: 'Space needed', value: 'Clearance in front as the lower edge swings out' },
        { label: 'Finishes', value: 'Steel, or a frame clad to match the home' },
      ],
    },
    {
      id: 'insulated',
      name: 'Insulated garage doors',
      short: 'Insulated',
      image: 'insulatedDoor',
      summary: 'Double-skin panels with an insulating core: warmer, quieter, sturdier.',
      body: 'If your garage is also a gym, workshop, studio or laundry, or it connects to the house, an insulated door makes a real difference to comfort and noise. The insulated core also stiffens the panels, so the door runs more quietly and resists dents better than a single-skin door.',
      suits: ['Internal-access garages', 'Home gyms and studios', 'Colder regions', 'Noise reduction'],
    },
    {
      id: 'custom',
      name: 'Custom garage doors',
      short: 'Custom',
      image: 'glassDoorsHouse',
      summary: 'Cedar, aluminium slats, glazing or a face clad to match the house.',
      body: 'When a standard catalogue door won’t do, we work from your plans, cladding and colour scheme to create a door that belongs to the house, from natural timber and slatted aluminium to glazed inserts and bespoke sizes.',
      suits: ['Architect-designed homes', 'Feature facades', 'Non-standard openings', 'Timber and mixed materials'],
    },
    {
      id: 'architectural',
      name: 'Architectural garage doors',
      short: 'Architectural',
      image: 'glassDoors',
      summary: 'Flush-mounted, glass and aluminium-framed doors that lift the whole facade.',
      body: 'Architectural doors make the garage either disappear into the facade or become its feature: flush doors that sit in line with the cladding, aluminium-framed glass doors that let light in, and clean minimal profiles with concealed hardware.',
      suits: ['Contemporary new builds', 'Flush facades', 'Natural light', 'Design-led renovations'],
    },
    {
      id: 'replacement',
      name: 'Garage door replacement',
      short: 'Replacement',
      image: 'twoStorey',
      summary: 'Swap a tired, noisy or damaged door for one that looks and works like new.',
      body: 'Replacing an old door is one of the most visible upgrades you can make to a home. We measure the opening, remove and dispose of the old door, and fit the new one with the tracks, springs and hardware it needs, with the option to add an opener at the same time.',
      suits: ['Dated or damaged doors', 'Noisy, heavy doors', 'Renovations', 'Adding automation'],
    },
  ],
  priceFactors: {
    heading: 'What affects the price of a garage door?',
    intro: 'Every opening is different, so every door is quoted after we have seen it. These are the things that move the number most.',
    factors: [
      { title: 'Size of the opening', text: 'Wider and taller doors need larger panels or curtains, heavier springs and stronger tracks.' },
      { title: 'Door type', text: 'Roller doors are usually the most economical; sectional doors sit in the middle; tilt, custom and architectural doors sit above both.' },
      { title: 'Material & finish', text: 'Colour steel, timber-look, real timber, glazing or a clad face, plus any windows or decorative inserts.' },
      { title: 'Insulation & automation', text: 'An insulated core and an automatic opener are the two upgrades that change the price most, and the comfort most.' },
    ],
  },
  comparison: {
    heading: 'Sectional, roller or tilt?',
    intro: 'Most garages suit one of three ways of opening. This is the quick version; on site we’ll measure headroom and clearances and confirm what fits.',
    columns: ['Sectional', 'Roller', 'Tilt'],
    rows: [
      { label: 'How it opens', values: ['Lifts up, runs back along the ceiling', 'Coils onto a drum above the opening', 'One panel pivots up and in'] },
      { label: 'Headroom', values: ['Moderate', 'Minimal', 'Moderate'] },
      { label: 'Driveway clearance', values: ['None needed', 'None needed', 'Lower edge swings out'] },
      { label: 'Insulation', values: ['Widely available', 'Limited', 'Depends on cladding'] },
      { label: 'Best for', values: ['Most homes, automation', 'Low headroom, sheds, commercial', 'Clad and character facades'] },
    ],
  },
  faqs: [
    {
      q: 'Which garage door type is right for my garage?',
      a: 'It mostly comes down to headroom, ceiling space, how the opening is framed and the look you want. Sectional doors suit most homes; roller doors fit low-headroom openings; tilt doors work well when you want the door clad to match the house. We confirm what fits when we measure.',
    },
    {
      q: 'Can you replace just the door and keep my existing opener?',
      a: 'Sometimes. It depends on the opener’s age, condition and whether it is rated for the new door’s size and weight. We check on site and let you know whether to keep it or upgrade.',
    },
    {
      q: 'Is an insulated door worth it?',
      a: 'If the garage connects to the house or doubles as a living, work or exercise space, usually yes: it is warmer, quieter and more robust. For a detached garage used only for parking, a single-skin door is often enough.',
    },
    {
      q: 'How long does a new garage door take?',
      a: '[Add typical lead times for standard and custom doors.] Most of the time is manufacturing; installation on site is usually much quicker.',
    },
  ],
};

export const gates: ServicePage = {
  slug: 'gates',
  path: '/gates/',
  name: 'Gates',
  navBlurb: 'Automatic, sliding and swing gates for homes and businesses.',
  image: 'archGateHouse',
  seoTitle: 'Automatic, Sliding & Swing Gates',
  seoDescription:
    'Automatic, sliding and swing gates for homes and businesses: driveway gates, commercial security gates and custom designs, installed by ASM.',
  heading: 'Gates',
  intro:
    'A gate is security, privacy and the front of your property in one. We design and install driveway, pedestrian and commercial gates that suit the site’s slope, width and use, and automate them so they work as well as they look.',
  formService: 'gate',
  categories: [
    {
      id: 'automatic',
      name: 'Automatic gates',
      short: 'Automatic',
      image: 'gateDriveway',
      summary: 'Open from the car, your phone, a keypad or an intercom.',
      body: 'Sliding and swing gates can both be motorised, new or existing. A properly specified motor is matched to the gate’s weight and how often it opens, and safety beams stop the gate if anything is in its path. Add remotes, keypads, intercoms or smart control to suit how you live.',
      suits: ['Driveway convenience', 'Security', 'Families with children and pets', 'Busy commercial entries'],
    },
    {
      id: 'sliding',
      name: 'Sliding gates',
      short: 'Sliding',
      image: 'gateSlat',
      summary: 'One leaf runs along the boundary: ideal for slopes and tight frontages.',
      body: 'A sliding gate travels along the fence line on a ground track or a cantilevered frame, so it never needs space to swing. That makes it the natural choice for sloping driveways, frontages close to the road and wide commercial openings.',
      suits: ['Sloping driveways', 'Short setbacks', 'Wide openings', 'Windy sites'],
      specs: [
        { label: 'Space needed', value: 'Run-back space along the fence line' },
        { label: 'Driveway slope', value: 'Handles slopes well' },
        { label: 'Automation', value: 'Single motor' },
      ],
    },
    {
      id: 'swing',
      name: 'Swing gates',
      short: 'Swing',
      image: 'gatePedestrian',
      summary: 'Single or double leaves hinged from posts: a classic, elegant entrance.',
      body: 'Swing gates open inward on hinges, as one leaf or a matched pair. They suit wide, level driveways and pedestrian entries, and give a traditional sense of arrival. Allow a clear arc inside the property for the leaves to open.',
      suits: ['Level driveways', 'Pedestrian entries', 'Formal frontages', 'Pairs with matching fences'],
      specs: [
        { label: 'Space needed', value: 'A clear arc inside the property' },
        { label: 'Driveway slope', value: 'Best on level ground' },
        { label: 'Automation', value: 'One motor per leaf' },
      ],
    },
    {
      id: 'residential',
      name: 'Residential gates',
      short: 'Residential',
      image: 'gateVertical',
      summary: 'Driveway and pedestrian gates designed around your home.',
      body: 'We match the gate to the fence, cladding, joinery colours and landscaping, so it reads as part of the house rather than an add-on. Choose the privacy level, from solid infill to open slats, and add automation now or later.',
      suits: ['Privacy and security', 'Street appeal', 'Keeping pets and children in', 'Matching fences'],
    },
    {
      id: 'commercial',
      name: 'Commercial gates',
      short: 'Commercial',
      image: 'gateCommercial',
      summary: 'Heavy-duty gates for yards, depots, car parks and multi-unit sites.',
      body: 'Commercial gates have to cope with constant use, vehicles and the weather. We specify robust frames, hardware and motors for high cycle counts, and integrate them with access control so the right people get in, and only them.',
      suits: ['Industrial yards', 'Car parks', 'Apartment and unit complexes', 'Retail and depots'],
    },
    {
      id: 'custom-gates',
      name: 'Custom gates',
      short: 'Custom',
      image: 'gateTimber',
      summary: 'Timber battens, aluminium slats, steel patterns or screens, made to measure.',
      body: 'Bring a sketch, a plan or a photo you love. Custom gates are made to your sizes and design: natural timber, slatted aluminium, perforated or laser-cut screens and powder-coated steel in the colour you choose.',
      suits: ['Unique designs', 'Non-standard openings', 'Mixed materials', 'Matching existing features'],
    },
    {
      id: 'architectural-gates',
      name: 'Architectural gates',
      short: 'Architectural',
      image: 'gateLattice',
      summary: 'Gates conceived as part of the facade, not an afterthought.',
      body: 'For design-led homes and buildings: concealed tracks and motors, flush posts, continuous lines from fence to gate, and bold patterns that become a signature of the property.',
      suits: ['Architect-designed homes', 'Feature entrances', 'Concealed hardware', 'Statement patterns'],
    },
  ],
  priceFactors: {
    heading: 'What affects the price of a gate?',
    intro: 'Gates are quoted after a site visit, because the ground, the width and the way you use the entrance all matter.',
    factors: [
      { title: 'Width & height', text: 'Larger openings need heavier frames, posts and footings, and more material.' },
      { title: 'Sliding or swing', text: 'Sliding gates need a track or cantilever frame; swing gates need strong posts and hinges, and one motor per leaf.' },
      { title: 'Materials & design', text: 'Aluminium slats, steel, timber battens or a custom pattern, and the finish they are coated in.' },
      { title: 'Ground & automation', text: 'Slope, groundworks, power supply, motor choice and access controls such as keypads and intercoms.' },
    ],
  },
  comparison: {
    heading: 'Sliding or swing?',
    intro: 'The site usually decides. Slope, space and wind matter more than style, and we check all three before recommending one.',
    columns: ['Sliding', 'Swing'],
    rows: [
      { label: 'Space needed', values: ['Run-back space along the fence line', 'A clear arc inside the property'] },
      { label: 'Sloping driveway', values: ['Handles slopes well', 'Best on level ground'] },
      { label: 'Wind', values: ['Less affected', 'Large solid leaves can catch wind'] },
      { label: 'Automation', values: ['One motor', 'One motor per leaf'] },
      { label: 'Best for', values: ['Tight frontages, slopes, commercial', 'Wide level driveways, pedestrian gates'] },
    ],
  },
  faqs: [
    {
      q: 'Can my existing gate be automated?',
      a: 'Often, yes, if the gate is sound, swings or slides freely and is well supported. We check the structure, hinges or track, power supply and safety clearances before recommending a motor.',
    },
    {
      q: 'What happens to an automatic gate in a power cut?',
      a: 'Gate motors have a manual release so the gate can be opened by hand. Battery backup can also be added to many systems so the gate keeps working for a number of cycles without mains power.',
    },
    {
      q: 'Do I need consent for a new gate?',
      a: 'Requirements depend on your council, the gate’s height and its location, particularly near pools or boundaries. [Confirm how ASM helps customers with council requirements.]',
    },
    {
      q: 'How do you keep an automatic gate safe?',
      a: 'Correctly set motor force, photo-electric safety beams, and where needed safety edges, so the gate stops and reverses if something is in its way. We test these at installation and during servicing.',
    },
  ],
};

export const automation: ServicePage = {
  slug: 'automation-access',
  path: '/automation-access/',
  name: 'Automation & access',
  navBlurb: 'Openers, gate motors, remotes, keypads, intercoms and smart access.',
  image: 'gateDriveway',
  seoTitle: 'Gate & Garage Door Automation',
  seoDescription:
    'Electric gate automation, garage door openers, remotes, keypads, intercoms, smart access and safety systems for homes and businesses.',
  heading: 'Automation & access',
  intro:
    'The motor, controls and safety systems are what make a door or gate effortless every day. We fit and set up automation for new and existing doors and gates, and connect the ways you want to get in: remotes, keypads, intercoms and your phone.',
  formService: 'automation',
  categories: [
    {
      id: 'gate-automation',
      name: 'Electric gate automation',
      short: 'Gate motors',
      image: 'gateSlat',
      summary: 'Motors for sliding and swing gates, matched to the gate’s weight and use.',
      body: 'We motorise new and existing gates, choosing a motor rated for the gate’s size, weight and how often it opens, then set travel limits, force and safety beams so it runs smoothly and safely.',
      suits: ['Sliding gates', 'Swing gates', 'New and existing gates', 'Residential and commercial'],
    },
    {
      id: 'openers',
      name: 'Garage door openers',
      short: 'Openers',
      image: 'opener',
      summary: 'Quiet, reliable openers for sectional, roller and tilt doors.',
      body: 'An opener should be sized for the door, quiet in the house and simple to use. We install, program and test it, show you the manual release for power cuts, and can add battery backup where the system supports it.',
      suits: ['New doors', 'Upgrading manual doors', 'Replacing failed openers', 'Internal-access garages'],
    },
    {
      id: 'remotes',
      name: 'Remote controls',
      short: 'Remotes',
      image: 'wallConsole',
      summary: 'Extra and replacement remotes, programmed and paired.',
      body: 'Need more remotes for the family, or replacements for lost or worn ones? We supply compatible remotes and pair them on site. On most systems, lost remotes can be removed from the motor’s memory for security.',
      suits: ['Extra handsets', 'Lost or broken remotes', 'Wall consoles', 'Security resets'],
    },
    {
      id: 'smart-access',
      name: 'Smart access',
      short: 'Smart access',
      image: 'phoneApp',
      summary: 'Open, close and check your gate or garage from your phone.',
      body: 'App control lets you open for a delivery while you’re out, check whether the garage was left open and get an alert if it was. Compatibility depends on the motor, so we confirm what your system supports before recommending an upgrade.',
      suits: ['Remote opening', 'Open/closed alerts', 'Sharing access', 'Deliveries and visitors'],
    },
    {
      id: 'keypads',
      name: 'Keypads',
      short: 'Keypads',
      image: 'gateKeypad',
      summary: 'Code entry for family, tradespeople and regular visitors.',
      body: 'A keypad at the gate or garage lets people in without a remote. Codes can be changed when you need to, which suits families, rentals, cleaners and trades.',
      suits: ['Pedestrian entry', 'Rentals', 'Trades and cleaners', 'No-remote access'],
    },
    {
      id: 'intercom',
      name: 'Intercom integration',
      short: 'Intercoms',
      image: 'intercom',
      summary: 'See and speak to visitors, then open the gate from inside or on your phone.',
      body: 'Audio and video intercoms at the gate connect visitors to you inside the house, and on compatible systems to your phone, so you can see who is there and let them in.',
      suits: ['Gated driveways', 'Multi-unit buildings', 'Commercial receptions', 'Deliveries'],
    },
    {
      id: 'access-control',
      name: 'Access control',
      short: 'Access control',
      image: 'basementEntry',
      summary: 'Fobs, cards and PINs for commercial and multi-unit sites.',
      body: 'For car parks, yards and apartment complexes, access control manages who can open which gate or door, and when. Add or remove users without changing locks or collecting remotes.',
      suits: ['Apartment car parks', 'Commercial yards', 'Body corporates', 'Staff access'],
    },
    {
      id: 'safety',
      name: 'Safety systems',
      short: 'Safety',
      image: 'commercialRoller',
      summary: 'Beams, safety edges and auto-reverse, set up and tested.',
      body: 'Automated doors and gates must stop and reverse when something is in their way. We install and test photo-electric beams, safety edges, force settings and warning lights, and check them again at every service.',
      suits: ['Homes with children and pets', 'Commercial sites', 'Upgrading older systems', 'Peace of mind'],
    },
  ],
  faqs: [
    {
      q: 'Which motor and access brands do you supply?',
      a: '[Add the opener, gate motor, intercom and access-control brands ASM supplies and services.]',
    },
    {
      q: 'Can I add phone control to my existing opener?',
      a: 'Many recent openers and gate motors support an add-on module; older units may not. Tell us the make and model (a photo of the motor label is ideal) and we’ll confirm.',
    },
    {
      q: 'What if the power goes out?',
      a: 'Every opener and gate motor has a manual release so you can open by hand. Battery backup is available for many systems if you want them to keep running during an outage.',
    },
    {
      q: 'My remote has stopped working. Is it the remote or the motor?',
      a: 'Start with a fresh battery. If it still won’t work, or other remotes have also stopped, the issue may be the receiver or motor. Book a repair and we’ll diagnose it.',
    },
  ],
};

export const repairs: ServicePage = {
  slug: 'repairs-maintenance',
  path: '/repairs-maintenance/',
  name: 'Repairs & maintenance',
  navBlurb: 'Fault-finding, repairs, servicing and safety inspections.',
  image: 'sectionalWhite',
  homeImage: 'toolsWall',
  seoTitle: 'Garage Door & Gate Repairs',
  seoDescription:
    'Garage door and gate repairs, motor and opener faults, remote issues, servicing and safety inspections for homes and businesses.',
  heading: 'Repairs & maintenance',
  intro:
    'A door that won’t open or a gate stuck halfway is more than an inconvenience. Tell us what’s happening, send a photo if you can, and we’ll diagnose the fault and get it working safely again. Regular servicing keeps it that way.',
  formService: 'repair',
  categories: [
    {
      id: 'garage-door-repairs',
      name: 'Garage door repairs',
      short: 'Garage doors',
      image: 'sectionalGrey',
      summary: 'Stuck, noisy, off its tracks, dented or slow.',
      body: 'We find the cause and fix it: springs, cables, rollers, tracks, hinges, panels and seals. Broken springs and cables are common, and dangerous to handle, so leave those to us.',
      suits: ['Door won’t open or close', 'Broken springs or cables', 'Off the tracks', 'Damaged panels'],
    },
    {
      id: 'gate-repairs',
      name: 'Gate repairs',
      short: 'Gates',
      image: 'gateVertical',
      summary: 'Dragging, sagging, misaligned or damaged gates.',
      body: 'From worn wheels and tracks on sliding gates to dropped hinges and latches on swing gates, we realign, repair or replace the parts that stop a gate running true.',
      suits: ['Dragging or sagging', 'Worn wheels and tracks', 'Hinges and latches', 'Impact damage'],
    },
    {
      id: 'motors',
      name: 'Motor & opener troubleshooting',
      short: 'Motors',
      image: 'repairBench',
      summary: 'Motor runs but nothing moves, grinding, or stopping halfway.',
      body: 'Fault-finding on gate motors and garage door openers: limits, force settings, gears, control boards, sensors and power. We repair what can sensibly be repaired, and tell you plainly when replacement is the better value.',
      suits: ['Stops partway', 'Grinding or humming', 'Reverses unexpectedly', 'No response'],
    },
    {
      id: 'remote-issues',
      name: 'Remote issues',
      short: 'Remotes',
      image: 'wallConsole',
      summary: 'Remotes not working, poor range or lost handsets.',
      body: 'We test remotes, receivers and wall consoles, re-pair handsets, supply compatible replacements and remove lost remotes from the system where it supports it.',
      suits: ['No response', 'Reduced range', 'Lost remotes', 'New handsets'],
    },
    {
      id: 'maintenance',
      name: 'Maintenance',
      short: 'Maintenance',
      image: 'toolsWall',
      summary: 'Lubrication, adjustment and tensioning for smooth, quiet running.',
      body: 'Doors and gates move thousands of times a year. A maintenance visit cleans, lubricates and adjusts moving parts, checks wear, and catches small problems before they become breakdowns.',
      suits: ['Noisy operation', 'Older doors and gates', 'Coastal and dusty sites', 'Before winter'],
    },
    {
      id: 'servicing',
      name: 'Servicing',
      short: 'Servicing',
      image: 'loadingDocks',
      summary: 'Scheduled servicing for homes and commercial sites.',
      body: 'Set up a regular service interval that suits how hard your doors and gates work. Commercial and high-use sites benefit most. [Add service plan options and intervals.]',
      suits: ['Commercial doors', 'High-use gates', 'Body corporates', 'Property managers'],
    },
    {
      id: 'safety-inspections',
      name: 'Safety inspections',
      short: 'Safety checks',
      image: 'garageDark',
      summary: 'Auto-reverse, beams, edges, springs and manual release, checked and recorded.',
      body: 'A focused check of the systems that protect people and vehicles: auto-reverse and force settings, photo-electric beams, safety edges, springs and the manual release. Recommended for commercial sites and any home with children or pets.',
      suits: ['Workplaces', 'Rental properties', 'Homes with children', 'After an incident'],
    },
  ],
  faqs: [
    {
      q: 'Do you repair doors and gates you didn’t install?',
      a: '[Confirm which makes and models ASM repairs, e.g. “Yes, we repair most makes of garage door, gate and motor.”]',
    },
    {
      q: 'My garage door spring has snapped. What should I do?',
      a: 'Don’t try to lift the door or run the opener: the spring carries most of the door’s weight and the door can drop. Leave it where it is, keep people and pets clear, and call us.',
    },
    {
      q: 'Can I send photos of the problem?',
      a: 'Yes, please do. Photos of the door or gate, the motor and any labels or error lights help us diagnose the fault and bring the right parts.',
    },
    {
      q: 'Do you offer urgent or after-hours repairs?',
      a: '[Confirm ASM’s urgent and after-hours availability.]',
    },
  ],
};

export const servicePages = [garageDoors, gates, automation, repairs] as const;

/** Options for the quote form's service selector. */
export const formServices = [
  { value: 'garage-door', label: 'Garage door' },
  { value: 'gate', label: 'Gate' },
  { value: 'automation', label: 'Automation & access' },
  { value: 'repair', label: 'Repair or service' },
  { value: 'other', label: 'Something else' },
] as const;
