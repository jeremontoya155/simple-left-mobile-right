
import React, { createContext, useState, useContext, ReactNode } from 'react';

// Translation data
const translations = {
  en: {
    // Navbar
    home: "Home",
    about: "About Us",
    products: "Products ▾",
    contact: "Contact",
    
    // Hero section
    heroTitle: "HUNTER ASSISTANTS",
    heroDescription: "HUNTER I.S, a tool designed with innovative technology and complex algorithms that automate every step of the prospecting process, from identifying potential customers to contact and follow-up. Simplify your strategy, save time and effort in growing your brand.",
    moreInfo: "I want more info",
    
    // Sections
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
    
    // Footer
    contactUs: "Contact Us",
    forAnyQuestion: "For any questions, write to:",
    ourInstagram: "Our Instagram",
    ourEmail: "Our Email",
    location: "Córdoba, Argentina"
  },
  es: {
    // Navbar
    home: "Inicio",
    about: "Nosotros",
    products: "Productos ▾",
    contact: "Contacto",
    
    // Hero section
    heroTitle: "HUNTER ASSISTANTS",
    heroDescription: "HUNTER I.S, una herramienta diseñada con tecnología innovadora y algoritmos complejos que automatizan cada paso del proceso de prospección, desde la identificación de posibles clientes hasta el contacto y seguimiento. Simplifica tu estrategia, ahorra tiempo y esfuerzo en hacer crecer tu marca.",
    moreInfo: "Quiero más info",
    
    // Sections
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
    
    // Footer
    contactUs: "Contáctanos",
    forAnyQuestion: "Para cualquier duda escribir a:",
    ourInstagram: "Nuestro Instagram",
    ourEmail: "Nuestro Email",
    location: "Córdoba, Argentina"
  }
};

type Language = 'en' | 'es';
type TranslationKeys = keyof typeof translations.en;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKeys) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: TranslationKeys): string => {
    return translations[language][key] || key;
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
