import { MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { historiaData } from '@/data/historiaData';
import { getDictionary } from '@/app/i18n/dictionary';

const Historia = async ({ params }: { params: Promise<{ locale: string }> }) => {
  const { locale } = await params;
  const dict = await getDictionary(locale as 'en' | 'es', 'history');
  const { introduction, introduction2, timelineEvents, trombonColombia } = historiaData;
  
  return (
    <main className="min-h-screen md:ml-72">
      {/* Hero Section */}
      <section className="relative h-64 bg-gradient-primary text-white overflow-hidden">
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
          
          {/* Introduction */}
          <Card>
            <CardHeader>
              <CardTitle className="font-playfair text-2xl">{dict.introduction.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-lg leading-relaxed space-y-4">
              <p>{introduction}</p>
              <p>{introduction2}</p>
            </CardContent>
          </Card>

          {/* Trombon History */}
          <Card>
            <CardHeader>
              <CardTitle className="font-playfair text-2xl">{dict.trombonColombia.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-lg leading-relaxed space-y-4">
              {trombonColombia.map((item) => (
                <div key={item.subtitle} className="flex flex-col gap-2">
                  <h4 className="font-semibold mb-2">{item.subtitle}</h4>
                  <p>{item.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Timeline */}
          <section>
            <h2 className="font-playfair text-3xl font-bold text-center mb-12">
              {dict.timeline.title}
            </h2>
            
            <div className="space-y-8">
              {timelineEvents.map((event, index) => (
                <Card key={index} className="relative ">
                  <div className="absolute left-0 top-6 w-1 h-16 bg-primary rounded-full" />
                  <CardHeader className="pl-8 pb-4">
                    <div className="flex items-center gap-4 mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {event.time}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {event.category}
                      </Badge>

                    </div>
                    <CardTitle className="font-playfair text-xl">
                      <span>
                        {event.title}
                      </span>

                      <div className="mt-2 flex items-center gap-1 text-muted-foreground text-sm">
                        <MapPin className="h-3 w-3" />
                        {event.region}
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pl-8 mt-0">
                    <p className="text-muted-foreground leading-relaxed">{event.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Cultural Areas */}
          {/* <section>
            <h2 className="font-playfair text-3xl font-bold text-center mb-12">
              Áreas Culturales y Adopción Regional
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {culturalAreas.map((area, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="font-playfair text-xl flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      {area.region}
                    </CardTitle>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      {area.period}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="leading-relaxed">{area.description}</p>
                    <div>
                      <h4 className="font-semibold mb-2">Géneros Representativos:</h4>
                      <div className="flex flex-wrap gap-2">
                        {area.characteristics.map((char, charIndex) => (
                          <Badge key={charIndex} variant="outline" className="text-xs">
                            {char}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section> */}

          {/* Notable Figures */}
          {/* <section>
            <h2 className="font-playfair text-3xl font-bold text-center mb-12">
              Figuras Destacadas
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {notableFigures.map((figure, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="font-playfair text-xl flex items-center gap-2">
                      <User className="h-5 w-5 text-primary" />
                      {figure.name}
                    </CardTitle>
                    <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                      <span>{figure.role}</span>
                      <span>{figure.period}</span>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {figure.region}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="leading-relaxed">{figure.contribution}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section> */}

        </div>
      </div>
    </main>
  );
};

export default Historia;