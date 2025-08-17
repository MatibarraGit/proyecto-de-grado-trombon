export interface GalleryItem {
  id: number;
  isYoutubeVideo: boolean;
  file?: {
    id: number;
    url: string;
    publishedAt: string;
  }
  youtubeVideoId?: string;
  title: string;
  alt: string;
  category?: string;
  date?: string;
  size: 'small' | 'medium' | 'large';
}