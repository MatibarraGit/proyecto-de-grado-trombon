import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getDictionary } from '@/app/i18n/dictionary';

const Currulao = async ({ params: { locale } }: { params: { locale: string } }) => {
  const dict = await getDictionary(locale as 'en' | 'es', 'currulao');

  return (
    <main className="min-h-screen md:ml-72">
      {/* Hero Section */}
      <section className="relative h-64 bg-gradient-secondary text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
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
              
              <blockquote className="border-l-4 border-secondary pl-6 italic text-muted-foreground">
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3 text-lg">{dict.musicalCharacteristics.traditionalInstrumentation.title}</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    {dict.musicalCharacteristics.traditionalInstrumentation.items.map((item: string, index: number) => (
                      <li key={index}>• {item}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-3 text-lg">{dict.musicalCharacteristics.variants.title}</h3>
                  <p>{dict.musicalCharacteristics.variants.description}</p>
                  <ul className='mt-2 space-y-2 text-muted-foreground'>
                    {dict.musicalCharacteristics.variants.items.map((item: string, index: number) => (
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
              <p>
                {dict.tromboneContribution.content}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default Currulao;