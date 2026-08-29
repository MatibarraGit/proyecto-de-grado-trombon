import { Camera } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

/**
 * Placeholder que Next muestra apenas se hace click en el enlace de la galeria,
 * mientras el server component espera los datos de Strapi.
 *
 * Imita la grilla real (misma altura de fila y misma proporcion de celdas
 * grandes) para que no haya salto de layout cuando llegan las imagenes.
 * A proposito no tiene textos: asi sirve igual en cualquier idioma.
 */
const SKELETON_TILES = [
  'col-span-2 row-span-2',
  'col-span-1 row-span-1',
  'col-span-1 row-span-2',
  'col-span-2 row-span-1',
  'col-span-1 row-span-1',
  'col-span-1 row-span-1',
  'col-span-2 row-span-2',
  'col-span-1 row-span-1',
  'col-span-1 row-span-1',
];

const GaleriaLoading = () => (
  <main
    className="min-h-screen bg-background md:ml-72"
    aria-busy="true"
    aria-live="polite"
  >
    <section className="relative py-20 px-4 md:px-8 lg:px-12 bg-gradient-to-br from-primary/10 via-background to-accent/10">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <Camera className="h-8 w-8 text-primary animate-pulse" />
          <Skeleton className="h-10 w-64 md:h-14 md:w-96" />
        </div>
        <Skeleton className="h-5 w-full max-w-2xl mb-2" />
        <Skeleton className="h-5 w-2/3 max-w-md mb-8" />
        <div className="flex flex-wrap justify-center gap-2">
          {Array.from({ length: 4 }).map((_, index) => (
            <Skeleton key={index} className="h-9 w-24 rounded-full" />
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] grid-flow-dense">
          {SKELETON_TILES.map((tileClass, index) => (
            <Skeleton key={index} className={`${tileClass} h-full w-full rounded-xl`} />
          ))}
        </div>
      </div>
    </section>
  </main>
);

export default GaleriaLoading;
