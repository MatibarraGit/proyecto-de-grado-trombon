import { getGalleryInfo } from '@/lib/getGalleryInfo';
import GalleryClient from '../../../components/GalleryClient';

const Galeria = async ({ params }: { params: Promise<{ locale: string }> }) => {
  const { locale } = await params;
  const data = await getGalleryInfo({ locale: locale as 'en' | 'es' });
  return <GalleryClient data={data} />;
}

export default Galeria;