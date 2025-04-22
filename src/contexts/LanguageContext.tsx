import React, { createContext, useState, useContext, ReactNode } from 'react';

type TranslationKey = 
  | 'home' 
  | 'about' 
  | 'products' 
  | 'contact' 
  | 'heroTitle' 
  | 'heroDescription' 
  | 'moreInfo' 
  | 'channelsTitle' 
  | 'softwareTitle' 
  | 'softwareDescription' 
  | 'functionalityTitle' 
  | 'functionalityPills' 
  | 'benefitsTitle' 
  | 'benefitBoxes' 
  | 'contactUs' 
  | 'forAnyQuestion' 
  | 'ourInstagram' 
  | 'ourEmail' 
  | 'location'
  | 'features'
  | 'plans'
  | 'requestDemo'
  | 'welcomeHunter'
  | 'yourGoalsOurTarget'
  | 'tryHunterNow'
  | 'requestFreeDemo'
  | 'whatIsHunterAI'
  | 'whatIsHunterAIDesc'
  | 'howItWorks'
  | 'step1'
  | 'step2'
  | 'step3'
  | 'step4'
  | 'keyBenefits'
  | 'benefit1'
  | 'benefit2'
  | 'benefit3'
  | 'benefit4'
  | 'testimonials'
  | 'testimonialsItems'
  | 'plansAndPricing'
  | 'basicPlan'
  | 'professionalPlan'
  | 'businessPlan'
  | 'choosePlan'
  | 'faq'
  | 'faqItems'
  | 'finalCTA'
  | 'startNow'
  | 'contactInfo'
  | 'quickLinks'
  | 'privacyPolicy'
  | 'termsAndConditions'
  | 'differentiators'
  | 'whyChooseUs'
  | 'company1' | 'company2' | 'company3' | 'company4'
  | 'company1Desc' | 'company2Desc' | 'company3Desc' | 'company4Desc'
  | 'companiesTitle'
  | 'freemiumPlan';

