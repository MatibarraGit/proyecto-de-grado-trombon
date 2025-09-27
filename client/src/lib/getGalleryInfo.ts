"use server"
import { query } from "@/lib";
import { GalleryItem } from "@/types";
import { formatDate } from "./utils";
const { IMAGE_HOSTNAME } = process.env;

export async function getGalleryInfo({ locale = "es" }: { locale: 'es' | 'en' }) {
  const response = await query(`gallery?locale=${locale}&populate[mediaFiles][on][media-data.media][populate][file][fields][0]=url&populate[mediaFiles][on][media-data.media][populate][file][fields][1]=publishedAt`);

  const { data } = response;
  
  // Separar los archivos de data
  const mediaData = data?.mediaFiles || [];

  // Ordenar los archivos de data por fecha de publicación
  // mediaData.sort((a: GalleryItem, b: GalleryItem) => new Date(b.file.publishedAt).getTime() - new Date(a.file.publishedAt).getTime()); 

  function normalizeMediaUrl(url: string | null) {
    if (!url) return null;
    // Si la URL ya es absoluta, la devolvemos tal cual
    if (url.startsWith("http")) {
      return url;
    }
    // Si es relativa, le agregamos el dominio de Strapi
    return `${IMAGE_HOSTNAME}${url}`;
  }
  
  // Mapear los archivos y modificar sus URLs y sus fechas
  const processedData = mediaData.map((data: GalleryItem) => ({
    id: data.id,
    isYoutubeVideo: data.isYoutubeVideo,
    file: data?.file ? {
      id: data.file.id,
      url: normalizeMediaUrl(data.file.url),
      publishedAt: formatDate(data.file.publishedAt),
    } : undefined,
    youtubeVideoId: data?.youtubeVideoId,
    title: data.title,
    category: data.category,
    date: data.date,
    size: data.size,
  }));

  // Reemplazar las imágenes en data con las procesadas
  if (data) {
    data.mediaData = processedData;
  }

  return data;
}
