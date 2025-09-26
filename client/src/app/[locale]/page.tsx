import { getDictionary } from '../i18n/dictionary';
import { HeroSection } from '@/components/HeroSection';
import { TimelineSection } from '@/components/TimelineSection';
import { RhythmCard } from '@/components/RhythmCard';

// Definir tipos para los ritmos
type RhythmId = 'cumbia' | 'currulao' | 'pasillo' | 'joropo';
type ColorScheme = 'primary' | 'secondary' | 'accent' | 'colombia-green';

interface Rhythm {
  id: RhythmId;
  colorScheme: ColorScheme;
}

interface RhythmData {
  title: string;
  region: string;
  description: string;
  href: string;
}

interface RhythmsDictionary {
  [key: string]: RhythmData;
}

export default async function Index ({ params }: { params: Promise<{ locale: "es" | "en" }> }) {
  const lang = (await params).locale;
  const dictionary = (await getDictionary(lang, 'index'));
  const rhythmsDictionary = dictionary.rhythmsSection.rhythms;
  const movementArray = Object.values(dictionary.methodologySection.movements);
  
  return (
    <main className="min-h-screen md:ml-72">
      {/* Hero Section */}
      <HeroSection heroSectionDictionary={dictionary.heroSection} />

      {/* Timeline Section */}
      <TimelineSection timelineDictionary={dictionary.timelineSection} />
      
      {/* Rhythms Section */}
      <section className="py-16 px-6 bg-muted/30" id='RhythmsSection'>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-4">
              {dictionary.rhythmsSection.title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {dictionary.rhythmsSection.description}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {rhythms.map((rhythm, index) => {
              const rhythmData = (rhythmsDictionary as RhythmsDictionary)[rhythm.id];
              const colorScheme = rhythm.colorScheme as ColorScheme;
              return (
                <div key={index} className="animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <RhythmCard 
                    title={rhythmData.title}
                    region={rhythmData.region}
                    description={rhythmData.description}
                    href={rhythmData.href}
                    colorScheme={colorScheme}
                    lang={lang}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* Methodology Preview */}
      <section className="py-16 px-6 bg-gradient-sunset text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
            {dictionary.methodologySection.title}
          </h2>
          <p className="text-lg mb-8 opacity-90">
            {dictionary.methodologySection.description1}
            <strong>{dictionary.methodologySection.description2}</strong>
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {movementArray.map((movement: any, index: number) => (
              <div key={movement.title} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold mb-2">{index + 1}</div>
                <h3 className="font-playfair text-xl font-semibold mb-2">{movement.title}</h3>
                <p className="text-sm opacity-80">
                  {movement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

const rhythms: Rhythm[] = [
  {
    id: 'cumbia',
    colorScheme: 'primary',
  },
  {
    id: 'currulao',
    colorScheme: 'secondary',
  },
  {
    id: 'pasillo',
    colorScheme: 'accent',
  },
  {
    id: 'joropo',
    colorScheme: 'colombia-green',
  },
];