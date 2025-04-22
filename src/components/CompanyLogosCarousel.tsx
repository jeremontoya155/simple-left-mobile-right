
import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

// Logos with removed background
const companyLogos = [
  { src: "/lovable-uploads/4a277451-208b-4d65-9bec-8adee470ee5a.png", alt: "CPG Recruitment" },
  { src: "/lovable-uploads/37052fce-a838-40ea-9b0e-ed026fa21016.png", alt: "Lucky 8" },
  { src: "/lovable-uploads/6d9392a1-092a-46b9-9b6a-764900c609f5.png", alt: "Digital CEO Accelerator" },
  { src: "/lovable-uploads/daaa6b48-631a-4e62-9a2c-1b53de78b883.png", alt: "Elite Ventures" },
];

const CompanyLogosCarousel = () => {
  return (
    <div className="w-full flex flex-col items-center pb-2">
      <Carousel className="w-full max-w-xl mx-auto md:max-w-3xl lg:max-w-5xl">
        <CarouselContent className="flex items-center">
          {companyLogos.map((logo, idx) => (
            <CarouselItem key={idx} className="flex-1 basis-1/2 md:basis-1/4 px-2">
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
};

export default CompanyLogosCarousel;
