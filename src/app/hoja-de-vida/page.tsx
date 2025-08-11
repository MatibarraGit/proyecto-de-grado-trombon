"use client"

import { useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ShowPDFButton } from "@/components/ShowPDFButton";

const CV_UPDATED_PATH = "/assets/hoja-de-vida-actualizada.pdf";
const CV_OLD_PATH = "/assets/hoja-de-vida-anterior.pdf";

const setMetaTag = (name: string, content: string) => {
  let tag = document.querySelector(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
};

const setCanonical = (href: string) => {
  let link = document.querySelector("link[rel=canonical]") as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.href = href;
};

const HojaDeVida = () => {
  useEffect(() => {
    document.title = "Hoja de Vida | El Trombón en el Folclor Colombiano";
    setMetaTag(
      "description",
      "Hoja de Vida: consulta la versión actualizada y la anterior en formato PDF."
    );
    setCanonical(`${window.location.origin}/hoja-de-vida`);
  }, []);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Hoja de Vida',
    description: 'Página para visualizar la Hoja de Vida (actualizada y anterior) en PDF.',
    url: `${window.location.origin}/hoja-de-vida`,
  };

  return (
    <div className="md:ml-72">
      <header className="px-6 md:px-10 pt-10">
        <h1 className="font-playfair text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
          Hoja de Vida
        </h1>
        <p className="text-muted-foreground mt-2 max-w-2xl">
          Aquí podés consultar y descargar la Hoja de Vida en sus dos versiones: la versión
          actualizada y la versión anterior. Abrí el visor para leerlas en pantalla o usá los enlaces de descarga.
        </p>
      </header>

      <main className="px-6 md:px-10 py-8 grid gap-6 md:gap-8 lg:grid-cols-2">
        <section aria-labelledby="cv-actualizada">
          <Card>
            <CardHeader>
              <CardTitle id="cv-actualizada">Hoja de Vida – Versión Actualizada</CardTitle>
              <CardDescription>
                Documento PDF con la información profesional más reciente.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ShowPDFButton
                title="Hoja de Vida – Versión Actualizada"
                filePath={CV_UPDATED_PATH}
                hoverColorClassName="hover:bg-primary"
                buttonText="Ver hoja de vida (PDF)"
              />
              <div className="text-sm text-muted-foreground">
                <a
                  href={CV_UPDATED_PATH}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 hover:text-foreground"
                  aria-label="Abrir Hoja de Vida actualizada en una nueva pestaña"
                >
                  Abrir en nueva pestaña
                </a>
              </div>
            </CardContent>
          </Card>
        </section>

        <section aria-labelledby="cv-anterior">
          <Card>
            <CardHeader>
              <CardTitle id="cv-anterior">Hoja de Vida – Versión Anterior</CardTitle>
              <CardDescription>
                Documento PDF con la versión previa del currículum.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ShowPDFButton
                title="Hoja de Vida – Versión Anterior"
                filePath={CV_OLD_PATH}
                hoverColorClassName="hover:bg-muted"
                buttonText="Ver hoja de vida (PDF)"
              />
              <div className="text-sm text-muted-foreground">
                <a
                  href={CV_OLD_PATH}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 hover:text-foreground"
                  aria-label="Abrir Hoja de Vida anterior en una nueva pestaña"
                >
                  Abrir en nueva pestaña
                </a>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
};

export default HojaDeVida;
