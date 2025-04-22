
import React from 'react';
import { Button } from "@/components/ui/button";
import { useLanguage } from '@/contexts/LanguageContext';

// Fijamos banderas Unicode, pueden ser reemplazadas por SVG si se desean.
const flags: Record<string, string> = {
  en: "🇺🇸",
  es: "🇪🇸"
};

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex space-x-2 bg-white/80 backdrop-blur rounded-full px-2 py-1 border border-gray-200 shadow-sm">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setLanguage('es')}
        aria-label="Cambiar a Español"
        className={`transition-all rounded-full px-2 py-1 ${language === 'es' ? 'bg-emerald-600 text-white shadow font-bold scale-110' : 'text-gray-700 hover:bg-emerald-50'}`}
      >
        <span className="text-lg mr-1">{flags['es']}</span>
        <span className="font-medium hidden md:inline">ES</span>
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setLanguage('en')}
        aria-label="Switch to English"
        className={`transition-all rounded-full px-2 py-1 ${language === 'en' ? 'bg-emerald-600 text-white shadow font-bold scale-110' : 'text-gray-700 hover:bg-emerald-50'}`}
      >
        <span className="text-lg mr-1">{flags['en']}</span>
        <span className="font-medium hidden md:inline">EN</span>
      </Button>
    </div>
  );
};

export default LanguageSwitcher;
