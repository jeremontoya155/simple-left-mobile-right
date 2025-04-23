
import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import LogoWhite from "@/components/ui/LogoWhite";
import { useLanguage } from "@/contexts/LanguageContext";
import SalesAnimation from "./SalesAnimation";

const HeroSection = () => {
  const { language } = useLanguage();
  return (
    <section className="relative bg-gradient-to-br from-emerald-700 via-teal-700 to-emerald-900 text-white py-20 px-4 border-b border-emerald-200" style={{ fontFamily: 'Poppins, Arial, sans-serif' }}>
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-6">
        <div className="max-w-xl">
          <div className="mb-6">
            <h1 className="text-6xl md:text-7xl font-bold leading-tight">
              <span className="block mb-4 animate-color-change">
                {language === 'es' ? "Bienvenido a Hunter!" : "Welcome to Hunter!"}
              </span>
              <span className="text-4xl md:text-5xl block mt-4">
                {language === 'es' 
                  ? "Donde no esperamos oportunidades las creamos y las cazamos" 
                  : "Where We Don't Wait For Opportunities We Create And Hunt Them"}
              </span>
            </h1>
          </div>
          <p className="text-2xl md:text-3xl mb-6 font-semibold uppercase">
            {language === 'es' 
              ? "Tu meta, nuestro blanco" 
              : "Your goals, our target"}
          </p>
          <div className="relative">
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-white text-emerald-700 hover:bg-gray-200 font-bold text-lg px-8 py-6 group">
                {language === 'es' ? "Probar Hunter ahora" : "Try Hunter Now"}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button className="bg-white text-emerald-700 hover:bg-gray-200 font-bold text-lg px-8 py-6 group">
                {language === 'es' ? "Solicitar demo gratuita" : "Request Free Demo"}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
          <div className="mt-8 text-sm md:text-base text-emerald-100 font-medium flex items-center">
            <span>{language === 'es' ? "Plataforma super facil" : "Super easy platform"}</span>
            <span className="mx-2"> </span>
            <span className="flex items-center">
              {language === 'es' ? "Solo 20 clientes por mes" : "Only 20 clients per month"}
              <ArrowRight className="ml-2 h-4 w-4" />
            </span>
          </div>
        </div>
        <div className="flex-1 flex justify-center mb-12 md:mb-0 relative">
          <LogoWhite className="h-40 md:h-60 drop-shadow-xl animate-pulse" />
          <SalesAnimation />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
