
import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

// SOLO 3 logos, usando las imágenes proporcionadas
const companyLogos = [
  { src: "/lovable-uploads/a46ea9ed-d319-4a4b-8546-d2ff0a806342.png", alt: "CPG Recruitment" },
  { src: "/lovable-uploads/1de94c6f-ba6f-43ea-ab37-eda1785a7282.png", alt: "Lucky 8" },
  { src: "/lovable-uploads/71506ad2-4ede-4c53-95e4-af1bebb7a6d3.png", alt: "The Digital CEO Accelerator" },
];

const CompanyLogosCarousel = () => (
  <div className="w-full flex flex-col items-center pb-2">
    <Carousel className="w-full max-w-xl mx-auto md:max-w-3xl lg:max-w-4xl">
      <CarouselContent className="flex items-center">
        {companyLogos.map((logo, idx) => (
          <CarouselItem key={idx} className="flex-1 basis-1/3 px-2">
            <div className="rounded-3xl border border-emerald-100 bg-white/95 shadow-lg p-4 flex flex-col items-center justify-center hover:scale-105 hover:shadow-xl transition-all duration-300">
              <div className="h-24 w-24 flex items-center justify-center overflow-hidden mb-1">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-20 max-w-20 object-contain"
                  draggable={false}
                />
              </div>
              <span className="text-emerald-800 text-base md:text-lg font-bold text-center drop-shadow">{logo.alt}</span>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  </div>
);

export default CompanyLogosCarousel;
