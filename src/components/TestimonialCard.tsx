
import React from 'react';
import { User } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  company: string;
  image?: string;
}

const TestimonialCard = ({ 
  quote, 
  name, 
  company,
  image 
}: TestimonialCardProps) => {
  return (
    <div className="p-6 rounded-lg bg-white/95 backdrop-blur-sm shadow-md hover:shadow-xl transition-all duration-300 mx-2 my-4 min-h-[280px] flex flex-col transform hover:scale-105 border border-emerald-100">
      <div className="mb-3 flex-grow">
        <p className="text-gray-700 italic text-lg leading-relaxed">"{quote}"</p>
      </div>
      <div className="flex items-center mt-4">
        <div className="w-14 h-14 rounded-full flex items-center justify-center mr-4 overflow-hidden shadow-md border-2 border-emerald-200">
          {image ? (
            <img src={image} alt={name} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full bg-emerald-100 flex items-center justify-center">
              <User className="w-6 h-6 text-emerald-700" />
            </div>
          )}
        </div>
        <div>
          <p className="font-semibold text-lg text-emerald-800">{name}</p>
          <p className="text-sm text-gray-600">{company}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
