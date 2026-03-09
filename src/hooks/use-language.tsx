import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type Language = 'en' | 'de' | 'fr';

export interface Translations {
  nav: {
    services: string;
    technology: string;
    bookNow: string;
    primaryCta: string;
    contact: string;
  };
  hero: {
    eyebrow: string;
    titlePrefix: string;
    titleSuffix: string;
    rotatingWords: string[];
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    fitTitle: string;
    fitItems: string[];
    trustItems: string[];
    stat1Label: string;
    stat1Value: string;
    stat2Label: string;
    stat2Value: string;
  };
  consulting: {
    title: string;
    subtitle: string;
    assuranceItems: string[];
    basicPlan: {
      title: string;
      subtitle: string;
      bestFor: string;
      duration: string;
      features: string[];
      button: string;
    };
    premiumPlan: {
      title: string;
      subtitle: string;
      bestFor: string;
      duration: string;
      features: string[];
      button: string;
      badge: string;
    };
    enterprisePlan: {
      title: string;
      subtitle: string;
      bestFor: string;
      duration: string;
      features: string[];
      button: string;
      badge: string;
    };
    note: string;
  };
  deliverables: {
    eyebrow: string;
    title: string;
    subtitle: string;
    cards: {
      title: string;
      description: string;
    }[];
    processTitle: string;
    processItems: string[];
    primaryCta: string;
    secondaryCta: string;
    note: string;
  };
  services: {
    title: string;
    items: {
      title: string;
      description: string;
      iconKey: "blockchain" | "ai" | "web3" | "smartContract" | "defi" | "osaasc";
    }[];
  };
  techStack: {
    title: string;
    items: {
      question: string;
      technology: string;
      group: "blockchain" | "ai";
    }[];
  };
  contact: {
    title: string;
    subtitle: string;
    email: string;
    emailLabel: string;
  };
  footer: {
    services: string;
    consulting: string;
    contact: string;
    social: string;
    copyright: string;
    description: string;
    navigationTitle: string;
  };
  notFound: {
    title: string;
    subtitle: string;
    backHome: string;
  };
}

