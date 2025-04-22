
import React from "react";
import ProcessCard from "@/components/ProcessCard";
import { useLanguage } from "@/contexts/LanguageContext";
import { UserPlus, Instagram, Mail, ChevronRight } from "lucide-react";

const processSteps = [
  { icon: <UserPlus className="w-8 h-8" />, title: "Carga perfil cliente ideal", description: "Podrás cargar un perfil detallado del cliente que buscas alcanzar." },
  { icon: <Instagram className="w-8 h-8" />, title: "Creación del avatar", description: "Creamos un avatar automatizado para interactuar representando a tu marca." },
  { icon: <Mail className="w-8 h-8" />, title: "Búsqueda y contacto", description: "Buscar y contactar de forma inteligente perfiles compatibles." },
  { icon: <ChevronRight className="w-8 h-8" />, title: "Calificación y derivación", description: "Automáticamente se derivan y califican los leads más calificados." },
];

const ProcessSection = () => {
  const { language } = useLanguage();
  return (
    <section id="process" className="py-16 px-4 bg-emerald-50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">{language === 'es' ? "Proceso Hunter AI Pro" : "Hunter AI Pro Process"}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {processSteps.map((step, idx) => (
            <ProcessCard
              key={idx}
              icon={step.icon}
              title={step.title}
              description={step.description}
              expandable
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
