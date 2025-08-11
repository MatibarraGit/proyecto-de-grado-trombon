import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Joropo = () => {
  return (
    <main className="min-h-screen md:ml-72">
      {/* Hero Section */}
      <section className="relative h-64 bg-gradient-colombia-green text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 h-full flex items-center px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
              Joropo
            </h1>
            <p className="text-xl opacity-90">
              Orinoquía - El espíritu del llano en nuevas dimensiones sonoras
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
                Este tipo musical se desarrolló durante la colonia con tradiciones hispano criollas con leves
                influencias africanas, es de ritmo rápido también con un poco de mezcla con el vals, su canto
                es llamado copla, sus instrumentos protagónicos son el arpa, el cuatro y un tipo de maraca llamada capacho.
              </p>

              <p>
                En este tipo de música se realizan enfrentamientos musicales donde
                predomina el canto, estas competencias son denominadas contrapunteo. En la Orinoquia la
                voz joropo es significado de baile y fiesta.
              </p>

              <p>
                La danza del joropo es vigorosa y exigente. Suele ejecutarse en pareja, con pasos cortos y rápidos que imitan el trote de los caballos, simbolizando así el vínculo entre el campesino y la naturaleza. En muchas versiones, los bailarines también realizan zapateos enérgicos que refuerzan el carácter festivo y tribal del ritmo.
              </p>
              
              <blockquote className="border-l-4 border-colombia-green pl-6 italic text-muted-foreground">
                {`"El joropo con trombón es como el viento que cruza los llanos: mantiene su 
                fuerza ancestral pero abraza nuevos horizontes sonoros."`}
              </blockquote>
            </CardContent>
          </Card>

          {/* Musical Characteristics */}
          <Card>
            <CardHeader>
              <CardTitle className="font-playfair text-2xl">Características Musicales</CardTitle>
            </CardHeader>
            <CardContent>
              <ul>
                <li>• Ritmo rápido y sincopado, con fuerte presencia del 3/4 y 6/8 en la métrica musical.</li>
                <li>• Copla improvisada como forma de expresión lírica.</li>
                <li>• Contrapunteo vocal entre intérpretes, que demuestra ingenio y dominio de la tradición oral.</li>
                <li>• Danza zapateada con gran fuerza rítmica, ejecutada en pareja.</li>
                <li>• Carácter festivo, alegre y combativo, asociado a la vida rural y las celebraciones comunitarias.</li>
                <li>• Contenido narrativo en las letras, que hablan del paisaje, el ganado, el amor y el orgullo regional.</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-playfair text-2xl">Acerca del Joropo</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className='font-semibold mb-2'>
                    Instrumentación
                  </h4>
                  <ul>
                    <li>• Arpa llanera o bandola</li>
                    <li>• Cuatro llanero</li>
                    <li>• Maracas (del tipo capacho)</li>
                  </ul>
                </div>

                <div>
                  <h4 className='font-semibold mb-2'>
                    Variantes
                  </h4>
                  <ul>
                    <li>• Joropo Llanero</li>
                    <li>• Joropo Central</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contribution of the Trombone */}
          <Card>
            <CardHeader>
              <CardTitle className="font-playfair text-2xl">Aporte del Trombón</CardTitle>
            </CardHeader>
            <CardContent className="text-lg leading-relaxed">
              <ul>
                <li>• Ausencia histórica: En sus raíces campesinas, el trombón no estuvo presente en el joropo tradicional. La instrumentación se limitaba a arpa, cuatro y maracas.</li>
                <li>• Limitaciones técnicas: El formato original no ofrecía espacios ni arreglos para instrumentos de viento-metal por su naturaleza acústica e íntima.</li>
                <li>• Potencial contemporáneo: En la actualidad, el trombón puede incorporarse en arreglos sinfónicos y bandas llaneras modernas para enriquecer la sonoridad del joropo.</li>
                <li>• Aporte expresivo: Su capacidad para producir líneas líricas y explosivas lo convierte en un excelente vehículo de dramatismo melódico dentro de obras con base joropera.</li>
                <li>• Propuesta sinfónica: Se plantea la inclusión del trombón en composiciones como parte de la reinterpretación de este ritmo en clave orquestal, manteniendo el espíritu festivo pero ampliando el color instrumental.</li>
                <li>• Diálogo instrumental: El trombón puede entablar contrapuntos con el arpa y el cuatro, imitando el contrapunteo vocal, lo que permite enriquecer los juegos tímbricos en una banda sinfónica.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default Joropo;