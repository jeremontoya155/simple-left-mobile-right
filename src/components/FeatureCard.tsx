
import React from 'react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  title: string;
  description: string;
  className?: string;
}

const FeatureCard = ({ title, description, className }: FeatureCardProps) => {
  return (
    <div className={cn("bg-gradient-to-br from-emerald-100 to-teal-200 p-6 rounded-xl", className)}>
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-sm">{description}</p>
    </div>
  );
};

export default FeatureCard;
