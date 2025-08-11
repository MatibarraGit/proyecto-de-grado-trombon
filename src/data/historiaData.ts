export interface TimelineEvent {
  time: string;
  title: string;
  description: string;
  category: string;
  region: string;
}

export interface NotableFigure {
  name: string;
  role: string;
  contribution: string;
  period: string;
  region: string;
}

export interface CulturalArea {
  region: string;
  description: string;
  characteristics: string[];
  period: string;
}

export interface TrombonColombiaInfo {
  introduction: string;
  introduction2: string;
  timelineEvents: TimelineEvent[];
  notableFigures: NotableFigure[];
  culturalAreas: CulturalArea[];
  trombonColombia: {
    subtitle: string;
    description: string;
  }[];
}

export const historiaData: TrombonColombiaInfo = {
  introduction: "El trombón es un instrumento de la familia viento-metal que surgió a finales del siglo XV a partir de la forma de la trompeta de vara. Es el único instrumento de dicha familia que puede producir todo el rango de la serie armónica y el efecto natural glisado.",

  introduction2: "Durante el Barroco el trombón fue utilizado en el contexto de la música religiosa y en pequeños ensambles. Su incorporación a la orquesta se dio en el Clasicismo, hacia finales del siglo XVIII, inicialmente en la orquesta de teatro.",

  timelineEvents: [
    {
      time: "Finales del Siglo XV",
      title: "Orígenes Europeos del Trombón",
      description: 'Surge el trombón (trompeta de vara evolucionada). Se le conoce como "sackbut" (Inglaterra), "sacabuche" (España), entre otros. Es el único instrumento de viento-metal capaz de producir glisados naturales.',
      category: "Origen",
      region: "Europa"
    },
    {
      time: "Antes del siglo XVI", 
      title: "Época precolombina",
      description: "Los pueblos indígenas de Colombia ya utilizan la música con funciones sociales y religiosas.",
      category: "Cultura indígena",
      region: "Colombia"
    },
    {
      time: "Siglo XVI", 
      title: "Llegada a las Américas",
      description: "El trombón llega al continente americano a través de las expediciones coloniales españolas y las misiones religiosas. Comienza el mestizaje cultural entre indígenas, africanos y europeos. El folclor colombiano empieza a formarse a partir de esta mezcla.",
      category: "Colonización",
      region: "América"
    },
    {
      time: "Siglo XVII - XVIII",
      title: "Incorporación del Trombón",
      description: "El trombón se usa en música religiosa y pequeños ensambles durante el Barroco. Se convierte en parte de la orquesta teatral durante el Clasicismo, hacia fines del siglo XVIII.",
      category: "Adaptación",
      region: "Colombia"
    },
    {
      time: "Siglo XIX",
      title: "Los ritmos tradicionales colombianos",
      description: "Empiezan a proliferar los ritmos como la cumbia y currulao en la costa atlántica y pacífica, el bambuco y pasillo en la región andina, y el joropo en la Orinoquía.",
      category: "Desarrollo",
      region: "Regiones"
    },
    {
      time: "Mediados del siglo XIX",
      title: "Dificultades con el Trombón",
      description: "A pesar de facilitar los pasajes rápidos, los trombones de válvulas caen en desuso por problemas de afinación. Se retoma el uso del trombón de vara, consolidándose en la orquesta como instrumento de referencia (2 tenores y 1 bajo).",
      category: "Retorno",
      region: "Nacional"
    },
    {
      time: "Siglo XIX - XX", 
      title: "Consolidación",
      description: "Los ritmos colombianos ya están bien diferenciados por región. Instrumentos locales como tambores, guacharaca, arpa, cuatro y capachos dominan cada estilo. El trombón de vara se mantiene como estándar por su mejor sonoridad y precisión.",
      category: "Asentamiento",
      region: "Nacional"
    },
    {
      time: "Mediados del siglo XX", 
      title: "Expansión y Reconocimiento",
      description: "El trombón de pistones aún se usa en bandas y orquestas populares de América Latina y otros países, pero predomina el trombón de vara. El trombón gana protagonismo en la música clásica y contemporánea: Beethoven, Berlioz y Britten lo utilizan de manera expresiva en sus obras.",
      category: "Clasicismo",
      region: "Internacional"
    },
    {
      time: "Era Contemporánea",
      title: "El trombón en la actualidad",
      description: "El trombón es un instrumento versátil y expresivo, con avances en fabricación y diseño. Existen trombones soprano, alto, tenor, tenor-bajo, bajo y contrabajo. El tenor es el más común para aprendizaje y uso general. En Colombia, aunque el trombón no es tradicionalmente protagonista en los ritmos patrimoniales, ha comenzado a tener mayor presencia en agrupaciones modernas, bandas sinfónicas y fusiones contemporáneas.",
      category: "Modernidad",
      region: "Internacional"
    }
  ],

  notableFigures: [
    {
      name: "Lucho Bermúdez",
      role: "Compositor y Director",
      contribution: "Pionero en la incorporación del trombón en la cumbia y el porro. Sus arreglos establecieron patrones que perduran hasta hoy.",
      period: "1912-1994",
      region: "Costa Atlántica"
    },
    {
      name: "Pacho Galán",
      role: "Compositor",
      contribution: "Creador del merecumbé, género que utilizó el trombón como instrumento melódico principal en composiciones folclóricas.",
      period: "1906-1988", 
      region: "Costa Atlántica"
    },
    {
      name: "Blas Emilio Atehortúa",
      role: "Compositor Académico",
      contribution: "Compositor antioqueño que escribió obras para trombón basadas en ritmos colombianos, especialmente bambucos y pasillos.",
      period: "1933-2020",
      region: "Región Andina"
    },
    {
      name: "Francisco Zumaqué",
      role: "Compositor Popular",
      contribution: "Sus composiciones para trombón en cumbias y porros influyeron en generaciones de trombonistas folclóricos.",
      period: "1920-1990",
      region: "Costa Atlántica"
    }
  ],

  culturalAreas: [
    {
      region: "Costa Atlántica",
      description: "El trombón se integró en la cumbia y el porro a través de las bandas pelayeras. Su sonoridad grave complementa las gaitas y el acordeón.",
      characteristics: ["Bandas pelayeras", "Porro sabanero", "Cumbia moderna", "Mapalé urbano"],
      period: "1920-presente"
    },
    {
      region: "Costa Pacífica", 
      description: "Adopción del trombón en el currulao y la chirimía chocoana. Fusión única entre ancestralidad africana y modernidad instrumental.",
      characteristics: ["Currulao contemporáneo", "Chirimía moderna", "Abozao urbano", "Bundes actuales"],
      period: "1960-presente"
    },
    {
      region: "Región Andina",
      description: "El trombón encontró su lugar en pasillos y bambucos a través de estudiantinas y conservatorios. Expresión melancólica y festiva.",
      characteristics: ["Pasillo nostálgico", "Bambuco festivo", "Torbellino moderno", "Guabina actual"],
      period: "1890-presente"
    },
    {
      region: "Orinoquía",
      description: "Integración reciente del trombón en el joropo. Adaptación técnica para igualar la velocidad tradicional del cuatro y la bandola.",
      characteristics: ["Joropo recio", "Joropo lento", "Golpe llanero", "Pasaje moderno"],
      period: "1980-presente"
    }
  ],

  trombonColombia: [
    {
      subtitle: "El trombón: un instrumento poco protagónico",
      description: "El trombón ha tenido una presencia secundaria en los ritmos tradicionales colombianos. Si bien forma parte de algunas agrupaciones, su rol ha sido de acompañamiento, sin ocupar un lugar destacado en la composición o ejecución de los géneros folclóricos más representativos del país."
    },
    {
      subtitle: "Un recorrido histórico necesario",
      description: "Para comprender esta situación, es importante hacer un repaso del desarrollo musical en Colombia. Desde los sonidos rituales de los pueblos indígenas hasta la consolidación de géneros nacionales, se observa cómo otros instrumentos —como la gaita, los tambores, las cuerdas o la guacharaca— han tenido mayor protagonismo."
    },
    {
      subtitle: "Identidad musical colombiana",
      description: "Colombia logró una identidad nacional musical a través de géneros como el joropo, bambuco, pasillo, currulao, porro y cumbia, todos nacidos de procesos de mestizaje y transculturación. Estos géneros fueron influenciados por instrumentos africanos, europeos e indígenas, que se integraron a las costumbres locales y moldearon el paisaje sonoro del país."
    },
    {
      subtitle: "La influencia de la transculturación",
      description: "Los ritmos colombianos surgen de confluencias culturales: La herencia indígena; La colonización ibérica; La trata de esclavos africanos; La influencia de la cultura europea occidental. Estas influencias se combinaron de formas distintas según la región, y eso explica la gran variedad de estilos e instrumentos en el país. Instrumentos como el trombón llegaron desde Europa, pero en muchos casos no lograron adaptarse al estilo ni a la estructura de los ritmos locales tradicionales."  
    },
    {
      subtitle: "El folclor como expresión de memoria y mestizaje",
      description: 'La música colombiana, como afirma Rubén Pardo, es una forma de memoria colectiva: recuerda momentos clave de la historia nacional y celebra sus raíces diversas. Fabio Betancur añade que el mestizaje musical colombiano tiene como "arcilla común" los aportes africanos y españoles. A su vez, Jomi García destaca que géneros como la cumbia y el porro son expresiones híbridas, imposibles de clasificar solo como indoamericanas o afroamericanas.'
    },
    {
      subtitle: "Aporte y futuro del trombón",
      description: "Aunque históricamente el trombón no ha sido central en las músicas tradicionales colombianas, su inclusión en bandas sinfónicas, agrupaciones contemporáneas y composiciones académicas representa una oportunidad para expandir el repertorio folclórico colombiano y darle nuevos matices sonoros."
    }
  ]
};