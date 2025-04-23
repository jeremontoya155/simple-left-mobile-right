
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';

const BlogLink = () => {
  const { language } = useLanguage();
  
  return (
    <Link 
      to="/blog" 
      className="inline-flex items-center px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors text-black font-medium group"
    >
      {language === 'es' ? 'Blog' : 'Blog'}
    </Link>
  );
};

export default BlogLink;
