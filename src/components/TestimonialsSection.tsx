
import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import TestimonialCard from "@/components/TestimonialCard";
import { useLanguage } from "@/contexts/LanguageContext";

const TestimonialsSection = () => {
  const { t, language } = useLanguage();

  // Corrected order: Richi, Sven, Carmela with correct images
  const testimonialImages = [
    "/lovable-uploads/0127d549-a27b-4615-a14b-04a704216a08.png",   // Richi Barret
    "/lovable-uploads/f6386996-3b0a-492f-9b99-685be919da92.png",   // Sven Schelenz (corrected image)
    "/lovable-uploads/934748dc-1ef6-4358-b48f-08dcf47c217e.png"    // Carmela Rodriguez (corrected image)
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-emerald-50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          {language === 'es' ? "Testimonios" : "Testimonials"}
        </h2>
        <Carousel className="max-w-4xl mx-auto">
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
