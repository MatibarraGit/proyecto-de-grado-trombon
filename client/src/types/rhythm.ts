export const RHYTHM_IDS = ['cumbia', 'currulao', 'pasillo', 'joropo'] as const;

export type RhythmColorScheme = (typeof RHYTHM_IDS)[number];
