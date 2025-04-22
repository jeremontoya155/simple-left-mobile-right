import React, { useState } from "react";
import {
  Facebook, Instagram, Linkedin, Twitter, Menu, X, Mail, Phone, MapPin, ChevronRight, UserPlus, Users, Search,
  CheckCircle, MessageCircle, Layers, Zap, Database, Share2, ArrowRight
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
    { icon: MessageCircle, title: t('benefit1') as string },
    { icon: Layers, title: t('benefit2') as string },
    { icon: Database, title: t('benefit3') as string },
    { icon: Share2, title: t('benefit4') as string }
  ];
  
  const handleEmailRequest = (subject: string) => {
    const email = "hunter.iogonzalo@gmail.com";
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <header className="bg-white border-b border-gray-100 text-black p-6 sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <Logo dark={true} className="h-8 md:h-10" />
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-black font-medium hover:text-emerald-700 transition-colors">Inicio</a>
            <a href="#differentiators" className="text-black font-medium hover:text-emerald-700 transition-colors">¿Por qué Hunter?</a>
            <a href="#integrations" className="text-black font-medium hover:text-emerald-700 transition-colors">Integraciones</a>
            <a href="#process" className="text-black font-medium hover:text-emerald-700 transition-colors">Proceso</a>
            <a href="#plans" className="text-black font-medium hover:text-emerald-700 transition-colors">Planes</a>
            <a href="#faq" className="text-black font-medium hover:text-emerald-700 transition-colors">FAQ</a>
            <BlogLink />
            <a href="/login" className="text-black font-medium hover:text-emerald-700 transition-colors">Accede clientes</a>
          </nav>
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            <Button className="bg-black text-white hover:bg-gray-800 font-semibold group">
              Solicitar Demo
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
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
            <BlogLink />
            <a href="/login" className="font-medium">Accede clientes</a>
            <Button className="bg-black text-white hover:bg-gray-800 font-semibold w-full mt-2 group">
              Solicitar Demo
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        )}
      </header>

      {/* HERO - Updated with larger titles */}
      <section className="relative bg-gradient-to-br from-emerald-700 via-teal-700 to-emerald-900 text-white py-20 px-4">
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
          <div className="max-w-xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">Bienvenido a Hunter, donde no esperamos oportunidades — las creamos y las cazamos.</h1>
            <p className="text-2xl md:text-3xl mb-6">TU META, NUESTRO BLANCO.</p>
            <div className="relative">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-white text-emerald-700 hover:bg-gray-200 font-bold text-lg px-8 py-6 group">
                  Probar Hunter ahora
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button className="bg-white text-emerald-700 hover:bg-gray-200 font-bold text-lg px-8 py-6 group">
                  Solicitar demo gratuita
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
            <div className="mt-8 text-sm md:text-base text-emerald-100 font-medium flex items-center">
              <span>Plataforma super fácil</span>
              <span className="mx-2">—</span>
              <span className="flex items-center">
                Solo 20 clientes por mes
                <ArrowRight className="ml-2 h-4 w-4" />
              </span>
            </div>
          </div>
          <div className="flex-1 flex justify-center mb-12 md:mb-0">
            <LogoWhite className="h-40 md:h-60" />
          </div>
        </div>
      </section>

      {/* What is Hunter AI? - New section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto text-center">
          <div className="inline-block bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold mb-8">
            Porque elegirnos
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">Que nos hace diferentes</h2>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-gray-700">
            En Hunter, trabajamos de la mano con cada cliente, manteniendo un contacto constante para garantizar
            que la configuración se adapte siempre a sus objetivos y necesidades en evolución.
          </p>
        </div>
      </section>

      {/* DIFERENCIADORES */}
      <div id="differentiators">
        <DifferentiatorsSection />
      </div>

      {/* INTEGRACIONES */}
      <div id="integrations">
        <IntegrationSection />
      </div>

      {/* PROCESO HUNTER AI PRO */}
      <section id="process" className="py-16 px-4 bg-emerald-50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Proceso Hunter AI Pro</h2>
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
      <section className="bg-white py-12">
        <div className="container mx-auto py-12 px-4">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">Empresas con las que trabajamos</h3>
          <CompanyLogosCarousel />
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">{t('testimonials') as string}</h2>
          <Carousel className="max-w-4xl mx-auto">
            <CarouselContent>
              {(t('testimonialsItems') as any[]).map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <TestimonialCard 
                    quote={testimonial.quote}
                    name={testimonial.name}
                    company={testimonial.company}
                    plan="Premium Plan"
                    results="Resultados increíbles"
                    rating={5}
                    image={index % 2 === 0 ? "/lovable-uploads/934748dc-1ef6-4358-b48f-08dcf47c217e.png" : "/lovable-uploads/0a2153e7-a94d-4b56-b0fb-a3f2406be70c.png"}
                  />
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
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">¿Cuál es el mejor plan para ti?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <PlanCard
              title="Plan Base"
              price="Freemium"
              features={[
                "Automatización de 50 mensajes diarios",
                "Integración con 1 plataforma",
                "Soporte por email",
                "Análisis básico de resultados"
              ]}
              buttonText="Reservar lugar"
              onClick={() => handleEmailRequest("Subscription Request: Plan Base")}
            />
            <PlanCard
              title="Plan Premium"
              price="Consultar precio"
              features={[
                "Automatización de 200 mensajes diarios",
                "Integración con 3 plataformas",
                "Soporte prioritario",
                "CRM completo",
                "Análisis avanzado de resultados"
              ]}
              buttonText="Reservar lugar"
              isPrimary={true}
              onClick={() => handleEmailRequest("Subscription Request: Plan Premium")}
            />
            <PlanCard
              title="Plan Enterprise"
              price="Consultar precio"
              features={[
                "Automatización ilimitada",
                "Integración con todas las plataformas",
                "Soporte 24/7",
                "CRM completo y personalizable",
                "API para integraciones personalizadas",
                "Analítica avanzada con IA"
              ]}
              buttonText="Reservar lugar"
              onClick={() => handleEmailRequest("Subscription Request: Plan Enterprise")}
            />
          </div>
          <div className="mt-8 text-center flex items-center justify-center text-gray-600">
            <span>*Solo 20 clientes nuevos por mes para garantizar la calidad del servicio</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">{t('faq') as string}</h2>
          <FAQ items={t('faqItems') as any[]} />
        </div>
      </section>

      {/* Final CTA Section - Updated with arrow */}
      <section className="py-16 px-4 bg-black text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Estás a un clic de tu próxima cacería</h2>
          <Button 
            className="bg-white text-black hover:bg-emerald-100 px-8 py-6 text-lg group"
            onClick={() => handleEmailRequest("Start Now Request from Hunter AI Website")}
          >
            {t('startNow') as string}
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>

      {/* Footer - Updated to match Zasbot */}
      <footer id="contact" className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <LogoWhite className="mb-4" />
              <p className="mb-4 text-gray-400 max-w-xs">{t('whatIsHunterAIDesc') as string}</p>
              <div className="flex space-x-4 mt-6">
                <a href="https://instagram.com" className="text-gray-400 hover:text-white transition-colors p-2 bg-gray-800 rounded-full">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors p-2 bg-gray-800 rounded-full">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors p-2 bg-gray-800 rounded-full">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors p-2 bg-gray-800 rounded-full">
                  <Twitter size={20} />
                </a>
              </div>
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
                  <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                    <ChevronRight className="w-4 h-4 mr-1 group-hover:translate-x-1 transition-transform" />
                    {t('privacyPolicy') as string}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                    <ChevronRight className="w-4 h-4 mr-1 group-hover:translate-x-1 transition-transform" />
                    {t('termsAndConditions') as string}
                  </a>
                </li>
                <li>
                  <a href="/blog" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                    <ChevronRight className="w-4 h-4 mr-1 group-hover:translate-x-1 transition-transform" />
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                    <ChevronRight className="w-4 h-4 mr-1 group-hover:translate-x-1 transition-transform" />
                    FAQ
                  </a>
                </li>
              </ul>
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
