export interface CountryPreset {
  width: number;      // mm
  height: number;     // mm
  label: string;
  faceHeight: { min: number; max: number };  // mm
  topMargin?: { min: number; max: number };  // mm from top to crown
  eyeLevel?: { min: number; max: number };   // mm from bottom
  faceWidthRatio?: number;
  exportWidth?: number;   // px override for digital submissions
  exportHeight?: number;
  description: string;
}

export const COUNTRY_PRESETS: Record<string, CountryPreset> = {
  usa: {
    width: 51, height: 51,
    label: 'USA (2×2 inch / 51×51 mm)',
    faceHeight: { min: 25, max: 35 },
    eyeLevel: { min: 28, max: 35 },
    description: 'Head & shoulders centered. Head size 1–1⅜ inch (25–35 mm) chin to crown. White background. (U.S. Dept. of State)',
  },
  canada: {
    width: 50, height: 70,
    label: 'Canada (50×70 mm)',
    faceHeight: { min: 31, max: 36 },
    topMargin: { min: 11, max: 16 },
    faceWidthRatio: 0.83,
    description: 'Face height 31–36 mm from chin to crown.',
  },
  uk: {
    width: 35, height: 45,
    label: 'UK (35×45 mm)',
    faceHeight: { min: 29, max: 34 },
    topMargin: { min: 3, max: 8 },
    description: 'Face height 29–34 mm. Eyes in top 40–70% of photo.',
  },
  australia: {
    width: 35, height: 45,
    label: 'Australia (35×45 mm)',
    faceHeight: { min: 32, max: 36 },
    topMargin: { min: 3, max: 7 },
    description: 'Face height 32–36 mm from chin to crown.',
  },
  schengen: {
    width: 35, height: 45,
    label: 'Schengen / EU (35×45 mm)',
    faceHeight: { min: 32, max: 36 },
    topMargin: { min: 2, max: 4 },
    description: 'Face height 70–80% of photo height.',
  },
  india: {
    width: 51, height: 51,
    label: 'India (2×2 inch / 51×51 mm)',
    faceHeight: { min: 25, max: 35 },
    eyeLevel: { min: 28.6, max: 34.9 },
    description: 'Square format. Head height 25–35 mm. Eye height 28.6–34.9 mm from bottom.',
  },
  china: {
    width: 33, height: 48,
    label: 'China (33×48 mm)',
    faceHeight: { min: 28, max: 33 },
    topMargin: { min: 3, max: 5 },
    description: 'Face height 28–33 mm. Top of head 3–5 mm from photo top.',
  },
  japan: {
    width: 35, height: 45,
    label: 'Japan (35×45 mm)',
    faceHeight: { min: 32, max: 36 },
    topMargin: { min: 2, max: 6 },
    description: 'Face height 32–36 mm from chin to crown. Top margin 2–6 mm.',
  },
  southkorea: {
    width: 35, height: 45,
    label: 'South Korea (35×45 mm)',
    faceHeight: { min: 32, max: 36 },
    topMargin: { min: 3, max: 7 },
    description: 'Face height 32–36 mm from chin to crown.',
  },
  brazil: {
    width: 50, height: 70,
    label: 'Brazil (50×70 mm)',
    faceHeight: { min: 31, max: 36 },
    topMargin: { min: 2, max: 5 },
    description: 'Portrait format. Face (chin to forehead) 31–36 mm.',
  },
  mexico: {
    width: 35, height: 45,
    label: 'Mexico (35×45 mm)',
    faceHeight: { min: 30, max: 36 },
    topMargin: { min: 3, max: 9 },
    description: 'Face height 30–36 mm from chin to crown.',
  },
  russia: {
    width: 35, height: 45,
    label: 'Russia (35×45 mm)',
    faceHeight: { min: 32, max: 36 },
    topMargin: { min: 4, max: 6 },
    description: 'Face height up to 36 mm (80% of frame). Top margin 4–6 mm.',
  },
  taiwan: {
    width: 35, height: 45,
    label: 'Taiwan (35×45 mm)',
    faceHeight: { min: 32, max: 36 },
    topMargin: { min: 3, max: 7 },
    description: 'Standard "2-inch" Taiwan ID/passport photo.',
  },
  finland: {
    width: 36, height: 47,
    label: 'Finland – Print (36×47 mm)',
    faceHeight: { min: 32, max: 36 },
    topMargin: { min: 4, max: 6 },
    description: 'Print at 300 DPI. Face 32–36 mm chin to crown. Top margin 4–6 mm.',
  },
  finlanddigital: {
    width: 36, height: 47,
    label: 'Finland – Digital (500×653 px)',
    faceHeight: { min: 32, max: 36 },
    topMargin: { min: 4, max: 6 },
    exportWidth: 500,
    exportHeight: 653,
    description: 'Digital upload to Finnish Police. Output 500×653 px JPEG, max 250 KB.',
  },
};

/** Physical print DPI for canvas export (300 dpi) */
export const PRINT_DPI = 300;

/** Convert mm to pixels at a given DPI */
export function mmToPx(mm: number, dpi = PRINT_DPI): number {
  return Math.round((mm / 25.4) * dpi);
}
