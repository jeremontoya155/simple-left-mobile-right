
import React, { useState, useEffect } from 'react';
import { Filter } from 'lucide-react';

const SalesAnimation = () => {
  const [showFilter, setShowFilter] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFilter(prev => !prev);
    }, 20000); // Change every 20 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute -right-16 top-1/2 -translate-y-1/2 transform transition-opacity duration-1000">
      {showFilter ? (
        <Filter className="w-12 h-12 text-white/70 animate-fade-in" />
      ) : (
        <div className="w-12 h-12 text-white/70 animate-fade-in">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M5 12H19M19 12L12 5M19 12L12 19" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )}
    </div>
  );
};

export default SalesAnimation;
