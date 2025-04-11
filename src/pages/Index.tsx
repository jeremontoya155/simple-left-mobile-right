
import { Facebook, Instagram, Menu, MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import HunterRobot from "@/components/HunterRobot";
import FeatureCard from "@/components/FeatureCard";
import FunctionalityPill from "@/components/FunctionalityPill";
import BenefitBox from "@/components/BenefitBox";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
import { 
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  const { t, language } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  
  // Helper to safely render string translations
  const renderText = (key: string): string => {
    const value = t(key);
    return typeof value === 'string' ? value : '';
  };
  
  const NavLinks = () => (
    <>
      <a href="#" className="text-white font-medium">{renderText('home')}</a>
      <a href="#" className="text-white font-medium">{renderText('about')}</a>
      <a href="#" className="text-white font-medium">{renderText('products')}</a>
    </>
  );
  
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <header className="bg-emerald-700 text-white p-4 sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          {isMobile ? (
            <>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-white p-1">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="bg-emerald-700 text-white">
                  <div className="flex flex-col space-y-4 mt-8">
                    <NavLinks />
                  </div>
                </SheetContent>
              </Sheet>
              
              <div className="flex items-center space-x-4">
                <LanguageSwitcher />
                <a href="#contacto" className="bg-white text-emerald-700 px-3 py-1 rounded font-medium text-sm">
                  {renderText('contact')}
                </a>
              </div>
            </>
          ) : (
            <>
              <div className="flex space-x-6">
                <NavLinks />
              </div>
              <div className="flex items-center space-x-4">
                <LanguageSwitcher />
                <a href="#contacto" className="bg-white text-emerald-700 px-4 py-2 rounded font-medium">
                  {renderText('contact')}
                </a>
              </div>
            </>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-teal-100 py-16 px-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="max-w-lg">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{renderText('heroTitle')}</h1>
            <p className="text-sm mb-6">
              {renderText('heroDescription')}
            </p>
            <Button className="bg-emerald-700 text-white hover:bg-emerald-800">
              {renderText('moreInfo')}
            </Button>
          </div>
          <div className="w-full md:w-1/3 flex justify-center mt-6 md:mt-0">
            <HunterRobot />
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="bg-emerald-50 py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-center text-xl font-bold mb-8">{renderText('channelsTitle')}</h2>
          <div className="flex justify-center space-x-8 md:space-x-12">
            <div className="border-2 border-blue-500 p-4 rounded-lg w-14 h-14 md:w-16 md:h-16 flex items-center justify-center">
              <Facebook className="text-blue-500 w-8 h-8 md:w-10 md:h-10" />
            </div>
            <div className="border-2 border-pink-500 p-4 rounded-lg w-14 h-14 md:w-16 md:h-16 flex items-center justify-center">
              <Instagram className="text-pink-500 w-8 h-8 md:w-10 md:h-10" />
            </div>
            <div className="border-2 border-green-500 p-4 rounded-lg w-14 h-14 md:w-16 md:h-16 flex items-center justify-center">
              <MessageCircle className="text-green-500 w-8 h-8 md:w-10 md:h-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Software Section */}
      <section className="bg-emerald-50 py-16 px-4">
        <div className="container mx-auto">
          <div className="bg-gradient-to-br from-emerald-100 to-teal-200 p-6 md:p-10 rounded-2xl max-w-4xl mx-auto shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-center">{renderText('softwareTitle')}</h2>
            <p className="text-base leading-relaxed">
              {renderText('softwareDescription')}
            </p>
            <div className="mt-6 flex justify-center">
              <div className="w-20 h-1 bg-emerald-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Functionality Types */}
      <section className="bg-emerald-50 py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-center text-xl font-bold mb-8">{renderText('functionalityTitle')}</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {Array.isArray(t('functionalityPills')) && 
              (t('functionalityPills') as string[]).map((pill, index) => (
                <FunctionalityPill key={index} text={pill} />
              ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-emerald-50 py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-center text-xl font-bold mb-8">{renderText('benefitsTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Array.isArray(t('benefitBoxes')) && 
              (t('benefitBoxes') as {title: string, description: string}[]).map((benefit, index) => (
                <BenefitBox 
                  key={index}
                  title={benefit.title} 
                  description={benefit.description}
                  icon={["clock", "productivity", "brain", "users", "dollar", "chart"][index] as "clock" | "productivity" | "brain" | "users" | "dollar" | "chart"}
                />
              ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-emerald-50 py-8 px-4">
        <div className="container mx-auto text-center">
          <Button id="contacto" className="bg-emerald-600 text-white hover:bg-emerald-700 px-8 py-3">
            {renderText('contactUs')}
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-emerald-700 text-white py-8 px-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <p className="font-medium">{renderText('forAnyQuestion')}</p>
            <p>{renderText('ourInstagram')}</p>
            <p>{renderText('ourEmail')}</p>
          </div>
          <div>
            <p className="font-medium">{renderText('contactUs')}</p>
            <p>contacto@hunteri.com</p>
            <p>{renderText('location')}</p>
            <div className="flex space-x-3 mt-2">
              <a href="#" className="text-white"><Instagram size={20} /></a>
              <a href="#" className="text-white"><Facebook size={20} /></a>
              <a href="#" className="text-white"><MessageCircle size={20} /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
