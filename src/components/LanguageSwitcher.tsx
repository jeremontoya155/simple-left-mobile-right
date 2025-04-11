
import React from 'react';
import { Button } from "@/components/ui/button";
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex space-x-2">
      <Button 
        variant={language === 'en' ? 'default' : 'outline'}
        size="sm"
        onClick={() => setLanguage('en')}
        className={`${language === 'en' ? 'bg-white text-emerald-700' : 'bg-transparent text-white border-white'}`}
      >
        🇺🇸 EN
      </Button>
      <Button 
        variant={language === 'es' ? 'default' : 'outline'}
        size="sm"
        onClick={() => setLanguage('es')}
        className={`${language === 'es' ? 'bg-white text-emerald-700' : 'bg-transparent text-white border-white'}`}
      >
        🇪🇸 ES
      </Button>
    </div>
  );
};

export default LanguageSwitcher;
