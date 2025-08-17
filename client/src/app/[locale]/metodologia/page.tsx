import { Target } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getDictionary } from '@/app/i18n/dictionary';

const Metodologia = async ({ params: { locale } }: { params: { locale: string } }) => {
  const dict = await getDictionary(locale as 'en' | 'es', 'metodology');

  return (
    <main className="md:ml-72">
      {/* Hero Section */}
      <section className="relative h-64 bg-gradient-accent text-white overflow-hidden">
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
        <div className="max-w-6xl mx-auto space-y-16">
          
          {/* Research Objectives */}
          <section>
            <h2 className="font-playfair text-3xl font-bold text-center mb-12">
              {dict.researchObjectives.title}
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <Card className='lg:col-span-2'>
                <CardHeader>
                  <CardTitle className="font-playfair text-xl flex items-center gap-2">
                    <Target className="h-5 w-5 text-primary" />
                    {dict.researchObjectives.generalObjectives.subtitle}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3" >
                    {dict.researchObjectives.generalObjectives.items.map((item: any, index: number) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <div>
                          <p className="text-lg leading-relaxed">
                            {item.description}
                          </p>

                          {item.movements && (
                            <div className='flex flex-col my-2 text-lg'> 
                              {item.movements.map((movement: string, movIndex: number) => (
                                <span key={movIndex}>{movement}</span>
                              ))}
                            </div>
                          )}

                          {item.conclusion && (
                            <p className="text-lg leading-relaxed">
                              {item.conclusion}
                            </p>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                  
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-playfair text-xl flex items-center gap-2">
                    <Target className="h-5 w-5 text-accent" />
                    {dict.researchObjectives.specificObjectives.subtitle}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {dict.researchObjectives.specificObjectives.items.map((item: string, index: number) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
};

export default Metodologia;