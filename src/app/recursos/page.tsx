import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { BookOpen, ExternalLink, FileText, Globe, GraduationCap, Newspaper } from 'lucide-react';
import { referencesData } from '@/data/referencesData';

const Recursos = () => {
  // Función para obtener el icono según el tipo
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'book':
        return <BookOpen className="h-4 w-4" />;
      case 'article':
        return <FileText className="h-4 w-4" />;
      case 'journal':
        return <Newspaper className="h-4 w-4" />;
      case 'thesis':
        return <GraduationCap className="h-4 w-4" />;
      case 'web':
        return <Globe className="h-4 w-4" />;
      default:
        return <FileText className="h-4 w-4" />;
    }
  };

  // Función para obtener el color del badge según el tipo
  const getBadgeVariant = (type: string) => {
    switch (type) {
      case 'book':
        return 'secondary';
      case 'article':
        return 'outline';
      case 'journal':
        return 'default';
      case 'thesis':
        return 'destructive';
      case 'web':
        return 'outline';
      default:
        return 'secondary';
    }
  };

  // Función para formatear autores
  const formatAuthors = (authors?: string[]) => {
    if (!authors || authors.length === 0) return '';
    return authors.join(', ');
  };

  // Función para formatear la información de publicación
  const formatPublicationInfo = (item: { year?: string; publisher?: string; location?: string; journal?: string; volume?: string }) => {
    const parts = [];
    
    if (item.year) parts.push(item.year);
    if (item.publisher) parts.push(item.publisher);
    if (item.location) parts.push(item.location);
    if (item.journal) parts.push(item.journal);
    if (item.volume) parts.push(item.volume);
    
    return parts.join(', ');
  };

  return (
    <main className="md:ml-72">
      {/* Hero Section */}
      <section className="relative h-64 bg-gradient-to-br from-slate-900 to-slate-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 h-full flex items-center px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
              Recursos y Referencias
            </h1>
            <p className="text-xl opacity-90">
              Bibliografía, fuentes y recursos utilizados en la investigación
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="py-16 px-6">
        <div className="max-w-4xl mx-auto space-y-12">

          {/* Referencias Bibliográficas */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <FileText className="h-6 w-6 text-primary" />
              <h2 className="font-playfair text-3xl font-bold">Referencias Bibliográficas</h2>
            </div>
            
            <div className="space-y-6">
              {referencesData.references.map((reference) => (
                <Card key={reference.id}>
                  <CardContent className="pt-6">
                    <div className="space-y-3">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg">{reference.title}</h3>
                          {reference.authors && (
                            <p className="text-muted-foreground">{formatAuthors(reference.authors)}</p>
                          )}
                          {formatPublicationInfo(reference) && (
                            <p className="text-sm mt-2">{formatPublicationInfo(reference)}</p>
                          )}
                        </div>
                        <Badge variant={getBadgeVariant(reference.type)} className="flex items-center gap-1">
                          {getTypeIcon(reference.type)}
                          {reference.type === 'article' ? 'Artículo' : 
                           reference.type === 'book' ? 'Libro' :
                           reference.type === 'journal' ? 'Revista' :
                           reference.type === 'thesis' ? 'Tesis' :
                           reference.type === 'web' ? 'Web' : 'Referencia'}
                        </Badge>
                      </div>
                      <Separator />
                      {reference.description && (
                        <p className="text-sm text-muted-foreground">{reference.description}</p>
                      )}
                      {reference.url && (
                        <Button variant="outline" size="sm" className="mt-2">
                          <a href={reference.url} target="_blank" rel="noopener noreferrer" className='flex items-center'>
                            <ExternalLink className="h-4 w-4 mr-2" />
                            <span>Ver fuente</span>
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Bibliografía */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <BookOpen className="h-6 w-6 text-primary" />
              <h2 className="font-playfair text-3xl font-bold">Bibliografía</h2>
            </div>
            
            <div className="space-y-6">
              {referencesData.bibliography.map((item) => (
                <Card key={item.id}>
                  <CardContent className="pt-6">
                    <div className="space-y-3">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg">{item.title}</h3>
                          {item.authors && (
                            <p className="text-muted-foreground">{formatAuthors(item.authors)}</p>
                          )}
                          {formatPublicationInfo(item) && (
                            <p className="text-sm mt-2">{formatPublicationInfo(item)}</p>
                          )}
                        </div>
                        <Badge variant={getBadgeVariant(item.type)} className="flex items-center gap-1">
                          {getTypeIcon(item.type)}
                          {item.type === 'book' ? 'Libro' :
                           item.type === 'thesis' ? 'Tesis' :
                           item.type === 'web' ? 'Web' :
                           item.type === 'journal' ? 'Revista' : 'Referencia'}
                        </Badge>
                      </div>
                      <Separator />
                      {item.description && (
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      )}
                      {item.url && (
                        <Button variant="outline" size="sm" className="mt-2">
                          <a href={item.url.startsWith('http') ? item.url : `https://${item.url}`} target="_blank" rel="noopener noreferrer" className='flex items-center'>
                            <ExternalLink className="h-4 w-4 mr-2" />
                            <span>Ver fuente</span>
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Estadísticas */}
          <section className="bg-muted/30 rounded-lg p-6">
            <h3 className="font-semibold mb-4">Resumen de Fuentes</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">
                  {referencesData.references.length + referencesData.bibliography.length}
                </div>
                <div className="text-sm text-muted-foreground">Total de fuentes</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">
                  {referencesData.references.filter(r => r.type === 'book').length + 
                   referencesData.bibliography.filter(b => b.type === 'book').length}
                </div>
                <div className="text-sm text-muted-foreground">Libros</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">
                  {referencesData.references.filter(r => r.type === 'article').length}
                </div>
                <div className="text-sm text-muted-foreground">Artículos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">
                  {referencesData.references.filter(r => r.type === 'web').length + 
                   referencesData.bibliography.filter(b => b.type === 'web').length}
                </div>
                <div className="text-sm text-muted-foreground">Recursos web</div>
              </div>
            </div>
          </section>

          {/* Nota sobre referencias */}
          <section className="bg-muted/30 rounded-lg p-6">
            <h3 className="font-semibold mb-3">Nota sobre las Referencias</h3>
            <p className="text-sm text-muted-foreground">
              Esta bibliografía representa una selección de las fuentes más relevantes utilizadas en la investigación sobre el trombón en la música tradicional colombiana. 
              Las referencias incluyen tanto fuentes académicas como recursos digitales que han sido fundamentales para el desarrollo de este proyecto. 
              Para acceder a los textos completos o solicitar información adicional, puede contactar al autor a través de los canales institucionales correspondientes.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
};

export default Recursos;