
import React from 'react';

interface LogoProps {
  className?: string;
  dark?: boolean;
}

const Logo = ({ className, dark = true }: LogoProps) => {
  return (
    <div className={`flex items-center ${className || ''}`}>
      <img 
        src="/lovable-uploads/77fc607d-62b5-4d09-b280-2ab87d9382cd.png" 
        alt="Hunter Logo" 
        className={`h-10 md:h-12 ${dark ? '' : 'filter brightness-0 invert'}`} 
      />
    </div>
  );
};

export default Logo;
