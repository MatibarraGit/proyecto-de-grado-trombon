import { getGalleryInfo } from '@/lib/getGalleryInfo';
import GalleryClient from '../../../components/GalleryClient';

interface Params {
  params: { locale: 'es' | 'en' }
}

export default async function Galeria({ params }: Params) {
  const { locale } = params;
  const data = await getGalleryInfo({ locale });
  return <GalleryClient data={data} />;
}