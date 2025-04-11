
import React from 'react';
import { Clock, Users, Brain, BarChart, DollarSign, BarChart2 } from 'lucide-react';

interface BenefitBoxProps {
  title: string;
  description: string;
  icon: 'clock' | 'productivity' | 'brain' | 'users' | 'dollar' | 'chart';
}

const BenefitBox = ({ title, description, icon }: BenefitBoxProps) => {
  const renderIcon = () => {
    switch (icon) {
      case 'clock':
        return <Clock className="w-12 h-12 mx-auto mb-4" />;
      case 'productivity':
        return <BarChart className="w-12 h-12 mx-auto mb-4" />;
      case 'brain':
        return <Brain className="w-12 h-12 mx-auto mb-4" />;
      case 'users':
        return <Users className="w-12 h-12 mx-auto mb-4" />;
      case 'dollar':
        return <DollarSign className="w-12 h-12 mx-auto mb-4" />;
      case 'chart':
        return <BarChart2 className="w-12 h-12 mx-auto mb-4" />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col items-center text-center p-4">
      {renderIcon()}
      <h3 className="font-bold text-md mb-2">{title}</h3>
      <p className="text-sm">{description}</p>
    </div>
  );
};

export default BenefitBox;
