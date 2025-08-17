import { NextRequest, NextResponse } from 'next/server';

const locales = ['es', 'en'];

function getLocale(request: NextRequest): string {
  const acceptLanguages = request.headers.get('accept-language');

  if(!acceptLanguages) return locales[0];

  const acepptedLocales = acceptLanguages.split(',').map((locale: string) => locale.split(';')[0].trim());

  for (const locale of acepptedLocales) {
    if (locales.includes(locale)) {
      return locale;
    }
  }

  return locales[0];
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Verificar si la ruta ya tiene un locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );
  
  if (pathnameHasLocale) {
    // Si ya tiene locale, permitir que continúe
    return NextResponse.next();
  }
  
  // Extraer el locale del referer (URL anterior) si existe
  const referer = request.headers.get('referer');
  let currentLocale = getLocale(request); // fallback al locale por defecto
  
  if (referer) {
    const refererUrl = new URL(referer);
    const refererPath = refererUrl.pathname;
    
    // Buscar si el referer tiene un locale
    const refererLocale = locales.find(locale => 
      refererPath.startsWith(`/${locale}/`) || refererPath === `/${locale}`
    );
    
    if (refererLocale) {
      currentLocale = refererLocale;
    }
  }
  
  // Crear la nueva URL con el locale detectado
  const newUrl = new URL(request.url);
  newUrl.pathname = `/${currentLocale}${pathname}`;
  
  return NextResponse.redirect(newUrl);
}

export const config = {
  matcher: [
    // Excluir archivos estáticos y rutas de Next.js
    '/((?!_next|api|assets|favicon.ico|manifest.json|sitemap.xml|robots.txt).*)',
  ],
};

// export const config = {
//   matcher: [
//     '/((?!_next|assets|favicon.ico|manifest.json|sitemap.xml).*)',
//     '/en/((?!_next|assets|favicon.ico|manifest.json|sitemap.xml).*)',
//     '/es/((?!_next|assets|favicon.ico|manifest.json|sitemap.xml).*)',
//   ],
// };