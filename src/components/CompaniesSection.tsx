
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const COMPANY_IMAGES = [
  "/lovable-uploads/9b2f7fd7-f636-4aa9-ba88-3de17e4eb57b.png", // CPG Recruitment
  "/lovable-uploads/7f42dc7d-2ea7-4a08-9116-54bb60befb14.png", // Lucky 8
  "/lovable-uploads/7c1d344c-64b1-4a71-8c6d-83188c7345a1.png", // The Digital CEO Accelerator
  "/lovable-uploads/8f4a2922-db12-46fc-b423-d9df8c999bf4.png", // New VM Logo
  "/lovable-uploads/e0906a3c-5141-4088-afb2-60391c99bc22.png", // Innotion Holdings
  "/lovable-uploads/7ef59f57-c969-43b6-81ef-bead4c296b77.png", // VR Logo
  "/lovable-uploads/fc458b6a-fc50-4bdd-8013-e45159a6559a.png", // LR Logo
];

const CompaniesSection = () => {
  const { t } = useLanguage();
  const autoplayPlugin = React.useMemo(() => Autoplay({ delay: 2000, stopOnInteraction: false }), []);

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto py-12 px-4">
        <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center animate-fade-in">
          {t("companies")}
        </h3>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[autoplayPlugin]}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {COMPANY_IMAGES.map((img, i) => (
              <CarouselItem key={i} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                <div 
                  className="relative h-32 flex items-center justify-center p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in" 
                  style={{ animationDelay: `${i * 150}ms` }}
                >
                  <img
                    src={img}
                    alt={`Company logo ${i + 1}`}
                    className="max-h-20 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 transform hover:scale-105"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default CompaniesSection;
