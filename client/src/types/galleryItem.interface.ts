export interface GalleryItem {
  id: number;
  title: string;
  alt: string;
  category?: string;
  date?: string;
  size: 'small' | 'medium' | 'large';
  file: {
    id: number;
    url: string;
    publishedAt: string;
  }
}