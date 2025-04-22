
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className="flex items-center w-[72px] h-9 bg-white/90 border border-gray-200 rounded-full shadow-inner gap-0 p-1 relative transition-all"
      style={{ minWidth: 72 }}
    >
      <button
        aria-label="Español"
        onClick={() => setLanguage('es')}
        className={`flex-1 h-7 flex items-center justify-center font-semibold px-2 rounded-full relative z-10 transition-all duration-150 ${
          language === 'es' ? 'text-white' : 'text-gray-800'
        }`}
        style={{ fontSize: 14 }}
      >
        <span>ES</span>
      </button>
      <button
        aria-label="English"
        onClick={() => setLanguage('en')}
        className={`flex-1 h-7 flex items-center justify-center font-semibold px-2 rounded-full relative z-10 transition-all duration-150 ${
          language === 'en' ? 'text-white' : 'text-gray-800'
        }`}
        style={{ fontSize: 14 }}
      >
        <span>EN</span>
      </button>
      <span
        className={`absolute top-1 left-1 h-7 w-[32px] rounded-full bg-emerald-600 z-0 transition-transform duration-200`}
        style={{
          transform:
            language === 'es'
              ? 'translateX(0)'
              : 'translateX(36px)',
        }}
      />
    </div>
  );
};
export default LanguageSwitcher;
