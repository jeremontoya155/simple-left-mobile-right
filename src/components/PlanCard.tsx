
import React from 'react';
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";

interface PlanCardProps {
  title: string;
  price: string;
  features: string[];
  buttonText: string;
  isPrimary?: boolean;
  onClick?: () => void;
}

const PlanCard = ({ title, price, features, buttonText, isPrimary = false, onClick }: PlanCardProps) => {
  return (
    <div
      className={`rounded-lg p-6 shadow-lg transform transition-all duration-300 hover:scale-110 hover:shadow-emerald-100 ${isPrimary ? 'bg-emerald-50 border-2 border-black' : 'bg-white border border-gray-200'} `}
      style={{ minHeight: 330, minWidth: 220 }}
    >
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-lg font-semibold text-emerald-600 mb-4">{price}</p>
      <ul className="mb-6 space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <CheckCircle className="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button
        className={`w-full group ${isPrimary ? 'bg-emerald-600 hover:bg-emerald-700' : 'bg-emerald-600 hover:bg-emerald-700'}`}
        onClick={onClick}
      >
        {buttonText}
        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Button>
    </div>
  );
};

export default PlanCard;
