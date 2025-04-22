
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

interface CompanyLogoCardProps {
  src: string;
  alt: string;
  nameKey: "company1" | "company2" | "company3" | "company4"; // Restricted to valid translation keys
}

const CompanyLogoCard = ({ src, alt, nameKey }: CompanyLogoCardProps) => {
  const { t } = useLanguage();
  const [expanded, setExpanded] = useState(false);

  // Compute the description key based on the nameKey
  const descriptionKey = `${nameKey}Desc` as "company1Desc" | "company2Desc" | "company3Desc" | "company4Desc";

  return (
    <div
      tabIndex={0}
      onClick={() => setExpanded((prev) => !prev)}
      onKeyDown={e => { if (e.key === "Enter") setExpanded(prev => !prev) }}
      className={cn(
        "rounded-3xl border border-emerald-200 bg-white/95 shadow-lg p-4 flex flex-col items-center justify-center cursor-pointer transition-all duration-300",
        "hover:scale-105 hover:border-emerald-400",
        expanded ? "shadow-2xl scale-105 border-emerald-400 z-10" : ""
      )}
      style={{ minWidth: 170, minHeight: 170 }}
    >
      <div className="h-20 w-20 flex items-center justify-center mb-3">
        <img src={src} alt={alt} className="max-h-20 max-w-20 object-contain" draggable={false} />
      </div>
      <span className="text-emerald-800 text-base md:text-lg font-bold text-center drop-shadow">
        {t(nameKey)}
      </span>
      {expanded && (
        <div className="mt-2 px-2 py-1 rounded-xl bg-emerald-50 text-emerald-900 text-xs shadow">
          {t(descriptionKey)}
        </div>
      )}
    </div>
  );
};

export default CompanyLogoCard;
