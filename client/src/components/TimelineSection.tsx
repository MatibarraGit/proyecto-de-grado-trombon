import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Music, Users, BookOpen, Award } from 'lucide-react';

export function TimelineSection() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-4">
            Historia del Trombón en Colombia
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Un recorrido por los momentos clave que definieron la presencia del trombón en nuestra música tradicional
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-border" />

          <div className="space-y-8">
            {timelineEvents.map((event, index) => (
              <div
                key={event.id}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline marker */}
                <div className="absolute left-5 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 top-1/2">
                  <div className={`w-8 h-8 rounded-full ${event.color} flex items-center justify-center shadow-lg z-10`}>
                    <event.icon className="h-4 w-4 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} ml-14 md:ml-0`}>
                  <Card 
                    className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  >
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary" className="text-xs">
                          <Clock className="mr-1 h-3 w-3" />
                          {event.period}
                        </Badge>
                      </div>
                      <CardTitle className="font-playfair text-xl">
                        {event.title}
                      </CardTitle>
                    </CardHeader>
                    
                    <CardContent>
                      <CardDescription className="text-base leading-relaxed">
                        {event.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface TimelineEvent {
  id: string;
  period: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    id: 'colonial',
    period: 'Época Colonial',
    title: 'Influencias Europeas',
    description: 'Llegada de instrumentos de viento europeos y primeras adaptaciones en el territorio colombiano. Los conquistadores traen tradiciones musicales que se mezclan con las indígenas.',
    icon: BookOpen,
    color: 'bg-amber-500',
  },
  {
    id: 'bandas',
    period: 'Siglo XIX',
    title: 'Ritmos Tradicionales',
    description: 'Empiezan a proliferar los ritmos como la cumbia y currulao en la costa atlántica y pacífica, el bambuco y pasillo en la región andina, y el joropo en la Orinoquía.',
    icon: Users,
    color: 'bg-blue-500',
  },
  {
    id: 'clasico',
    period: 'Siglo XX Temprano',
    title: 'Aportes Clásicos',
    description: 'El trombón gana protagonismo en la música clásica y contemporánea: Beethoven, Berlioz y Britten lo utilizan de manera expresiva en sus obras.',
    icon: Music,
    color: 'bg-green-500',
  },
  {
    id: 'folclorico',
    period: 'Siglo XX-XXI',
    title: 'Integración Folclórica',
    description: 'En Colombia, aunque el trombón no es tradicionalmente protagonista en los ritmos patrimoniales, ha comenzado a tener mayor presencia en agrupaciones modernas, bandas sinfónicas y fusiones contemporáneas.',
    icon: Award,
    color: 'bg-purple-500',
  },
];