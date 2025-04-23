
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useIsMobile } from "@/hooks/use-mobile";

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
  const isMobile = useIsMobile();
  
  return (
    <section className="py-8 bg-gradient-to-b from-gray-50 to-emerald-50">
      <div className="container mx-auto px-0">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center px-4">
          {language === 'es' ? "Experiencias" : "Experiences"}
        </h2>
        <Carousel className="w-full">
          <CarouselContent>
            {videos.map((video, i) => (
              <CarouselItem key={i} className="basis-full md:basis-1/2 lg:basis-1/2">
                <div className="overflow-hidden bg-black">
                  <iframe
                    src={video.src}
                    title={video.name}
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className={`w-full object-cover ${isMobile ? "h-[50vh]" : "h-[80vh]"}`}
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
