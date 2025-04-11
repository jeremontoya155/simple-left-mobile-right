
import React from 'react';

interface FunctionalityPillProps {
  text: string;
}

const FunctionalityPill = ({ text }: FunctionalityPillProps) => {
  return (
    <div className="bg-emerald-500 text-white px-4 py-2 rounded-full text-sm font-medium">
      {text}
    </div>
  );
};

export default FunctionalityPill;
