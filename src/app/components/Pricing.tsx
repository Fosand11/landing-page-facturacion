import { Button } from "@/app/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "29",
    description: "Perfecto para pequeños negocios",
    color: "#0063F9",
    features: [
      "Hasta 100 facturas/mes",
      "1 usuario",
      "Soporte por email",
      "Almacenamiento 5GB",
      "Reportes básicos",
      "API REST"
    ],
    cta: "Comenzar"
  },
  {
    name: "Professional",
    price: "79",
    description: "Para negocios en crecimiento",
    color: "#00A3FF",
    popular: true,
    features: [
      "Hasta 1000 facturas/mes",
      "5 usuarios",
      "Soporte prioritario 24/7",
      "Almacenamiento 50GB",
      "Reportes avanzados",
      "API REST + Webhooks",
      "Integración con contabilidad",
      "Backup automático"
    ],
    cta: "Más Popular"
  },
  {
    name: "Enterprise",
    price: "199",
    description: "Para grandes empresas",
    color: "#0043B8",
    features: [
      "Facturas ilimitadas",
      "Usuarios ilimitados",
      "Soporte dedicado 24/7",
      "Almacenamiento ilimitado",
      "Reportes personalizados",
      "API completa",
      "Todas las integraciones",
      "SLA garantizado",
      "Consultoría incluida"
    ],
    cta: "Contactar Ventas"
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Planes diseñados para cada necesidad
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Elige el plan perfecto para tu negocio. Sin costos ocultos, cancela cuando quieras.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-3xl p-8 border-2 transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-[#00A3FF] shadow-2xl bg-gradient-to-br from-[#00A3FF]/5 to-white' 
                  : 'border-gray-200 hover:border-[#0063F9]/30 hover:shadow-xl'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-[#0063F9] to-[#00A3FF] text-white px-4 py-1 rounded-full text-sm font-bold">
                    Más Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2 text-gray-900">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-bold text-gray-900">${plan.price}</span>
                  <span className="text-gray-600">/mes</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div 
                      className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                      style={{ backgroundColor: `${plan.color}20` }}
                    >
                      <Check className="h-3 w-3" style={{ color: plan.color }} />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className="w-full py-6 text-lg font-semibold"
                style={{
                  backgroundColor: plan.popular ? plan.color : 'white',
                  color: plan.popular ? 'white' : plan.color,
                  border: `2px solid ${plan.color}`
                }}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            ¿Necesitas un plan personalizado para tu empresa?
          </p>
          <Button 
            size="lg" 
            variant="outline"
            className="border-2 border-[#0063F9] text-[#0063F9] hover:bg-[#0063F9]/10"
          >
            Hablar con Ventas
          </Button>
        </div>
      </div>
    </section>
  );
}