const translations: Record<Language, Translations> = {
  en: {
    nav: {
      services: 'Services',
      technology: 'Technology',
      bookNow: 'Plans',
      primaryCta: 'Book Strategy Call',
      contact: 'Contact',
    },
    hero: {
      eyebrow: 'Web3 and OSAASC advisory for founders, operators, and product teams',
      titlePrefix: 'Leave the call with a',
      titleSuffix: '',
      rotatingWords: ['launch roadmap', 'clear technical plan', 'confident next step', 'pilot execution brief'],
      subtitle: 'Skip weeks of tool comparison and false starts. We help you define scope, choose the right stack, and leave with an execution-ready plan.',
      primaryCta: 'Book the $19.90 Quick Start Plan',
      secondaryCta: 'Email Your Use Case',
      fitTitle: 'Best fit for',
      fitItems: [
        'Founders validating a Web3 or AI offer',
        'Teams choosing architecture before hiring engineers',
        'Operators needing a fast second opinion before launch',
      ],
      trustItems: [
        '30-minute strategy call',
        'Actionable roadmap, not generic advice',
        'Clear next steps you can execute immediately',
      ],
      stat1Label: 'Web3 Solutions',
      stat1Value: 'Enterprise Ready',
      stat2Label: 'AI Integration',
      stat2Value: '96%',
    },
    consulting: {
      title: 'Web3 & OSAASC Consulting',
      subtitle: 'Choose the plan that matches your stage, get fast clarity on scope and architecture, and move forward with an execution-ready next step.',
      assuranceItems: [
        'Choose a plan based on your stage, not guesswork',
        'Every session ends with a concrete next-step plan',
        'Use the call before hiring, building, or changing stack',
      ],
      basicPlan: {
        title: 'Quick Start Plan',
        subtitle: 'Fast clarity before you spend serious engineering time',
        bestFor: 'Best for early validation, architecture decisions, and urgent second opinions.',
        duration: '30-minute 1-on-1 online consultation',
        features: [
          'Requirements analysis and goal clarification',
          'Technology roadmap development',
          'Simple technical architecture guidance',
          'Key technology selection advice',
        ],
        button: 'Book Quick Start',
      },
      premiumPlan: {
        title: 'Deep Consulting Plan',
        subtitle: 'The strongest option for teams preparing to build or launch',
        bestFor: 'Best for founders and product teams who need a deeper roadmap before execution.',
        duration: '60-minute 1-on-1 online consultation',
        features: [
          'Detailed requirements analysis and business assessment',
          'Actionable detailed roadmap',
          'Complete technical architecture design',
          'Function module analysis and performance bottleneck evaluation',
          'Cloud services and AI resource assessment',
          'Detailed implementation plan and timeline',
        ],
        button: 'Book Deep Consulting',
        badge: 'Most Popular',
      },
      enterprisePlan: {
        title: 'Enterprise OSAASC Plan',
        subtitle: 'Hands-on strategic alignment for enterprise-scale AI infrastructure work',
        bestFor: 'Best for enterprise teams planning multi-stakeholder AI or infrastructure programs.',
        duration: '3-day face-to-face intensive consultation',
        features: [
          'Agentic AI infrastructure architecture design',
          'Distributed inference cluster deployment',
          'Small model fine-tuning and training',
          'Data standardization and processing',
          '3-day on-site efficient communication',
        ],
        button: 'Book Enterprise Plan',
        badge: 'Enterprise',
      },
      note: 'Consulting plans focus on strategy, architecture, and execution guidance. Implementation can be scoped separately if needed.',
    },
    deliverables: {
      eyebrow: 'Outcome-Focused Consulting',
      title: 'What You Leave With',
      subtitle: 'Every consulting session is designed to reduce uncertainty fast. The goal is not inspiration. The goal is a clearer decision and a sharper next move.',
      cards: [
        {
          title: 'Decision Memo',
          description: 'A clear recommendation on scope, architecture direction, and the tradeoffs you should accept or avoid.',
        },
        {
          title: 'Execution Roadmap',
          description: 'A prioritized sequence of next actions so your team knows what to do this week, next, and later.',
        },
        {
          title: 'Risk Checklist',
          description: 'Key technical, delivery, and vendor risks to watch before you commit budget or engineering time.',
        },
      ],
      processTitle: 'How the session works',
      processItems: [
        'You share the context, blockers, and current options',
        'We pressure-test the architecture and delivery path live',
        'You leave with a tighter plan and a clearer buy/build sequence',
      ],
      primaryCta: 'Choose a Plan',
      secondaryCta: 'Email Before You Buy',
      note: 'Useful before hiring, before changing stack, and before spending on the wrong implementation path.',
    },
    services: {
      title: 'Our Services',
      items: [
        {
          iconKey: 'blockchain',
          title: 'Enterprise Blockchain Infrastructure Design',
          description: 'Custom blockchain architecture tailored for enterprise needs with focus on scalability and security.',
        },
        {
          iconKey: 'ai',
          title: 'AI System Architecture Consulting',
          description: 'Comprehensive AI system design and implementation guidance for modern applications.',
        },
        {
          iconKey: 'web3',
          title: 'Web3 Application Development',
          description: 'End-to-end Web3 application development from concept to deployment.',
        },
        {
          iconKey: 'smartContract',
          title: 'Smart Contract Development',
          description: 'Secure and efficient smart contract development with comprehensive testing.',
        },
        {
          iconKey: 'defi',
          title: 'DeFi Protocol Design',
          description: 'Custom DeFi protocol architecture and tokenomics design.',
        },
        {
          iconKey: 'osaasc',
          title: 'OSAASC Integration Services',
          description: 'Seamless integration of generative AI capabilities into existing systems.',
        },
      ],
    },
    techStack: {
      title: 'Technical Solutions',
      items: [
        { group: 'blockchain', question: 'Setup smart contract infrastructure?', technology: 'Ethereum' },
        { group: 'blockchain', question: 'Build decentralized storage?', technology: 'Filecoin' },
        { group: 'blockchain', question: 'Scale blockchain operations?', technology: 'Solana' },
        { group: 'ai', question: 'Deploy custom LLMs?', technology: 'DeepSeek' },
        { group: 'ai', question: 'Implement open-source AI?', technology: 'LLama3' },
        { group: 'ai', question: 'Enterprise AI integration?', technology: 'QWen3' },
      ],
    },
    contact: {
      title: 'Get in Touch',
      subtitle: 'Ready to start your project? Reach out to us directly.',
      email: 'hi@lebit.ai',
      emailLabel: 'Email us at',
    },
    footer: {
      services: 'Services',
      consulting: 'Consulting',
      contact: 'Contact',
      social: 'Follow Us',
      copyright: '© {year} LebitAI. All rights reserved.',
      description: 'Empowering businesses with next-generation AI and blockchain solutions.',
      navigationTitle: 'Navigation',
    },
    notFound: {
      title: '404 - Page Not Found',
      subtitle: 'The page you are looking for does not exist.',
      backHome: 'Back to Home',
    },
  },
  de: {
    nav: {
      services: 'Dienstleistungen',
      technology: 'Technologie',
      bookNow: 'Pläne',
      primaryCta: 'Strategiegespräch buchen',
      contact: 'Kontakt',
    },
    hero: {
      eyebrow: 'Web3- und OSAASC-Beratung für Gründer, Betreiber und Produktteams',
      titlePrefix: 'Verlassen Sie das Gespräch mit einem',
      titleSuffix: '',
      rotatingWords: ['klaren Launch-Fahrplan', 'klaren technischen Plan', 'sicheren nächsten Schritt', 'Pilot-Umsetzungsbrief'],
      subtitle: 'Vermeiden Sie wochenlange Tool-Vergleiche und Fehlstarts. Wir schärfen den Scope, wählen den passenden Stack und liefern einen umsetzbaren Plan.',
      primaryCta: 'Den Schnellstart für $19.90 buchen',
      secondaryCta: 'Use Case per E-Mail senden',
      fitTitle: 'Besonders passend für',
      fitItems: [
        'Gründer, die ein Web3- oder KI-Angebot validieren',
        'Teams, die die Architektur vor dem Engineering festlegen müssen',
        'Operatoren, die vor dem Launch eine schnelle Zweitmeinung brauchen',
      ],
      trustItems: [
        '30-minütiges Strategiegespräch',
        'Konkreter Fahrplan statt generischer Beratung',
        'Sofort umsetzbare nächste Schritte',
      ],
      stat1Label: 'Web3-Lösungen',
      stat1Value: 'Unternehmensbereit',
      stat2Label: 'KI-Integration',
      stat2Value: '96%',
    },
    consulting: {
      title: 'Web3 & OSAASC Beratung',
      subtitle: 'Wählen Sie den passenden Plan für Ihre Phase, erhalten Sie schnell Klarheit zu Scope und Architektur und gehen Sie mit einem umsetzbaren nächsten Schritt weiter.',
      assuranceItems: [
        'Wählen Sie den Plan passend zu Ihrer Phase statt nach Gefühl',
        'Jede Session endet mit einem konkreten nächsten Schritt',
        'Ideal vor Hiring, Build oder Stack-Wechsel',
      ],
      basicPlan: {
        title: 'Schnellstart-Plan',
        subtitle: 'Schnelle Klarheit, bevor Engineering-Zeit gebunden wird',
        bestFor: 'Ideal für frühe Validierung, Architekturentscheidungen und dringende Zweitmeinungen.',
        duration: '30-minütige 1-zu-1 Online-Beratung',
        features: [
          'Anforderungsanalyse und Zielklärung',
          'Technologie-Roadmap-Entwicklung',
          'Einfache technische Architekturberatung',
          'Beratung zur Technologieauswahl',
        ],
        button: 'Schnellstart buchen',
      },
      premiumPlan: {
        title: 'Tiefgehende Beratung',
        subtitle: 'Die stärkste Option für Teams vor Build oder Launch',
        bestFor: 'Ideal für Gründer und Produktteams, die vor der Umsetzung einen tieferen Fahrplan brauchen.',
        duration: '60-minütige 1-zu-1 Online-Beratung',
        features: [
          'Detaillierte Anforderungsanalyse und Geschäftsbewertung',
          'Umsetzbare detaillierte Roadmap',
          'Vollständiges technisches Architekturdesign',
          'Funktionsmodulanalyse und Leistungsengpassbewertung',
          'Cloud-Services und KI-Ressourcenbewertung',
          'Detaillierter Implementierungsplan und Zeitplan',
        ],
        button: 'Tiefgehende Beratung buchen',
        badge: 'Am beliebtesten',
      },
      enterprisePlan: {
        title: 'Enterprise OSAASC Plan',
        subtitle: 'Strategische Begleitung für unternehmensweite KI-Infrastrukturvorhaben',
        bestFor: 'Ideal für Enterprise-Teams mit mehreren Stakeholdern und komplexen AI-Programmen.',
        duration: '3-tägige persönliche Intensivberatung',
        features: [
          'Agentic AI Infrastruktur-Architekturdesign',
          'Verteilte Inferenz-Cluster-Bereitstellung',
          'Feinabstimmung und Training kleiner Modelle',
          'Datenstandardisierung und -verarbeitung',
          '3 Tage effiziente Vor-Ort-Kommunikation',
        ],
        button: 'Enterprise-Plan buchen',
        badge: 'Enterprise',
      },
      note: 'Die Beratungspläne fokussieren sich auf Strategie, Architektur und Umsetzungsanleitung. Die Implementierung kann bei Bedarf separat eingegrenzt werden.',
    },
    deliverables: {
      eyebrow: 'Ergebnisorientierte Beratung',
      title: 'Was Sie konkret mitnehmen',
      subtitle: 'Jede Session ist darauf ausgelegt, Unsicherheit schnell zu reduzieren. Nicht Inspiration ist das Ziel, sondern eine klarere Entscheidung und ein schärferer nächster Schritt.',
      cards: [
        {
          title: 'Entscheidungsmemo',
          description: 'Eine klare Empfehlung zu Scope, Architektur-Richtung und den Trade-offs, die Sie akzeptieren oder vermeiden sollten.',
        },
        {
          title: 'Umsetzungsfahrplan',
          description: 'Eine priorisierte Reihenfolge der nächsten Schritte, damit Ihr Team weiß, was diese Woche, als Nächstes und später zu tun ist.',
        },
        {
          title: 'Risiko-Checkliste',
          description: 'Die wichtigsten technischen, operativen und Vendor-Risiken, bevor Sie Budget oder Engineering-Zeit fest binden.',
        },
      ],
      processTitle: 'So läuft die Session ab',
      processItems: [
        'Sie teilen Kontext, Blocker und aktuelle Optionen',
        'Wir prüfen Architektur und Delivery-Pfad live unter Realbedingungen',
        'Sie gehen mit einem klareren Plan und einer besseren Buy-vs-Build-Reihenfolge heraus',
      ],
      primaryCta: 'Plan auswählen',
      secondaryCta: 'Vor dem Kauf mailen',
      note: 'Besonders sinnvoll vor Hiring, vor einem Stack-Wechsel und bevor Budget in den falschen Umsetzungsweg fließt.',
    },
    services: {
      title: 'Unsere Dienstleistungen',
      items: [
        {
          iconKey: 'blockchain',
          title: 'Enterprise Blockchain-Infrastruktur Design',
          description: 'Maßgeschneiderte Blockchain-Architektur für Unternehmensanforderungen mit Fokus auf Skalierbarkeit und Sicherheit.',
        },
        {
          iconKey: 'ai',
          title: 'KI-Systemarchitektur Beratung',
          description: 'Umfassende KI-Systemdesign- und Implementierungsberatung für moderne Anwendungen.',
        },
        {
          iconKey: 'web3',
          title: 'Web3 Anwendungsentwicklung',
          description: 'End-to-End Web3-Anwendungsentwicklung vom Konzept bis zur Bereitstellung.',
        },
        {
          iconKey: 'smartContract',
          title: 'Smart Contract Entwicklung',
          description: 'Sichere und effiziente Smart-Contract-Entwicklung mit umfassenden Tests.',
        },
        {
          iconKey: 'defi',
          title: 'DeFi Protokoll Design',
          description: 'Maßgeschneiderte DeFi-Protokollarchitektur und Tokenomics-Design.',
        },
        {
          iconKey: 'osaasc',
          title: 'OSAASC Integrationsdienste',
          description: 'Nahtlose Integration generativer KI-Fähigkeiten in bestehende Systeme.',
        },
      ],
    },
    techStack: {
      title: 'Technische Lösungen',
      items: [
        { group: 'blockchain', question: 'Smart-Contract-Infrastruktur einrichten?', technology: 'Ethereum' },
        { group: 'blockchain', question: 'Dezentrale Speicherung aufbauen?', technology: 'Filecoin' },
        { group: 'blockchain', question: 'Blockchain‑Operationen skalieren?', technology: 'Solana' },
        { group: 'ai', question: 'Eigene LLMs bereitstellen?', technology: 'DeepSeek' },
        { group: 'ai', question: 'Open‑Source‑KI implementieren?', technology: 'LLama3' },
        { group: 'ai', question: 'Enterprise‑KI integrieren?', technology: 'QWen3' },
      ],
    },
    contact: {
      title: 'Kontaktieren Sie uns',
      subtitle: 'Bereit, Ihr Projekt zu starten? Kontaktieren Sie uns direkt.',
      email: 'hi@lebit.ai',
      emailLabel: 'E-Mail an',
    },
    footer: {
      services: 'Dienstleistungen',
      consulting: 'Beratung',
      contact: 'Kontakt',
      social: 'Folgen Sie uns',
      copyright: '© {year} LebitAI. Alle Rechte vorbehalten.',
      description: 'Wir unterstützen Unternehmen mit KI- und Blockchain-Lösungen der nächsten Generation.',
      navigationTitle: 'Navigation',
    },
    notFound: {
      title: '404 - Seite nicht gefunden',
      subtitle: 'Die gesuchte Seite existiert nicht.',
      backHome: 'Zurück zur Startseite',
    },
  },
  fr: {
    nav: {
      services: 'Services',
      technology: 'Technologie',
      bookNow: 'Plans',
      primaryCta: 'Réserver un appel stratégique',
      contact: 'Contact',
    },
    hero: {
      eyebrow: 'Conseil Web3 et OSAASC pour fondateurs, opérateurs et équipes produit',
      titlePrefix: 'Repartez avec une',
      titleSuffix: '',
      rotatingWords: ['feuille de route de lancement', 'feuille technique claire', 'prochaine étape sûre', 'brief d’exécution pilote'],
      subtitle: 'Évitez des semaines de comparaison d’outils et de faux départs. Nous cadrons le scope, choisissons le bon stack et vous repartez avec un plan exécutable.',
      primaryCta: 'Réserver le Quick Start à $19.90',
      secondaryCta: 'Envoyer votre cas par email',
      fitTitle: 'Idéal pour',
      fitItems: [
        'Les fondateurs qui valident une offre Web3 ou IA',
        'Les équipes qui choisissent leur architecture avant de recruter',
        'Les opérateurs qui veulent un second avis rapide avant le lancement',
      ],
      trustItems: [
        'Appel stratégique de 30 minutes',
        'Feuille de route actionnable, pas du conseil vague',
        'Étapes suivantes immédiatement exploitables',
      ],
      stat1Label: 'Solutions Web3',
      stat1Value: 'Prêt pour l\'entreprise',
      stat2Label: 'Intégration IA',
      stat2Value: '96%',
    },
    consulting: {
      title: 'Conseil Web3 & OSAASC',
      subtitle: 'Choisissez le plan adapté à votre phase, clarifiez rapidement le scope et l’architecture, puis avancez avec une prochaine étape réellement exploitable.',
      assuranceItems: [
        'Choisissez selon votre phase, pas au hasard',
        'Chaque session se termine par un plan d’action concret',
        'Utile avant de recruter, construire ou changer de stack',
      ],
      basicPlan: {
        title: 'Plan Démarrage Rapide',
        subtitle: 'Une clarté rapide avant d’engager du temps d’ingénierie',
        bestFor: 'Idéal pour la validation initiale, les choix d’architecture et les seconds avis urgents.',
        duration: 'Consultation en ligne 1-à-1 de 30 minutes',
        features: [
          'Analyse des besoins et clarification des objectifs',
          'Développement de la feuille de route technologique',
          'Conseils d\'architecture technique simple',
          'Conseils sur le choix des technologies clés',
        ],
        button: 'Réserver Quick Start',
      },
      premiumPlan: {
        title: 'Plan Conseil Approfondi',
        subtitle: 'L’option la plus solide pour les équipes avant build ou lancement',
        bestFor: 'Idéal pour les fondateurs et équipes produit qui ont besoin d’une feuille de route plus poussée avant exécution.',
        duration: 'Consultation en ligne 1-à-1 de 60 minutes',
        features: [
          'Analyse détaillée des besoins et évaluation commerciale',
          'Feuille de route détaillée et actionnable',
          'Conception complète de l\'architecture technique',
          'Analyse des modules fonctionnels et évaluation des goulots d\'étranglement',
          'Évaluation des services cloud et des ressources IA',
          'Plan de mise en œuvre détaillé et calendrier',
        ],
        button: 'Réserver le plan approfondi',
        badge: 'Le plus choisi',
      },
      enterprisePlan: {
        title: 'Plan Enterprise OSAASC',
        subtitle: 'Accompagnement stratégique pour des chantiers IA d’envergure entreprise',
        bestFor: 'Idéal pour les équipes enterprise qui coordonnent plusieurs parties prenantes et un programme IA complexe.',
        duration: 'Consultation intensive en personne de 3 jours',
        features: [
          'Conception d\'architecture d\'infrastructure IA agentique',
          'Déploiement de cluster d\'inférence distribué',
          'Affinage et entraînement de petits modèles',
          'Standardisation et traitement des données',
          '3 jours de communication efficace sur site',
        ],
        button: 'Réserver Enterprise',
        badge: 'Enterprise',
      },
      note: 'Les plans de conseil portent sur la stratégie, l’architecture et l’orientation d’exécution. La mise en œuvre peut être cadrée séparément si nécessaire.',
    },
    deliverables: {
      eyebrow: 'Conseil orienté résultat',
      title: 'Ce que vous obtenez concrètement',
      subtitle: 'Chaque session vise à réduire l’incertitude rapidement. Le but n’est pas l’inspiration, mais une décision plus claire et une prochaine étape plus nette.',
      cards: [
        {
          title: 'Note de décision',
          description: 'Une recommandation claire sur le scope, la direction d’architecture et les compromis à accepter ou à éviter.',
        },
        {
          title: 'Feuille d’exécution',
          description: 'Une séquence priorisée des prochaines actions pour savoir quoi faire cette semaine, ensuite, puis plus tard.',
        },
        {
          title: 'Checklist des risques',
          description: 'Les principaux risques techniques, delivery et fournisseurs à surveiller avant d’engager du budget ou du temps d’ingénierie.',
        },
      ],
      processTitle: 'Comment la session se déroule',
      processItems: [
        'Vous partagez le contexte, les blocages et les options actuelles',
        'Nous mettons sous pression l’architecture et la trajectoire delivery en direct',
        'Vous repartez avec un plan plus serré et une séquence buy/build plus claire',
      ],
      primaryCta: 'Choisir un plan',
      secondaryCta: 'Écrire avant d’acheter',
      note: 'Particulièrement utile avant de recruter, avant de changer de stack et avant de dépenser sur une mauvaise trajectoire d’implémentation.',
    },
    services: {
      title: 'Nos Services',
      items: [
        {
          iconKey: 'blockchain',
          title: 'Conception d\'Infrastructure Blockchain Entreprise',
          description: 'Architecture blockchain personnalisée adaptée aux besoins des entreprises avec un accent sur l\'évolutivité et la sécurité.',
        },
        {
          iconKey: 'ai',
          title: 'Conseil en Architecture Système IA',
          description: 'Conception et conseils de mise en œuvre complets de systèmes IA pour les applications modernes.',
        },
        {
          iconKey: 'web3',
          title: 'Développement d\'Applications Web3',
          description: 'Développement d\'applications Web3 de bout en bout, du concept au déploiement.',
        },
        {
          iconKey: 'smartContract',
          title: 'Développement de Smart Contracts',
          description: 'Développement de smart contracts sécurisés et efficaces avec des tests complets.',
        },
        {
          iconKey: 'defi',
          title: 'Conception de Protocoles DeFi',
          description: 'Architecture de protocole DeFi personnalisée et conception de tokenomics.',
        },
        {
          iconKey: 'osaasc',
          title: 'Services d\'Intégration OSAASC',
          description: 'Intégration transparente des capacités d\'IA générative dans les systèmes existants.',
        },
      ],
    },
    techStack: {
      title: 'Solutions Techniques',
      items: [
        { group: 'blockchain', question: 'Configurer l\'infrastructure smart contract ?', technology: 'Ethereum' },
        { group: 'blockchain', question: 'Construire un stockage décentralisé ?', technology: 'Filecoin' },
        { group: 'blockchain', question: 'Faire évoluer les opérations blockchain ?', technology: 'Solana' },
        { group: 'ai', question: 'Déployer des LLM personnalisés ?', technology: 'DeepSeek' },
        { group: 'ai', question: 'Implémenter une IA open‑source ?', technology: 'LLama3' },
        { group: 'ai', question: 'Intégration IA entreprise ?', technology: 'QWen3' },
      ],
    },
    contact: {
      title: 'Contactez-nous',
      subtitle: 'Prêt à démarrer votre projet ? Contactez-nous directement.',
      email: 'hi@lebit.ai',
      emailLabel: 'Envoyez-nous un email à',
    },
    footer: {
      services: 'Services',
      consulting: 'Conseil',
      contact: 'Contact',
      social: 'Suivez-nous',
      copyright: '© {year} LebitAI. Tous droits réservés.',
      description: 'Nous accompagnons les entreprises avec des solutions IA et blockchain de nouvelle génération.',
      navigationTitle: 'Navigation',
    },
    notFound: {
      title: '404 - Page non trouvée',
      subtitle: 'La page que vous recherchez n\'existe pas.',
      backHome: 'Retour à l\'accueil',
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

function getBrowserLanguage(): Language {
  const browserLang = navigator.language.split('-')[0];
  if (browserLang === 'de') return 'de';
  if (browserLang === 'fr') return 'fr';
  return 'en';
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const saved = localStorage.getItem('language') as Language;
    if (saved && translations[saved]) {
      setLanguage(saved);
    } else {
      setLanguage(getBrowserLanguage());
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
  };

  const value = {
    language,
    setLanguage: handleSetLanguage,
    t: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

export const supportedLanguages: { code: Language; name: string; flag: string }[] = [
  { code: 'en', name: 'English', flag: 'US' },
  { code: 'de', name: 'Deutsch', flag: 'DE' },
  { code: 'fr', name: 'Français', flag: 'FR' },
];
