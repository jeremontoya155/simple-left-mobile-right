
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StepProps {
  icon: LucideIcon;
  title: string;
  stepNumber: number;
}

const Step = ({ icon: Icon, title, stepNumber }: StepProps) => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-3">
          <Icon className="w-8 h-8 text-emerald-700" />
        </div>
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-emerald-700 rounded-full text-white flex items-center justify-center text-xs font-bold">
          {stepNumber}
        </div>
      </div>
      <p className="text-sm font-medium text-center max-w-[120px]">{title}</p>
    </div>
  );
};

export default Step;
