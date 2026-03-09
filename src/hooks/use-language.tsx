import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type Language = 'en' | 'de' | 'fr';

export interface Translations {
  ui: {
    languageSwitcherLabel: string;
    openMenuLabel: string;
    closeMenuLabel: string;
    xAriaLabel: string;
    linkedInAriaLabel: string;
  };
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
    headline: string;
    subheadline: string;
    highlightItems: string[];
    ctaTitle: string;
    ctaSubtitle: string;
    primaryCta: string;
    secondaryCta: string;
    emailLabel: string;
  };
  notFound: {
    title: string;
    subtitle: string;
    backHome: string;
  };
}

const translations: Record<Language, Translations> = {
  en: {
    ui: {
      languageSwitcherLabel: 'Switch language',
      openMenuLabel: 'Open menu',
      closeMenuLabel: 'Close menu',
      xAriaLabel: 'LebitAI on X',
      linkedInAriaLabel: 'LebitAI on LinkedIn',
    },
    nav: {
      services: 'Services',
      technology: 'Technology',
      bookNow: 'Plans',
      primaryCta: 'Book Quick Start',
      contact: 'Contact',
    },
    hero: {
      eyebrow: 'Strategic Web3 and OSAASC advisory for founders and product teams',
      titlePrefix: 'Leave the call with a',
      titleSuffix: '',
      rotatingWords: ['launch roadmap', 'clear architecture brief', 'confident next step', 'pilot-ready plan'],
      subtitle: 'Clarify scope, architecture, and priorities before budget and engineering time go in the wrong direction.',
      primaryCta: 'Book Quick Start for $19.90',
      secondaryCta: 'Email Your Use Case',
      fitTitle: 'Best fit for',
      fitItems: [
        'Founders validating a Web3 or AI offer',
        'Teams aligning scope before engineering starts',
        'Operators needing a fast second opinion before launch',
      ],
      trustItems: [
        '30-minute strategy session',
        'Concrete recommendations, not generic advice',
        'Next steps you can act on immediately',
      ],
      stat1Label: 'Web3 Solutions',
      stat1Value: 'Enterprise Ready',
      stat2Label: 'AI Integration',
      stat2Value: '96%',
    },
    consulting: {
      title: 'Web3 & OSAASC Consulting',
      subtitle: 'Choose the level of support that fits your stage and leave with clearer priorities and a sharper plan.',
      assuranceItems: [
        'Choose the plan that fits your stage',
        'Every session ends with a clear decision path',
        'Use it before hiring, building, or changing stack',
      ],
      basicPlan: {
        title: 'Quick Start Plan',
        subtitle: 'Fast clarity before engineering time gets committed',
        bestFor: 'Best for early validation, architecture direction, and urgent second opinions.',
        duration: '30-minute 1-on-1 online consultation',
        features: [
          'Requirements review and goal alignment',
          'Initial roadmap recommendation',
          'Practical architecture guidance',
          'Advice on key platform choices',
        ],
        button: 'Book Quick Start',
      },
      premiumPlan: {
        title: 'Deep Consulting Plan',
        subtitle: 'Best for teams preparing to build or launch',
        bestFor: 'Best for teams that need a stronger roadmap before execution.',
        duration: '60-minute 1-on-1 online consultation',
        features: [
          'Detailed requirements and business assessment',
          'Actionable roadmap with priority order',
          'End-to-end architecture direction',
          'Module and bottleneck review',
          'Cloud and AI infrastructure assessment',
          'Implementation sequence and timeline',
        ],
        button: 'Book Deep Consulting',
        badge: 'Most Popular',
      },
      enterprisePlan: {
        title: 'Enterprise OSAASC Plan',
        subtitle: 'Strategic alignment for enterprise-scale AI and infrastructure programs',
        bestFor: 'Best for enterprise teams coordinating multiple stakeholders and delivery tracks.',
        duration: '3-day face-to-face intensive consultation',
        features: [
          'Agentic AI infrastructure strategy',
          'Distributed inference and serving design',
          'Small-model training guidance',
          'Data standardization planning',
          'Three days of focused working sessions',
        ],
        button: 'Book Enterprise Plan',
        badge: 'Enterprise',
      },
      note: 'These plans cover strategy, architecture, and execution guidance. Implementation can be scoped separately if needed.',
    },
    deliverables: {
      eyebrow: 'Outcome-Focused Consulting',
      title: 'What You Leave With',
      subtitle: 'Each session is built to reduce uncertainty fast and sharpen the next decision.',
      cards: [
        {
          title: 'Decision Memo',
          description: 'A clear recommendation on scope, architecture direction, and the tradeoffs worth accepting or avoiding.',
        },
        {
          title: 'Execution Roadmap',
          description: 'A prioritized sequence of next actions so the team knows what to do now, next, and later.',
        },
        {
          title: 'Risk Checklist',
          description: 'The key technical, delivery, and vendor risks to watch before committing budget or engineering time.',
        },
      ],
      processTitle: 'How the session works',
      processItems: [
        'You share the context and live options',
        'We pressure-test the architecture and delivery path together',
        'You leave with a tighter plan and a clearer buy-versus-build sequence',
      ],
      primaryCta: 'Choose a Plan',
      secondaryCta: 'Email Before You Buy',
      note: 'Useful before hiring, changing stack, or committing to the wrong implementation path.',
    },
    services: {
      title: 'Our Services',
      items: [
        {
          iconKey: 'blockchain',
          title: 'Enterprise Blockchain Infrastructure Design',
          description: 'Blockchain architecture shaped for enterprise scale, governance, and reliability.',
        },
        {
          iconKey: 'ai',
          title: 'AI System Architecture Consulting',
          description: 'AI system architecture guidance for teams defining product, model, infrastructure, and operating boundaries.',
        },
        {
          iconKey: 'web3',
          title: 'Web3 Application Development',
          description: 'End-to-end planning for Web3 products, from concept framing to production-ready execution.',
        },
        {
          iconKey: 'smartContract',
          title: 'Smart Contract Development',
          description: 'Secure smart contract design with practical attention to testing, review, and deployment risk.',
        },
        {
          iconKey: 'defi',
          title: 'DeFi Protocol Design',
          description: 'Protocol architecture and token mechanics grounded in product and market realities.',
        },
        {
          iconKey: 'osaasc',
          title: 'OSAASC Integration Services',
          description: 'Practical integration of open-source AI capabilities into existing products, workflows, and infrastructure.',
        },
      ],
    },
    techStack: {
      title: 'Technology Directions',
      items: [
        { group: 'blockchain', question: 'Need resilient smart contract infrastructure?', technology: 'Ethereum' },
        { group: 'blockchain', question: 'Planning decentralized storage workflows?', technology: 'Filecoin' },
        { group: 'blockchain', question: 'Need higher-throughput blockchain operations?', technology: 'Solana' },
        { group: 'ai', question: 'Evaluating custom LLM deployment?', technology: 'DeepSeek' },
        { group: 'ai', question: 'Prefer an open-source model stack?', technology: 'LLama3' },
        { group: 'ai', question: 'Need enterprise AI integration options?', technology: 'QWen3' },
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
      headline: 'Clarity before execution is cheaper than rework after launch.',
      subheadline: 'Choose a plan, share your use case, or move forward with a clearer starting point.',
      highlightItems: ['Web3 architecture', 'AI infrastructure', 'Execution roadmaps'],
      ctaTitle: 'Need a clearer next move?',
      ctaSubtitle: 'Start with the plan that fits your stage.',
      primaryCta: 'Book Quick Start',
      secondaryCta: 'Email Your Use Case',
      emailLabel: 'hi@lebit.ai',
    },
    notFound: {
      title: '404 - Page Not Found',
      subtitle: 'The page you are looking for does not exist.',
      backHome: 'Back to Home',
    },
  },
  de: {
    ui: {
      languageSwitcherLabel: 'Sprache wechseln',
      openMenuLabel: 'Menü öffnen',
      closeMenuLabel: 'Menü schließen',
      xAriaLabel: 'LebitAI auf X',
      linkedInAriaLabel: 'LebitAI auf LinkedIn',
    },
    nav: {
      services: 'Dienstleistungen',
      technology: 'Technologie',
      bookNow: 'Pläne',
      primaryCta: 'Schnellstart buchen',
      contact: 'Kontakt',
    },
    hero: {
      eyebrow: 'Strategische Web3- und OSAASC-Beratung für Gründer und Produktteams',
      titlePrefix: 'Verlassen Sie das Gespräch mit einem',
      titleSuffix: '',
      rotatingWords: ['klaren Launch-Fahrplan', 'klaren Architekturbrief', 'sicheren nächsten Schritt', 'pilotfähigen Umsetzungsplan'],
      subtitle: 'Gewinnen Sie Klarheit zu Scope, Architektur und Prioritäten, bevor Budget und Engineering-Zeit in die falsche Richtung laufen.',
      primaryCta: 'Schnellstart für $19.90 buchen',
      secondaryCta: 'Use Case per E-Mail senden',
      fitTitle: 'Besonders passend für',
      fitItems: [
        'Gründer, die ein Web3- oder KI-Angebot validieren',
        'Teams, die den Scope vor dem Engineering schärfen müssen',
        'Operatoren, die vor dem Launch eine schnelle Zweitmeinung brauchen',
      ],
      trustItems: [
        '30-minütige Strategiesession',
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
      subtitle: 'Wählen Sie das Beratungsniveau passend zu Ihrer Phase und gehen Sie mit klareren Prioritäten und einem besseren Plan weiter.',
      assuranceItems: [
        'Wählen Sie den Plan passend zu Ihrer Phase',
        'Jede Session endet mit einer klaren Entscheidungsrichtung',
        'Ideal vor Hiring, Build oder Stack-Wechsel',
      ],
      basicPlan: {
        title: 'Schnellstart-Plan',
        subtitle: 'Schnelle Klarheit, bevor Engineering-Zeit gebunden wird',
        bestFor: 'Ideal für frühe Validierung, Architektur-Richtung und dringende Zweitmeinungen.',
        duration: '30-minütige 1-zu-1 Online-Beratung',
        features: [
          'Anforderungsreview und Zielabgleich',
          'Erste Roadmap-Empfehlung',
          'Praktische Architekturberatung',
          'Empfehlungen zu Plattform- und Tooling-Entscheidungen',
        ],
        button: 'Schnellstart buchen',
      },
      premiumPlan: {
        title: 'Tiefgehende Beratung',
        subtitle: 'Die stärkste Option für Teams vor Build oder Launch',
        bestFor: 'Ideal für Teams, die vor der Umsetzung einen belastbareren Fahrplan brauchen.',
        duration: '60-minütige 1-zu-1 Online-Beratung',
        features: [
          'Detaillierte Anforderungs- und Kontextanalyse',
          'Umsetzbare Roadmap mit Priorisierung',
          'End-to-End Architektur-Richtung',
          'Funktionszerlegung und Engpassbewertung',
          'Cloud-, Modell- und Infrastruktur-Fit',
          'Umsetzungsreihenfolge und Zeitplan-Leitplanken',
        ],
        button: 'Tiefgehende Beratung buchen',
        badge: 'Am beliebtesten',
      },
      enterprisePlan: {
        title: 'Enterprise OSAASC Plan',
        subtitle: 'Strategische Begleitung für unternehmensweite KI- und Infrastrukturvorhaben',
        bestFor: 'Ideal für Enterprise-Teams mit mehreren Stakeholdern und parallelen Delivery-Tracks.',
        duration: '3-tägige persönliche Intensivberatung',
        features: [
          'Strategie und Architektur für Agentic-AI-Infrastruktur',
          'Design für verteilte Inferenz- und Serving-Systeme',
          'Leitplanken für Fine-Tuning kleiner Modelle',
          'Planung für Datenstandardisierung und Workflows',
          'Drei Tage fokussierte Vor-Ort-Arbeit',
        ],
        button: 'Enterprise-Plan buchen',
        badge: 'Enterprise',
      },
      note: 'Die Pläne fokussieren sich auf Strategie, Architektur und Umsetzungsleitung. Delivery oder Implementierung können separat eingegrenzt werden.',
    },
    deliverables: {
      eyebrow: 'Ergebnisorientierte Beratung',
      title: 'Was Sie konkret mitnehmen',
      subtitle: 'Jede Session reduziert Unsicherheit schnell. Ziel ist keine Inspiration, sondern eine klarere Entscheidung und ein belastbarer nächster Schritt.',
      cards: [
        {
          title: 'Entscheidungsmemo',
          description: 'Eine klare Empfehlung zu Scope, Architektur-Richtung und den Trade-offs, die Sie akzeptieren oder vermeiden sollten.',
        },
        {
          title: 'Umsetzungsfahrplan',
          description: 'Eine priorisierte Abfolge der nächsten Schritte, damit Ihr Team weiß, was jetzt, als Nächstes und später zu tun ist.',
        },
        {
          title: 'Risiko-Checkliste',
          description: 'Die wichtigsten technischen, operativen und Vendor-Risiken, bevor Budget oder Engineering-Zeit fest gebunden werden.',
        },
      ],
      processTitle: 'So läuft die Session ab',
      processItems: [
        'Sie teilen Kontext und aktuelle Optionen',
        'Wir prüfen Architektur und Delivery-Pfad gemeinsam',
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
          description: 'Blockchain-Architektur für Skalierbarkeit, Governance und verlässlichen Betrieb.',
        },
        {
          iconKey: 'ai',
          title: 'KI-Systemarchitektur Beratung',
          description: 'Architekturberatung für Teams, die Produkt, Modell, Infrastruktur und Betriebsgrenzen definieren.',
        },
        {
          iconKey: 'web3',
          title: 'Web3 Anwendungsentwicklung',
          description: 'End-to-End Planung für Web3-Produkte, vom Framing bis zum produktionsreifen Umsetzungsweg.',
        },
        {
          iconKey: 'smartContract',
          title: 'Smart Contract Entwicklung',
          description: 'Sicheres Smart-Contract-Design mit Fokus auf Tests, Reviews und Deployment-Risiken.',
        },
        {
          iconKey: 'defi',
          title: 'DeFi Protokoll Design',
          description: 'Protokollarchitektur und Token-Mechaniken mit Blick auf Produkt- und Marktrealität.',
        },
        {
          iconKey: 'osaasc',
          title: 'OSAASC Integrationsdienste',
          description: 'Praktische Integration von Open-Source-AI in bestehende Produkte, Workflows und Infrastruktur.',
        },
      ],
    },
    techStack: {
      title: 'Technologie-Richtungen',
      items: [
        { group: 'blockchain', question: 'Belastbare Smart-Contract-Infrastruktur aufbauen?', technology: 'Ethereum' },
        { group: 'blockchain', question: 'Dezentrale Speicher-Workflows planen?', technology: 'Filecoin' },
        { group: 'blockchain', question: 'Blockchain-Betrieb mit höherem Durchsatz skalieren?', technology: 'Solana' },
        { group: 'ai', question: 'Deployment eigener LLMs evaluieren?', technology: 'DeepSeek' },
        { group: 'ai', question: 'Open-Source-Modellstack bevorzugen?', technology: 'LLama3' },
        { group: 'ai', question: 'Enterprise-KI-Integration bewerten?', technology: 'QWen3' },
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
      headline: 'Klarheit vor der Umsetzung ist günstiger als Rework nach dem Launch.',
      subheadline: 'Plan wählen, Use Case senden oder mit einem klareren Startpunkt weitergehen.',
      highlightItems: ['Web3-Architektur', 'KI-Infrastruktur', 'Umsetzungsfahrpläne'],
      ctaTitle: 'Brauchen Sie den klareren nächsten Schritt?',
      ctaSubtitle: 'Starten Sie mit dem Plan, der zu Ihrer Phase passt.',
      primaryCta: 'Schnellstart buchen',
      secondaryCta: 'Use Case mailen',
      emailLabel: 'hi@lebit.ai',
    },
    notFound: {
      title: '404 - Seite nicht gefunden',
      subtitle: 'Die gesuchte Seite existiert nicht.',
      backHome: 'Zurück zur Startseite',
    },
  },
  fr: {
    ui: {
      languageSwitcherLabel: 'Changer la langue',
      openMenuLabel: 'Ouvrir le menu',
      closeMenuLabel: 'Fermer le menu',
      xAriaLabel: 'LebitAI sur X',
      linkedInAriaLabel: 'LebitAI sur LinkedIn',
    },
    nav: {
      services: 'Services',
      technology: 'Technologie',
      bookNow: 'Plans',
      primaryCta: 'Réserver Quick Start',
      contact: 'Contact',
    },
    hero: {
      eyebrow: 'Conseil stratégique Web3 et OSAASC pour fondateurs et équipes produit',
      titlePrefix: 'Repartez avec une',
      titleSuffix: '',
      rotatingWords: ['feuille de route de lancement', 'brief d’architecture clair', 'prochaine étape sûre', 'plan pilote exploitable'],
      subtitle: 'Clarifiez le scope, l’architecture et les priorités avant d’engager budget et temps d’ingénierie au mauvais endroit.',
      primaryCta: 'Réserver Quick Start à $19.90',
      secondaryCta: 'Envoyer votre cas par email',
      fitTitle: 'Idéal pour',
      fitItems: [
        'Les fondateurs qui valident une offre Web3 ou IA',
        'Les équipes produit qui cadrent le scope avant l’ingénierie',
        'Les opérateurs qui veulent un second avis rapide avant le lancement',
      ],
      trustItems: [
        'Session stratégique de 30 minutes',
        'Recommandations concrètes, pas du conseil vague',
        'Étapes suivantes immédiatement actionnables',
      ],
      stat1Label: 'Solutions Web3',
      stat1Value: 'Prêt pour l\'entreprise',
      stat2Label: 'Intégration IA',
      stat2Value: '96%',
    },
    consulting: {
      title: 'Conseil Web3 & OSAASC',
      subtitle: 'Choisissez le niveau d’accompagnement adapté à votre phase et repartez avec de meilleures priorités et un plan plus net.',
      assuranceItems: [
        'Choisissez selon votre phase',
        'Chaque session se termine par une direction de décision claire',
        'Utile avant de recruter, construire ou changer de stack',
      ],
      basicPlan: {
        title: 'Plan Démarrage Rapide',
        subtitle: 'Une clarté rapide avant d’engager du temps d’ingénierie',
        bestFor: 'Idéal pour la validation initiale, la direction d’architecture et les seconds avis urgents.',
        duration: 'Consultation en ligne 1-à-1 de 30 minutes',
        features: [
          'Revue des besoins et alignement des objectifs',
          'Première recommandation de feuille de route',
          'Conseils d’architecture pratiques',
          'Orientation sur les choix de plateforme et d’outillage',
        ],
        button: 'Réserver Quick Start',
      },
      premiumPlan: {
        title: 'Plan Conseil Approfondi',
        subtitle: 'L’option la plus solide pour les équipes avant build ou lancement',
        bestFor: 'Idéal pour les équipes qui ont besoin d’une feuille de route plus robuste avant exécution.',
        duration: 'Consultation en ligne 1-à-1 de 60 minutes',
        features: [
          'Analyse détaillée des besoins et du contexte business',
          'Feuille de route actionnable avec ordre de priorité',
          'Direction d’architecture de bout en bout',
          'Découpage fonctionnel et revue des goulots',
          'Évaluation du fit cloud, modèles et infrastructure',
          'Séquence de mise en œuvre et jalons',
        ],
        button: 'Réserver le plan approfondi',
        badge: 'Le plus choisi',
      },
      enterprisePlan: {
        title: 'Plan Enterprise OSAASC',
        subtitle: 'Accompagnement stratégique pour des initiatives IA et infrastructure à l’échelle enterprise',
        bestFor: 'Idéal pour les équipes enterprise qui coordonnent plusieurs parties prenantes et flux de delivery.',
        duration: 'Consultation intensive en personne de 3 jours',
        features: [
          'Stratégie et architecture d’infrastructure IA agentique',
          'Design d’inférence et de serving distribués',
          'Guidelines pour fine-tuning de petits modèles',
          'Planification de la standardisation des données et des workflows',
          'Trois jours de sessions de travail ciblées sur site',
        ],
        button: 'Réserver Enterprise',
        badge: 'Enterprise',
      },
      note: 'Ces plans portent sur la stratégie, l’architecture et le cadrage d’exécution. La mise en œuvre peut être cadrée séparément si nécessaire.',
    },
    deliverables: {
      eyebrow: 'Conseil orienté résultat',
      title: 'Ce que vous obtenez concrètement',
      subtitle: 'Chaque session vise à réduire rapidement l’incertitude. L’objectif est une décision plus claire et une prochaine étape plus solide.',
      cards: [
        {
          title: 'Note de décision',
          description: 'Une recommandation claire sur le scope, la direction d’architecture et les compromis à accepter ou à éviter.',
        },
        {
          title: 'Feuille d’exécution',
          description: 'Une séquence priorisée des prochaines actions pour savoir quoi faire maintenant, ensuite, puis plus tard.',
        },
        {
          title: 'Checklist des risques',
          description: 'Les principaux risques techniques, delivery et fournisseurs à surveiller avant d’engager du budget ou du temps d’ingénierie.',
        },
      ],
      processTitle: 'Comment la session se déroule',
      processItems: [
        'Vous partagez le contexte et les options en cours',
        'Nous testons ensemble l’architecture et la trajectoire delivery',
        'Vous repartez avec un plan plus net et une séquence buy-versus-build plus claire',
      ],
      primaryCta: 'Choisir un plan',
      secondaryCta: 'Écrire avant d’acheter',
      note: 'Particulièrement utile avant de recruter, avant de changer de stack et avant d’engager des dépenses au mauvais endroit.',
    },
    services: {
      title: 'Nos Services',
      items: [
        {
          iconKey: 'blockchain',
          title: 'Conception d\'Infrastructure Blockchain Entreprise',
          description: 'Architecture blockchain pensée pour l’échelle, la gouvernance et la fiabilité.',
        },
        {
          iconKey: 'ai',
          title: 'Conseil en Architecture Système IA',
          description: 'Conseil d’architecture pour les équipes qui cadrent produit, modèle, infrastructure et exploitation.',
        },
        {
          iconKey: 'web3',
          title: 'Développement d\'Applications Web3',
          description: 'Planification Web3 de bout en bout, du cadrage produit au chemin d’exécution.',
        },
        {
          iconKey: 'smartContract',
          title: 'Développement de Smart Contracts',
          description: 'Conception sécurisée des smart contracts avec une attention concrète aux tests et aux risques de déploiement.',
        },
        {
          iconKey: 'defi',
          title: 'Conception de Protocoles DeFi',
          description: 'Architecture de protocole et mécanique token alignées sur le produit et le marché.',
        },
        {
          iconKey: 'osaasc',
          title: 'Services d\'Intégration OSAASC',
          description: 'Intégration pragmatique de capacités IA open-source dans les produits, workflows et infrastructures existants.',
        },
      ],
    },
    techStack: {
      title: 'Directions Technologiques',
      items: [
        { group: 'blockchain', question: 'Besoin d’une infrastructure smart contract robuste ?', technology: 'Ethereum' },
        { group: 'blockchain', question: 'Planifier des workflows de stockage décentralisé ?', technology: 'Filecoin' },
        { group: 'blockchain', question: 'Faire évoluer les opérations blockchain avec plus de débit ?', technology: 'Solana' },
        { group: 'ai', question: 'Évaluer le déploiement de LLM personnalisés ?', technology: 'DeepSeek' },
        { group: 'ai', question: 'Préférer un stack open-source ?', technology: 'LLama3' },
        { group: 'ai', question: 'Étudier les options d’intégration IA enterprise ?', technology: 'QWen3' },
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
      headline: 'Mieux vaut clarifier avant d’exécuter que corriger après le lancement.',
      subheadline: 'Choisissez un plan, partagez votre cas d’usage, puis avancez avec un point de départ plus clair.',
      highlightItems: ['Architecture Web3', 'Infrastructure IA', 'Feuilles d’exécution'],
      ctaTitle: 'Besoin d’une prochaine étape plus claire ?',
      ctaSubtitle: 'Commencez par le plan adapté à votre phase.',
      primaryCta: 'Réserver Quick Start',
      secondaryCta: 'Envoyer votre cas',
      emailLabel: 'hi@lebit.ai',
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
