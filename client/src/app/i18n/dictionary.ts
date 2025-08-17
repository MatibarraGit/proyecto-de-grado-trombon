import 'server-only';

const dictionaries = {
  es: (module: string) => import('./es.json').then((m) => m[module]),
  en: (module: string) => import('./en.json').then((m) => m[module]),
};

export const getDictionary = async (locale: 'en' | 'es', module: string) =>
  dictionaries[locale](module) as Promise<Record<string, any>> ?? {};