const translations = {
  en: {
    home: "Home",
    about: "About Us",
    products: "Products",
    contact: "Contact",
    features: "Features",
    plans: "Plans",
    requestDemo: "Request Demo",
    
    heroTitle: "HUNTER ASSISTANTS",
    heroDescription: "We boost customer acquisition and conversion with artificial intelligence, automating multi-channel prospecting and lead management without interruption. For businesses or personal brands looking to attract customers in a sustainable and scalable way.",
    welcomeHunter: "Welcome to Hunter, where we don't wait for opportunities — we create and hunt them.",
    yourGoalsOurTarget: "Your goals, our target.",
    tryHunterNow: "Try Hunter Now",
    requestFreeDemo: "Request Free Demo",
    moreInfo: "I want more info",
    
    whatIsHunterAI: "What is Hunter AI?",
    whatIsHunterAIDesc: "We empower customer acquisition and conversion with artificial intelligence, automating prospecting and lead management across multiple channels, without interruption for companies or personal brands looking to attract customers in a sustainable and scalable way.",
    
    howItWorks: "How it Works",
    step1: "Load ideal client profile",
    step2: "Create avatar",
    step3: "Search and contact compatible profiles",
    step4: "Automatic qualification and referral",
    
    keyBenefits: "Key Benefits",
    benefit1: "Message automation (100-300 daily)",
    benefit2: "Integration with multiple platforms",
    benefit3: "CRM and unified inbox",
    benefit4: "Scalability through multiple accounts",
    
    testimonials: "Testimonials",
    testimonialsItems: [
      {
        quote: "Hunter AI transformed our lead generation process completely. We now reach 3x more qualified prospects with half the effort.",
        name: "John Smith",
        company: "Marketing Solutions Inc."
      },
      {
        quote: "The automation capabilities of Hunter have saved us countless hours of manual work while improving our conversion rates.",
        name: "Sarah Johnson",
        company: "Growth Partners LLC"
      },
      {
        quote: "Since implementing Hunter AI, our sales team can focus on closing deals rather than prospecting. Game changer!",
        name: "Michael Rodriguez",
        company: "SaaS Enterprises"
      }
    ],
    
    plansAndPricing: "Plans and Pricing",
    basicPlan: {
      title: "Basic Plan",
      features: [
        "1 social network integration",
        "Up to 100 daily messages",
        "Basic analytics dashboard",
        "Email support"
      ],
      price: "$99/month"
    },
    professionalPlan: {
      title: "Professional Plan",
      features: [
        "3 social network integrations",
        "Up to 200 daily messages",
        "Advanced analytics dashboard",
        "Priority email support",
        "Basic CRM features"
      ],
      price: "$199/month"
    },
    businessPlan: {
      title: "Business Plan",
      features: [
        "All social networks integration",
        "Up to 300 daily messages",
        "Complete analytics suite",
        "24/7 priority support",
        "Advanced CRM features",
        "Team collaboration tools"
      ],
      price: "$349/month"
    },
    choosePlan: "Choose Plan",
    
    faq: "Frequently Asked Questions",
    faqItems: [
      {
        question: "How does Hunter AI find potential customers?",
        answer: "Hunter AI uses advanced algorithms to analyze social networks and identify profiles that match your ideal customer criteria, then initiates personalized contact based on your defined strategy."
      },
      {
        question: "Is it compliant with platform terms of service?",
        answer: "Yes, Hunter AI is designed to operate within the guidelines and terms of service of all integrated platforms, ensuring ethical and compliant prospecting."
      },
      {
        question: "Can I customize the automated messages?",
        answer: "Absolutely! You can create and customize message templates that align with your brand voice and communication style."
      },
      {
        question: "How long does it take to see results?",
        answer: "Most clients start seeing significant results within the first 2-4 weeks of implementation, depending on their target market and campaign settings."
      }
    ],
    
    finalCTA: "You're one click away from your next hunt.",
    startNow: "Start Now",
    
    channelsTitle: "ON ALL YOUR SERVICE CHANNELS",
    softwareTitle: "THE SOFTWARE DOES THE WORK FOR YOU",
    softwareDescription: "It's a system designed to maximize results with strategic precision. Its ability to configure advanced parameters, customize strategies, and manage interactions in real-time will allow you to obtain up to 3,800 monthly contacts. With a sophisticated and intuitive dashboard, you'll be able to monitor each stage of the process. Hunter will boost your growth in an intelligent and controlled manner.",
    
    functionalityTitle: "TYPES OF FUNCTIONALITIES",
    functionalityPills: [
      "Prospect Management",
      "Integral Dashboard",
      "Metrics Tracking",
      "Strategy Optimization",
      "Data Analysis",
      "Strategic Automation",
      "Engagement Increase"
    ],
    
    benefitsTitle: "BENEFITS",
    benefitBoxes: [
      {
        title: "TIME AND RESOURCE SAVINGS",
        description: "Automates the entire prospecting process, reducing manual and repetitive tasks."
      },
      {
        title: "INCREASED PRODUCTIVITY",
        description: "Our Hunter takes care of manual tasks in seconds with precision."
      },
      {
        title: "MAKE INTELLIGENT DECISIONS",
        description: "Advanced analysis of effective capture and adjusts strategies for higher performance."
      },
      {
        title: "INCREASED CONVERSIONS",
        description: "Greater follow-up and attention to convert your customers."
      },
      {
        title: "COST REDUCTION",
        description: "Minimize operational costs by optimizing automated tasks and eliminating manual processes."
      },
      {
        title: "SCALABLE STRATEGIES UP TO 10",
        description: "Get insights from various strategies, adjusting performance variables."
      }
    ],
    
    whyChooseUs: "Why choose us?",
    differentiators: [
      { title: "AI-Powered Automation", desc: "Automate your prospecting efforts using cutting-edge AI designed for your business." },
      { title: "Multichannel Messaging", desc: "Reach customers on Instagram, LinkedIn, WhatsApp, and more without friction." },
      { title: "Detailed Analytics", desc: "Gain valuable insights to optimize results and scale." },
      { title: "Integrated CRM", desc: "Manage all responses in a single place with smart filtering." },
    ],
    companiesTitle: "Companies we work with",
    company1: "CPG Recruitment",
    company2: "Lucky 8",
    company3: "Digital CEO Accelerator",
    company4: "Elite Ventures",
    company1Desc: "",
    company2Desc: "",
    company3Desc: "",
    company4Desc: "",
    freemiumPlan: {
      title: "Freemium",
      features: [
        "Basic account with limited daily actions",
        "Access to general dashboard",
        "Support only via documentation"
      ],
      price: "$0/month"
    },
    
    contactUs: "Contact Us",
    contactInfo: "Contact Information",
    quickLinks: "Quick Links",
    privacyPolicy: "Privacy Policy",
    termsAndConditions: "Terms and Conditions",
    forAnyQuestion: "For any questions, write to:",
    ourInstagram: "Our Instagram",
    ourEmail: "Our Email",
    location: "Córdoba, Argentina"
  },
  es: {
    home: "Inicio",
    about: "Nosotros",
    products: "Productos",
    contact: "Contacto",
    features: "Características",
    plans: "Planes",
    requestDemo: "Solicitar Demo",
    
    heroTitle: "HUNTER ASSISTANTS",
    heroDescription: "Potenciamos la captación y conversión de clientes con inteligencia artificial, automatizando la prospección y gestión de leads en múlticanal, sin interrupción. Para empresas o marcas personales que buscan atraer clientes de manera sostenible y escalable.",
    welcomeHunter: "Bienvenido a Hunter, donde no esperamos oportunidades — las creamos y las cazamos.",
    yourGoalsOurTarget: "Tus metas, nuestro blanco.",
    tryHunterNow: "Probar Hunter ahora",
    requestFreeDemo: "Solicitar demo gratuita",
    moreInfo: "Quiero más info",
    
    whatIsHunterAI: "¿Qué es Hunter AI?",
    whatIsHunterAIDesc: "Potenciamos la captación y conversión de clientes con inteligencia artificial, automatizando la prospección y gestión de leads en múlticanal, sin interrupción para empresas o marcas personales que buscan atraer clientes de manera sostenible y escalable.",
    
    howItWorks: "Cómo Funciona",
    step1: "Carga del perfil del cliente ideal",
    step2: "Creación del avatar",
    step3: "Búsqueda y contacto con perfiles compatibles",
    step4: "Calificación y derivación automática",
    
    keyBenefits: "Beneficios Clave",
    benefit1: "Automatización de mensajes (100-300 diarios)",
    benefit2: "Integración con múltiples plataformas",
    benefit3: "CRM y bandeja unificada",
    benefit4: "Escalabilidad mediante múltiples cuentas",
    
    testimonials: "Testimonios",
    testimonialsItems: [
      {
        quote: "Hunter AI transformó completamente nuestro proceso de generación de leads. Ahora alcanzamos 3 veces más prospectos calificados con la mitad del esfuerzo.",
        name: "Juan Pérez",
        company: "Marketing Solutions Inc."
      },
      {
        quote: "Las capacidades de automatización de Hunter nos han ahorrado incontables horas de trabajo manual mientras mejoraban nuestras tasas de conversión.",
        name: "Sara Rodríguez",
        company: "Growth Partners LLC"
      },
      {
        quote: "Desde que implementamos Hunter AI, nuestro equipo de ventas puede concentrarse en cerrar tratos en lugar de buscar prospectos. ¡Un cambio radical!",
        name: "Miguel González",
        company: "SaaS Enterprises"
      }
    ],
    
    plansAndPricing: "Planes y Precios",
    basicPlan: {
      title: "Plan Básico",
      features: [
        "Integración con 1 red social",
        "Hasta 100 mensajes diarios",
        "Panel de análisis básico",
        "Soporte por email"
      ],
      price: "$99/mes"
    },
    professionalPlan: {
      title: "Plan Profesional",
      features: [
        "Integración con 3 redes sociales",
        "Hasta 200 mensajes diarios",
        "Panel de análisis avanzado",
        "Soporte prioritario por email",
        "Características básicas de CRM"
      ],
      price: "$199/mes"
    },
    businessPlan: {
      title: "Plan Empresarial",
      features: [
        "Integración con todas las redes sociales",
        "Hasta 300 mensajes diarios",
        "Suite completa de análisis",
        "Soporte prioritario 24/7",
        "Características avanzadas de CRM",
        "Herramientas de colaboración en equipo"
      ],
      price: "$349/mes"
    },
    choosePlan: "Elegir Plan",
    
    faq: "Preguntas Frecuentes",
    faqItems: [
      {
        question: "¿Cómo encuentra Hunter AI a potenciales clientes?",
        answer: "Hunter AI utiliza algoritmos avanzados para analizar redes sociales e identificar perfiles que coinciden con los criterios de tu cliente ideal, luego inicia contactos personalizados basados en tu estrategia definida."
      },
      {
        question: "¿Cumple con los términos de servicio de las plataformas?",
        answer: "Sí, Hunter AI está diseñado para operar dentro de las directrices y términos de servicio de todas las plataformas integradas, asegurando una prospección ética y conforme."
      },
      {
        question: "¿Puedo personalizar los mensajes automatizados?",
        answer: "¡Absolutamente! Puedes crear y personalizar plantillas de mensajes que se alineen con la voz de tu marca y estilo de comunicación."
      },
      {
        question: "¿Cuánto tiempo lleva ver resultados?",
        answer: "La mayoría de los clientes comienzan a ver resultados significativos dentro de las primeras 2-4 semanas de implementación, dependiendo de su mercado objetivo y configuración de campaña."
      }
    ],
    
    finalCTA: "Estás a un clic de tu próxima cacería.",
    startNow: "Empezar ahora",
    
    channelsTitle: "EN TODOS TUS CANALES DE ATENCIÓN",
    softwareTitle: "EL SOFTWARE HACE EL TRABAJO POR TI",
    softwareDescription: "Es un sistema diseñado para maximizar resultados con precisión estratégica su capacidad para configurar parámetros avanzados, personalizar estrategias y gestionar interacciones en tiempo real te permitirá obtener hasta 3.800 contactos mensuales. Con un sofisticado e intuitivo dashboard podrás monitorear cada etapa de proceso, Hunter impulsará tu crecimiento de manera inteligente y controlada.",
    
    functionalityTitle: "TIPOS DE FUNCIONALIDADES",
    functionalityPills: [
      "Gestión prospecto",
      "Dashboard Integral",
      "Seguimiento de Métricas",
      "Optimización de Estrategias",
      "Análisis de Datos",
      "Automatización Estratégica",
      "Aumento del Engagement"
    ],
    
    benefitsTitle: "BENEFICIOS",
    benefitBoxes: [
      {
        title: "AHORRO DE TIEMPO Y RECURSOS",
        description: "Automatiza todo el proceso de prospección, reduciendo tareas manuales y repetitivas."
      },
      {
        title: "MAYOR PRODUCTIVIDAD",
        description: "Nuestro Hunter se encarga de tareas manuales en cuestión de segundos de manera precisa."
      },
      {
        title: "TOMA DECISIONES INTELIGENTES",
        description: "Análisis avanzado de la captación efectiva y ajusta estrategias para mayor rendimiento."
      },
      {
        title: "INCREMENTO EN CONVERSIONES",
        description: "Mayor seguimiento y atención para convertir tus clientes."
      },
      {
        title: "REDUCCIÓN DE COSTOS",
        description: "Minimiza los costes operacionales al optimizar tareas automatizadas y eliminar procesos manuales."
      },
      {
        title: "ESTRATEGIAS ESCALABLES HASTA 10",
        description: "Consigue insights de diversas estrategias, ajustando variables de rendimiento."
      }
    ],
    
    whyChooseUs: "¿Por qué elegirnos?",
    differentiators: [
      { title: "Automatización impulsada por IA", desc: "Automatiza la prospección con IA avanzada para tu negocio." },
      { title: "Mensajería multicanal", desc: "Llega a clientes en Instagram, LinkedIn, WhatsApp y más sin fricción." },
      { title: "Analytics detallados", desc: "Obtén insights para optimizar resultados y escalar." },
      { title: "CRM integrado", desc: "Gestiona todas las respuestas en un solo lugar con filtrado inteligente." },
    ],
    companiesTitle: "Empresas con las que trabajamos",
    company1: "CPG Recruitment",
    company2: "Lucky 8",
    company3: "Digital CEO Accelerator",
    company4: "Elite Ventures",
    company1Desc: "",
    company2Desc: "",
    company3Desc: "",
    company4Desc: "",
    freemiumPlan: {
      title: "Freemium",
      features: [
        "Cuenta básica con acciones diarias limitadas",
        "Acceso a panel general",
        "Soporte solo vía documentación"
      ],
      price: "$0/mes"
    },
    
    contactUs: "Contáctanos",
    contactInfo: "Información de Contacto",
    quickLinks: "Enlaces Rápidos",
    privacyPolicy: "Política de Privacidad",
    termsAndConditions: "Términos y Condiciones",
    forAnyQuestion: "Para cualquier duda escribir a:",
    ourInstagram: "Nuestro Instagram",
    ourEmail: "Nuestro Email",
    location: "Córdoba, Argentina"
  }
};

type Language = 'en' | 'es';

type TranslationValue = string | string[] | { title: string; description: string }[] | any;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => TranslationValue;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: TranslationKey): TranslationValue => {
    return translations[language][key];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
