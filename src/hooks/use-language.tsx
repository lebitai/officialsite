import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type Language = 'en' | 'de' | 'fr';

interface Translations {
  nav: {
    services: string;
    technology: string;
    bookNow: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    getStarted: string;
  };
  consulting: {
    title: string;
    subtitle: string;
    basicPlan: {
      title: string;
      subtitle: string;
      duration: string;
      features: string[];
      button: string;
    };
    premiumPlan: {
      title: string;
      subtitle: string;
      duration: string;
      features: string[];
      button: string;
      badge: string;
    };
    enterprisePlan: {
      title: string;
      subtitle: string;
      duration: string;
      features: string[];
      button: string;
      badge: string;
    };
    note: string;
  };
  services: {
    title: string;
    items: {
      title: string;
      description: string;
    }[];
  };
  techStack: {
    title: string;
    questions: string[];
    technologies: {
      blockchain: string[];
      ai: string[];
    };
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
      bookNow: 'Book Now',
      contact: 'Contact',
    },
    hero: {
      title: 'Transform "Cutting-edge" into "Leading"',
      subtitle: 'Deep experience in Web3 × AI infrastructure. Avoid detours and go live fast.',
      getStarted: 'Get Started',
    },
    consulting: {
      title: 'Web3 & OSAASC Consulting',
      subtitle: 'Choose the right consulting plan for your needs and get expert guidance to start your Web3 and OSAASC journey',
      basicPlan: {
        title: 'Quick Start Plan',
        subtitle: 'Perfect for initial understanding and quick start',
        duration: '30-minute 1-on-1 online consultation',
        features: [
          'Requirements analysis and goal clarification',
          'Technology roadmap development',
          'Simple technical architecture guidance',
          'Key technology selection advice',
        ],
        button: 'Quick Start Plan',
      },
      premiumPlan: {
        title: 'Deep Consulting Plan',
        subtitle: 'In-depth analysis and detailed planning',
        duration: '60-minute 1-on-1 online consultation',
        features: [
          'Detailed requirements analysis and business assessment',
          'Actionable detailed roadmap',
          'Complete technical architecture design',
          'Function module analysis and performance bottleneck evaluation',
          'Cloud services and AI resource assessment',
          'Detailed implementation plan and timeline',
        ],
        button: 'Deep Consulting Plan',
        badge: 'Recommended',
      },
      enterprisePlan: {
        title: 'Enterprise OSAASC Plan',
        subtitle: 'Comprehensive enterprise-level AI infrastructure consulting',
        duration: '3-day face-to-face intensive consultation',
        features: [
          'Agentic AI infrastructure architecture design',
          'Distributed inference cluster deployment',
          'Small model fine-tuning and training',
          'Data standardization and processing',
          '3-day on-site efficient communication',
        ],
        button: 'Enterprise Plan',
        badge: 'Enterprise',
      },
      note: 'Note: All consultations only provide detailed planning and guidance, not including subsequent implementation services',
    },
    services: {
      title: 'Our Services',
      items: [
        {
          title: 'Enterprise Blockchain Infrastructure Design',
          description: 'Custom blockchain architecture tailored for enterprise needs with focus on scalability and security.',
        },
        {
          title: 'AI System Architecture Consulting',
          description: 'Comprehensive AI system design and implementation guidance for modern applications.',
        },
        {
          title: 'Web3 Application Development',
          description: 'End-to-end Web3 application development from concept to deployment.',
        },
        {
          title: 'Smart Contract Development',
          description: 'Secure and efficient smart contract development with comprehensive testing.',
        },
        {
          title: 'DeFi Protocol Design',
          description: 'Custom DeFi protocol architecture and tokenomics design.',
        },
        {
          title: 'OSAASC Integration Services',
          description: 'Seamless integration of generative AI capabilities into existing systems.',
        },
      ],
    },
    techStack: {
      title: 'Technical Solutions',
      questions: [
        'Setup smart contract infrastructure?',
        'Deploy AI-powered applications?',
        'Build decentralized systems?',
        'Integrate machine learning models?',
      ],
      technologies: {
        blockchain: ['Ethereum', 'Filecoin', 'Solana'],
        ai: ['DeepSeek', 'LLama3', 'QWen3'],
      },
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
      copyright: '© 2025 LebitAI. All rights reserved.',
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
      bookNow: 'Jetzt buchen',
      contact: 'Kontakt',
    },
    hero: {
      title: 'Verwandeln Sie "Spitzentechnologie" in "Marktführerschaft"',
      subtitle: 'Tiefgreifende Erfahrung in Web3 × KI-Infrastruktur. Umwege vermeiden und schnell live gehen.',
      getStarted: 'Jetzt starten',
    },
    consulting: {
      title: 'Web3 & OSAASC Beratung',
      subtitle: 'Wählen Sie den richtigen Beratungsplan für Ihre Bedürfnisse und erhalten Sie fachkundige Anleitung für Ihre Web3- und OSAASC-Reise',
      basicPlan: {
        title: 'Schnellstart-Plan',
        subtitle: 'Perfekt für erste Einblicke und schnellen Start',
        duration: '30-minütige 1-zu-1 Online-Beratung',
        features: [
          'Anforderungsanalyse und Zielklärung',
          'Technologie-Roadmap-Entwicklung',
          'Einfache technische Architekturberatung',
          'Beratung zur Technologieauswahl',
        ],
        button: 'Schnellstart-Plan',
      },
      premiumPlan: {
        title: 'Tiefgehende Beratung',
        subtitle: 'Eingehende Analyse und detaillierte Planung',
        duration: '60-minütige 1-zu-1 Online-Beratung',
        features: [
          'Detaillierte Anforderungsanalyse und Geschäftsbewertung',
          'Umsetzbare detaillierte Roadmap',
          'Vollständiges technisches Architekturdesign',
          'Funktionsmodulanalyse und Leistungsengpassbewertung',
          'Cloud-Services und KI-Ressourcenbewertung',
          'Detaillierter Implementierungsplan und Zeitplan',
        ],
        button: 'Tiefgehende Beratung',
        badge: 'Empfohlen',
      },
      enterprisePlan: {
        title: 'Enterprise OSAASC Plan',
        subtitle: 'Umfassende KI-Infrastrukturberatung auf Unternehmensebene',
        duration: '3-tägige persönliche Intensivberatung',
        features: [
          'Agentic AI Infrastruktur-Architekturdesign',
          'Verteilte Inferenz-Cluster-Bereitstellung',
          'Feinabstimmung und Training kleiner Modelle',
          'Datenstandardisierung und -verarbeitung',
          '3 Tage effiziente Vor-Ort-Kommunikation',
        ],
        button: 'Enterprise Plan',
        badge: 'Enterprise',
      },
      note: 'Hinweis: Alle Beratungen bieten nur detaillierte Planung und Anleitung, keine nachfolgenden Implementierungsdienste',
    },
    services: {
      title: 'Unsere Dienstleistungen',
      items: [
        {
          title: 'Enterprise Blockchain-Infrastruktur Design',
          description: 'Maßgeschneiderte Blockchain-Architektur für Unternehmensanforderungen mit Fokus auf Skalierbarkeit und Sicherheit.',
        },
        {
          title: 'KI-Systemarchitektur Beratung',
          description: 'Umfassende KI-Systemdesign- und Implementierungsberatung für moderne Anwendungen.',
        },
        {
          title: 'Web3 Anwendungsentwicklung',
          description: 'End-to-End Web3-Anwendungsentwicklung vom Konzept bis zur Bereitstellung.',
        },
        {
          title: 'Smart Contract Entwicklung',
          description: 'Sichere und effiziente Smart-Contract-Entwicklung mit umfassenden Tests.',
        },
        {
          title: 'DeFi Protokoll Design',
          description: 'Maßgeschneiderte DeFi-Protokollarchitektur und Tokenomics-Design.',
        },
        {
          title: 'OSAASC Integrationsdienste',
          description: 'Nahtlose Integration generativer KI-Fähigkeiten in bestehende Systeme.',
        },
      ],
    },
    techStack: {
      title: 'Technische Lösungen',
      questions: [
        'Smart-Contract-Infrastruktur einrichten?',
        'KI-gestützte Anwendungen bereitstellen?',
        'Dezentrale Systeme aufbauen?',
        'Machine-Learning-Modelle integrieren?',
      ],
      technologies: {
        blockchain: ['Ethereum', 'Filecoin', 'Solana'],
        ai: ['DeepSeek', 'LLama3', 'QWen3'],
      },
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
      copyright: '© 2025 LebitAI. Alle Rechte vorbehalten.',
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
      bookNow: 'Réserver',
      contact: 'Contact',
    },
    hero: {
      title: 'Transformez "Avant-garde" en "Leader"',
      subtitle: 'Expérience approfondie en infrastructure Web3 × IA. Évitez les détours et passez en production rapidement.',
      getStarted: 'Commencer',
    },
    consulting: {
      title: 'Conseil Web3 & OSAASC',
      subtitle: 'Choisissez le plan de conseil adapté à vos besoins et bénéficiez de conseils d\'experts pour démarrer votre parcours Web3 et OSAASC',
      basicPlan: {
        title: 'Plan Démarrage Rapide',
        subtitle: 'Parfait pour une première compréhension et un démarrage rapide',
        duration: 'Consultation en ligne 1-à-1 de 30 minutes',
        features: [
          'Analyse des besoins et clarification des objectifs',
          'Développement de la feuille de route technologique',
          'Conseils d\'architecture technique simple',
          'Conseils sur le choix des technologies clés',
        ],
        button: 'Plan Démarrage Rapide',
      },
      premiumPlan: {
        title: 'Plan Conseil Approfondi',
        subtitle: 'Analyse approfondie et planification détaillée',
        duration: 'Consultation en ligne 1-à-1 de 60 minutes',
        features: [
          'Analyse détaillée des besoins et évaluation commerciale',
          'Feuille de route détaillée et actionnable',
          'Conception complète de l\'architecture technique',
          'Analyse des modules fonctionnels et évaluation des goulots d\'étranglement',
          'Évaluation des services cloud et des ressources IA',
          'Plan de mise en œuvre détaillé et calendrier',
        ],
        button: 'Plan Conseil Approfondi',
        badge: 'Recommandé',
      },
      enterprisePlan: {
        title: 'Plan Enterprise OSAASC',
        subtitle: 'Conseil complet en infrastructure IA au niveau entreprise',
        duration: 'Consultation intensive en personne de 3 jours',
        features: [
          'Conception d\'architecture d\'infrastructure IA agentique',
          'Déploiement de cluster d\'inférence distribué',
          'Affinage et entraînement de petits modèles',
          'Standardisation et traitement des données',
          '3 jours de communication efficace sur site',
        ],
        button: 'Plan Enterprise',
        badge: 'Enterprise',
      },
      note: 'Note : Toutes les consultations fournissent uniquement une planification et des conseils détaillés, sans services de mise en œuvre ultérieurs',
    },
    services: {
      title: 'Nos Services',
      items: [
        {
          title: 'Conception d\'Infrastructure Blockchain Entreprise',
          description: 'Architecture blockchain personnalisée adaptée aux besoins des entreprises avec un accent sur l\'évolutivité et la sécurité.',
        },
        {
          title: 'Conseil en Architecture Système IA',
          description: 'Conception et conseils de mise en œuvre complets de systèmes IA pour les applications modernes.',
        },
        {
          title: 'Développement d\'Applications Web3',
          description: 'Développement d\'applications Web3 de bout en bout, du concept au déploiement.',
        },
        {
          title: 'Développement de Smart Contracts',
          description: 'Développement de smart contracts sécurisés et efficaces avec des tests complets.',
        },
        {
          title: 'Conception de Protocoles DeFi',
          description: 'Architecture de protocole DeFi personnalisée et conception de tokenomics.',
        },
        {
          title: 'Services d\'Intégration OSAASC',
          description: 'Intégration transparente des capacités d\'IA générative dans les systèmes existants.',
        },
      ],
    },
    techStack: {
      title: 'Solutions Techniques',
      questions: [
        'Configurer l\'infrastructure smart contract ?',
        'Déployer des applications alimentées par l\'IA ?',
        'Construire des systèmes décentralisés ?',
        'Intégrer des modèles de machine learning ?',
      ],
      technologies: {
        blockchain: ['Ethereum', 'Filecoin', 'Solana'],
        ai: ['DeepSeek', 'LLama3', 'QWen3'],
      },
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
      copyright: '© 2025 LebitAI. Tous droits réservés.',
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
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
];