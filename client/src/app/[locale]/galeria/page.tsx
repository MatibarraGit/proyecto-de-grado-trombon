import { getGalleryInfo } from '@/lib/getGalleryInfo';
import GalleryClient from '../../../components/GalleryClient';

interface Params {
  params: Promise<{ locale: 'es' | 'en' }>
}

export default async function Galeria({ params }: Params) {
  const { locale } = await params;
  const data = await getGalleryInfo({ locale });
  return <GalleryClient data={data} />;
}