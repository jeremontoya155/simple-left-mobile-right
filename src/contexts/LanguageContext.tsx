
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Language, LanguageContextType, TranslationKey, TranslationValue } from '../types/language';
import { translations } from '../translations';

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  // Cambiamos el estado inicial a 'en' en lugar de 'es'
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: TranslationKey): TranslationValue => {
    return translations[language][key];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

