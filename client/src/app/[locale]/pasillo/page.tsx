import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ComparisonTable } from '@/components/ComparisonTable';
import { getDictionary } from '@/app/i18n/dictionary';
import { rhythmBackground } from '@/lib/rhythmColors';

const Pasillo = async ({ params }: { params: Promise<{ locale: string }> }) => {
  const { locale } = await params;
  const dict = await getDictionary(locale as 'en' | 'es', 'pasillo');

  return (
    <main className="min-h-screen md:ml-72">
      {/* Hero Section */}
      <section className="relative h-64 text-white overflow-hidden">
        <div className={`absolute inset-0 ${rhythmBackground.pasillo}`} />
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
              <h4 className='font-semibold'>{dict.historicalDescription.pasillo.title}</h4>

              {dict.historicalDescription.pasillo.paragraphs.map((paragraph: string, index: number) => (
                <p key={index}>
                  {paragraph}
                </p>
              ))}
              
              <h4 className='font-semibold'>{dict.historicalDescription.bambuco.title}</h4>
              {dict.historicalDescription.bambuco.paragraphs.map((paragraph: string, index: number) => (
                <p key={index}>
                  {paragraph}
                </p>
              ))}
              
              <blockquote className="border-l-4 border-pasillo pl-6 italic text-muted-foreground">
                {`"${dict.historicalDescription.quote}"`}
              </blockquote>
            </CardContent>
          </Card>


          {/* Comparison between Pasillo and Bambuco */}
          <Card>
            <CardHeader>
              <CardTitle className="font-playfair text-2xl">{dict.comparisonTable.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <ComparisonTable dict={dict.comparisonTable} />
            </CardContent>
          </Card>


          {/* Tombone Contribution */}
          <Card>
            <CardHeader>
              <CardTitle className="font-playfair text-2xl">{dict.tromboneContribution.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-lg leading-relaxed space-y-4">
              <h4 className='font-semibold'>{dict.tromboneContribution.pasillo.title}</h4>

              <ul>
                {dict.tromboneContribution.pasillo.items.map((item: string, index: number) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>

              <h4 className='font-semibold'>{dict.tromboneContribution.bambuco.title}</h4>

              <ul>
                {dict.tromboneContribution.bambuco.items.map((item: string, index: number) => (
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

export default Pasillo;