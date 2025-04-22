
import React from "react";
import { ArrowRight } from "lucide-react";
import PlanCard from "@/components/PlanCard";
import { useLanguage } from "@/contexts/LanguageContext";

const PlansSection = ({ handleEmailRequest }: { handleEmailRequest: (subject: string) => void }) => {
  const { language } = useLanguage();

  return (
    <section id="plans" className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">{language === 'es' ? "¿Cuál es el mejor plan para ti?" : "Which is the best plan for you?"}</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <PlanCard
            title={language === 'es' ? "Freemium" : "Freemium"}
            price={language === 'es' ? "Gratis" : "Free"}
            features={[
              language === 'es' ? "Hasta 15 mensajes diarios automáticos" : "Up to 15 automated messages per day",
              language === 'es' ? "Soporte básico" : "Basic support",
              language === 'es' ? "Pruebas limitadas de funciones" : "Limited feature tests",
              language === 'es' ? "No requiere tarjeta" : "No credit card required"
            ]}
            buttonText={language === 'es' ? "Empezar gratis" : "Start free"}
            isPrimary={false}
            onClick={() => handleEmailRequest("Subscription Request: Freemium Plan")}
          />
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
  );
};

export default PlansSection;
