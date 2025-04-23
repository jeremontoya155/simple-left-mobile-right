
import React from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";
import Logo from "@/components/Logo";
import BlogLink from "@/components/BlogLink";
import { Link } from "react-router-dom";

interface HomeHeaderProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

const HomeHeader = ({ mobileMenuOpen, setMobileMenuOpen }: HomeHeaderProps) => {
  const { t, language } = useLanguage();
  return (
    <header className="relative z-20">
      <div className="relative nav-glass p-3 md:p-5 shadow-sm mx-auto max-w-full bg-white/95">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/">
            <Logo dark={true} className="h-8 md:h-10" />
          </Link>
          <nav className="hidden md:flex space-x-4">
            <Link to="/" className="inline-flex items-center px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors text-black font-medium group">
              {t("home")}
            </Link>
            <Link to="/#differentiators" className="inline-flex items-center px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors text-black font-medium group">
              {language === "es" ? "Sobre nosotros" : "About us"}
            </Link>
            <Link to="/#integrations" className="inline-flex items-center px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors text-black font-medium group">
              {language === "es" ? "Integraciones" : "Integrations"}
            </Link>
            <Link to="/#process" className="inline-flex items-center px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors text-black font-medium group">
              {t("howItWorks")}
            </Link>
            <Link to="/#plans" className="inline-flex items-center px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors text-black font-medium group">
              {t("plans")}
            </Link>
            <Link to="/#faq" className="inline-flex items-center px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors text-black font-medium group">
              FAQ
            </Link>
            <BlogLink />
          </nav>
          <div className="flex items-center space-x-2 md:space-x-4">
            <LanguageSwitcher />
            <Button className="bg-black text-white hover:bg-gray-800 font-semibold group transition-colors">
              {t("requestDemo")}
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={language === "es" ? "Abrir menu movil" : "Open mobile menu"}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-white w-full py-4 flex flex-col text-black space-y-4 shadow mt-2 rounded-b-xl z-30">
            <Link to="/" className="px-4 py-2 rounded-md hover:bg-gray-100 transition-colors font-medium">{t("home")}</Link>
            <Link to="/#differentiators" className="px-4 py-2 rounded-md hover:bg-gray-100 transition-colors font-medium">{language === "es" ? "Sobre nosotros" : "About us"}</Link>
            <Link to="/#integrations" className="px-4 py-2 rounded-md hover:bg-gray-100 transition-colors font-medium">{language === "es" ? "Integraciones" : "Integrations"}</Link>
            <Link to="/#process" className="px-4 py-2 rounded-md hover:bg-gray-100 transition-colors font-medium">{t("howItWorks")}</Link>
            <Link to="/#plans" className="px-4 py-2 rounded-md hover:bg-gray-100 transition-colors font-medium">{t("plans")}</Link>
            <Link to="/#faq" className="px-4 py-2 rounded-md hover:bg-gray-100 transition-colors font-medium">FAQ</Link>
            <BlogLink />
            <Button className="bg-black text-white hover:bg-gray-800 font-semibold w-full mt-2 group">
              {t("requestDemo")}
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default HomeHeader;
