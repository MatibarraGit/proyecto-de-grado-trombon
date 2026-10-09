import 'server-only'
import { query } from "@/lib/strapi";
import { GalleryItem } from "@/types";
import { formatDate } from "./utils";

export async function getGalleryInfo({ locale = "es" }: { locale: 'es' | 'en' }) {
  const response = await query(`gallery?locale=${locale}&populate[mediaFiles][on][media-data.media][populate][file][fields][0]=url&populate[mediaFiles][on][media-data.media][populate][file][fields][1]=publishedAt`);

  if (response?.error) {
    throw new Error(
      `Strapi devolvio un error para la galeria (${locale}): ${response.error.message ?? 'sin detalle'}`
    );
  }

  const { data } = response ?? {};

  if (!data) {
    throw new Error(`La galeria (${locale}) llego vacia desde Strapi.`);
  }

  // Separar los archivos de data
  const mediaData = data?.mediaFiles || [];

  // Ordenar los archivos de data por fecha de publicación
  // mediaData.sort((a: GalleryItem, b: GalleryItem) => new Date(b.file.publishedAt).getTime() - new Date(a.file.publishedAt).getTime()); 
  
  // Mapear los archivos y modificar sus URLs y sus fechas
  const processedData = mediaData.map((data: GalleryItem) => ({
    id: data.id,
    isYoutubeVideo: data.isYoutubeVideo,
    file: data?.file ? {
      id: data.file.id,
      url: data.file.url,
      publishedAt: formatDate(data.file.publishedAt),
    } : undefined,
    youtubeVideoId: data?.youtubeVideoId,
    title: data.title,
    category: data.category,
    date: data.date,
    size: data.size,
  }));

  // Reemplazar las imágenes en data con las procesadas
  data.mediaData = processedData;

  return data;
}
