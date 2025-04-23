import React from "react";
import { Instagram, Facebook, Linkedin, Twitter, Mail, Phone, MapPin, ChevronRight } from "lucide-react";
import LogoWhite from "@/components/ui/LogoWhite";
import { useLanguage } from "@/contexts/LanguageContext";
import BlogLink from "@/components/BlogLink";

const HomeFooter = () => {
  const { t } = useLanguage();
  return (
    <footer id="contact" className="bg-gray-900 text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <LogoWhite className="mb-4" />
            <p className="mb-4 text-gray-400 max-w-xs">{t('whatIsHunterAIDesc') as string}</p>
            <div className="flex space-x-4 mt-6">
              <a href="https://instagram.com" className="text-gray-400 hover:text-white transition-colors p-2 bg-gray-800 rounded-full">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors p-2 bg-gray-800 rounded-full">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors p-2 bg-gray-800 rounded-full">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors p-2 bg-gray-800 rounded-full">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">{t('contactInfo') as string}</h3>
            <div className="space-y-2">
              <div className="flex items-start">
                <Mail className="w-5 h-5 mr-3 mt-1 text-emerald-500" />
                <p>ai.huntecorp@gmail.com</p>
              </div>
              <div className="flex items-start">
                <Phone className="w-5 h-5 mr-3 mt-1 text-emerald-500" />
                <p>+14244134628</p>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-1 text-emerald-500" />
                <p>{t('location') as string}</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">{t('quickLinks') as string}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                  <ChevronRight className="w-4 h-4 mr-1 group-hover:translate-x-1 transition-transform" />
                  {t('privacyPolicy') as string}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                  <ChevronRight className="w-4 h-4 mr-1 group-hover:translate-x-1 transition-transform" />
                  {t('termsAndConditions') as string}
                </a>
              </li>
              <li>
                <a href="/blog" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                  <ChevronRight className="w-4 h-4 mr-1 group-hover:translate-x-1 transition-transform" />
                  Blog
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                  <ChevronRight className="w-4 h-4 mr-1 group-hover:translate-x-1 transition-transform" />
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Hunter AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default HomeFooter;
