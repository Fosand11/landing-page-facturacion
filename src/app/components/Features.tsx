import { motion } from "motion/react";
import { Database, FileText, Zap, Check } from "lucide-react";

const services = [
  {
    icon: Database,
    title: "Organización y automatización de datos",
    description: "Si hoy tienes información regada en Excel, PDFs, CSV o archivos, te ayudamos a poner orden y que se trabaje sola.",
    color: "#0063F9",
    benefits: [
      "Unimos información de distintas fuentes en un solo lugar",
      "Revisamos que los datos estén correctos (sin errores ni duplicados)",
      "Te dejamos reportes listos (ventas, compras, cierres, etc.)",
      "Automatizamos tareas repetitivas para ahorrar tiempo"
    ],
    result: "Un proceso claro que te entrega la información lista, más una guía simple para usarlo."
  },
  {
    icon: FileText,
    title: "Facturación electrónica (DTE) sin complicaciones",
    description: "Te ayudamos a facturar de forma electrónica con un sistema que hace el proceso más fácil y ordenado.",
    color: "#00A3FF",
    benefits: [
      "Creación de facturas paso a paso (para reducir errores)",
      "Firma y envío de la factura electrónica",
      "Confirmación de si fue aceptada o rechazada",
      "Historial y orden de documentos para contabilidad"
    ],
    result: "Un flujo de facturación funcionando, con acompañamiento para que tu equipo lo use con confianza."
  },
  {
    icon: Zap,
    title: "Automatización de procesos con n8n",
    description: "Creamos automatizaciones para que muchas tareas se hagan solas y tu equipo no pierda tiempo en cosas repetitivas.",
    color: "#0043B8",
    benefits: [
      "Automatizamos pasos del día a día (sin estar copiando y pegando)",
      "Conectamos tus herramientas para que \"se hablen\" entre sí",
      "Te ayudamos a reducir errores y atrasos",
      "Podemos dejar avisos y recordatorios automáticos cuando algo pase"
    ],
    result: "Procesos más rápidos, ordenados y fáciles de controlar, con automatizaciones claras y listas para usarse."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0,
    y: 50,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 100,
      duration: 0.6
    }
  }
};

const iconVariants = {
  hover: {
    scale: 1.1,
    rotate: [0, -10, 10, -10, 0],
    transition: {
      duration: 0.5
    }
  }
};

export function Features() {
  return (
    <section id="features" className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Te ayudamos a organizar, automatizar y simplificar los procesos de tu negocio
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ 
                  y: -10,
                  boxShadow: `0 25px 70px -15px ${service.color}30`
                }}
                className="group relative rounded-3xl p-8 bg-white border-2 border-gray-200 hover:border-transparent transition-colors duration-300 flex flex-col"
              >
                {/* Icon */}
                <motion.div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${service.color}15` }}
                  variants={iconVariants}
                  whileHover="hover"
                >
                  <Icon className="h-8 w-8" style={{ color: service.color }} />
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-3 text-gray-900">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Benefits */}
                <ul className="space-y-3 mb-6 flex-grow">
                  {service.benefits.map((benefit, idx) => (
                    <motion.li 
                      key={idx}
                      className="flex items-start gap-3 text-gray-700"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + idx * 0.1 }}
                    >
                      <div className="mt-1 flex-shrink-0">
                        <Check className="h-5 w-5" style={{ color: service.color }} />
                      </div>
                      <span className="text-sm leading-relaxed">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Result */}
                <motion.div 
                  className="pt-6 border-t border-gray-200"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.5 }}
                >
                  <p className="text-sm font-semibold text-gray-900 mb-2">
                    ¿Qué recibes?
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {service.result}
                  </p>
                </motion.div>

                {/* Hover gradient overlay */}
                <motion.div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: `linear-gradient(135deg, ${service.color}05 0%, transparent 100%)`
                  }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}