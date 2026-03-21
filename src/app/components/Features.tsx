import { motion } from "motion/react";
import { Database, FileText, Zap, Check } from "lucide-react";

const services = [
  {
    icon: Database,
    title: "Organización y automatización de datos empresariales",
    description: "Centralizamos y estructuramos tu información para convertirla en procesos confiables, trazables y eficientes.",
    color: "#0063F9",
    benefits: [
      "Integramos información de diferentes fuentes en una sola operación",
      "Depuramos y validamos datos para reducir errores y duplicados",
      "Entregamos reportes operativos listos para análisis y seguimiento",
      "Automatizamos tareas repetitivas para mejorar la productividad"
    ],
    result: "Un proceso claro con datos confiables y una metodología práctica para que tu equipo opere con mayor control.",
    ctaPrimary: "Cuéntanos tu caso",
  },
  {
    icon: FileText,
    title: "SDW Facturador Electrónico para PYMES",
    description: "Emite, firma y envía DTE en minutos, cumpliendo con Hacienda.",
    color: "#00A3FF",
    benefits: [
      "Emisión de DTE (FE, CCF, NC, ND, FSE, Exportación y más)",
      "Envío automático por correo con PDF + JSON",
      "Control de inventario y cuentas por cobrar",
      "Anexos fiscales y reportes de ventas listos para exportar",
      "Sin limites de DTE",
      "Datos locales con copias de seguridad",
      "Pago único o mensual"
    ],
    result: "Un flujo de facturación funcionando, con acompañamiento para que tu equipo lo use con confianza.",
    badges: [],
    trustTitle: "Implementación rápida",
    trustText: "Capacitación incluida",
    oneTimePrice: "$299",
    monthlyPrice: "$29",
    ctaPrimary: "Solicitar demo",
    ctaSecondary: "Ver funcionalidades",
    ctaSecondaryTarget: "#facturador-funcionalidades",
    featured: true,
  },
  {
    icon: Zap,
    title: "Automatización de procesos con n8n",
    description: "Diseñamos flujos automatizados para estandarizar operaciones, reducir tiempos de respuesta y escalar con control.",
    color: "#0043B8",
    benefits: [
      "Automatizamos tareas operativas repetitivas sin intervención manual",
      "Conectamos tus sistemas para sincronizar datos entre áreas",
      "Reducimos errores de ejecución y cuellos de botella",
      "Implementamos alertas y notificaciones automáticas por eventos clave",
      "Documentamos cada flujo para facilitar mantenimiento y continuidad"
    ],
    result: "Procesos más ágiles y medibles, con automatizaciones listas para operar y evolucionar junto a tu negocio.",
    ctaPrimary: "Cuéntanos tu caso",
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
      type: "spring" as const,
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
  const handleScrollTo = (targetId: string) => {
    const element = document.querySelector(targetId);
    if (!element) return;

    const offset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <section id="features" className="min-h-screen py-24 px-6 bg-gradient-to-b from-gray-50 to-white flex items-center">
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
                className={`group relative rounded-3xl p-8 border-2 hover:border-transparent transition-colors duration-300 flex flex-col ${
                  service.featured
                    ? "bg-gradient-to-b from-[#EFF8FF] to-white border-[#B9E2FF]"
                    : "bg-white border-gray-200"
                }`}
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
                <ul className={`flex-grow ${service.featured ? "space-y-2 mb-4" : "space-y-3 mb-6"}`}>
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
                      <span className={`leading-relaxed ${service.featured ? "text-[13px]" : "text-sm"}`}>{benefit}</span>
                    </motion.li>
                  ))}
                </ul>

                {service.badges && (
                  <div className="mb-5 flex flex-wrap gap-2">
                    {service.badges.map((badge) => (
                      <span
                        key={badge}
                        className="rounded-full border border-[#B9E2FF] bg-[#F0F9FF] px-3 py-1 text-xs font-semibold text-[#0369A1]"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                )}

                {service.trustTitle && (
                  <div className="mb-3 rounded-xl border border-[#BAE6FD] bg-[#ECFEFF] p-2.5">
                    <p className="text-[13px] font-semibold text-[#0C4A6E]">{service.trustTitle}</p>
                    {service.trustText && <p className="text-[12px] leading-tight text-[#155E75]">{service.trustText}</p>}
                  </div>
                )}

                {service.oneTimePrice && service.monthlyPrice && (
                  <div className="mb-3 rounded-2xl border border-[#93C5FD] bg-[#EFF6FF] p-3">
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-[#1D4ED8]">
                      Inversión <span className="normal-case font-medium tracking-normal">(IVA incluido)</span>
                    </p>
                    <div className="mt-2 grid grid-cols-2 gap-2">
                      <div className="rounded-xl bg-white border border-[#BFDBFE] p-2.5">
                        <p className="text-xs text-gray-500">Pago único</p>
                        <p className="text-3xl leading-none font-extrabold text-[#0F172A]">{service.oneTimePrice}</p>
                      </div>
                      <div className="rounded-xl bg-white border border-[#BFDBFE] p-2.5">
                        <p className="text-xs text-gray-500">Plan mensual</p>
                        <p className="text-3xl leading-none font-extrabold text-[#0F172A]">{service.monthlyPrice}</p>
                      </div>
                    </div>
                  </div>
                )}

                {service.ctaPrimary && (
                  <div className={`mb-4 grid gap-2 ${service.ctaSecondary ? "grid-cols-2" : "grid-cols-1"}`}>
                    <button
                      type="button"
                      onClick={() => handleScrollTo("#contact")}
                      className="rounded-xl bg-[#0063F9] text-white px-3 py-2 text-[13px] font-semibold hover:bg-[#0152d9] transition-colors"
                    >
                      {service.ctaPrimary}
                    </button>
                    {service.ctaSecondary && (
                      <button
                        type="button"
                        onClick={() => handleScrollTo(service.ctaSecondaryTarget || "#features")}
                        className="rounded-xl border border-[#93C5FD] bg-white text-[#1D4ED8] px-3 py-2 text-[13px] font-semibold hover:bg-[#EFF6FF] transition-colors"
                      >
                        {service.ctaSecondary}
                      </button>
                    )}
                  </div>
                )}

                {/* Result */}
                <motion.div 
                  className={`${service.featured ? "pt-4" : "pt-6"} border-t border-gray-200`}
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