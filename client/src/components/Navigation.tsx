"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import {
  Home,
  MapPin,
  Clock,
  BookOpen,
  Music4,
  Images,
  Download,
  Menu,
  X,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

import { cn } from "@/lib/utils";

interface NavigationProps {
  className?: string;
  dict: {
    h2: string
    h3: string
    home: string
    metodology: string
    history: string
    cumbia: string
    currulao: string
    pasillo: string
    joropo: string
    work: string
    galery: string
    resume: string
    resources: string
    quote: string
    footer: string
  };
}

interface NavigationItems {
  id: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
  href: string;
}

export function Navigation({ className, dict }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const path = usePathname();
  
  const toggleNavigation = () => setIsOpen(!isOpen);
  const pathLocale = path.split("/")[1];

  // Función para verificar si la ruta actual está activa
  const isActiveRoute = (href: string) => {
    if (href === "/") {
      // Para la ruta raíz, verificar si estamos en /{locale} o /{locale}/
      return path === "/" || path.match(/^\/[a-z]{2}\/?$/);
    }
    // Para otras rutas, verificar si coinciden con /{locale}{href}
    return path.endsWith(href) || path.includes(href);
  };

  // Función para cambiar el idioma
  const changeLanguage = (language: string) => {
    if (language === pathLocale) return

    const pathWithoutLocale = path.replace(/^\/[a-z]{2}\/?/, "");
    
    // Forzar recarga completa para evitar cache
    const newUrl = `/${language}/${pathWithoutLocale}`;
    
    // Usar window.location para forzar una recarga completa
    window.location.href = newUrl;
  }

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        variant="outline"
        size="icon"
        className={cn(
          "fixed top-4 left-4 z-50 md:hidden bg-background/90 backdrop-blur-sm transition-all duration-300",
          isOpen ? "translate-x-56" : "translate-x-0"
        )}
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
        <div className="h-full flex flex-col overflow-y-auto">
          <div className="p-6 flex-1">
            <div className="mb-8">
              <h2 className="font-playfair text-xl font-semibold text-primary mb-2">
                {dict.h2}
              </h2>
              <h3 className="font-playfair text-lg text-foreground">
              {dict.h3}
              </h3>
            </div>

            <ul className="space-y-2">
              {navigationItems.map((item: NavigationItems) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group",
                      isActiveRoute(item.href)
                        ? "bg-primary text-gray-100 shadow-sm"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    )}
                  >
                    <item.icon className="h-5 w-5 transition-transform group-hover:scale-110" />
                    <span className="font-medium">
                      {dict[item.id as keyof typeof dict]}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Language Toggle - Compact */}
            <div className="pt-4 border-t border-border/30 mb-6">
              <div className="flex items-center justify-center gap-2">
                <Select defaultValue={pathLocale} onValueChange={(value) => changeLanguage(value)}>
                  <SelectTrigger className="w-32">
                    <SelectValue placeholder="Idioma" />
                  </SelectTrigger>
                  <SelectContent className="w-32">
                    <SelectItem value="es">
                      ES
                    </SelectItem>
                    <SelectItem value="en">
                      EN
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="text-xs text-muted-foreground text-center">
              <p className="italic mb-1">
                {`"${dict.quote}"`}
              </p>
              <p className="font-medium">{dict.footer}</p>
            </div>
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

const navigationItems = [
  { id: "home", icon: Home, href: "/" },
  { id: "metodology", icon: BookOpen, href: "/metodologia" },
  { id: "history", icon: Clock, href: "/historia" },
  { id: "cumbia", icon: MapPin, href: "/cumbia" },
  { id: "currulao", icon: MapPin, href: "/currulao" },
  { id: "pasillo", icon: MapPin, href: "/pasillo" },
  { id: "joropo", icon: MapPin, href: "/joropo" },
  { id: "work", icon: Music4, href: "/obra" },
  { id: "galery", icon: Images, href: "/galeria" },
  { id: "resume", icon: FileText, href: "/hoja-de-vida" },
  { id: "resources", icon: Download, href: "/recursos" },
];