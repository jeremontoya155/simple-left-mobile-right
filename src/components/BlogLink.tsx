
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const BlogLink = () => {
  const { language } = useLanguage();
  
  return (
    <a 
      href="/blog" 
      className="story-link text-black font-medium hover:text-emerald-700 transition-colors flex items-center"
    >
      <span className="mr-1">{language === 'es' ? 'Blog' : 'Blog'}</span>
    </a>
  );
};

export default BlogLink;
