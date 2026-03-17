import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2, Bug, ClipboardCheck, LineChart } from "lucide-react";

const qaFocus = [
  "Pruebas funcionales y de regresion",
  "Automatizacion de pruebas criticas",
  "Cobertura en APIs y flujos end-to-end",
  "Reporte de hallazgos con prioridades",
  "Reejecucion y validacion posterior"
];

const qaStages = [
  {
    title: "Levantamiento",
    description: "Entendemos tu producto, riesgos y tiempos de entrega."
  },
  {
    title: "Plan de pruebas",
    description: "Definimos casos, prioridades y estrategia automatizada."
  },
  {
    title: "Ejecucion",
    description: "Pruebas manuales y automatizadas con evidencia clara."
  },
  {
    title: "Reporte",
    description: "Hallazgos, impacto, recomendaciones y proximo paso."
  }
];

const qaResults = [
  {
    icon: Bug,
    title: "Menos errores en produccion",
    description: "Detectamos fallas antes de que impacten a tus usuarios."
  },
  {
    icon: ClipboardCheck,
    title: "Estandares claros",
    description: "Checklist y criterios de aceptacion para cada release."
  },
  {
    icon: LineChart,
    title: "Indicadores de calidad",
    description: "Metricas para medir estabilidad y avance de correcciones."
  }
];

export function QaPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#111827] via-[#1F2937] to-[#0F4C81] text-white">
        <div className="absolute -top-16 left-8 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-black/30 blur-3xl" />

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
            QA automatizado y pruebas funcionales
          </motion.h1>
          <motion.p
            className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Aseguramos la calidad de tus aplicaciones con pruebas claras, priorizadas
            y reportes faciles de entender para tu equipo.
          </motion.p>
        </div>
      </section>

      <section className="py-16 md:py-20 px-6">
        <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2">
          <div>
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              En que nos enfocamos
            </motion.h2>
            <ul className="mt-6 space-y-4">
              {qaFocus.map((item, index) => (
                <motion.li
                  key={item}
                  className="flex items-start gap-3 text-gray-700"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <CheckCircle2 className="mt-1 h-5 w-5 text-blue-600" />
                  <span className="text-sm leading-relaxed">{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
          <div>
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Etapas de QA
            </motion.h2>
            <div className="mt-6 space-y-4">
              {qaStages.map((stage, index) => (
                <motion.div
                  key={stage.title}
                  className="rounded-2xl border border-gray-200 bg-white p-5"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <h3 className="text-base font-semibold text-gray-900">{stage.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{stage.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Que obtienes al trabajar con QA
          </motion.h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {qaResults.map((result, index) => {
              const Icon = result.icon;
              return (
                <motion.div
                  key={result.title}
                  className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-gray-900">{result.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{result.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto rounded-3xl border border-blue-100 bg-gradient-to-r from-blue-50 to-white p-10 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
            Necesitas un plan de QA para tu equipo
          </h3>
          <p className="mt-4 text-gray-600">
            Escribenos y definimos el alcance, los tiempos y las pruebas mas criticas.
          </p>
          <Link
            to="/#contact"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-[#0063F9] px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-[#0043B8]"
          >
            Hablemos de QA
          </Link>
        </div>
      </section>
    </div>
  );
}
