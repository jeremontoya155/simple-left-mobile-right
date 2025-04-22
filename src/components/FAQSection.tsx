
import React from "react";
import FAQ from "@/components/FAQ";
import { useLanguage } from "@/contexts/LanguageContext";

const FAQSection = () => {
  const { t } = useLanguage();
  return (
    <section id="faq" className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">{t('faq') as string}</h2>
        <FAQ items={t('faqItems') as any[]} />
      </div>
    </section>
  );
};

export default FAQSection;
