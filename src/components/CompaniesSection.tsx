
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const COMPANY_IMAGES = [
  "/lovable-uploads/9b2f7fd7-f636-4aa9-ba88-3de17e4eb57b.png", // CPG Recruitment
  "/lovable-uploads/7f42dc7d-2ea7-4a08-9116-54bb60befb14.png", // Lucky 8
  "/lovable-uploads/7c1d344c-64b1-4a71-8c6d-83188c7345a1.png", // The Digital CEO Accelerator
];

const CompaniesSection = () => {
  const { t } = useLanguage();
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto py-12 px-4">
        <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          {t("companies")}
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {COMPANY_IMAGES.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Company logo ${i + 1}`}
              className="max-h-20 w-auto object-contain grayscale hover:grayscale-0 transition"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompaniesSection;
