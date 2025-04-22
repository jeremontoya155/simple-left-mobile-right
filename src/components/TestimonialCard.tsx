
import React from 'react';
import { User } from 'lucide-react';
import StarRating from './StarRating';

interface TestimonialCardProps {
  quote: string;
  name: string;
  company: string;
  plan?: string;
  results?: string;
  rating?: number;
  image?: string;
}

const TestimonialCard = ({ 
  quote, 
  name, 
  company, 
  plan = "Premium Plan", 
  results = "Great results", 
  rating = 5,
  image 
}: TestimonialCardProps) => {
  return (
    <div className="p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow mx-2 my-4 min-h-[280px] flex flex-col">
      <div className="mb-3 flex-grow">
        <p className="text-gray-700 italic">"{quote}"</p>
      </div>
      <div className="flex items-center mt-4">
        <div className="w-12 h-12 rounded-full flex items-center justify-center mr-3 overflow-hidden">
          {image ? (
            <img src={image} alt={name} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full bg-emerald-100 flex items-center justify-center">
              <User className="w-6 h-6 text-emerald-700" />
            </div>
          )}
        </div>
        <div className="flex-1">
          <p className="font-medium">{name}</p>
          <p className="text-sm text-gray-600">{company}</p>
          <div className="flex items-center mt-1">
            <span className="text-xs text-emerald-700 mr-2">{plan}</span>
            <span className="text-xs text-gray-500">• {results}</span>
          </div>
          <StarRating value={rating} size={16} />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
