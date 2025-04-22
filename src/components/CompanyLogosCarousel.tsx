
import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

// Únicamente las 3 nuevas empresas, con más estética y responsivo mejorado
const companyLogos = [
  { src: "/lovable-uploads/52161466-4c95-4dc6-852c-8ad0400565e5.png", alt: "CPG Recruitment" },
  { src: "/lovable-uploads/8dc92067-487d-436c-abc7-0816cb9f301c.png", alt: "Lucky 8" },
  { src: "/lovable-uploads/04d3127c-ea48-4004-bb13-337f80f7c665.png", alt: "Digital CEO Accelerator" },
];

const CompanyLogosCarousel = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <Carousel className="w-full max-w-xl mx-auto md:max-w-3xl lg:max-w-5xl">
        <CarouselContent className="flex items-center">
          {companyLogos.map((logo, idx) => (
            <CarouselItem key={idx} className="flex-1 basis-1/2 md:basis-1/3 px-2">
              <div className="rounded-xl shadow-lg border border-gray-200 bg-white p-6 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300">
                <img 
                  src={logo.src}
                  alt={logo.alt}
                  className="h-20 w-20 md:h-24 md:w-24 object-contain rounded-full mb-4 shadow-md border border-gray-100 bg-white"
                  style={{
                    background: "white",
                  }}
                />
                <span className="text-gray-700 text-base md:text-lg font-semibold text-center">{logo.alt}</span>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default CompanyLogosCarousel;
