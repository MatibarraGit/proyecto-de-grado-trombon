import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AudioPlayer } from '@/components/AudioPlayer';
import { ShowPDFButton } from '@/components/ShowPDFButton';

const Obra = () => {
  return (
    <main className="md:ml-72">
      {/* Hero Section */}
      <section className="relative h-64 bg-gradient-accent text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 h-full flex items-center px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
              Metodología de Investigación
            </h1>
            <p className="text-xl opacity-90">
              Diseño y enfoque del estudio sobre el trombón en el folclor colombiano
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="py-16 px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          

          {/* Suite Structure Diagram */}
          <section>
            <h2 className="font-playfair text-3xl font-bold text-center mb-12">
              Estructura de la Suite: Tres Movimientos
            </h2>
            
            <div className="grid grid-cols-1  xl:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-accent">I</span>
                  </div>
                  <CardTitle className="font-playfair text-xl">Confusión</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground mb-4">
                    Primer movimiento que explora la búsqueda de identidad sonora entre 
                    tradición y modernidad en el pasillo colombiano.
                  </p>
                  
                  <AudioPlayer 
                    title="Movimiento I - Confusión"
                    description="Pasillo para trombón y banda"
                    audioPath="/assets/SUITE PARA TROMBON Y BANDA MOV.1 CONFUSION.mp3"
                    compact={true}
                    progressColor="bg-red-500"
                  />
                  
                  <ShowPDFButton
                   title="Movimiento I - Confusión"
                   filePath="/assets/SUITE PARA TROMBON Y BANDA opus 1. 1er mov(confusión).pdf"
                   hoverColorClassName="hover:bg-accent"
                   buttonText="Ver partitura (PDF)"
                  />
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-primary">II</span>
                  </div>
                  <CardTitle className="font-playfair text-xl">Conciencia</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground mb-4">
                    Segundo movimiento que representa el despertar y la claridad 
                    en la fusión de elementos musicales diversos.
                  </p>
                  
                  <AudioPlayer 
                    title="Movimiento II - Conciencia"
                    description="Cumbia para trombón y banda"
                    audioPath="/assets/SUITE PARA TROMBON Y BANDA MOV.2 CONCIENCIA.mp3"
                    compact={true}
                    progressColor="bg-yellow-500"
                  />

                  <ShowPDFButton
                   title="Movimiento II - Conciencia"
                   filePath="/assets/SUITE PARA TROMBON Y BANDA opus 1. 2do mov.(conciencia).pdf"
                   hoverColorClassName="hover:bg-primary"
                   buttonText="Ver partitura (PDF)"
                  />
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-secondary">III</span>
                  </div>
                  <CardTitle className="font-playfair text-xl">Renacer</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground mb-4">
                    Movimiento final que simboliza la renovación y transformación 
                    del folclor tradicional hacia nuevas expresiones.
                  </p>
                  
                  <AudioPlayer 
                    title="Movimiento III - Renacer"
                    description="Currulao para trombón y banda"
                    audioPath="/assets/SUITE PARA TROMBON Y BANDA MOV.3 RENACER.mp3"
                    compact={true}
                    progressColor="bg-blue-500"
                  />
                  
                  <ShowPDFButton
                   title="Movimiento III - Renacer"
                   filePath="/assets/SUITE PARA TROMBON Y BANDA opus1.3er mov (renacer).pdf"
                   hoverColorClassName="hover:bg-blue-500"
                   buttonText="Ver partitura (PDF)"
                  />
                </CardContent>
              </Card>
            </div>
          </section>

        </div>
      </div>
    </main>
  )
}

export default Obra;