import type { Metadata } from "next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ShowPDFButton } from "@/components/ShowPDFButton";
import { getDictionary } from '@/app/i18n/dictionary';

const CV_UPDATED_PATH = "/assets/hoja-de-vida-actualizada.pdf";
const CV_OLD_PATH = "/assets/hoja-de-vida-anterior.pdf";

export const metadata: Metadata = {
  title: "Hoja de Vida",
  description: "Hoja de Vida: consulta la versión actualizada y la anterior en formato PDF.",
  alternates: {
    canonical: "/hoja-de-vida",
  },
  openGraph: {
    title: "Hoja de Vida",
    description: "Página para visualizar la Hoja de Vida (actualizada y anterior) en PDF.",
    url: "/hoja-de-vida",
    type: "article",
  },
};

const HojaDeVida = async ({ params }: { params: Promise<{ locale: string }> }) => {
  const { locale } = await params;
  const dict = await getDictionary(locale as 'en' | 'es', 'hojaDeVida');
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  const pageUrl = new URL("/hoja-de-vida", siteUrl).toString();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Hoja de Vida',
    description: 'Página para visualizar la Hoja de Vida (actualizada y anterior) en PDF.',
    url: pageUrl,
  };

  return (
    <div className="md:ml-72">
      <header className="px-6 md:px-10 pt-10">
        <h1 className="font-playfair text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
          {dict.title}
        </h1>
        <p className="text-muted-foreground mt-2 max-w-2xl">
          {dict.description}
        </p>
      </header>

      <main className="px-6 md:px-10 py-8 grid gap-6 md:gap-8 lg:grid-cols-2">
        <section aria-labelledby="cv-actualizada">
          <Card>
            <CardHeader>
              <CardTitle id="cv-actualizada">{dict.updated.title}</CardTitle>
              <CardDescription>
                {dict.updated.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ShowPDFButton
                title={dict.updated.title}
                filePath={CV_UPDATED_PATH}
                hoverColorClassName="hover:bg-primary"
                buttonText={dict.actions.viewCV}
              />
              <div className="text-sm text-muted-foreground">
                <a
                  href={CV_UPDATED_PATH}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 hover:text-foreground"
                  aria-label={dict.actions.openUpdatedCV}
                >
                  {dict.actions.openInNewTab}
                </a>
              </div>
            </CardContent>
          </Card>
        </section>

        <section aria-labelledby="cv-anterior">
          <Card>
            <CardHeader>
              <CardTitle id="cv-anterior">{dict.previous.title}</CardTitle>
              <CardDescription>
                {dict.previous.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ShowPDFButton
                title={dict.previous.title}
                filePath={CV_OLD_PATH}
                hoverColorClassName="hover:bg-muted"
                buttonText={dict.actions.viewCV}
              />
              <div className="text-sm text-muted-foreground">
                <a
                  href={CV_OLD_PATH}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 hover:text-foreground"
                  aria-label={dict.actions.openPreviousCV}
                >
                  {dict.actions.openInNewTab}
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
