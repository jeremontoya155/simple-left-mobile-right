
import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

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
              <div className="rounded-3xl shadow-2xl border border-gray-100 bg-white/90 p-4 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300">
                <div className="bg-white rounded-full shadow-lg h-24 w-24 flex items-center justify-center overflow-hidden border-2 border-emerald-100 mb-2">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-20 w-20 object-contain"
                    style={{ background: "transparent" }}
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
