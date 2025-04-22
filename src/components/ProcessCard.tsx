
import React, { useState } from "react";

interface ProcessCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ProcessCard = ({ icon, title, description }: ProcessCardProps) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className={`relative bg-white rounded-lg shadow-md p-6 cursor-pointer group transition-all duration-300 hover:scale-105`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="text-emerald-700 mb-4">{icon}</div>
      <h4 className="font-bold mb-2">{title}</h4>
      <p className={`text-gray-600 transition-all duration-300 ${hovered ? "opacity-100" : "opacity-0 h-0"}`}>
        {description}
      </p>
    </div>
  );
};

export default ProcessCard;
