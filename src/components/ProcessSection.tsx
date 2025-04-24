
import React, { useState } from "react";
import ProcessCard from "@/components/ProcessCard";
import { useLanguage } from "@/contexts/LanguageContext";
import { Target, MessageSquareText, Bot, Globe, FileCheck2, LineChart } from "lucide-react";

const ProcessSection = () => {
  const { t, language } = useLanguage();
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

  const processSteps = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "🧠 Segmentación Específica",
      description: "Nuestro sistema analiza y detecta potenciales leads basados en perfiles y comportamientos predefinidos.",
    },
    {
      icon: <MessageSquareText className="w-8 h-8" />,
      title: "💬 Mensajes Automatizados",
      description: "Envío inteligente de mensajes personalizados según el perfil del lead y su etapa en el embudo.",
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "🤖 Sistema de Respuesta",
      description: "Automatiza el flujo de comunicación con leads detectados según parámetros establecidos.",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "🌐 Multicanal",
      description: "Integración con múltiples plataformas para maximizar el alcance y eficacia de las campañas.",
    },
    {
      icon: <FileCheck2 className="w-8 h-8" />,
      title: "🗂️ Clasificación CRM",
      description: "Categorización automática en base a interacciones, permitiendo optimizar la estrategia de ventas.",
    },
    {
      icon: <LineChart className="w-8 h-8" />,
      title: "📊 Sistema de Seguimiento",
      description: "Monitoriza la progresión de cada lead a través del embudo de conversión.",
    },
  ];

  return (
    <section id="process" className="py-16 px-4 bg-emerald-50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          {language === 'es' ? "Proceso Hunter AI Pro" : "Hunter AI Pro Process"}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {processSteps.map((step, idx) => (
            <ProcessCard
              key={idx}
              icon={step.icon}
              title={step.title}
              description={step.description}
              expanded={expandedIdx === idx}
              onToggle={() => setExpandedIdx(expandedIdx === idx ? null : idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
