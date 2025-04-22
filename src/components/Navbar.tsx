
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const Navbar = () => {
  const { t } = useLanguage();
  return (
    <header
      className="fixed top-0 left-0 w-full z-50 bg-white/60 backdrop-blur-lg shadow-lg border-b border-emerald-100"
      style={{ WebkitBackdropFilter: "blur(12px)", backdropFilter: "blur(12px)" }}
    >
      <nav className="container mx-auto px-6 py-3 flex items-center justify-between">
        <a href="/" className="font-extrabold text-emerald-700 text-2xl tracking-tight">Hunter AI</a>
        <div className="flex items-center gap-4">
          {/* Aquí pueden ir los enlaces principales si hacen falta */}
          <LanguageSwitcher />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
