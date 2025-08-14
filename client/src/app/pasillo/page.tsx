import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ComparisonTable } from '@/components/ComparisonTable';

const Pasillo = () => {
  return (
    <main className="min-h-screen md:ml-72">
      {/* Hero Section */}
      <section className="relative h-64 bg-gradient-accent text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 h-full flex items-center px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
              Pasillo y Bambuco
            </h1>
            <p className="text-xl opacity-90">
              Región Andina - La melancolía y alegría de nuestras montañas
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
              <h4 className='font-semibold'>Pasillo</h4>

              <p>
                El pasillo es uno de los ritmos nacionales más recientes, ya que surgió en la época independentista, en contraste con otros ritmos que se desarrollaron durante la colonia. Su base musical proviene del vals austriaco, mezclado con danzas criollas del interior de Colombia.
              </p>
              
              <p>
                Inicialmente se interpretaba en salones, principalmente con piano, pero posteriormente se popularizó en sectores más humildes al incluir instrumentos como la guitarra, el tiple y la bandola. Esta transición le otorgó al pasillo un carácter más festivo y dinámico, convirtiéndolo en un ritmo rápido y técnico que representa desafíos tanto para músicos como bailarines.
              </p>
              
              <h4 className='font-semibold'>Bambuco</h4>
              <p>
                El bambuco es considerado el ritmo más representativo de la región andina colombiana. A diferencia del pasillo, su ejecución suele estar a cargo de pequeñas agrupaciones (2 o 3 músicos) y se acompaña con instrumentos como la guitarra, el tiple, e incluso la flauta en algunas versiones.
              </p>

              <p>
                Este ritmo, profundamente campesino, es el resultado de una rica mezcla racial, siendo uno de los emblemas del folclor nacional, aunque no tan conocido fuera del país. El sanjuanero, por ejemplo, es una derivación del bambuco. A lo largo de la historia, el bambuco ha tenido contacto con ritmos como la habanera cubana, lo que evidencia el diálogo entre culturas en su evolución.
              </p>
              
              <blockquote className="border-l-4 border-accent pl-6 italic text-muted-foreground">
                {`"En el pasillo y bambuco, el trombón canta las historias de nuestros pueblos, 
                sus alegrías y nostalgias, sus fiestas y remembranzas."`}
              </blockquote>
            </CardContent>
          </Card>


          {/* Comparison between Pasillo and Bambuco */}
          <Card>
            <CardHeader>
              <CardTitle className="font-playfair text-2xl">Pasillo vs Bambuco</CardTitle>
            </CardHeader>
            <CardContent>
              <ComparisonTable />
            </CardContent>
          </Card>


          {/* Tombone Contribution */}
          <Card>
            <CardHeader>
              <CardTitle className="font-playfair text-2xl">Aporte del Trombón</CardTitle>
            </CardHeader>
            <CardContent className="text-lg leading-relaxed space-y-4">
              <h4 className='font-semibold'>Trombón en el Pasillo</h4>

              <ul>
                <li>• Participación histórica: No formaba parte de las agrupaciones originales. El pasillo se tocaba principalmente con piano, guitarra, tiple y bandola.</li>
                <li>• Protagonismo actual: En esta tesis presentamos el movimiento “Confusión (Pasillo)”, en la que proponemos al trombón como instrumento central.</li>
                <li>• Desafío técnico: Se busca una línea melódica lírica y explosiva que permita al trombón destacarse sin opacar la banda sinfónica.</li>
                <li>• Razón de inclusión: Reivindicar el trombón como parte del repertorio nacional mediante una reinterpretación del pasillo fiestero en formato sinfónico.</li>
              </ul>

              <h4 className='font-semibold'>Trombón en el Bambuco</h4>

              <ul>
                <li>• Desafío estético: Integrarlo implica equilibrar la potencia del trombón con la esencia melódica del bambuco.</li>
                <li>• Adaptación sinfónica: La banda sinfónica permite una expansión instrumental donde el trombón puede jugar un papel protagónico.</li>
                <li>• Justificación cultural: Los movimientos de internacionalización y contacto con músicas del Caribe, México y Suramérica abrieron camino a instrumentos de viento.</li>
                <li>• Propuesta compositiva: Se plantea el trombón como instrumento lírico que dialoga con la orquesta, inspirado en el concerto grosso.</li>
                <li>• Impacto expresivo: El trombón puede aportar emotividad, dinamismo y profundidad al repertorio andino colombiano, sin sacrificar identidad.</li>
              </ul>

            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default Pasillo;