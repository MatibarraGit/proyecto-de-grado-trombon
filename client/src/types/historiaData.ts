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

export interface TrombonColombiaSection {
  subtitle: string;
  description: string;
}

/**
 * Shape of the "history" module inside the i18n dictionaries
 * (src/app/i18n/{es,en}.json). The content itself lives there so it can be
 * translated per locale.
 */
export interface HistoriaDictionary {
  heroSection: {
    title: string;
    description: string;
  };
  introduction: {
    title: string;
    paragraphs: string[];
  };
  trombonColombia: {
    title: string;
    sections: TrombonColombiaSection[];
  };
  timeline: {
    title: string;
    events: TimelineEvent[];
  };
  notableFigures: NotableFigure[];
  culturalAreas: CulturalArea[];
}
