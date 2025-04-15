
import React from 'react';
import { User } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  company: string;
}

const TestimonialCard = ({ quote, name, company }: TestimonialCardProps) => {
  return (
    <div className="p-6 rounded-lg bg-white shadow-md mx-2 my-4 min-h-[200px] flex flex-col">
      <div className="mb-3 flex-grow">
        <p className="text-gray-700 italic">"{quote}"</p>
      </div>
      <div className="flex items-center mt-4">
        <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
          <User className="w-5 h-5 text-emerald-700" />
        </div>
        <div>
          <p className="font-medium">{name}</p>
          <p className="text-sm text-gray-600">{company}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
