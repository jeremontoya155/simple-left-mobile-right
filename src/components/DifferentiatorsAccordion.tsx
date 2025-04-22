
import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { ChevronDown, ChevronUp } from "lucide-react";

const DifferentiatorsAccordion = () => {
  const { t } = useLanguage();
  const differentiators = t("differentiators") as { title: string; desc: string }[];
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="container mx-auto py-12 px-2" id="differentiators">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
        {t("whyChooseUs")}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto">
        {differentiators.map((item, idx) => (
          <div
            key={idx}
            className="rounded-2xl bg-white/80 shadow-lg border border-emerald-100 transition-all overflow-hidden"
          >
            <button
              className="flex items-center justify-between w-full px-6 py-4 focus:outline-none gap-2"
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            >
              <span className="text-base md:text-lg font-semibold text-emerald-800">{item.title}</span>
              {openIndex === idx ? (
                <ChevronUp className="text-emerald-600" />
              ) : (
                <ChevronDown className="text-emerald-400" />
              )}
            </button>
            {openIndex === idx && (
              <div className="px-6 py-3 text-gray-700 text-sm md:text-base animate-fadeIn">
                {item.desc}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default DifferentiatorsAccordion;
