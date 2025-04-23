import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import HomeHeader from '@/components/HomeHeader';
import HomeFooter from '@/components/HomeFooter';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const blogPosts = [
  {
    title: {
      en: "How Hunter AI Transforms Lead Generation",
      es: "Como Hunter AI Transforma la Generacion de Leads"
    },
    description: {
      en: "Discover how artificial intelligence can help you attract and convert more customers in a sustainable way",
      es: "Descubre como la inteligencia artificial puede ayudarte a atraer y convertir mas clientes de manera sostenible"
    },
    image: "/lovable-uploads/22891c74-9cb1-4fd7-9b93-056b27e32be1.png",
    date: "2023-04-15",
    category: {
      en: "Lead Generation",
      es: "Generación de Leads"
    }
  },
  {
    title: {
      en: "5 Ways to Automate Your Sales Funnel",
      es: "5 Formas de Automatizar Tu Embudo de Ventas"
    },
    description: {
      en: "Learn practical strategies to automate each stage of your sales funnel and increase conversion rates.",
      es: "Aprende estrategias prácticas para automatizar cada etapa de tu embudo de ventas y aumentar las tasas de conversión."
    },
    image: "/lovable-uploads/9a0bbd3b-4258-463c-9099-e0766668d71c.png",
    date: "2023-03-28",
    category: {
      en: "Sales",
      es: "Ventas"
    }
  },
  {
    title: {
      en: "The Future of AI in B2B Marketing",
      es: "El Futuro de la IA en el Marketing B2B"
    },
    description: {
      en: "Explore the emerging trends and technologies that will shape the future of B2B marketing in the AI era.",
      es: "Explora las tendencias y tecnologías emergentes que darán forma al futuro del marketing B2B en la era de la IA."
    },
    image: "/lovable-uploads/afcb9c18-2ff5-4813-9afa-7f94f317c825.png",
    date: "2023-02-15",
    category: {
      en: "Marketing",
      es: "Marketing"
    }
  },
  {
    title: {
      en: "Building a Data-Driven Customer Acquisition Strategy",
      es: "Construyendo una Estrategia de Adquisición de Clientes Basada en Datos"
    },
    description: {
      en: "Learn how to leverage data and analytics to optimize your customer acquisition efforts and improve ROI.",
      es: "Aprende cómo aprovechar los datos y la analítica para optimizar tus esfuerzos de adquisición de clientes y mejorar el ROI."
    },
    image: "/lovable-uploads/4812e366-bb82-44dd-a52b-41de80965d63.png",
    date: "2023-01-30",
    category: {
      en: "Strategy",
      es: "Estrategia"
    }
  }
];

const Blog = () => {
  const { language } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat(language === 'es' ? 'es-ES' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  };
  
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-white/95 via-emerald-50 to-emerald-100">
      <HomeHeader mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            {language === 'es' ? 'Blog de Hunter AI' : 'Hunter AI Blog'}
          </h1>
          <p className="text-lg text-center max-w-3xl mx-auto mb-12 text-gray-700">
            {language === 'es' 
              ? 'Explora nuestros ultimos articulos sobre inteligencia artificial captacion de clientes y estrategias de marketing avanzadas' 
              : 'Explore our latest articles on artificial intelligence customer acquisition and advanced marketing strategies'}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-emerald-100">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title[language]} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-emerald-100 text-emerald-800">
                      {post.category[language]}
                    </span>
                    <span className="text-xs text-gray-500">
                      {formatDate(post.date)}
                    </span>
                  </div>
                  <CardTitle className="text-xl">{post.title[language]}</CardTitle>
                  <CardDescription>{post.description[language]}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button variant="ghost" className="text-emerald-600 hover:text-emerald-800 hover:bg-emerald-50 p-0 group">
                    {language === 'es' ? 'Leer más' : 'Read more'}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Button className="bg-emerald-600 hover:bg-emerald-700 group">
              {language === 'es' ? 'Ver todos los artículos' : 'View all articles'}
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>
      
      <HomeFooter />
    </div>
  );
};

export default Blog;
