
export interface SolutionData {
  title: string;
  subtitle: string;
  description: string;
  hero?: {
    eyebrow: string;
    title: string;
    subtitle: string;
    description: string;
    card?: {
      title: string;
      [key: string]: any;
    };
  };
  sections?: {
    pain?: {
      eyebrow?: string;
      title: string;
      description?: string;
      monologue: string[];
      ledgerEyebrow?: string;
      ledgerHeading?: string;
      ledger: Array<{ num: string; title: string; description: string }>;
    };
    behindTheScenes?: {
      eyebrow: string;
      title: string;
      description: string;
    };
    lifecycle?: {
      eyebrow: string;
      items: Array<{ num: string; label: string; sublabel: string; dotClass: string }>;
    };
    workflow?: {
      eyebrow: string;
      title: string;
      description: string;
      items: Array<{ num: string; label: string; sublabel: string }>;
      codeBlock?: Array<{ label: string; value: string }>;
    };
    denialPatterns?: {
      eyebrow: string;
      title: string;
      description: string;
      patterns: Array<{ tag: string; tagClass: string; title: string; description: string }>;
    };
    solution?: {
      title: string;
      description: string;
      process: Array<{ num: string; title: string; description: string }>;
      eyebrow?: string;
    };
    services?: {
      title: string;
      description?: string;
      items: Array<{ num: string; title: string; description: string; category?: string }>;
      eyebrow?: string;
      reportCards?: Array<{ eyebrow: string; num: string; title: string; description: string; trend: string }>;
    };
    howWeWork?: {
      eyebrow: string;
      title: string;
      description: string;
      process: Array<{ num: string; title: string; description: string }>;
    };
    aiHuman?: {
      title: string;
      description?: string;
      machine: string[];
      human: string[];
      eyebrow?: string;
      pullQuote?: string;
      machineLabel?: string;
      humanLabel?: string;
    };
    results?: {
      title: string;
      description?: string;
      outcomes: Array<{ icon: string; title: string; description: string }>;
      eyebrow?: string;
    };
    compare?: {
      title: string;
      description: string;
      rows: Array<{ label: string; hbs: string; other: string }>;
      eyebrow?: string;
    };
    targetAudience?: {
      eyebrow: string;
      title: string;
      description: string;
      practiceTypes: Array<{ type: string; description: string }>;
    };
    prioritization?: {
      eyebrow: string;
      title: string;
      description: string;
      categories: Array<{ num: string; title: string; description: string }>;
    };
    finalCta?: {
      eyebrow: string;
      title: string;
      description: string;
      buttons: Array<{ text: string; variant: string }>;
      trustLine: string;
    };
  };
}