
import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

// Solo las 3 empresas proporcionadas. Usamos las imágenes subidas por el usuario.
const companyLogos = [
  { src: "/lovable-uploads/52161466-4c95-4dc6-852c-8ad0400565e5.png", alt: "CPG Recruitment" },
  { src: "/lovable-uploads/8dc92067-487d-436c-abc7-0816cb9f301c.png", alt: "Lucky 8" },
  { src: "/lovable-uploads/04d3127c-ea48-4004-bb13-337f80f7c665.png", alt: "Digital CEO Accelerator" },
];

const CompanyLogosCarousel = () => {
  // Animación carousel sencilla "infinita" (dejar correr las imágenes lentamente)
  // NOTA: el componente Carousel no acepta autoplay; usaremos un CSS animation para dar un efecto visual sutil en mobile y desktop.
  return (
    <div className="w-full">
      <Carousel className="w-full max-w-xl mx-auto md:max-w-3xl lg:max-w-5xl">
        <CarouselContent className="flex items-center">
          {companyLogos.map((logo, idx) => (
            <CarouselItem key={idx} className="flex-1 basis-1/2 md:basis-1/3 px-2">
              <div className="rounded-xl shadow-lg border border-gray-200 bg-white p-4 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300">
                <img 
                  src={logo.src}
                  alt={logo.alt}
                  className="h-20 w-20 md:h-32 md:w-32 object-contain rounded-full mb-4 shadow-md border border-gray-100 bg-white"
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
      {/* Animación simple y mejor disposición para mobile */}
    </div>
  );
};

export default CompanyLogosCarousel;

