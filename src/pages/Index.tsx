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

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  const handleEmailRequest = (subject: string) => {
    const email = "hunter.iogonzalo@gmail.com";
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-white/95 via-emerald-50 to-emerald-100">
      <HomeHeader mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <HeroSection />
      <DifferentiatorsSection />
      <IntegrationSection />
      <ProcessSection />
      <CompaniesSection />
      <TestimonialsSection />
      <PlansSection handleEmailRequest={handleEmailRequest} />
      <FAQSection />
      <section className="py-16 px-4 bg-black text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('startNow') as string}</h2>
          <Button
            className="bg-white text-black hover:bg-emerald-100 px-8 py-6 text-lg group"
            onClick={() => handleEmailRequest("Start Now Request from Hunter AI Website")}
          >
            {t('startNow') as string}
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>
      <HomeFooter />
    </div>
  );
};

export default Index;
