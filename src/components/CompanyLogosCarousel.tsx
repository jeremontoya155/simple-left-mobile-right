
import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const companyLogos = [
  { src: "/lovable-uploads/22891c74-9cb1-4fd7-9b93-056b27e32be1.png", alt: "Empresa 1" },
  { src: "/lovable-uploads/4812e366-bb82-44dd-a52b-41de80965d63.png", alt: "Empresa 2" },
  { src: "/lovable-uploads/9a0bbd3b-4258-463c-9099-e0766668d71c.png", alt: "Empresa 3" },
  { src: "/lovable-uploads/77fc607d-62b5-4d09-b280-2ab87d9382cd.png", alt: "Empresa 4" },
  { src: "/lovable-uploads/934748dc-1ef6-4358-b48f-08dcf47c217e.png", alt: "CPG Recruitment" },
  { src: "/lovable-uploads/0a2153e7-a94d-4b56-b0fb-a3f2406be70c.png", alt: "Lucky 8" },
  { src: "/lovable-uploads/afcb9c18-2ff5-4813-9afa-7f94f317c825.png", alt: "Digital CEO" },
];

const CompanyLogosCarousel = () => {
  return (
    <Carousel className="w-full" autoplay loop>
      <CarouselContent>
        {companyLogos.map((logo, idx) => (
          <CarouselItem key={idx} className="md:basis-1/4 lg:basis-1/5">
            <div className="p-4 flex items-center justify-center">
              <img 
                src={logo.src}
                alt={logo.alt}
                className="h-16 w-auto mx-auto rounded-lg object-contain grayscale hover:grayscale-0 transition duration-300 transform hover:scale-110"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default CompanyLogosCarousel;
