
import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import TestimonialCard from "@/components/TestimonialCard";
import { useLanguage } from "@/contexts/LanguageContext";

const TestimonialsSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">{t('testimonials') as string}</h2>
        <Carousel className="max-w-4xl mx-auto">
          <CarouselContent>
            {(t('testimonialsItems') as any[]).map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                <TestimonialCard
                  quote={testimonial.quote}
                  name={testimonial.name}
                  company={testimonial.company}
                  plan="Premium Plan"
                  results="Resultados increíbles"
                  rating={5}
                  image={index % 2 === 0 ? "/lovable-uploads/934748dc-1ef6-4358-b48f-08dcf47c217e.png" : "/lovable-uploads/0a2153e7-a94d-4b56-b0fb-a3f2406be70c.png"}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:flex justify-center mt-6">
            <CarouselPrevious className="mr-2" />
            <CarouselNext className="ml-2" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};
export default TestimonialsSection;
