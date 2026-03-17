import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowLeft, Workflow, Plug, BellRing, Wand2, Check } from "lucide-react";

const flowSteps = [
  {
    icon: Workflow,
    title: "Disparador",
    description: "Evento o formulario que inicia el flujo."
  },
  {
    icon: Wand2,
    title: "Transformar",
    description: "Limpieza y reglas para estandarizar los datos."
  },
  {
    icon: Plug,
    title: "Integrar",
    description: "Conexiones con CRM, ERP, correo o planillas."
  },
  {
    icon: BellRing,
    title: "Notificar",
    description: "Alertas y reportes automaticos para el equipo."
  }
];

const automationIdeas = [
  "Alta automatica de clientes desde formularios",
  "Alertas cuando una venta cambia de estado",
  "Sincronizacion entre planillas y sistemas internos",
  "Asignacion de tareas y recordatorios en Slack o email",
  "Generacion de reportes diarios con datos consolidados"
];

const deliverySteps = [
  {
    title: "Diagnostico corto",
    description: "Revisamos tu flujo actual y definimos objetivos medibles."
  },
  {
    title: "Mapa y prototipo",
    description: "Disenamos el flujo en n8n con pasos claros y validaciones."
  },
  {
    title: "Implementacion",
    description: "Conectamos herramientas, probamos y ajustamos detalles."
  },
  {
    title: "Acompanamiento",
    description: "Dejamos documentacion simple y mejoras continuas."
  }
];

export function N8nPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#061A2E] via-[#0B3B7A] to-[#0C6AA6] text-white">
        <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-black/20 blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-28">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver al inicio
          </Link>

          <motion.h1
            className="mt-6 text-4xl md:text-6xl font-bold leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Automatizacion de procesos con n8n
          </motion.h1>
          <motion.p
            className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Creamos flujos visuales que conectan tus herramientas, reducen errores y
            eliminan tareas repetitivas con resultados medibles.
          </motion.p>
        </div>
      </section>

      <section className="py-16 md:py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Asi se construye un flujo real
          </motion.h2>

          <div className="mt-10 flex flex-col md:flex-row md:items-center md:gap-6">
            {flowSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  className="flex flex-1 flex-col rounded-3xl border border-gray-200 bg-white p-6 shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-center gap-3 text-blue-600">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                  </div>
                  <p className="mt-4 text-sm text-gray-600">{step.description}</p>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-8 hidden md:flex items-center justify-between">
            {flowSteps.slice(0, -1).map((_, index) => (
              <motion.div
                key={`line-${index}`}
                className="h-1 flex-1 bg-gradient-to-r from-blue-200 to-blue-500"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                style={{ transformOrigin: "left" }}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2">
          <div>
            <motion.h3
              className="text-2xl md:text-3xl font-bold text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Automatizaciones que solemos implementar
            </motion.h3>
            <ul className="mt-6 space-y-4">
              {automationIdeas.map((idea, index) => (
                <motion.li
                  key={idea}
                  className="flex items-start gap-3 text-gray-700"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Check className="mt-1 h-5 w-5 text-blue-600" />
                  <span className="text-sm leading-relaxed">{idea}</span>
                </motion.li>
              ))}
            </ul>
          </div>
          <div>
            <motion.h3
              className="text-2xl md:text-3xl font-bold text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Metodo de trabajo
            </motion.h3>
            <div className="mt-6 space-y-4">
              {deliverySteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  className="rounded-2xl border border-gray-200 bg-white p-5"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <h4 className="text-base font-semibold text-gray-900">{step.title}</h4>
                  <p className="mt-2 text-sm text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto rounded-3xl border border-blue-100 bg-gradient-to-r from-blue-50 to-white p-10 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
            Listo para automatizar tus procesos
          </h3>
          <p className="mt-4 text-gray-600">
            Cuentanos tu caso y te proponemos un flujo claro en pocos dias.
          </p>
          <Link
            to="/#contact"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-[#0063F9] px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-[#0043B8]"
          >
            Agendar una llamada
          </Link>
        </div>
      </section>
    </div>
  );
}
