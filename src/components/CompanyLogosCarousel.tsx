
import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import CompanyLogoCard from "@/components/CompanyLogoCard";
import { useLanguage } from "@/contexts/LanguageContext";

// NEW: Los logos con fondo transparente
const companyLogos = [
  {
    src: "/lovable-uploads/8857471c-c052-4474-bf67-337c4e1f0598.png",
    alt: "CPG Recruitment",
    nameKey: "company1" as const
  },
  {
    src: "/lovable-uploads/d3fc04bd-ae52-41a9-9b0a-d03c5b403f66.png",
    alt: "Lucky 8",
    nameKey: "company2" as const
  },
  {
    src: "/lovable-uploads/d6aa3023-5861-4c91-a75c-4fc2a7d7fd93.png",
    alt: "Digital CEO Accelerator",
    nameKey: "company3" as const
  },
  {
    src: "/lovable-uploads/c6cb20ce-e60e-42b3-a188-f82e27b252e3.png",
    alt: "Elite Ventures",
    nameKey: "company4" as const
  },
];

const CompanyLogosCarousel = () => {
  const { language } = useLanguage();

  return (
    <div className="w-full flex flex-col items-center pb-2 overflow-x-auto">
      <div className="flex gap-6 justify-center w-full">
        {companyLogos.map((logo, idx) => (
          <CompanyLogoCard
            key={idx}
            src={logo.src}
            alt={logo.alt}
            nameKey={logo.nameKey}
          />
        ))}
      </div>
    </div>
  );
};

export default CompanyLogosCarousel;
