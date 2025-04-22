
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
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-white/95 via-emerald-50 to-emerald-100">
      {/* Navbar */}
      <header className="bg-white/80 backdrop-blur border-b border-gray-100 text-black p-4 md:p-6 sticky top-0 z-20 shadow-sm transition">
        <div className="container mx-auto flex justify-between items-center">
          <Logo dark={true} className="h-8 md:h-10" />
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-black font-medium hover:text-emerald-700 transition-colors">{language === 'es' ? "Inicio" : "Home"}</a>
            <a href="#differentiators" className="text-black font-medium hover:text-emerald-700 transition-colors">{language === 'es' ? "¿Por qué Hunter?" : "Why Hunter?"}</a>
            <a href="#integrations" className="text-black font-medium hover:text-emerald-700 transition-colors">{language === 'es' ? "Integraciones" : "Integrations"}</a>
            <a href="#process" className="text-black font-medium hover:text-emerald-700 transition-colors">{language === 'es' ? "Proceso" : "Process"}</a>
            <a href="#plans" className="text-black font-medium hover:text-emerald-700 transition-colors">{language === 'es' ? "Planes" : "Plans"}</a>
            <a href="#faq" className="text-black font-medium hover:text-emerald-700 transition-colors">FAQ</a>
            <BlogLink />
            <a href="/login" className="text-black font-medium hover:text-emerald-700 transition-colors">{language === 'es' ? "Accede clientes" : "Client login"}</a>
          </nav>
          <div className="flex items-center space-x-2 md:space-x-4">
            <LanguageSwitcher />
            <Button className="bg-black text-white hover:bg-gray-800 font-semibold group transition-colors">
              {language === 'es' ? "Solicitar Demo" : "Request Demo"}
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
          <div className="md:hidden bg-white w-full py-4 flex flex-col text-black space-y-4 shadow mt-2 rounded-b-xl">
            <a href="#" className="font-medium">{language === 'es' ? "Inicio" : "Home"}</a>
            <a href="#differentiators" className="font-medium">{language === 'es' ? "¿Por qué Hunter?" : "Why Hunter?"}</a>
            <a href="#integrations" className="font-medium">{language === 'es' ? "Integraciones" : "Integrations"}</a>
            <a href="#process" className="font-medium">{language === 'es' ? "Proceso" : "Process"}</a>
            <a href="#plans" className="font-medium">{language === 'es' ? "Planes" : "Plans"}</a>
            <a href="#faq" className="font-medium">FAQ</a>
            <BlogLink />
            <a href="/login" className="font-medium">{language === 'es' ? "Accede clientes" : "Client login"}</a>
            <Button className="bg-black text-white hover:bg-gray-800 font-semibold w-full mt-2 group">
              {language === 'es' ? "Solicitar Demo" : "Request Demo"}
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative bg-gradient-to-br from-emerald-700 via-teal-700 to-emerald-900 text-white py-20 px-4 border-b border-emerald-200" style={{ fontFamily: 'Poppins, Arial, sans-serif' }}>
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight drop-shadow-lg">{language === 'es' ? "Bienvenido a Hunter, donde no esperamos oportunidades — las creamos y las cazamos." : "Welcome to Hunter, where we don't wait for opportunities — we create and hunt them."}</h1>
            <p className="text-2xl md:text-3xl mb-6 font-semibold uppercase">{language === 'es' ? "Tu meta, nuestro blanco." : "Your goals, our target."}</p>
            <div className="relative">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-white text-emerald-700 hover:bg-gray-200 font-bold text-lg px-8 py-6 group">
                  {language === 'es' ? "Probar Hunter ahora" : "Try Hunter Now"}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button className="bg-white text-emerald-700 hover:bg-gray-200 font-bold text-lg px-8 py-6 group">
                  {language === 'es' ? "Solicitar demo gratuita" : "Request Free Demo"}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
            <div className="mt-8 text-sm md:text-base text-emerald-100 font-medium flex items-center">
              <span>{language === 'es' ? "Plataforma super fácil" : "Super easy platform"}</span>
              <span className="mx-2">—</span>
              <span className="flex items-center">
                {language === 'es' ? "Solo 20 clientes por mes" : "Only 20 clients per month"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </span>
            </div>
          </div>
          <div className="flex-1 flex justify-center mb-12 md:mb-0">
            <LogoWhite className="h-40 md:h-60 drop-shadow-xl" />
          </div>
        </div>
      </section>

      {/* What is Hunter AI? - Eliminado el banner amarillo de "por qué elegirnos" */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-emerald-800">{language === 'es' ? "¿Qué nos hace diferentes?" : "What makes us different?"}</h2>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-gray-700">
            {language === 'es'
              ? "En Hunter, trabajamos de la mano con cada cliente, manteniendo un contacto constante para garantizar que la configuración se adapte siempre a sus objetivos y necesidades en evolución."
              : "At Hunter, we work closely with each client, maintaining continuous contact to ensure the setup always adapts to their evolving goals and needs."
            }
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
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">{language === 'es' ? "Proceso Hunter AI Pro" : "Hunter AI Pro Process"}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => (
              <ProcessCard
                key={idx}
                icon={step.icon}
                title={step.title}
                description={step.description}
                expandable
              />
            ))}
          </div>
        </div>
      </section>

      {/* LOGOS EMPRESAS */}
      <section className="bg-white py-12">
        <div className="container mx-auto py-12 px-4">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">{language === 'es' ? "Empresas con las que trabajamos" : "Companies we work with"}</h3>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">{language === 'es' ? "¿Cuál es el mejor plan para ti?" : "Which is the best plan for you?"}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <PlanCard
              title={language === 'es' ? "Plan Base" : "Basic Plan"}
              price={language === 'es' ? "Freemium" : "Freemium"}
              features={[
                language === 'es' ? "Automatización de 50 mensajes diarios" : "50 automated messages per day",
                language === 'es' ? "Integración con 1 plataforma" : "1 platform integration",
                language === 'es' ? "Soporte por email" : "Email support",
                language === 'es' ? "Análisis básico de resultados" : "Basic analytics",
              ]}
              buttonText={language === 'es' ? "Reservar lugar" : "Reserve spot"}
              onClick={() => handleEmailRequest("Subscription Request: Plan Base")}
            />
            <PlanCard
              title={language === 'es' ? "Plan Premium" : "Premium Plan"}
              price={language === 'es' ? "Consultar precio" : "Contact for pricing"}
              features={[
                language === 'es' ? "Automatización de 200 mensajes diarios" : "200 automated messages per day",
                language === 'es' ? "Integración con 3 plataformas" : "3 platform integrations",
                language === 'es' ? "Soporte prioritario" : "Priority support",
                language === 'es' ? "CRM completo" : "Full CRM",
                language === 'es' ? "Análisis avanzado de resultados" : "Advanced analytics"
              ]}
              buttonText={language === 'es' ? "Reservar lugar" : "Reserve spot"}
              isPrimary={true}
              onClick={() => handleEmailRequest("Subscription Request: Plan Premium")}
            />
            <PlanCard
              title={language === 'es' ? "Plan Enterprise" : "Enterprise Plan"}
              price={language === 'es' ? "Consultar precio" : "Contact for pricing"}
              features={[
                language === 'es' ? "Automatización ilimitada" : "Unlimited automation",
                language === 'es' ? "Integración con todas las plataformas" : "All platforms integration",
                language === 'es' ? "Soporte 24/7" : "24/7 support",
                language === 'es' ? "CRM completo y personalizable" : "Customizable full CRM",
                language === 'es' ? "API para integraciones personalizadas" : "API for custom integrations",
                language === 'es' ? "Analítica avanzada con IA" : "Advanced analytics with AI"
              ]}
              buttonText={language === 'es' ? "Reservar lugar" : "Reserve spot"}
              onClick={() => handleEmailRequest("Subscription Request: Plan Enterprise")}
            />
          </div>
          <div className="mt-8 text-center flex items-center justify-center text-gray-600">
            <span>*{language === 'es' ? "Solo 20 clientes nuevos por mes para garantizar la calidad del servicio" : "Only 20 new clients per month to ensure top service quality"}</span>
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

      {/* Final CTA Section */}
      <section className="py-16 px-4 bg-black text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{language === 'es' ? "Estás a un clic de tu próxima cacería" : "You're one click away from your next hunt."}</h2>
          <Button 
            className="bg-white text-black hover:bg-emerald-100 px-8 py-6 text-lg group"
            onClick={() => handleEmailRequest("Start Now Request from Hunter AI Website")}
          >
            {t('startNow') as string}
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
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
