
import React from "react";
import CompanyLogosCarousel from "@/components/CompanyLogosCarousel";
import { useLanguage } from "@/contexts/LanguageContext";

const CompaniesSection = () => {
  const { language } = useLanguage();
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto py-12 px-4">
        <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">{language === 'es' ? "Empresas con las que trabajamos" : "Companies we work with"}</h3>
        <CompanyLogosCarousel />
      </div>
    </section>
  );
};

export default CompaniesSection;
