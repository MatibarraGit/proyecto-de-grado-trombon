"use client";

import { useState } from 'react';
import { Camera, Music4, Calendar, Play } from 'lucide-react';
import Image from 'next/image';

import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from '@/components/ui/dialog';

import { useFetchData } from '@/hooks';
import { getGalleryInfo } from '@/lib/getGalleryInfo';
import { GalleryItem } from '@/types'; 

export default function Galeria() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const { data, isLoading } = useFetchData({ fetchFunction: getGalleryInfo });

  if (isLoading) return <div>Loading...</div>;

  const { title, description, mediaData } = data
  const categories = Array.from(new Set(mediaData.map((item: GalleryItem) => item.category)));
  categories.unshift("Todos");

  const filteredMediaData = selectedCategory === 'Todos' 
    ? mediaData 
    : mediaData.filter((item: GalleryItem) => item.category === selectedCategory);

  const getGridClass = (size: string, index: number) => {
    switch (size) {
      case 'large':
        return 'col-span-2 row-span-2';
      case 'medium':
        return index % 4 === 0 ? 'col-span-2 row-span-1' : 'col-span-1 row-span-2';
      case 'small':
      default:
        return 'col-span-1 row-span-1';
    }
  };

  const buildYouTubeThumbnailUrl = (videoId: string) => `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <main className="min-h-screen bg-background md:ml-72">
      {/* Hero Section */}
      <section className="relative py-20 px-4 md:px-8 lg:px-12 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Camera className="h-8 w-8 text-primary" />
            <h1 className="font-playfair text-4xl md:text-6xl font-bold text-foreground">
              {title}
            </h1>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            {description}
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Badge
                key={String(category)}
                variant={selectedCategory === String(category) ? "default" : "outline"}
                className="cursor-pointer px-4 py-2 transition-all duration-200 hover:scale-105"
                onClick={() => setSelectedCategory(String(category))}
              >
                {String(category)}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] grid-flow-dense">
            {filteredMediaData.map((item: GalleryItem, index: number) => (
              <Dialog key={item.id}>
                <DialogTitle hidden />
                <DialogTrigger asChild>
                  <Card 
                    className={`
                      ${getGridClass(item.size, index)}
                      group cursor-pointer overflow-hidden border-none bg-card/50 backdrop-blur-sm
                      hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300
                      hover:scale-[1.02] hover:-translate-y-1
                    `}
                  >
                    <div className="relative h-full w-full">
                      {item.isYoutubeVideo ? (
                        item.youtubeVideoId ? (
                          <>
                            <Image
                              src={buildYouTubeThumbnailUrl(item.youtubeVideoId)}
                              alt={item.title}
                              width={500}
                              height={750}
                              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="rounded-full bg-black/60 p-3">
                                <Play className="h-8 w-8 text-white" />
                              </div>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="h-full w-full bg-black/90 flex items-center justify-center">
                              <div className="text-center text-white">
                                <Play className="h-12 w-12 mx-auto mb-2 text-primary" />
                                <p className="text-sm">Video</p>
                              </div>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                          </>
                        )
                      ) : (
                        <>
                          <Image
                            src={item?.file?.url || ""}
                            alt="Alt text"
                            width={500}
                            height={750}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </>
                      )}
                      
                      {/* Overlay Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="font-semibold text-sm md:text-base mb-1 truncate">
                          {item.title}
                        </h3>

                        <div className="flex items-center gap-2 text-xs">
                          <Music4 className="h-3 w-3" />
                          <span>{item.category}</span>
                          <Calendar className="h-3 w-3 ml-2" />
                          <span>{item.date}</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </DialogTrigger>
                
                <DialogContent 
                  className="max-w-4xl max-h-[90vh] p-0" 
                  closeButtonClassNames="h-6 w-6 flex items-center justify-center rounded-xl bg-muted border border-border hover:bg-accent hover:text-accent-foreground transition-all duration-200 disabled:pointer-events-none"
                  onOpenAutoFocus={(e) => e.preventDefault()}
                >
                  <div className="relative">
                    {item.isYoutubeVideo && item.youtubeVideoId ? (
                      <div className="aspect-video w-full">
                        <iframe
                          src={`https://www.youtube.com/embed/${item.youtubeVideoId}`}
                          title={item.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="w-full h-full rounded-lg"
                        />
                      </div>
                    ) : (
                      <Image
                        src={item?.file?.url || ""}
                        alt="Alt text"
                        width={900}
                        height={700}
                        className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                      />
                    )}

                    <div className="bg-background p-6">
                      <h2 className="font-playfair text-2xl font-bold text-foreground mb-2">
                        {item.title}
                      </h2>

                      <div className="flex items-center gap-4 text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Music4 className="h-4 w-4" />
                          <span>{item.category}</span>
                        </div>

                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>{item.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 md:px-8 lg:px-12 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-3xl font-bold text-foreground mb-8">
            Galería en Números
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">{mediaData.length}</div>
              <div className="text-muted-foreground">Imágenes en Galería</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">{categories.length - 1}</div>
              <div className="text-muted-foreground">Categorías</div>
            </div>
            {/* <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">1</div>
              <div className="text-muted-foreground">Instrumento Protagonista</div>
            </div> */}
          </div>
        </div>
      </section>
    </main>
  );
}