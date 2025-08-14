import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Cumbia = () => {
  return (
    <main className="min-h-screen md:ml-72">
      {/* Hero Section */}
      <section className="relative h-64 bg-gradient-primary text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 h-full flex items-center px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
              Cumbia
            </h1>
            <p className="text-xl opacity-90">
              Costa Atlántica - El ritmo que conquistó el corazón de Colombia
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
              <CardTitle className="font-playfair text-2xl">Historia y Contexto Cultural</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-lg leading-relaxed">
              <p>
                {`La cumbia, cuyo nombre proviene de la voz "cumbancha", es tal vez el ritmo más representativo e importante de la región Atlántica. Nacida de la fusión entre la cadencia africana, los sonidos monótonos indígenas y el carácter festivo de la costa, la cumbia es símbolo nacional reconocido incluso fuera de Colombia.`}
              </p>

              
              <blockquote className="border-l-4 border-primary pl-6 italic text-muted-foreground">
                {`"La cumbia con trombón representa la evolución natural de nuestras tradiciones, donde cada instrumento aporta su voz al coro ancestral de la Costa Atlántica."`}
              </blockquote>
            </CardContent>
          </Card>


          {/* Musical Characteristics */}
          <Card>
            <CardHeader>
              <CardTitle className="font-playfair text-2xl">Características Musicales</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3 text-lg">Tipos Principales</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Cumbia moderna: además de los instrumentos tradicionales incluye el canto (contando historias de vivencias
                      costeñas)</li>
                    <li>• Cumbia clásica: caracterizada por la ausencia de voces y el protagonismo de los instrumentos, sobretodo de la guacharaca</li> 
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-3 text-lg">Rol del Trombón</h3>
                  <p>
                    El trombón encontró su lugar en la cumbia durante el siglo XX, cuando las 
                    bandas pelayeras comenzaron a incorporar instrumentos de viento metal para 
                    enriquecer la sonoridad tradicional. Su timbre grave y expresivo complementa 
                    perfectamente los patrones rítmicos ancestrales, aportando profundidad armónica 
                    y melódica al conjunto.
                  </p>
                  
                  <p>
                    En la interpretación contemporánea de la cumbia, el trombón desempeña roles 
                    tanto melódicos como armónicos, dialogando con la gaita, el acordeón y la 
                    percusión para crear texturas sonoras únicas que mantienen la esencia 
                    folclórica mientras abrazan la modernidad instrumental.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default Cumbia;