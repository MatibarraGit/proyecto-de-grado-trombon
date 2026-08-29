import { RHYTHM_IDS, type RhythmColorScheme } from '@/types';

/**
 * Color de fondo del Hero de cada ritmo.
 * Es la unica fuente de verdad: las paginas de cada ritmo lo usan para su Hero
 * y la navegacion lo usa para pintar el item activo del mismo color.
 */
export const rhythmBackground: Record<RhythmColorScheme, string> = {
  cumbia: 'bg-cumbia',
  currulao: 'bg-currulao',
  pasillo: 'bg-pasillo',
  joropo: 'bg-joropo',
};

export const isRhythmId = (value: string): value is RhythmColorScheme =>
  (RHYTHM_IDS as readonly string[]).includes(value);
