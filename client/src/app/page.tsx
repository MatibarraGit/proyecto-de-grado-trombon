import { HeroSection } from '@/components/HeroSection';
import { TimelineSection } from '@/components/TimelineSection';
import { RhythmCard } from '@/components/RhythmCard';

const rhythms = [
  {
    title: 'Cumbia',
    region: 'Costa Atlántica',
    description: 'Ritmo emblemático de la región atlántica, que nació fusionando elementos africanos, indígenas y españoles. El trombón aporta profundidad y carácter a esta expresión musical.',	
    colorScheme: 'primary' as const,
    href: '/cumbia',
  },
  {
    title: 'Currulao',
    region: 'Costa Pacífica',
    description: 'Expresión musical del litoral pacífico que combina ancestralidad africana con la sonoridad del trombón, creando un diálogo único entre tradición y modernidad.',
    colorScheme: 'secondary' as const,
    href: '/currulao',
  },
  {
    title: 'Pasillo y Bambuco',
    region: 'Región Andina',
    description: `Géneros representativos de la región andina colombiana donde el trombón ha encontrado un espacio especial para expresar la melancolía y alegría de nuestra montaña.`,
    colorScheme: 'accent' as const,
    href: '/pasillo',
  },
  {
    title: 'Joropo',
    region: 'Orinoquía',
    description: 'Música llanera que con la incorporación del trombón ha ganado nuevas dimensiones sonoras, manteniendo la esencia del trabajo y la vida en los llanos orientales.',
    colorScheme: 'colombia-green' as const,
    href: '/joropo',
  },
];

const Index = () => {
  return (
    <main className="min-h-screen md:ml-72">
      {/* Hero Section */}
      <HeroSection />

      {/* Timeline Section */}
      <TimelineSection />
      
      {/* Rhythms Section */}
      <section className="py-16 px-6 bg-muted/30" id='RhythmsSection'>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ritmos y Regiones
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explora cómo el trombón se ha integrado en los diferentes géneros musicales tradicionales de Colombia
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {rhythms.map((rhythm, index) => (
              <div key={rhythm.title} className="animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <RhythmCard {...rhythm} />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Methodology Preview */}
      <section className="py-16 px-6 bg-gradient-sunset text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
            Elaboración de la Obra
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Una suite en tres movimientos que representa el viaje musical del trombón en Colombia: 
            <strong> Confusión, Conciencia y Renacer</strong>
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {['Confusión', 'Conciencia', 'Renacer'].map((movement, index) => (
              <div key={movement} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold mb-2">{index + 1}</div>
                <h3 className="font-playfair text-xl font-semibold mb-2">{movement}</h3>
                <p className="text-sm opacity-80">
                  {index === 0 && "La búsqueda de identidad musical en un contexto globalizado"}
                  {index === 1 && "El descubrimiento de las raíces y tradiciones propias"}
                  {index === 2 && "La síntesis creativa entre tradición y modernidad"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
