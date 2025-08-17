import Image from 'next/image';
import { MapPin, Music } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface RhythmCardProps {
  title: string;
  region: string;
  description: string;
  colorScheme: 'primary' | 'secondary' | 'accent' | 'colombia-green';
  href: string;
  image?: string;
  className?: string;
}

const colorVariants = {
  primary: 'border-primary/20 hover:border-primary/40 hover:shadow-primary/10',
  secondary: 'border-secondary/20 hover:border-secondary/40 hover:shadow-secondary/10',
  accent: 'border-accent/20 hover:border-accent/40 hover:shadow-accent/10',
  'colombia-green': 'border-colombia-green/20 hover:border-colombia-green/40 hover:shadow-colombia-green/10',
};

const iconColors = {
  primary: 'text-primary',
  secondary: 'text-secondary',
  accent: 'text-accent',
  'colombia-green': 'text-colombia-green',
};

export function RhythmCard({ 
  title, 
  region, 
  description, 
  colorScheme, 
  href,
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
        
        <CardTitle className="font-playfair text-xl group-hover:text-primary transition-colors">
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
              colorScheme === 'primary' && "bg-primary hover:bg-primary/90",
              colorScheme === 'secondary' && "bg-secondary hover:bg-secondary/90",
              colorScheme === 'accent' && "bg-accent hover:bg-accent/90",
              colorScheme === 'colombia-green' && "bg-colombia-green hover:bg-colombia-green/90"
            )}
            href={href}
          >
            <Music className="mr-2 h-4 w-4" color='white' />
            Explorar
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}