import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AudioPlayer } from '@/components/AudioPlayer';
import { ShowPDFButton } from '@/components/ShowPDFButton';
import { getDictionary } from '@/app/i18n/dictionary';
import { cn } from '@/lib';

const Obra = async ({ params: { locale } }: { params: { locale: string } }) => {
  const dict = await getDictionary(locale as 'en' | 'es', 'work');
  const movements = Object.values(dict.movements)

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

          {/* Suite Structure Diagram */}
          <section>
            <h2 className="font-playfair text-3xl font-bold text-center mb-12">
              {dict.suiteStructure.title}
            </h2>
            
            <div className="grid grid-cols-1  xl:grid-cols-3 gap-8">
              {movements.map((movement: any, index: number) => (
                <Card key={movement.title} className="text-center">
                  <CardHeader>
                    <div className={cn("mx-auto w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4", {
                      "bg-red-500/10": mediaData[index].progressColor === "bg-red-500",
                      "bg-yellow-500/10": mediaData[index].progressColor === "bg-yellow-500",
                      "bg-blue-500/10": mediaData[index].progressColor === "bg-blue-500",
                    })}>
                      <span className={cn(
                        "text-2xl font-bold text-accent", {
                          "text-red-500": mediaData[index].progressColor === "bg-red-500",
                          "text-yellow-500": mediaData[index].progressColor === "bg-yellow-500",
                          "text-blue-500": mediaData[index].progressColor === "bg-blue-500",
                        }
                      )}>
                        {movement.number}
                        </span>
                    </div>
                    <CardTitle className="font-playfair text-xl">{movement.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground mb-4">
                      {movement.description}
                    </p>
                    
                    <AudioPlayer
                      title={movement.audioTitle}
                      description={movement.audioDescription}
                      audioPath={mediaData[index].audioPath}
                      progressColor={mediaData[index].progressColor}
                    />
                    
                    <ShowPDFButton
                    title={movement.pdfTitle}
                    filePath={mediaData[index].filePath}
                    hoverColorClassName={mediaData[index].hoverColorClassName}
                    buttonText={movement.scoreButton}
                    />

                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

        </div>
      </div>
    </main>
  )
}

export default Obra;

const mediaData = [
  {
    audioPath: "/assets/suite-movimiento-1-confusion.mp3",
    progressColor: "bg-red-500",
    filePath: "/assets/suite-movimiento-1-confusion.pdf",
    hoverColorClassName:"hover:bg-red-500"
  },
  {
    audioPath: "/assets/suite-movimiento-2-conciencia.mp3",
    progressColor: "bg-yellow-500",
    filePath: "/assets/suite-movimiento-2-conciencia.pdf",
    hoverColorClassName:"hover:bg-accent"
  },
  {
    audioPath: "/assets/suite-movimiento-3-renacer.mp3",
    progressColor: "bg-blue-500",
    filePath: "/assets/suite-movimiento-3-renacer.pdf",
    hoverColorClassName:"hover:bg-blue-500"
  }
]

