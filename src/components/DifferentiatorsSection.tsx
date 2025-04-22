
import React from "react";
import VideoTestimonials from "./VideoTestimonials";

const differentiators = [
  "Automatización verdadera sin intervención manual.",
  "Manejo seguro de cuentas múltiples.",
  "Prospección multicanal real y CRM unificado.",
  "Configuración rápida, sin códigos y en minutos.",
];

const DifferentiatorsSection = () => (
  <section className="bg-white py-16 px-4">
    <div className="container mx-auto text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">¿Por qué Hunter AI?</h2>
      <p className="mb-8 text-gray-700 max-w-xl mx-auto">
        Nos diferenciamos por nuestra tecnología propietaria, la facilidad de uso y la capacidad de escalar tu captación de leads en todos los canales digitales.
      </p>
      <ul className="mb-12 flex flex-col md:flex-row gap-6 justify-center">
        {differentiators.map((d, i) => (
          <li key={i} className="bg-emerald-50 border border-emerald-200 px-6 py-4 rounded-md shadow text-left">{d}</li>
        ))}
      </ul>
      <VideoTestimonials />
    </div>
  </section>
);

export default DifferentiatorsSection;
