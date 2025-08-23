import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'zh';

interface Translations {
  // Navigation
  nav: {
    services: string;
    technology: string;
    bookNow: string;
  };
  
  // Hero Section
  hero: {
    title: string;
    subtitle: string;
    getStarted: string;
  };
  
  // Consulting Section
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
    note: string;
  };
  
  // Services Section
  services: {
    title: string;
    items: {
      title: string;
      description: string;
    }[];
  };
  
  // Tech Stack Section
  techStack: {
    questions: string[];
    technologies: {
      blockchain: string[];
      ai: string[];
    };
  };
  
  // Contact Section
  contact: {
    title: string;
    subtitle: string;
    form: {
      name: string;
      email: string;
      message: string;
      send: string;
    };
  };
  
  // Footer
  footer: {
    services: string;
    consulting: string;
    contact: string;
    social: string;
    copyright: string;
  };
  
  // 404 Page
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
    },
    hero: {
      title: 'Experts with rich experience in leading tech products and projects at your service',
      subtitle: 'Deep experience in Web3 × AI infrastructure, avoid detours and go live fast.',
      getStarted: 'Get Started',
    },
    consulting: {
      title: 'Web3 & GenAI Consulting',
      subtitle: 'Choose the right consulting plan for your needs and get expert guidance to start your Web3 and GenAI journey',
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
        button: 'Choose Quick Start Plan',
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
        button: 'Choose Deep Consulting Plan',
        badge: 'Recommended',
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
          title: 'GenAI Integration Services',
          description: 'Seamless integration of generative AI capabilities into existing systems.',
        },
      ],
    },
    techStack: {
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
      subtitle: 'Ready to start your project? Let\'s discuss how we can help.',
      form: {
        name: 'Name',
        email: 'Email',
        message: 'Message',
        send: 'Send Message',
      },
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
  zh: {
    nav: {
      services: '服务',
      technology: '技术',
      bookNow: '立即预订',
    },
    hero: {
      title: '丰富且具有领先科技产品和项目实践的专家为您服务',
      subtitle: 'Web3 × AI 基建深度经验沉淀，少走弯路、快速上线',
      getStarted: '开始使用',
    },
    consulting: {
      title: 'Web3 & GenAI 咨询',
      subtitle: '选择适合您需求的咨询方案，获得专业指导开启您的 Web3 和 GenAI 之旅',
      basicPlan: {
        title: '快速启动方案',
        subtitle: '适合初步了解和快速启动',
        duration: '30分钟 1对1 线上沟通',
        features: [
          '需求分析和目标梳理',
          '技术路线图制定',
          '简单技术架构指引',
          '关键技术选型建议',
        ],
        button: '选择快速启动方案',
      },
      premiumPlan: {
        title: '深度咨询方案',
        subtitle: '深度分析，详细规划',
        duration: '60分钟 1对1 线上沟通',
        features: [
          '详细需求分析和业务评估',
          '可落地执行的详细路线图',
          '完整技术架构设计',
          '功能模块分析和性能瓶颈评估',
          '云服务和 AI 资源评估',
          '详细实施计划和时间安排',
        ],
        button: '选择深度咨询方案',
        badge: '推荐方案',
      },
      note: '注：所有咨询仅提供详细规划和指导，不包含后续实施服务',
    },
    services: {
      title: '我们的服务',
      items: [
        {
          title: '企业区块链基础设施设计',
          description: '为企业需求量身定制的区块链架构，专注于可扩展性和安全性。',
        },
        {
          title: 'AI 系统架构咨询',
          description: '为现代应用提供全面的 AI 系统设计和实施指导。',
        },
        {
          title: 'Web3 应用开发',
          description: '从概念到部署的端到端 Web3 应用开发。',
        },
        {
          title: '智能合约开发',
          description: '安全高效的智能合约开发，包含全面测试。',
        },
        {
          title: 'DeFi 协议设计',
          description: '定制 DeFi 协议架构和代币经济学设计。',
        },
        {
          title: 'GenAI 集成服务',
          description: '将生成式 AI 能力无缝集成到现有系统中。',
        },
      ],
    },
    techStack: {
      questions: [
        '搭建智能合约基础设施？',
        '部署 AI 驱动应用？',
        '构建去中心化系统？',
        '集成机器学习模型？',
      ],
      technologies: {
        blockchain: ['以太坊', 'Filecoin', 'Solana'],
        ai: ['DeepSeek', 'LLama3', 'QWen3'],
      },
    },
    contact: {
      title: '联系我们',
      subtitle: '准备开始您的项目？让我们讨论如何为您提供帮助。',
      form: {
        name: '姓名',
        email: '邮箱',
        message: '消息',
        send: '发送消息',
      },
    },
    footer: {
      services: '服务',
      consulting: '咨询',
      contact: '联系',
      social: '关注我们',
      copyright: '© 2025 LebitAI. 保留所有权利。',
    },
    notFound: {
      title: '404 - 页面未找到',
      subtitle: '您要查找的页面不存在。',
      backHome: '返回首页',
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

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>('zh'); // 默认中文

  const value = {
    language,
    setLanguage,
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