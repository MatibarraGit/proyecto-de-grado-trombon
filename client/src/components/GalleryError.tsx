"use client";

import { useCallback, useEffect, useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { ImageOff, RefreshCw } from 'lucide-react';

import { Button } from '@/components/ui/button';

const MAX_AUTO_RETRIES = 2;
const AUTO_RETRY_DELAY_MS = 2500;

/**
 * Contador a nivel de modulo (no de estado): el componente se vuelve a montar
 * en cada refresh fallido, asi que un useState se reiniciaria y los reintentos
 * automaticos serian infinitos. El modulo se resetea solo si se recarga la
 * pagina entera, que es justo cuando tiene sentido volver a intentarlo.
 */
let autoRetriesUsed = 0;

export interface GalleryErrorCopy {
  title: string;
  description: string;
  retry: string;
  retrying: string;
}

export default function GalleryError({ copy }: { copy: GalleryErrorCopy }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [autoRetryScheduled, setAutoRetryScheduled] = useState(false);

  const retry = useCallback(() => {
    startTransition(() => router.refresh());
  }, [router]);

  useEffect(() => {
    if (autoRetriesUsed >= MAX_AUTO_RETRIES) return;

    setAutoRetryScheduled(true);
    const timeoutId = setTimeout(() => {
      autoRetriesUsed += 1;
      retry();
    }, AUTO_RETRY_DELAY_MS);

    return () => clearTimeout(timeoutId);
  }, [retry]);

  const busy = isPending || autoRetryScheduled;

  return (
    <main className="min-h-screen bg-background md:ml-72 flex items-center justify-center px-6 py-20">
      <div className="max-w-md text-center" role="status" aria-live="polite">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
          <ImageOff className="h-8 w-8 text-muted-foreground" />
        </div>
        <h1 className="font-playfair text-2xl font-bold text-foreground mb-3">
          {copy.title}
        </h1>
        <p className="text-muted-foreground mb-8">{copy.description}</p>
        <Button onClick={retry} disabled={busy} className="gap-2">
          <RefreshCw className={busy ? 'animate-spin' : undefined} />
          {busy ? copy.retrying : copy.retry}
        </Button>
      </div>
    </main>
  );
}
