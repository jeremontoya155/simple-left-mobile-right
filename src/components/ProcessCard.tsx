
import React, { useState } from "react";

interface ProcessCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  expandable?: boolean;
}

const ProcessCard = ({ icon, title, description, expandable }: ProcessCardProps) => {
  const [expanded, setExpanded] = useState(false);

  // Si el prop "expandable" es true, el texto se revela sólo al hacer click.
  if (expandable) {
    return (
      <div
        className={`relative bg-white rounded-lg shadow-md p-6 cursor-pointer group transition-all duration-300 hover:shadow-xl hover:-translate-y-2`}
        onClick={() => setExpanded((prev) => !prev)}
        tabIndex={0}
        role="button"
        onKeyPress={e => e.key === 'Enter' && setExpanded(prev => !prev)}
      >
        <div className="text-emerald-700 mb-4">{icon}</div>
        <h4 className="font-bold text-lg mb-2">{title}</h4>
        <div className={`overflow-hidden transition-max-h duration-300 ${expanded ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
          <p className="text-gray-600 mt-2">{description}</p>
        </div>
      </div>
    );
  }

  // ...comportamiento clásico (por compatibilidad, aunque nunca se usa en Index.tsx ahora)
  return (
    <div className="relative bg-white rounded-lg shadow-md p-6 cursor-pointer group transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
      <div className="text-emerald-700 mb-4">{icon}</div>
      <h4 className="font-bold text-lg mb-2">{title}</h4>
      <p className="text-gray-600 opacity-70">{description}</p>
    </div>
  );
};

export default ProcessCard;
