
import React, { useState } from "react";
import ProcessCard from "@/components/ProcessCard";
import { useLanguage } from "@/contexts/LanguageContext";
import { Target, MessageSquareText, Bot, Globe, FileCheck2, LineChart } from "lucide-react";

const ProcessSection = () => {
  const { t } = useLanguage();
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

  // Icons for process steps
  const icons = [
    <Target className="w-8 h-8" key="target" />,
    <MessageSquareText className="w-8 h-8" key="message" />,
    <Bot className="w-8 h-8" key="bot" />,
    <Globe className="w-8 h-8" key="globe" />,
    <FileCheck2 className="w-8 h-8" key="file" />,
    <LineChart className="w-8 h-8" key="chart" />
  ];

  // Get steps from translation system
  const processSteps = t('processSteps') as Array<{ title: string; description: string }>;

  return (
    <section id="process" className="py-16 px-4 bg-emerald-50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          {t('processTitle') as string}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {processSteps.map((step, idx) => (
            <ProcessCard
              key={idx}
              icon={icons[idx]}
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
