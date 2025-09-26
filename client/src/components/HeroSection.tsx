"use client";

import { useState, useEffect } from 'react';

import { Button } from '@/components/ui/button';
import { ChevronDown, Play, Music } from 'lucide-react';

interface HeroSectionDictionary {
  title1: string
  title2: string
  description: string
  rhythmsButton: string
  sampleButton: string
}

export function HeroSection({ heroSectionDictionary: hsd }: { heroSectionDictionary: HeroSectionDictionary }) {
  const [scrollY, setScrollY] = useState(0);

  // Manejar el scroll
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  const scrollToRythms = () => {
    const rhythmsElement = document.getElementById('RhythmsSection');
    if (rhythmsElement) {
      rhythmsElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat "
        style={{
          backgroundImage: "url('/assets/hero-trombone-colombia.jpg')",
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="animate-fade-up">
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            {hsd.title1}
            <span className="block text-primary">{hsd.title2}</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-light max-w-2xl mx-auto">
            {hsd.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              onClick={scrollToRythms}
            >
              <Music className="mr-2 h-5 w-5" />
              {hsd.rhythmsButton}
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 px-8 py-4 text-lg backdrop-blur-sm"
              href="/obra"
            >
              <Play className="mr-2 h-5 w-5" />
              {hsd.sampleButton}
            </Button>
          </div>
        </div>
        
        {/* Musical note decorations */}
        <div className="absolute -top-20 left-1/4 text-primary/30 animate-musical-pulse">
          <Music className="h-12 w-12" />
        </div>
        <div className="absolute -bottom-16 right-1/3 text-accent/30 animate-musical-pulse delay-1000">
          <Music className="h-8 w-8" />
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <button
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80 hover:text-white transition-colors animate-bounce cursor-pointer"
        aria-label="Scroll to content"
      >
        <ChevronDown className="h-8 w-8" />
      </button>
    </section>
  );
}