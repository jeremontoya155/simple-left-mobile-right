
import React, { useState } from "react";
import { 
  Facebook, 
  Instagram, 
  Menu, 
  MessageCircle, 
  X, 
  UserPlus, 
  Users, 
  Search,
  CheckCircle,
  MessageSquare,
  Layers,
  Zap,
  Database,
  Share2,
  Milestone,
  PieChart,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";
import { 
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Logo from "@/components/Logo";
import Step from "@/components/Step";
import BenefitCard from "@/components/BenefitCard";
import TestimonialCard from "@/components/TestimonialCard";
import PlanCard from "@/components/PlanCard";
import FAQ from "@/components/FAQ";

const Index = () => {
  const { t, language } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  
  const steps = [
    { icon: UserPlus, title: t('step1') as string },
    { icon: Users, title: t('step2') as string },
    { icon: Search, title: t('step3') as string },
    { icon: CheckCircle, title: t('step4') as string }
  ];
  
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
  
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <header className="bg-emerald-700 text-white p-4 sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          {isMobile ? (
            <>
              <Logo className="z-20" />
              
              <div className="flex items-center space-x-4">
                <LanguageSwitcher />
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="text-white p-1">
                      <Menu className="h-6 w-6" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="bg-emerald-700 text-white">
                    <div className="flex flex-col space-y-6 mt-10">
                      <NavLinks />
                      <Button
                        className="bg-white text-emerald-700 hover:bg-emerald-100"
                        onClick={() => handleEmailRequest("Demo Request from Hunter AI Website")}
                      >
                        {t('requestDemo') as string}
                      </Button>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center">
                <Logo className="mr-8" />
                <div className="flex space-x-6">
                  <NavLinks />
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <LanguageSwitcher />
                <Button 
                  className="bg-white text-emerald-700 hover:bg-emerald-100"
                  onClick={() => handleEmailRequest("Demo Request from Hunter AI Website")}
                >
                  {t('requestDemo') as string}
                </Button>
              </div>
            </>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-700 to-teal-800 text-white py-16 px-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="max-w-xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{t('welcomeHunter') as string}</h1>
            <p className="text-xl mb-4">{t('yourGoalsOurTarget') as string}</p>
            <p className="mb-8 text-emerald-100">{t('heroDescription') as string}</p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <Button 
                className="bg-white text-emerald-700 hover:bg-emerald-100"
                onClick={() => handleEmailRequest("Try Hunter Now Request")}
              >
                {t('tryHunterNow') as string}
              </Button>
              <Button 
                className="bg-white text-emerald-700 hover:bg-emerald-100"
                onClick={() => handleEmailRequest("Free Demo Request from Hunter AI Website")}
              >
                {t('requestFreeDemo') as string}
              </Button>
            </div>
          </div>
          <div className="w-full md:w-2/5 mt-8 md:mt-0 flex justify-center">
            <img 
              src="/lovable-uploads/77fc607d-62b5-4d09-b280-2ab87d9382cd.png" 
              alt="Hunter AI Logo" 
              className="max-w-full h-auto max-h-60"
            />
          </div>
        </div>
      </section>

      {/* What is Hunter AI Section */}
      <section id="features" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">{t('whatIsHunterAI') as string}</h2>
          <p className="text-center max-w-3xl mx-auto mb-12 text-gray-700">
            {t('whatIsHunterAIDesc') as string}
          </p>
          <div className="flex justify-center space-x-8 md:space-x-12 flex-wrap">
            <div className="border-2 border-blue-500 p-4 rounded-lg w-14 h-14 md:w-16 md:h-16 flex items-center justify-center m-2">
              <Instagram className="text-pink-500 w-8 h-8 md:w-10 md:h-10" />
            </div>
            <div className="border-2 border-blue-500 p-4 rounded-lg w-14 h-14 md:w-16 md:h-16 flex items-center justify-center m-2">
              <Facebook className="text-blue-500 w-8 h-8 md:w-10 md:h-10" />
            </div>
            <div className="border-2 border-blue-500 p-4 rounded-lg w-14 h-14 md:w-16 md:h-16 flex items-center justify-center m-2">
              <Linkedin className="text-blue-700 w-8 h-8 md:w-10 md:h-10" />
            </div>
            <div className="border-2 border-blue-500 p-4 rounded-lg w-14 h-14 md:w-16 md:h-16 flex items-center justify-center m-2">
              <Twitter className="text-blue-400 w-8 h-8 md:w-10 md:h-10" />
            </div>
            <div className="border-2 border-blue-500 p-4 rounded-lg w-14 h-14 md:w-16 md:h-16 flex items-center justify-center m-2">
              <MessageCircle className="text-green-500 w-8 h-8 md:w-10 md:h-10" />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">{t('howItWorks') as string}</h2>
          <p className="text-center max-w-3xl mx-auto mb-12 text-gray-700">
            Hunter AI simplifies your client acquisition process into four simple steps. Our AI-powered system handles everything from profile analysis to automatic qualification.
          </p>
          <div className="relative py-8">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-2 bg-emerald-200 -translate-y-1/2 z-0"></div>
            <div className="flex flex-col md:flex-row justify-between items-center md:items-start z-10 relative">
              {steps.map((step, index) => (
                <div key={index} className="mb-10 md:mb-0 w-full md:w-auto px-4">
                  <Step 
                    icon={step.icon} 
                    title={step.title} 
                    stepNumber={index + 1}
                  />
                  <p className="text-center text-gray-600 mt-4 max-w-[180px] mx-auto text-sm">
                    {index === 0 && "Define your target audience and upload your existing customer profiles to start."}
                    {index === 1 && "Our AI creates an avatar that represents your ideal customer persona."}
                    {index === 2 && "We search through multiple platforms to find and contact matching profiles."}
                    {index === 3 && "Qualified leads are automatically scored and referred to your team."}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10 text-center">
            <img 
              src="/lovable-uploads/9a0bbd3b-4258-463c-9099-e0766668d71c.png" 
              alt="Hunter AI Process" 
              className="max-w-full mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">{t('keyBenefits') as string}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <BenefitCard 
                key={index}
                icon={benefit.icon}
                title={benefit.title}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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
              buttonText={t('choosePlan') as string}
              onClick={() => handleEmailRequest(`Subscription Request: ${(t('basicPlan') as any).title} Plan`)}
            />
            <PlanCard
              title={(t('professionalPlan') as any).title}
              price={(t('professionalPlan') as any).price}
              features={(t('professionalPlan') as any).features}
              buttonText={t('choosePlan') as string}
              isPrimary={true}
              onClick={() => handleEmailRequest(`Subscription Request: ${(t('professionalPlan') as any).title} Plan`)}
            />
            <PlanCard
              title={(t('businessPlan') as any).title}
              price={(t('businessPlan') as any).price}
              features={(t('businessPlan') as any).features}
              buttonText={t('choosePlan') as string}
              onClick={() => handleEmailRequest(`Subscription Request: ${(t('businessPlan') as any).title} Plan`)}
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-50">
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
              <Logo className="mb-4" />
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
