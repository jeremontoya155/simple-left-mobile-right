
import React from "react";
import { Facebook, Instagram, Linkedin, Twitter, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const integrations = [
  { icon: <Instagram className="w-10 h-10 text-pink-500" />, name: "Instagram" },
  { icon: <Facebook className="w-10 h-10 text-blue-600" />, name: "Facebook" },
  { icon: <Linkedin className="w-10 h-10 text-blue-700" />, name: "LinkedIn" },
  { icon: <Twitter className="w-10 h-10 text-sky-400" />, name: "Twitter" },
  { icon: <MessageCircle className="w-10 h-10 text-green-500" />, name: "WhatsApp" },
];

const IntegrationSection = () => {
  const { language } = useLanguage();
  
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          {language === 'es' ? 'Integraciones' : 'Integrations'}
        </h2>
        <p className="text-gray-700 mb-12 max-w-2xl mx-auto text-lg">
          {language === 'es' 
            ? 'Hunter AI se integra de manera nativa con múltiples plataformas para que tu estrategia omnicanal funcione sin límites.'
            : 'Hunter AI natively integrates with multiple platforms so your omnichannel strategy works without limits.'}
        </p>
        <div className="flex justify-center flex-wrap gap-12 mb-16">
          {integrations.map((el) => (
            <div key={el.name} className="flex flex-col items-center gap-3 transform transition-all duration-300 hover:scale-110">
              <div className="bg-gray-100 p-8 rounded-full shadow-md hover:shadow-lg">
                {el.icon}
              </div>
              <span className="text-lg font-medium">{el.name}</span>
            </div>
          ))}
        </div>
        
        <Button className="text-lg group bg-black hover:bg-gray-800 px-8 py-6">
          {language === 'es' ? 'Ver todas las integraciones' : 'See all integrations'}
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </section>
  );
};

export default IntegrationSection;
