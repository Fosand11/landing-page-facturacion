import { TrendingUp, Users, Clock, DollarSign } from "lucide-react";

const stats = [
  { value: "50%", label: "Reducción de costos", icon: DollarSign },
  { value: "80%", label: "Ahorro de tiempo", icon: Clock },
  { value: "10K+", label: "Clientes satisfechos", icon: Users },
  { value: "99.9%", label: "Precisión", icon: TrendingUp }
];

export function Benefits() {
  return (
    <section id="benefits" className="py-24 px-6 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index}
                className="text-center p-8 rounded-2xl bg-white shadow-lg border border-gray-100"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#0063F9]/10 mb-4">
                  <Icon className="h-8 w-8 text-[#0063F9]" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Transforma tu negocio con facturación inteligente
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Swift DataWorks automatiza completamente tu proceso de facturación, 
              permitiéndote enfocarte en lo que realmente importa: hacer crecer tu negocio.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#00A3FF]/10 flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-[#00A3FF]"></div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Automatización Completa</h3>
                  <p className="text-gray-600">
                    Olvídate de procesos manuales. Genera, envía y almacena facturas automáticamente.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#0063F9]/10 flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-[#0063F9]"></div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Integración sin Fricciones</h3>
                  <p className="text-gray-600">
                    Conecta con tus sistemas actuales mediante nuestra API REST moderna y documentada.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#4D9FFF]/10 flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-[#4D9FFF]"></div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Escalabilidad Garantizada</h3>
                  <p className="text-gray-600">
                    Desde startups hasta empresas establecidas, nuestro sistema crece contigo.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-[#0063F9] to-[#00A3FF] p-1">
              <div className="size-full rounded-3xl bg-white p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold text-[#0063F9] mb-4">Swift</div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-[#0063F9] to-[#00A3FF] bg-clip-text text-transparent mb-6">DataWorks</div>
                  <div className="text-gray-600 text-lg">
                    La solución que tu negocio necesita
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-[#00A3FF] opacity-20 blur-2xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-[#0063F9] opacity-20 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}