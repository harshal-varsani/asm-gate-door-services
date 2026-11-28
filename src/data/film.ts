/**
 * Content for the "Film" design (/film/). Same business, same services as the
 * classic pages, told as a short film. Keep this to general trade knowledge and
 * facts from src/config/site.ts: no unconfirmed claims (response times,
 * warranty terms, prices). Those belong in site.ts once ASM confirms them.
 */

/** Hero film captions, one per scene. `accent` is set in italic amber. */
export const filmScenes = [
  {
    label: 'Stuck',
    lead: 'Half open.',
    accent: 'Fully stuck.',
    text: 'The motor hums, the gate won’t budge, and the car is on the wrong side of it.',
  },
  {
    label: 'We turn up',
    lead: 'Then the van',
    accent: 'pulls up.',
    text: 'A technician with parts on board, there to find the real fault rather than guess at it.',
  },
  {
    label: 'Fixed',
    lead: 'Back on track,',
    accent: 'running quiet.',
    text: 'Adjusted, tested and safety-checked before anyone calls it done.',
  },
  {
    label: 'Sorted',
    lead: 'Home,',
    accent: 'sorted.',
    text: 'Gates, garage doors and the automation that runs them. Installed, repaired and serviced.',
  },
] as const;

/** Service "scene list". `service` matches the quote form's service values. */
export const filmServices = [
  {
    title: 'Gate repairs',
    text: 'Sliding gates off their track, sagging swing gates, worn wheels and rollers, seized hinges and damaged frames.',
    service: 'repair',
    href: '/repairs-maintenance/',
  },
  {
    title: 'Garage door repairs',
    text: 'Sectional, roller and tilt doors. Frayed cables, bent tracks, damaged panels and doors that have dropped or jammed.',
    service: 'repair',
    href: '/repairs-maintenance/',
  },
  {
    title: 'Springs & cables',
    text: 'A snapped spring leaves the door dangerously heavy. Keep it closed and keep clear: springs are replaced and the door rebalanced.',
    service: 'repair',
    href: '/repairs-maintenance/',
  },
  {
    title: 'Motors & openers',
    text: 'Gate motors and garage door openers diagnosed, repaired or replaced, including control boards, limits and gearboxes.',
    service: 'automation',
    href: '/automation-access/',
  },
  {
    title: 'Remotes, keypads & intercoms',
    text: 'New remotes coded, keypads and wall buttons fitted, intercoms and access control added to the system you have.',
    service: 'automation',
    href: '/automation-access/',
  },
  {
    title: 'Servicing & safety checks',
    text: 'Lubrication, spring tension, track alignment, force settings and safety beams, so small faults don’t become breakdowns.',
    service: 'repair',
    href: '/repairs-maintenance/',
  },
  {
    title: 'New garage doors',
    text: 'Sectional, roller, tilt, insulated and custom doors, measured for the opening and installed properly.',
    service: 'garage-door',
    href: '/garage-doors/',
  },
  {
    title: 'New gates & automation',
    text: 'Sliding and swing gates for homes and commercial sites, made to suit the site and automated to suit you.',
    service: 'gate',
    href: '/gates/',
  },
] as const;

/**
 * Symptom checker. Level: 1 usually safe to use, 2 use with care, 3 stop using.
 * General guidance only; the page says so.
 */
export const filmSymptoms = [
  {
    label: 'Won’t open',
    level: 2,
    causes: ['Broken spring or snapped cable', 'Opener motor or control board fault', 'No power, or a flat backup battery', 'Manual lock or release left engaged'],
    advice: 'Don’t force it. If you can see a broken spring or a loose cable, leave the door closed and keep people clear.',
    fix: 'We check whether the fault is in the door or the motor first, then talk you through the fix and the price before starting.',
  },
  {
    label: 'Reverses or won’t close',
    level: 2,
    causes: ['Safety beams blocked, dirty or out of line', 'Force or travel limits need resetting', 'Something catching in the track', 'Worn rollers or hinges'],
    advice: 'Check nothing is blocking the safety beams and wipe the lenses. If it still reverses, leave it rather than overriding the safety system.',
    fix: 'We realign the beams, reset the limits and force settings, and replace any worn hardware that’s making it bind.',
  },
  {
    label: 'Stops halfway',
    level: 2,
    causes: ['Travel limits drifting', 'Binding track or rollers', 'Spring losing tension', 'Motor overheating and cutting out'],
    advice: 'Let the motor cool and try once more. If it stops in the same place again, stop using it until it’s checked.',
    fix: 'We find where and why it binds, rebalance the door or gate and set the limits so it runs end to end smoothly.',
  },
  {
    label: 'Loud bang or grinding',
    level: 3,
    causes: ['Torsion spring snapped (the bang)', 'Cable off its drum', 'Rollers or bearings failing', 'Worn gears in the opener'],
    advice: 'Stop using it. A snapped spring or loose cable can let a door drop without warning.',
    fix: 'We make it safe, replace the spring or cable with matched parts and rebalance the door before it runs again.',
  },
  {
    label: 'Remote does nothing',
    level: 1,
    causes: ['Flat remote battery', 'Remote has lost its code', 'Receiver or aerial fault', 'Radio interference'],
    advice: 'Try the wall button or a second remote. If those work, the remote probably just needs a battery or recoding.',
    fix: 'We test the receiver, recode or replace remotes, and can add keypads or phone control while we’re there.',
  },
  {
    label: 'Gate off its track',
    level: 3,
    causes: ['Damaged wheels or track', 'Worn or loose guide rollers', 'Debris in the track', 'Gate knocked by a vehicle'],
    advice: 'Don’t run the motor. Switch it off at the isolator if you can, and keep clear: a gate off its track can fall.',
    fix: 'We rehang and realign the gate, replace damaged wheels, rollers or track, and reset the motor’s limits.',
  },
] as const;

export const symptomLevels = {
  1: { label: 'Usually safe to use', tone: 'go' },
  2: { label: 'Use with care', tone: 'care' },
  3: { label: 'Stop using it', tone: 'stop' },
} as const;

/** Storyboard: how a job runs. */
export const filmFrames = [
  { icon: 'phone', title: 'Tell us what it’s doing', text: 'Call, or send the call sheet below. A photo or short video of the problem helps us bring the right parts.' },
  { icon: 'search', title: 'We find the real fault', text: 'On site we test the door or gate, the hardware and the motor separately, and show you what has failed.' },
  { icon: 'quote', title: 'You see the price first', text: 'You get the price for the fix before work starts, with straight advice if replacing makes more sense than repairing.' },
  { icon: 'check', title: 'Tested before we leave', text: 'We run it, adjust it and safety-check it before we call the job done.' },
] as const;

/** Things the marquee strip names (the service vocabulary, not claims). */
export const filmReel = [
  'Sliding gates',
  'Swing gates',
  'Sectional doors',
  'Roller doors',
  'Tilt doors',
  'Springs & cables',
  'Motors & openers',
  'Remotes & keypads',
  'Intercoms',
  'Safety beams',
] as const;
