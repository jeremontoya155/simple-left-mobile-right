
import React from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PlanCardProps {
  title: string;
  price: string;
  features: string[];
  buttonText: string;
  isPrimary?: boolean;
}

const PlanCard = ({ title, price, features, buttonText, isPrimary = false }: PlanCardProps) => {
  return (
    <div className={`p-6 rounded-lg ${isPrimary ? 'bg-emerald-50 border-2 border-emerald-500' : 'bg-white border border-gray-200'} shadow-md hover:shadow-lg transition-shadow`}>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-2xl font-bold mb-4 text-emerald-700">{price}</p>
      <ul className="mb-6 space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="w-5 h-5 text-emerald-500 mt-0.5 mr-2 flex-shrink-0" />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      <Button className={`w-full ${isPrimary ? 'bg-emerald-600 hover:bg-emerald-700' : 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200'}`}>
        {buttonText}
      </Button>
    </div>
  );
};

export default PlanCard;
