
import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import TestimonialCard from "@/components/TestimonialCard";
import { useLanguage } from "@/contexts/LanguageContext";

const TestimonialsSection = () => {
  const { t, language } = useLanguage();

  // Define the image paths for each testimonial
  const testimonialImages = [
    "/lovable-uploads/063b1481-a6fa-4a1c-a1eb-7f0484a25fbe.png",   // Carmela Rodriguez
    "/lovable-uploads/7876da0e-7964-4d97-8dd2-09c79c6ace36.png",   // Richi Barret
    "/lovable-uploads/b622bedd-38fd-4dd1-87c9-190a671633d6.png"    // Sven Schelenz
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-emerald-50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          {language === 'es' ? "Testimonios" : "Testimonials"}
        </h2>
        <Carousel className="max-w-5xl mx-auto">
          <CarouselContent>
            {(t('testimonialsItems') as any[]).map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                <TestimonialCard
                  quote={testimonial.quote}
                  name={testimonial.name}
                  company={testimonial.company}
                  image={testimonialImages[index]}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-6">
            <CarouselPrevious className="mr-2 bg-emerald-600 text-white hover:bg-emerald-700" />
            <CarouselNext className="ml-2 bg-emerald-600 text-white hover:bg-emerald-700" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};
export default TestimonialsSection;
