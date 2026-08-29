import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getDictionary } from '@/app/i18n/dictionary';
import { rhythmBackground } from '@/lib/rhythmColors';

const Joropo = async ({ params }: { params: Promise<{ locale: string }> }) => {
  const { locale } = await params;
  const dict = await getDictionary(locale as 'en' | 'es', 'joropo');

  return (
    <main className="min-h-screen md:ml-72">
      {/* Hero Section */}
      <section className="relative h-64 text-white overflow-hidden">
        <div className={`absolute inset-0 ${rhythmBackground.joropo}`} />
        <div className="relative z-10 h-full flex items-center px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
              {dict.heroSection.title}
            </h1>
            <p className="text-xl opacity-90">
              {dict.heroSection.description}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="py-16 px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Historical Description */}
          <Card>
            <CardHeader>
              <CardTitle className="font-playfair text-2xl">{dict.historicalDescription.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-lg leading-relaxed">
              {dict.historicalDescription.paragraphs.map((paragraph: string, index: number) => (
                <p key={index}>
                  {paragraph}
                </p>
              ))}
              
              <blockquote className="border-l-4 border-joropo pl-6 italic text-muted-foreground">
                {`"${dict.historicalDescription.quote}"`}
              </blockquote>
            </CardContent>
          </Card>

          {/* Musical Characteristics */}
          <Card>
            <CardHeader>
              <CardTitle className="font-playfair text-2xl">{dict.musicalCharacteristics.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul>
                {dict.musicalCharacteristics.items.map((item: string, index: number) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-playfair text-2xl">{dict.aboutJoropo.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className='font-semibold mb-2'>
                    {dict.aboutJoropo.instrumentation.title}
                  </h4>
                  <ul>
                    {dict.aboutJoropo.instrumentation.items.map((item: string, index: number) => (
                      <li key={index}>• {item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className='font-semibold mb-2'>
                    {dict.aboutJoropo.variants.title}
                  </h4>
                  <ul>
                    {dict.aboutJoropo.variants.items.map((item: string, index: number) => (
                      <li key={index}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contribution of the Trombone */}
          <Card>
            <CardHeader>
              <CardTitle className="font-playfair text-2xl">{dict.tromboneContribution.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-lg leading-relaxed">
              <ul>
                {dict.tromboneContribution.items.map((item: string, index: number) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default Joropo;