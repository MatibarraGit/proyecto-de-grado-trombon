import Image from 'next/image';
import { MapPin, Music } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import type { RhythmColorScheme } from '@/types';

interface RhythmCardProps {
  title: string;
  region: string;
  description: string;
  colorScheme: RhythmColorScheme;
  href: string;
  lang: 'es' | 'en';
  image?: string;
  className?: string;
}

const colorVariants: Record<RhythmColorScheme, string> = {
  cumbia: 'border-cumbia/20 hover:border-cumbia/40 hover:shadow-cumbia/10',
  currulao: 'border-currulao/20 hover:border-currulao/40 hover:shadow-currulao/10',
  pasillo: 'border-pasillo/20 hover:border-pasillo/40 hover:shadow-pasillo/10',
  joropo: 'border-joropo/20 hover:border-joropo/40 hover:shadow-joropo/10',
};

const iconColors: Record<RhythmColorScheme, string> = {
  cumbia: 'text-cumbia',
  currulao: 'text-currulao',
  pasillo: 'text-pasillo',
  joropo: 'text-joropo',
};

const titleHoverColors: Record<RhythmColorScheme, string> = {
  cumbia: 'group-hover:text-cumbia',
  currulao: 'group-hover:text-currulao',
  pasillo: 'group-hover:text-pasillo',
  joropo: 'group-hover:text-joropo',
};

const buttonColors: Record<RhythmColorScheme, string> = {
  cumbia: 'bg-cumbia hover:bg-cumbia/90',
  currulao: 'bg-currulao hover:bg-currulao/90',
  pasillo: 'bg-pasillo hover:bg-pasillo/90',
  joropo: 'bg-joropo hover:bg-joropo/90',
};

export function RhythmCard({ 
  title, 
  region, 
  description, 
  colorScheme, 
  href,
  lang,
  image, 
  className,
}: RhythmCardProps) {
  return (
    <Card className={cn(
      "group transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
      colorVariants[colorScheme],
      className
    )}>
      {image && (
        <div className="relative h-48 overflow-hidden rounded-t-lg">
          <Image
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>
      )}
      
      <CardHeader className="space-y-2">
        <div className="flex items-center gap-2">
          <MapPin className={cn("h-4 w-4", iconColors[colorScheme])} />
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
            {region}
          </span>
        </div>
        
        <CardTitle className={cn("font-playfair text-xl transition-colors", titleHoverColors[colorScheme])}>
          {title}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <CardDescription className="text-base leading-relaxed">
          {description}
        </CardDescription>
        
        <div className="flex gap-2 pt-2">
          <Button 
            size="sm" 
            className={cn(
              "flex-1 transition-all duration-200 text-white",
              buttonColors[colorScheme]
            )}
            href={href}
          >
            <Music className="mr-2 h-4 w-4" color='white' />
            {lang === 'es' ? 'Explorar' : 'Explore'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}