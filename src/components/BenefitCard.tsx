
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface BenefitCardProps {
  icon: LucideIcon;
  title: string;
}

const BenefitCard = ({ icon: Icon, title }: BenefitCardProps) => {
  return (
    <div className="flex flex-col items-center p-5 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow">
      <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-3">
        <Icon className="w-6 h-6 text-emerald-700" />
      </div>
      <p className="text-center font-medium">{title}</p>
    </div>
  );
};

export default BenefitCard;
