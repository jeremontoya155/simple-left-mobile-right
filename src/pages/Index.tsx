
import { Facebook, Instagram, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import HunterRobot from "@/components/HunterRobot";
import FeatureCard from "@/components/FeatureCard";
import FunctionalityPill from "@/components/FunctionalityPill";
import BenefitBox from "@/components/BenefitBox";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const { t, language } = useLanguage();
  
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <header className="bg-emerald-700 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex space-x-6">
            <a href="#" className="text-white font-medium">{t('home')}</a>
            <a href="#" className="text-white font-medium">{t('about')}</a>
            <a href="#" className="text-white font-medium">{t('products')}</a>
          </div>
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            <a href="#contacto" className="bg-white text-emerald-700 px-4 py-2 rounded font-medium">
              {t('contact')}
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-teal-100 py-16 px-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="max-w-lg">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{t('heroTitle')}</h1>
            <p className="text-sm mb-6">
              {t('heroDescription')}
            </p>
            <Button className="bg-emerald-700 text-white hover:bg-emerald-800">
              {t('moreInfo')}
            </Button>
          </div>
          <div className="w-1/3 flex justify-center">
            <HunterRobot />
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="bg-emerald-50 py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-center text-xl font-bold mb-8">{t('channelsTitle')}</h2>
          <div className="flex justify-center space-x-12">
            <div className="border-2 border-blue-500 p-4 rounded-lg w-16 h-16 flex items-center justify-center">
              <Facebook className="text-blue-500 w-10 h-10" />
            </div>
            <div className="border-2 border-pink-500 p-4 rounded-lg w-16 h-16 flex items-center justify-center">
              <Instagram className="text-pink-500 w-10 h-10" />
            </div>
            <div className="border-2 border-green-500 p-4 rounded-lg w-16 h-16 flex items-center justify-center">
              <MessageCircle className="text-green-500 w-10 h-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Software Section */}
      <section className="bg-emerald-50 py-16 px-4">
        <div className="container mx-auto">
          <div className="bg-gradient-to-br from-emerald-100 to-teal-200 p-10 rounded-2xl max-w-4xl mx-auto shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-center">{t('softwareTitle')}</h2>
            <p className="text-base leading-relaxed">
              {t('softwareDescription')}
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
          <h2 className="text-center text-xl font-bold mb-8">{t('functionalityTitle')}</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {/* Use the t function to get the array of strings, and then map over it */}
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
          <h2 className="text-center text-xl font-bold mb-8">{t('benefitsTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Use the t function to get the array of objects, and then map over it */}
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
            {t('contactUs')}
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-emerald-700 text-white py-8 px-4">
        <div className="container mx-auto flex justify-between">
          <div>
            <p className="font-medium">{t('forAnyQuestion')}</p>
            <p>{t('ourInstagram')}</p>
            <p>{t('ourEmail')}</p>
          </div>
          <div>
            <p className="font-medium">{t('contactUs')}</p>
            <p>contacto@hunteri.com</p>
            <p>{t('location')}</p>
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
