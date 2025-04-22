
import React from "react";
import { Facebook, Instagram, Linkedin, Twitter, MessageCircle } from "lucide-react";

const integrations = [
  { icon: <Instagram className="w-8 h-8 text-pink-500" />, name: "Instagram" },
  { icon: <Facebook className="w-8 h-8 text-blue-600" />, name: "Facebook" },
  { icon: <Linkedin className="w-8 h-8 text-blue-700" />, name: "LinkedIn" },
  { icon: <Twitter className="w-8 h-8 text-sky-400" />, name: "Twitter" },
  { icon: <MessageCircle className="w-8 h-8 text-green-500" />, name: "WhatsApp" },
];

const IntegrationSection = () => (
  <section className="py-16 px-4 bg-white">
    <div className="container mx-auto text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Integraciones</h2>
      <p className="text-gray-700 mb-10 max-w-xl mx-auto">
        Hunter AI se integra de manera nativa con múltiples plataformas para que tu estrategia omnicanal funcione sin límites.
      </p>
      <div className="flex justify-center flex-wrap gap-8">
        {integrations.map((el) => (
          <div key={el.name} className="flex flex-col items-center gap-2">
            <div className="bg-gray-100 p-4 rounded-full shadow hover:scale-110 duration-200">
              {el.icon}
            </div>
            <span className="text-base font-medium">{el.name}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default IntegrationSection;
