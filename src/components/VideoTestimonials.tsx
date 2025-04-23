
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const videos = [
  { 
    src: "https://www.youtube.com/embed/_yAuXNyMI34", 
    name: "Sven" 
  },
  { 
    src: "https://www.youtube.com/embed/NY-kRFbM6UM", 
    name: "Jemelin" 
  },
  { 
    src: "https://www.youtube.com/embed/Nr7ugyI0OWc", 
    name: "Patricia" 
  }
];

const VideoTestimonials = () => {
  const { language } = useLanguage();
  
  return (
    <section className="py-12 px-4 bg-gradient-to-b from-gray-50 to-emerald-50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          {language === 'es' ? "Experiencias" : "Experiences"}
        </h2>
        <Carousel className="max-w-7xl mx-auto">
          <CarouselContent>
            {videos.map((video, i) => (
              <CarouselItem key={i} className="md:basis-1/3 lg:basis-1/3">
                <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-black p-2">
                  <iframe
                    src={video.src}
                    title={video.name}
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-40 transform transition-transform duration-300 group-hover:scale-105 rounded-lg"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-4">
            <CarouselPrevious className="mr-2 bg-emerald-600 text-white hover:bg-emerald-700" />
            <CarouselNext className="ml-2 bg-emerald-600 text-white hover:bg-emerald-700" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default VideoTestimonials;
