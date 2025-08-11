export interface Reference {
  id: string;
  type: 'article' | 'book' | 'thesis' | 'web' | 'journal';
  title: string;
  authors?: string[];
  year?: string;
  publisher?: string;
  url?: string;
  journal?: string;
  volume?: string;
  pages?: string;
  description?: string;
}

export interface Bibliography {
  id: string;
  type: 'book' | 'thesis' | 'web' | 'journal';
  title: string;
  authors?: string[];
  year?: string;
  publisher?: string;
  location?: string;
  url?: string;
  description?: string;
}

export interface ReferencesData {
  references: Reference[];
  bibliography: Bibliography[];
}

export const referencesData: ReferencesData = {
  references: [
    {
      id: "ref-1",
      type: "article",
      title: "Los trombones son como motores dentro de la música",
      authors: ["Rojano Ovallos, Catalina"],
      year: "2015",
      journal: "Tendencias",
      description: "Edición Jueves 24 de Septiembre de 2015 - 12:10am"
    },
    {
      id: "ref-2",
      type: "web",
      title: "Música folclórica colombiana",
      authors: ["Vásquez Sandoval, Mónica"],
      year: "2012",
      url: "http://musicafolclorcolombiano.blogspot.com.co/2012/10/musica-folclorica-colombiana.html"
    },
    {
      id: "ref-3",
      type: "journal",
      title: "Revista Colombiana de antropología",
      volume: "Volumen 44, Parte 1"
    },
    {
      id: "ref-4",
      type: "journal",
      title: "Huellas: Revista de la Universidad del Norte",
      volume: "Números 67-75"
    },
    {
      id: "ref-5",
      type: "book",
      title: "Las cien mejores canciones colombianas y sus autores",
      url: "https://books.google.com.co/books?id=KZJaAAAAMAAJ&q=Las+cien+mejores+canciones+colombianas+y+sus+autores+autor+y+a%C3%B1o&dq=Las+cien+mejores+canciones+colombianas+y+sus+autores+autor+y+a%C3%B1o&hl=es&sa=X&ved=0ahUKEwjXibqui5_NAhWENx4KHd2FDbgQ6AEIGjAA"
    },
    {
      id: "ref-6",
      type: "book",
      title: "Breve historia de la música popular costeña",
      url: "https://books.google.com.co/books?id=5d9bAAAAMAAJ&q=Breve+historia+de+la+m%C3%BAsica+popular+coste%C3%B1a&dq=Breve+historia+de+la+m%C3%BAsica+popular+coste%C3%B1a&hl=es&sa=X&ved=0ahUKEwjpyJn6i5_NAhXCHB4KHTL8DhAQ6AEIHDAA"
    },
    {
      id: "ref-7",
      type: "book",
      title: "Arrullos y currulaos: material para abordar el estudio de la música tradicional del pacífico sur colombiano",
      authors: ["Ochoa, Juan", "Convers, Leonor", "Hernández, Oscar"],
      year: "2015",
      url: "https://books.google.com.co/books?id=Z_fwBwAAQBAJ&printsec=frontcover&dq=Arrullos+y+currulao:+material+para+abordar+el+estudio+de+la+m%C3%BAsica+tradicional+del+pac%C3%ADfico+sur+colombiano&hl=es&sa=X&ved=0ahUKEwjG6eyjJ_NAhUDHR4KHb3jAf4Q6AEIHjAA"
    },
    {
      id: "ref-8",
      type: "book",
      title: "El joropo llanero y el joropo central",
      authors: ["Romero, Aldemaro"],
      url: "https://books.google.com.co/books?id=5a8UAQAAIAAJ&q=El+joropo+llanero+y+el+joropo+central&dq=El+joropo+llanero+y+el+joropo+central&hl=es&sa=X&ved=0ahUKEwjfiZqHjZ_NAhUHkx4KHVr0CY0Q6AEIHDAA"
    },
    {
      id: "ref-9",
      type: "book",
      title: "Orígenes históricos del bambuco y Músicos vallecaucanos",
      url: "https://books.google.com.co/books?id=HU9ZAAAAMAAJ&q=Or%C3%ADgenes+hist%C3%B3ricos+del+bambuco+y+M%C3%BAsicos+vallecaucanos&dq=Or%C3%ADgenes+hist%C3%B3ricos+del+bambuco+y+M%C3%BAsicos+vallecaucanos&hl=es&sa=X&ved=0ahUKEwiApIbqjZ_NAhWGqh4KHWi9AowQ6AEIHDAA"
    },
    {
      id: "ref-10",
      type: "web",
      title: "Francisco Javier Ferrer",
    }
  ],

  bibliography: [
    {
      id: "bib-1",
      type: "book",
      title: "Culturas híbridas",
      authors: ["García Canclíni, N."],
      year: "1990",
      publisher: "Paidós Ibérica S.A.",
      location: "Argentina"
    },
    {
      id: "bib-2",
      type: "book",
      title: "Música e identidad en los inicios de la república",
      authors: ["Casas Figueroa, María V."],
      year: "",
      publisher: "Universidad del Valle",
      location: "Colombia"
    },
    {
      id: "bib-3",
      type: "book",
      title: "Música y organología musical en Colombia Pacifico",
      authors: ["Abadía Morales, Guillermo"],
      year: "1993",
      publisher: "Fondo FEN",
      location: "Bogotá"
    },
    {
      id: "bib-4",
      type: "book",
      title: "Música andina occidental: entre pasillos y bambucos",
      authors: ["Franco Duque, Luis Fernando"],
      year: "2005",
      publisher: "Ministerio de Cultura",
      location: "Bogotá"
    },
    {
      id: "bib-5",
      type: "book",
      title: "Sobre la dialéctica entre el golpe corrido y el golpe de seis",
      authors: ["Calderón Sáenz, Claudia"],
      year: "1997",
      location: "Caracas, Venezuela"
    },
    {
      id: "bib-6",
      type: "book",
      title: "Música Llanera",
      authors: ["Rojas Hernández, Carlos"],
      year: "2004",
      publisher: "Ministerio de Cultura",
      location: "Bogotá"
    },
    {
      id: "bib-7",
      type: "book",
      title: "Guía de iniciación al trombón",
      authors: ["Dirección de artes"],
      year: "2003",
      publisher: "Ministerio de Cultura",
      location: "Bogotá"
    },
    {
      id: "bib-8",
      type: "web",
      title: "Harvey Ureña",
      authors: ["Ureña, Harvey"],
      year: "10 de septiembre",
    },
    {
      id: "bib-9",
      type: "web",
      title: "Colombia Aprende",
      url: "colombiaaprende.edu.co"
    },
    {
      id: "bib-10",
      type: "web",
      title: "Razón y Palabra",
    },
    {
      id: "bib-11",
      type: "web",
      title: "Banco de la República Cultural",
      url: "www.banrepcultural.org/node/32439"
    },
    {
      id: "bib-12",
      type: "thesis",
      title: "El jazz y la música colombiana pasillos y porros",
      authors: ["Pardo, Rubén"],
      description: "Tesis de grado"
    }
  ]
}; 