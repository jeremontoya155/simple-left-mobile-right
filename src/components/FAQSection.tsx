
import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useLanguage } from "@/contexts/LanguageContext";

const FAQSection = () => {
  const { t, language } = useLanguage();
  
  return (
    <section id="faq" className="py-16 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          {language === 'es' ? "Preguntas Frecuentes" : "Frequently Asked Questions"}
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {(t('faqItems') as any[]).map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-emerald-100">
              <AccordionTrigger className="text-lg font-medium hover:text-emerald-600 transition-colors py-4">
                {item.question.replace(/[.-]/g, '')}
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 pb-4 pr-6">
                {item.answer.replace(/[.-]/g, '')}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
