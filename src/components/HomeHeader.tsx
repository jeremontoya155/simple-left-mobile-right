
import React, { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";
import Logo from "@/components/Logo";
import BlogLink from "@/components/BlogLink";

interface HomeHeaderProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

const HomeHeader = ({ mobileMenuOpen, setMobileMenuOpen }: HomeHeaderProps) => {
  const { t, language } = useLanguage();
  return (
    <header className="nav-glass p-3 md:p-5 sticky top-0 z-20 shadow-sm mx-auto max-w-7xl rounded-b-[1.6rem] mt-2 mb-1">
      <div className="container mx-auto flex justify-between items-center">
        <Logo dark={true} className="h-8 md:h-10" />
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="story-link text-black font-medium hover:text-emerald-700 transition-colors">{language === 'es' ? "Inicio" : "Home"}</a>
          <a href="#differentiators" className="story-link text-black font-medium hover:text-emerald-700 transition-colors">{language === 'es' ? "¿Por qué Hunter?" : "Why Hunter?"}</a>
          <a href="#integrations" className="story-link text-black font-medium hover:text-emerald-700 transition-colors">{language === 'es' ? "Integraciones" : "Integrations"}</a>
          <a href="#process" className="story-link text-black font-medium hover:text-emerald-700 transition-colors">{language === 'es' ? "Proceso" : "Process"}</a>
          <a href="#plans" className="story-link text-black font-medium hover:text-emerald-700 transition-colors">{language === 'es' ? "Planes" : "Plans"}</a>
          <a href="#faq" className="story-link text-black font-medium hover:text-emerald-700 transition-colors">FAQ</a>
          <BlogLink />
        </nav>
        <div className="flex items-center space-x-2 md:space-x-4">
          <LanguageSwitcher />
          <Button className="bg-black text-white hover:bg-gray-800 font-semibold group transition-colors">
            {language === 'es' ? "Solicitar Demo" : "Request Demo"}
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menú móvil"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden bg-white w-full py-4 flex flex-col text-black space-y-4 shadow mt-2 rounded-b-xl">
          <a href="#" className="font-medium">{language === 'es' ? "Inicio" : "Home"}</a>
          <a href="#differentiators" className="font-medium">{language === 'es' ? "¿Por qué Hunter?" : "Why Hunter?"}</a>
          <a href="#integrations" className="font-medium">{language === 'es' ? "Integraciones" : "Integrations"}</a>
          <a href="#process" className="font-medium">{language === 'es' ? "Proceso" : "Process"}</a>
          <a href="#plans" className="font-medium">{language === 'es' ? "Planes" : "Plans"}</a>
          <a href="#faq" className="font-medium">FAQ</a>
          <BlogLink />
          <Button className="bg-black text-white hover:bg-gray-800 font-semibold w-full mt-2 group">
            {language === 'es' ? "Solicitar Demo" : "Request Demo"}
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      )}
    </header>
  );
};

export default HomeHeader;
