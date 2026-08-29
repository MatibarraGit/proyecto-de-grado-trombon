import { getGalleryInfo } from '@/lib/getGalleryInfo';
import { getDictionary } from '@/app/i18n/dictionary';
import GalleryClient from '@/components/GalleryClient';
import GalleryError, { type GalleryErrorCopy } from '@/components/GalleryError';

export const dynamic = 'force-dynamic';

const Galeria = async ({ params }: { params: Promise<{ locale: string }> }) => {
  const { locale } = await params;

  try {
    const data = await getGalleryInfo({ locale: locale as 'en' | 'es' });
    return <GalleryClient data={data} />;
  } catch (error) {
    // Los reintentos de query() ya se agotaron: en vez de tirar el server
    // component (pantalla de error generica de Next), mostramos el fallback,
    // que vuelve a intentarlo solo desde el cliente.
    console.error('[galeria] No se pudieron cargar los medios:', error);
    const dict = await getDictionary(locale as 'en' | 'es', 'gallery');
    return <GalleryError copy={dict.error as GalleryErrorCopy} />;
  }
};

export default Galeria;
