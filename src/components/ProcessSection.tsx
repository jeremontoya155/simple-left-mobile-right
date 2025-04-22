
import React, { useState } from "react";
import ProcessCard from "@/components/ProcessCard";
import { useLanguage } from "@/contexts/LanguageContext";
import { UserPlus, Instagram, Mail, ChevronRight } from "lucide-react";

const ProcessSection = () => {
  const { t, language } = useLanguage();
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

  const processSteps = [
    {
      icon: <UserPlus className="w-8 h-8" />,
      title: t("step1"),
      description: t("step1Desc"),
    },
    {
      icon: <Instagram className="w-8 h-8" />,
      title: t("step2"),
      description: t("step2Desc"),
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: t("step3"),
      description: t("step3Desc"),
    },
    {
      icon: <ChevronRight className="w-8 h-8" />,
      title: t("step4"),
      description: t("step4Desc"),
    },
  ];

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
