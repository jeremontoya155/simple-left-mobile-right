
import React from "react";
import { ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const differentiatorsData = [
  {
    title: {
      es: "Automatización total",
      en: "Full automation"
    },
    description: {
      es: "Automatizamos todos los pasos para que solo te concentres en cerrar ventas.",
      en: "We automate every step so you can focus on closing deals."
    },
    icon: "zap"
  },
  {
    title: {
      es: "CRM integrado y seguimiento",
      en: "Integrated CRM & tracking"
    },
    description: {
      es: "Gestiona tus prospectos desde una sola plataforma. Todo tu funnel en un solo lugar.",
      en: "Manage your prospects from one platform. All your funnel in one place."
    },
    icon: "database"
  },
  {
    title: {
      es: "Personalización y escalabilidad",
      en: "Personalization & scalability"
    },
    description: {
      es: "Configura estrategias que crecen contigo y se adaptan a cada campaña.",
      en: "Set up strategies that grow with you and adapt to each campaign."
    },
    icon: "layers"
  },
  {
    title: {
      es: "Atención personalizada",
      en: "Personalized support"
    },
    description: {
      es: "Acompañamiento 1-a-1 para que obtengas el máximo de la herramienta.",
      en: "1-on-1 guidance to get the most from the tool."
    },
    icon: "message-circle"
  }
];

const getIcon = (icon: string) => {
  switch (icon) {
    case "zap":
      return <span className="h-9 w-9 rounded-full bg-emerald-50 flex items-center justify-center shadow mr-1"><svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="13 2 13 9 19 9" /><polygon points="13 22 4 15 8 15 8 9 16 2 16 15 20 15 20 22 13 22" /></svg></span>;
    case "database":
      return <span className="h-9 w-9 rounded-full bg-emerald-50 flex items-center justify-center shadow mr-1"><svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" /></svg></span>;
    case "layers":
      return <span className="h-9 w-9 rounded-full bg-emerald-50 flex items-center justify-center shadow mr-1"><svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></svg></span>;
    case "message-circle":
      return <span className="h-9 w-9 rounded-full bg-emerald-50 flex items-center justify-center shadow mr-1"><svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg></span>;
    default:
      return <span className="h-9 w-9 rounded-full bg-emerald-50 flex items-center justify-center shadow mr-1">★</span>;
  }
};

const DifferentiatorsSection = () => {
  const { language } = useLanguage();
  const [activeAccordion, setActiveAccordion] = React.useState<number | null>(null);

  return (
    <section id="differentiators" className="pt-12 pb-8 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center text-emerald-800">
          {language === 'es' ? "¿Qué nos hace diferentes?" : "What makes us different?"}
        </h2>
        <div className="max-w-2xl mx-auto flex flex-col gap-4">
          {differentiatorsData.map((item, idx) => {
            return (
              <div
                key={idx}
                className={`rounded-xl border border-emerald-200 transition-transform transform bg-white py-3 px-4 shadow-md hover:shadow-lg cursor-pointer duration-200 ${activeAccordion === idx ? "ring-2 ring-emerald-400" : ""}`}
                onClick={() => setActiveAccordion(activeAccordion === idx ? null : idx)}
              >
                <div className="flex items-center gap-4">
                  {getIcon(item.icon)}
                  <h3 className="font-bold text-lg flex-1">{item.title[language]}</h3>
                  <span className="ml-2">
                    <ChevronRight
                      className={`transition-transform duration-200 ${activeAccordion === idx ? "rotate-90 text-emerald-500" : "text-gray-400"}`}
                      size={24}
                    />
                  </span>
                </div>
                <div
                  className={`overflow-hidden transition-all duration-300 ${activeAccordion === idx ? "max-h-40 mt-3 opacity-100" : "max-h-0 opacity-0"}`}
                  style={{ transitionProperty: 'max-height, opacity' }}
                >
                  <p className="text-gray-700 text-base">{item.description[language]}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DifferentiatorsSection;
