import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Currulao = () => {
  return (
    <main className="min-h-screen md:ml-72">
      {/* Hero Section */}
      <section className="relative h-64 bg-gradient-secondary text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 h-full flex items-center px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
              Currulao
            </h1>
            <p className="text-xl opacity-90">
              Costa Pacífica - La ancestralidad africana en sonoridad moderna
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
                El origen de la palabra currulao está estrechamente relacionado  a cunuano que se refiere al tipo de tambor llamado cununo, importante instrumento a la hora de hablar de ritmos de la
                región pacífica.
              </p>

              <p>
                Es un ritmo bandera dentro de la población afro colombiana también influenciado por las
                comunidades negras esclavizadas en Latinoamérica, quienes traían consigo tradiciones de
                santería y ritos religiosos, es por ello que quienes lo interpretan como parte de su cultura le
                atribuyen propiedades ancestrales, es como una especie de ritual.
              </p>

              <p>
                Se acompaña por una danza tradicional que lleva el mismo nombre (currulao).
              </p>
              
              <blockquote className="border-l-4 border-secondary pl-6 italic text-muted-foreground">
                {`"El currulao con trombón es el encuentro de dos mundos sonoros: la ancestralidad 
                africana y la modernidad instrumental, creando nuevas formas de expresión cultural."`}
              </blockquote>
            </CardContent>
          </Card>


          {/* Musical Characteristics */}
          <Card>
            <CardHeader>
              <CardTitle className="font-playfair text-2xl">Características del Currulao</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3 text-lg">Instrumentación Tradicional</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Marimba indígena</li>
                    <li>• Bombo (tambor grave)</li>
                    <li>• Cununo (tambor agudo)</li>
                    <li>• Guasá (idiófonos)</li>
                    <li>• Voces (coro responsorial)</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-3 text-lg">Variantes</h3>
                  <p>Al igual que la cumbia hay de dos tipos:</p>
                  <ul className='mt-2 space-y-2 text-muted-foreground'>
                    <li>• La Juga</li>
                    <li>• El Berejú</li>
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
              <p>
                El currulao y la cumbia propios de las zonas costeras colombianas se caracterizaron por
                su rapidez e interesante combinación de percusiones con instrumentos de viento.
                Aunque en este caso el protagónico tampoco se lo lleva el trombón es un importante
                aporte para su posterior inclusión dentro de los ritmos tratados, pues su unión a nuestra
                tradición se da o se abre por las zonas que se desarrollan a orillas del mar.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default Currulao;