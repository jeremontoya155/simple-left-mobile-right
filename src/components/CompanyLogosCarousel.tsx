
import React from "react";

const companyLogos = [
  { src: "/lovable-uploads/22891c74-9cb1-4fd7-9b93-056b27e32be1.png", alt: "Empresa 1" },
  { src: "/lovable-uploads/4812e366-bb82-44dd-a52b-41de80965d63.png", alt: "Empresa 2" },
  { src: "/lovable-uploads/9a0bbd3b-4258-463c-9099-e0766668d71c.png", alt: "Empresa 3" },
  { src: "/lovable-uploads/77fc607d-62b5-4d09-b280-2ab87d9382cd.png", alt: "Empresa 4" },
];

const CompanyLogosCarousel = () => {
  return (
    <div className="w-full py-6 bg-white">
      <div className="flex items-center justify-center space-x-8 overflow-x-auto scrollbar-none">
        {companyLogos.map((logo, idx) => (
          <img 
            key={idx}
            src={logo.src}
            alt={logo.alt}
            className="h-16 w-auto mx-4 rounded-lg object-contain grayscale hover:grayscale-0 transition duration-300"
          />
        ))}
      </div>
    </div>
  );
};

export default CompanyLogosCarousel;
