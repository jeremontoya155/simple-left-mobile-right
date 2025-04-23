import React, { useState } from "react";
import HomeHeader from "@/components/HomeHeader";
import HeroSection from "@/components/HeroSection";
import DifferentiatorsSection from "@/components/DifferentiatorsSection";
import CompaniesSection from "@/components/CompaniesSection";
import ProcessSection from "@/components/ProcessSection";
import IntegrationSection from "@/components/IntegrationSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PlansSection from "@/components/PlansSection";
import FAQSection from "@/components/FAQSection";
import HomeFooter from "@/components/HomeFooter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import VideoTestimonials from "@/components/VideoTestimonials";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, language } = useLanguage();

  const handleEmailRequest = (subject: string) => {
    const email = "hunter.iogonzalo@gmail.com";
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-emerald-700 via-teal-700 to-emerald-900">
      <header className="sticky top-0 z-50">
        <HomeHeader mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      </header>
      <HeroSection />
      <DifferentiatorsSection />
      <IntegrationSection />
      <ProcessSection />
      <CompaniesSection />
      <VideoTestimonials />
      <TestimonialsSection />
      <PlansSection handleEmailRequest={handleEmailRequest} />
      <FAQSection />
      <section className="py-16 px-4 bg-transparent text-white">
        <div className="container mx-auto text-center">
          <Button
            className="bg-white text-black hover:bg-emerald-100 px-8 py-6 text-lg group"
            onClick={() => handleEmailRequest("Subscribe Request from Hunter AI Website")}
          >
            {language === 'es' ? 'Suscribirse a novedades' : 'Subscribe to news'}
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>
      <HomeFooter />
    </div>
  );
};

export default Index;
