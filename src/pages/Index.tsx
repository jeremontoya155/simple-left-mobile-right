import React, { useState } from "react";
import {
  Facebook, Instagram, Linkedin, Twitter, Menu, X, Mail, Phone, MapPin, ChevronRight, UserPlus, Users, Search,
  CheckCircle,
  MessageSquare,
  Layers,
  Zap,
  Database,
  Share2,
  Milestone,
  PieChart,
  ArrowRight,
  MessageCircle as MessageCircleIcon,
  MessageSquare as MessageSquareIcon
} from "lucide-react";
import { Button } from "@/components/ui/button";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";
import LogoWhite from "@/components/ui/LogoWhite";
import CompanyLogosCarousel from "@/components/CompanyLogosCarousel";
import ProcessCard from "@/components/ProcessCard";
import IntegrationSection from "@/components/IntegrationSection";
import DifferentiatorsSection from "@/components/DifferentiatorsSection";
import BlogLink from "@/components/BlogLink";
// Importar componentes necesarios o los originales para FAQ, PlanCard, TestimonialCard, etc.
import PlanCard from "@/components/PlanCard";
import FAQ from "@/components/FAQ";
import { 
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Logo from "@/components/Logo";
import BenefitCard from "@/components/BenefitCard";
import TestimonialCard from "@/components/TestimonialCard";
import StarRating from "@/components/StarRating";

const processSteps = [
  { icon: <UserPlus className="w-8 h-8" />, title: "Carga perfil cliente ideal", description: "Podrás cargar un perfil detallado del cliente que buscas alcanzar." },
  { icon: <Instagram className="w-8 h-8" />, title: "Creación del avatar", description: "Creamos un avatar automatizado para interactuar representando a tu marca." },
  { icon: <Mail className="w-8 h-8" />, title: "Búsqueda y contacto", description: "Buscar y contactar de forma inteligente perfiles compatibles." },
  { icon: <ChevronRight className="w-8 h-8" />, title: "Calificación y derivación", description: "Automáticamente se derivan y califican los leads más calificados." },
];

const Index = () => {
  const { t, language } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  
  const benefits = [
    { icon: MessageSquare, title: t('benefit1') as string },
    { icon: Layers, title: t('benefit2') as string },
    { icon: Database, title: t('benefit3') as string },
    { icon: Share2, title: t('benefit4') as string }
  ];
  
  const NavLinks = () => (
    <>
      <a href="#" className="text-white font-medium hover:text-emerald-200 transition-colors">{t('home') as string}</a>
      <a href="#features" className="text-white font-medium hover:text-emerald-200 transition-colors">{t('features') as string}</a>
      <a href="#plans" className="text-white font-medium hover:text-emerald-200 transition-colors">{t('plans') as string}</a>
      <a href="#contact" className="text-white font-medium hover:text-emerald-200 transition-colors">{t('contact') as string}</a>
    </>
  );
  
  const handleEmailRequest = (subject: string) => {
    const email = "hunter.iogonzalo@gmail.com";
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    window.location.href = mailtoLink;
  };

  // Navbar adaptado estilo zasbot:
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <header className="bg-white border-b border-gray-100 text-black p-4 sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <LogoWhite className="h-10" />
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-black font-medium hover:text-emerald-700 transition-colors">Inicio</a>
            <a href="#differentiators" className="text-black font-medium hover:text-emerald-700 transition-colors">¿Por qué Hunter?</a>
            <a href="#integrations" className="text-black font-medium hover:text-emerald-700 transition-colors">Integraciones</a>
            <a href="#process" className="text-black font-medium hover:text-emerald-700 transition-colors">Proceso</a>
            <a href="#plans" className="text-black font-medium hover:text-emerald-700 transition-colors">Planes</a>
            <a href="#faq" className="text-black font-medium hover:text-emerald-700 transition-colors">FAQ</a>
            <a href="#blog" className="text-black font-medium hover:text-emerald-700 transition-colors">Blog</a>
            <a href="/login" className="text-black font-medium hover:text-emerald-700 transition-colors">Accede clientes</a>
          </nav>
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            <Button className="bg-emerald-700 text-white hover:bg-emerald-800 font-semibold">
              Solicitar Demo
            </Button>
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Abrir menú móvil"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        {/* Menú móvil */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white w-full py-4 flex flex-col text-black space-y-4 shadow">
            <a href="#" className="font-medium">Inicio</a>
            <a href="#differentiators" className="font-medium">¿Por qué Hunter?</a>
            <a href="#integrations" className="font-medium">Integraciones</a>
            <a href="#process" className="font-medium">Proceso</a>
            <a href="#plans" className="font-medium">Planes</a>
            <a href="#faq" className="font-medium">FAQ</a>
            <a href="#blog" className="font-medium">Blog</a>
            <a href="/login" className="font-medium">Accede clientes</a>
            <Button className="bg-emerald-700 text-white hover:bg-emerald-800 font-semibold w-full mt-2">Solicitar Demo</Button>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative bg-gradient-to-br from-emerald-700 via-teal-700 to-emerald-900 text-white py-20 px-4">
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Bienvenido a Hunter, donde no esperamos oportunidades — las creamos y las cazamos.</h1>
            <p className="text-2xl mb-4">Tus metas, nuestro blanco.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-white text-emerald-700 hover:bg-gray-200 font-bold">Probar Hunter ahora</Button>
              <Button className="bg-white text-emerald-700 hover:bg-gray-200 font-bold">Solicitar demo gratuita</Button>
            </div>
            <div className="mt-8 text-sm text-emerald-100 font-medium">Plataforma super fácil &mdash; Solo 20 clientes por mes</div>
          </div>
          <div className="flex-1 flex justify-center mb-12 md:mb-0">
            <LogoWhite className="h-40 md:h-48" />
          </div>
        </div>
      </section>

      {/* DIFERENCIADORES */}
      <div id="differentiators">
        <DifferentiatorsSection />
      </div>

      {/* Videos de clientes (se incluye dentro de DifferentiatorsSection) */}

      {/* INTEGRACIONES */}
      <div id="integrations">
        <IntegrationSection />
      </div>

      {/* PROCESO HUNTER AI PRO */}
      <section id="process" className="py-16 px-4 bg-emerald-50">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Proceso Hunter AI Pro</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => (
              <ProcessCard
                key={idx}
                icon={step.icon}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* LOGOS EMPRESAS */}
      <section className="bg-white">
        <div className="container mx-auto py-12 px-4">
          <h3 className="text-xl md:text-2xl font-bold mb-6 text-center">Empresas con las que trabajamos</h3>
          <CompanyLogosCarousel />
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">{t('testimonials') as string}</h2>
          <Carousel className="max-w-4xl mx-auto">
            <CarouselContent>
              {(t('testimonialsItems') as any[]).map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <TestimonialCard 
                    quote={testimonial.quote}
                    name={testimonial.name}
                    company={testimonial.company}
                  />
                  <StarRating value={4} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:flex justify-center mt-6">
              <CarouselPrevious className="mr-2" />
              <CarouselNext className="ml-2" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* Plans and Pricing Section */}
      <section id="plans" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">{t('plansAndPricing') as string}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <PlanCard
              title={(t('basicPlan') as any).title}
              price={(t('basicPlan') as any).price}
              features={(t('basicPlan') as any).features}
              buttonText={'Reservar lugar'}
              onClick={() => handleEmailRequest(`Subscription Request: ${(t('basicPlan') as any).title} Plan`)}
            />
            <PlanCard
              title={(t('professionalPlan') as any).title}
              price={(t('professionalPlan') as any).price}
              features={(t('professionalPlan') as any).features}
              buttonText={'Reservar lugar'}
              isPrimary={true}
              onClick={() => handleEmailRequest(`Subscription Request: ${(t('professionalPlan') as any).title} Plan`)}
            />
            <PlanCard
              title={(t('businessPlan') as any).title}
              price={(t('businessPlan') as any).price}
              features={(t('businessPlan') as any).features}
              buttonText={'Reservar lugar'}
              onClick={() => handleEmailRequest(`Subscription Request: ${(t('businessPlan') as any).title} Plan`)}
            />
          </div>
          <div className="mt-8 text-center text-gray-600">
            *Solo 20 clientes nuevos por mes para garantizar la calidad del servicio.
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">{t('faq') as string}</h2>
          <FAQ items={t('faqItems') as any[]} />
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 px-4 bg-emerald-700 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">{t('finalCTA') as string}</h2>
          <Button 
            className="bg-white text-emerald-700 hover:bg-emerald-100 px-8 py-3 text-lg"
            onClick={() => handleEmailRequest("Start Now Request from Hunter AI Website")}
          >
            {t('startNow') as string}
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <LogoWhite className="mb-4" />
              <p className="mb-4 text-gray-400 max-w-xs">{t('whatIsHunterAIDesc') as string}</p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">{t('contactInfo') as string}</h3>
              <div className="space-y-2">
                <div className="flex items-start">
                  <Mail className="w-5 h-5 mr-3 mt-1 text-emerald-500" />
                  <p>hunter.iogonzalo@gmail.com</p>
                </div>
                <div className="flex items-start">
                  <Phone className="w-5 h-5 mr-3 mt-1 text-emerald-500" />
                  <p>+54 351 123 4567</p>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 mt-1 text-emerald-500" />
                  <p>{t('location') as string}</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">{t('quickLinks') as string}</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">
                    <ChevronRight className="w-4 h-4 mr-1" />
                    {t('privacyPolicy') as string}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">
                    <ChevronRight className="w-4 h-4 mr-1" />
                    {t('termsAndConditions') as string}
                  </a>
                </li>
              </ul>
              <div className="flex space-x-4 mt-6">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} Hunter AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
