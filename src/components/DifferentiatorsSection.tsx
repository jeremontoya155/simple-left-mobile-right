
import React from "react";
import VideoTestimonials from "./VideoTestimonials";
import { CheckCircle } from "lucide-react";

const differentiators = [
  "Automatización verdadera sin intervención manual.",
  "Manejo seguro de cuentas múltiples.",
  "Prospección multicanal real y CRM unificado.",
  "Configuración rápida, sin códigos y en minutos.",
];

const DifferentiatorsSection = () => (
  <section className="bg-white py-16 px-4">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">¿Por qué Hunter AI?</h2>
      <p className="mb-10 text-gray-700 max-w-2xl mx-auto text-lg">
        Nos diferenciamos por nuestra tecnología propietaria, la facilidad de uso y la capacidad de escalar tu captación de leads en todos los canales digitales.
      </p>
      <div className="mb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {differentiators.map((d, i) => (
          <div key={i} className="bg-emerald-50 border border-emerald-200 px-6 py-8 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-start">
            <CheckCircle className="w-6 h-6 text-emerald-600 mr-3 flex-shrink-0 mt-1" />
            <p className="text-left">{d}</p>
          </div>
        ))}
      </div>
      <VideoTestimonials />
    </div>
  </section>
);

export default DifferentiatorsSection;
