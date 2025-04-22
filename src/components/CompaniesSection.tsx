
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const COMPANY_IMAGES = [
  "/lovable-uploads/daaa6b48-631a-4e62-9a2c-1b53de78b883.png",
  "/lovable-uploads/8dc92067-487d-436c-abc7-0816cb9f301c.png",
  "/lovable-uploads/52161466-4c95-4dc6-852c-8ad0400565e5.png",
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
