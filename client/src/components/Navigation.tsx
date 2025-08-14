"use client";

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Home, MapPin, Clock, BookOpen, Music4, Images, Download, Menu, X,FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface NavigationProps {
  className?: string;
}

const navigationItems = [
  { id: 'inicio', label: 'Inicio', icon: Home, href: '/' },
  { id: 'metodologia', label: 'Metodología', icon: BookOpen, href: '/metodologia' },
  { id: 'timeline', label: 'Historia', icon: Clock, href: '/historia' },
  { id: 'cumbia', label: 'Cumbia', icon: MapPin, href: '/cumbia' },
  { id: 'currulao', label: 'Currulao', icon: MapPin, href: '/currulao' },
  { id: 'pasillo', label: 'Pasillo & Bambuco', icon: MapPin, href: '/pasillo' },
  { id: 'joropo', label: 'Joropo', icon: MapPin, href: '/joropo' },
  { id: 'obra', label: 'Obra', icon: Music4, href: '/obra' },
  { id: 'galeria', label: 'Galería', icon: Images, href: '/galeria' },
  { id: 'hoja-vida', label: 'Hoja de Vida', icon: FileText, href: '/hoja-de-vida' },
  { id: 'recursos', label: 'Recursos', icon: Download, href: '/recursos' },
];

export function Navigation({ className }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavigation = () => setIsOpen(!isOpen);
  const path = usePathname()

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        variant="outline"
        size="icon"
        className="fixed top-4 left-4 z-50 md:hidden bg-background/90 backdrop-blur-sm"
        onClick={toggleNavigation}
      >
        {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      </Button>

      {/* Navigation Sidebar */}
      <nav
        className={cn(
          "fixed left-0 top-0 h-full w-72 bg-card/95 backdrop-blur-sm border-r border-border z-40 transition-transform duration-300",
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0",
          className
        )}
      >
        <div className="p-6">
          <div className="mb-8">
            <h2 className="font-playfair text-xl font-semibold text-primary mb-2">
              El Trombón en el
            </h2>
            <h3 className="font-playfair text-lg text-foreground">
              Folclor Colombiano
            </h3>
          </div>

          <ul className="space-y-2">
            {navigationItems.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group",
                    path === item.href
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  )}
                >
                  <item.icon className="h-5 w-5 transition-transform group-hover:scale-110" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="absolute bottom-6 left-6 right-6">
          <div className="text-xs text-muted-foreground text-center">
            <p className="italic mb-1">
              {`"Destacar el aporte al repertorio del folclor colombiano"`}
            </p>
            <p className="font-medium">Proyecto de Grado Musical</p>
          </div>
        </div>
      </nav>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}