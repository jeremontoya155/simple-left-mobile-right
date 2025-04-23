import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const COMPANY_IMAGES = [
  "/lovable-uploads/c28dbb0b-9f98-47a5-94a9-caa93f4defec.png", // Print a Feel
  "/lovable-uploads/678cc131-1981-4e22-81c3-ef30ce39f8d0.png", // VM Black
  "/lovable-uploads/762edc4b-b892-4268-aa49-c79112676997.png", // VM Gold
  "/lovable-uploads/39568798-630a-4327-8fc2-45f6a1dc5971.png", // LR
  "/lovable-uploads/e0906a3c-5141-4088-afb2-60391c99bc22.png", // Innotion Holdings
  "/lovable-uploads/7c1d344c-64b1-4a71-8c6d-83188c7345a1.png", // The Digital CEO Accelerator
  "/lovable-uploads/6a3d649c-9efc-472b-8bbd-4ee5f49c8278.png", // G Logo
  "/lovable-uploads/7b79d3fc-dcf1-413b-8f8f-4ba329223879.png", // Zarge
  "/lovable-uploads/4428b605-cf09-42fc-9a6e-09b76e7faef0.png", // Zhen
  "/lovable-uploads/f6386996-3b0a-492f-9b99-685be919da92.png", // Ephalogic
];

const CompaniesSection = () => {
  const { t } = useLanguage();
  const autoplayPlugin = React.useMemo(() => Autoplay({ delay: 2000, stopOnInteraction: false }), []);

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto py-12 px-4">
        <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center animate-fade-in">
          {t('companies') as string}
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
