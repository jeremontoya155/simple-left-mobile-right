
import { Facebook, Instagram, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import HunterRobot from "@/components/HunterRobot";
import FeatureCard from "@/components/FeatureCard";
import FunctionalityPill from "@/components/FunctionalityPill";
import BenefitBox from "@/components/BenefitBox";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <header className="bg-emerald-700 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex space-x-6">
            <a href="#" className="text-white font-medium">Inicio</a>
            <a href="#" className="text-white font-medium">Nosotros</a>
            <a href="#" className="text-white font-medium">Productos ▾</a>
          </div>
          <a href="#contacto" className="bg-white text-emerald-700 px-4 py-2 rounded font-medium">
            Contacto
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-teal-100 py-16 px-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="max-w-lg">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">HUNTER ASSISTANTS</h1>
            <p className="text-sm mb-6">
              HUNTER I.S, una herramienta diseñada con tecnología innovadora y algoritmos complejos que automatizan cada paso del proceso de prospección, desde la identificación de posibles clientes hasta el contacto y seguimiento. Simplifica tu estrategia, ahorra tiempo y esfuerzo en hacer crecer tu marca.
            </p>
            <Button className="bg-emerald-700 text-white hover:bg-emerald-800">
              Quiero más info
            </Button>
          </div>
          <div className="w-1/3 flex justify-center">
            <HunterRobot />
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="bg-emerald-50 py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-center text-xl font-bold mb-8">EN TODOS TUS CANALES DE ATENCIÓN</h2>
          <div className="flex justify-center space-x-12">
            <div className="border-2 border-blue-500 p-4 rounded-lg w-16 h-16 flex items-center justify-center">
              <Facebook className="text-blue-500 w-10 h-10" />
            </div>
            <div className="border-2 border-pink-500 p-4 rounded-lg w-16 h-16 flex items-center justify-center">
              <Instagram className="text-pink-500 w-10 h-10" />
            </div>
            <div className="border-2 border-green-500 p-4 rounded-lg w-16 h-16 flex items-center justify-center">
              <MessageCircle className="text-green-500 w-10 h-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Software Section */}
      <section className="bg-emerald-50 py-12 px-4">
        <div className="container mx-auto flex items-center">
          <div className="w-1/2">
            <div className="bg-gradient-to-br from-emerald-100 to-teal-200 p-8 rounded-2xl">
              <h2 className="text-xl font-bold mb-4">EL SOFTWARE HACE EL TRABAJO POR TI</h2>
              <p className="text-sm">
                Es un sistema diseñado para maximizar resultados con precisión estratégica su capacidad para configurar parámetros avanzados, personalizar estrategias y gestionar interacciones en tiempo real te permitirá obtener hasta 3.800 contactos mensuales. Con un sofisticado e intuitivo dashboard podrás monitorear cada etapa de proceso, Hunter impulsará tu crecimiento de manera inteligente y controlada.
              </p>
            </div>
          </div>
          <div className="w-1/2 p-12">
            {/* No content here in the design */}
          </div>
        </div>
      </section>

      {/* Functionality Types */}
      <section className="bg-emerald-50 py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-center text-xl font-bold mb-8">TIPOS DE FUNCIONALIDADES</h2>
          <div className="flex flex-wrap justify-center gap-3">
            <FunctionalityPill text="Gestión prospecto" />
            <FunctionalityPill text="Dashboard Integral" />
            <FunctionalityPill text="Seguimiento de Métricas" />
            <FunctionalityPill text="Optimización de Estrategias" />
            <FunctionalityPill text="Análisis de Datos" />
            <FunctionalityPill text="Automatización Estratégica" />
            <FunctionalityPill text="Aumento del Engagement" />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-emerald-50 py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-center text-xl font-bold mb-8">BENEFICIOS</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <BenefitBox 
              title="AHORRO DE TIEMPO Y RECURSOS" 
              description="Automatiza todo el proceso de prospección, reduciendo tareas manuales y repetitivas."
              icon="clock"
            />
            <BenefitBox 
              title="MAYOR PRODUCTIVIDAD" 
              description="Nuestro Hunter se encarga de tareas manuales en cuestión de segundos de manera precisa."
              icon="productivity"
            />
            <BenefitBox 
              title="TOMA DECISIONES INTELIGENTES" 
              description="Análisis avanzado de la captación efectiva y ajusta estrategias para mayor rendimiento."
              icon="brain"
            />
            <BenefitBox 
              title="INCREMENTO EN CONVERSIONES" 
              description="Mayor seguimiento y atención para convertir tus clientes."
              icon="users"
            />
            <BenefitBox 
              title="REDUCCIÓN DE COSTOS" 
              description="Minimiza los costes operacionales al optimizar tareas automatizadas y eliminar procesos manuales."
              icon="dollar"
            />
            <BenefitBox 
              title="ESTRATEGIAS ESCALABLES HASTA 10" 
              description="Consigue insights de diversas estrategias, ajustando variables de rendimiento."
              icon="chart"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-emerald-50 py-8 px-4">
        <div className="container mx-auto text-center">
          <Button id="contacto" className="bg-emerald-600 text-white hover:bg-emerald-700 px-8 py-3">
            Contáctanos
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8 px-4">
        <div className="container mx-auto flex justify-between">
          <div>
            <p className="font-medium">Para cualquier duda escribir a:</p>
            <p>Nuestro Instagram</p>
            <p>Nuestro Email</p>
          </div>
          <div>
            <p className="font-medium">Contáctanos</p>
            <p>contacto@hunteri.com</p>
            <p>Córdoba, Argentina</p>
            <div className="flex space-x-3 mt-2">
              <a href="#" className="text-white"><Instagram size={20} /></a>
              <a href="#" className="text-white"><Facebook size={20} /></a>
              <a href="#" className="text-white"><MessageCircle size={20} /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
