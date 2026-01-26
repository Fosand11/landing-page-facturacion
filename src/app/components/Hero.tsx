import { Button } from "@/app/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-[#0063F9] via-[#0063F9] to-[#00A3FF]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Facturación Electrónica
              <span className="block text-[#4D9FFF]">Simple y Potente</span>
            </h1>
            <p className="text-xl mb-8 text-white/90 leading-relaxed">
              La solución completa para gestionar tu facturación electrónica de manera eficiente. 
              Cumple con todas las normativas y automatiza tus procesos.
            </p>

            <div className="space-y-3 mt-8">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-white" />
                <span className="text-white/90">Sin costos de instalación</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-white" />
                <span className="text-white/90">Soporte técnico incluido</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-white" />
                <span className="text-white/90">Actualizaciones automáticas</span>
              </div>
            </div>
          </div>

          {/* Right Content - Logo */}
          <div className="relative">
            <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
              <img 
                src="/logo-symbol.png" 
                alt="Swift DataWorks" 
                className="w-full h-auto"
              />
              
              {/* Floating cards */}
              <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-2xl">
                <div className="text-[#0063F9] font-bold text-3xl">99.9%</div>
                <div className="text-gray-600 text-sm">Uptime</div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-[#00A3FF] to-[#4D9FFF] rounded-2xl p-4 shadow-2xl text-white">
                <div className="font-bold text-3xl">24/7</div>
                <div className="text-white/90 text-sm">Soporte</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}