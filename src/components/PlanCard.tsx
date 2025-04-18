
import React from 'react';
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

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
    <div className={`rounded-lg p-6 shadow-lg ${isPrimary ? 'bg-emerald-50 border-2 border-emerald-500' : 'bg-white'}`}>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-2xl font-bold mb-4">{price}</p>
      <ul className="mb-6 space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <CheckCircle className="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button 
        className={`w-full ${isPrimary ? 'bg-emerald-600 hover:bg-emerald-700' : 'bg-emerald-600 hover:bg-emerald-700'}`}
        onClick={onClick}
      >
        {buttonText}
      </Button>
    </div>
  );
};

export default PlanCard;
