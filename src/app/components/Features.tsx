import { 
  FileText, 
  Zap, 
  Shield, 
  BarChart3, 
  Cloud, 
  Smartphone,
  Lock,
  RefreshCw 
} from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Facturación Automatizada",
    description: "Genera facturas electrónicas de forma automática y rápida, cumpliendo con todas las normativas fiscales.",
    color: "#0063F9"
  },
  {
    icon: Zap,
    title: "Procesamiento Rápido",
    description: "Sistema optimizado que procesa miles de facturas por minuto sin pérdida de rendimiento.",
    color: "#00A3FF"
  },
  {
    icon: Shield,
    title: "100% Seguro",
    description: "Encriptación de extremo a extremo y respaldo automático de toda tu información.",
    color: "#0063F9"
  },
  {
    icon: BarChart3,
    title: "Reportes Avanzados",
    description: "Visualiza tus datos con reportes detallados y análisis en tiempo real.",
    color: "#4D9FFF"
  },
  {
    icon: Cloud,
    title: "Basado en la Nube",
    description: "Accede a tu sistema desde cualquier lugar, en cualquier momento, sin instalaciones.",
    color: "#0063F9"
  },
  {
    icon: Smartphone,
    title: "Multi-Dispositivo",
    description: "Compatible con computadoras, tablets y smartphones para gestionar tu negocio sobre la marcha.",
    color: "#00A3FF"
  },
  {
    icon: Lock,
    title: "Cumplimiento Legal",
    description: "Cumple con todas las regulaciones y estándares de facturación electrónica vigentes.",
    color: "#0063F9"
  },
  {
    icon: RefreshCw,
    title: "Integración Fácil",
    description: "Conéctate con tu sistema actual mediante nuestra API REST y webhooks.",
    color: "#0043B8"
  }
];

export function Features() {
  return (
    <section id="features" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Todo lo que necesitas en un solo lugar
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Swift DataWorks te ofrece una solución completa para modernizar tu proceso de facturación
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="group p-6 rounded-2xl bg-white border border-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                style={{
                  boxShadow: "0 0 0 0 transparent",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 20px 60px -10px ${feature.color}40`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 0 0 0 transparent";
                }}
              >
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: `${feature.color}15` }}
                >
                  <Icon className="h-6 w-6" style={{ color: feature.color }} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}