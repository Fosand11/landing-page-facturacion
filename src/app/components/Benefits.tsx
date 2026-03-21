import { CheckCircle2, ShieldCheck, Workflow, BarChart3 } from "lucide-react";

const benefitItems = [
  {
    title: "Automatizacion completa",
    description: "Reduce tareas manuales y evita retrabajos con procesos digitales claros.",
    icon: Workflow,
    color: "bg-[#00A3FF]/10 text-[#0284C7]",
  },
  {
    title: "Operacion confiable",
    description: "Controla tu flujo con respaldo local, trazabilidad y cumplimiento fiscal.",
    icon: ShieldCheck,
    color: "bg-[#0063F9]/10 text-[#1D4ED8]",
  },
  {
    title: "Crecimiento medible",
    description: "Toma decisiones con informacion ordenada y reportes listos para analizar.",
    icon: BarChart3,
    color: "bg-[#4D9FFF]/15 text-[#0369A1]",
  },
];

export function Benefits() {
  return (
    <section id="benefits" className="min-h-screen py-24 px-6 bg-gradient-to-br from-gray-50 to-white flex items-center">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div>
            <div className="inline-flex items-center rounded-full border border-[#BFDBFE] bg-[#EFF6FF] px-4 py-1.5 text-xs font-semibold text-[#1D4ED8] mb-5">
              Beneficios para tu negocio
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Más control, más velocidad y menos fricción operativa
            </h2>
            <p className="text-lg text-gray-600 mt-5 mb-8 leading-relaxed max-w-2xl">
              SwiftDataWorks te ayuda a operar de forma ordenada para que tu equipo venda más,
              responda más rápido y mantenga procesos consistentes.
            </p>

            <div className="space-y-4">
              {benefitItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-gray-200 bg-white p-4 sm:p-5 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${item.color}`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
                        <p className="text-gray-600 text-sm sm:text-[15px] leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl bg-gradient-to-br from-[#0055DB] via-[#0063F9] to-[#00A3FF] p-1 shadow-2xl">
              <div className="rounded-[22px] bg-[#0063F9] px-6 py-10 sm:px-10 sm:py-14 flex flex-col items-center">
                <img
                  src="/logo-horizontal.png"
                  alt="SwiftDataWorks logo"
                  className="w-60 sm:w-72 md:w-80 h-auto"
                />
                <p className="mt-5 text-white/90 text-sm text-center max-w-sm">
                  Plataforma pensada para operacion diaria, cumplimiento y crecimiento sostenible.
                </p>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2 w-full max-w-md">
                  <div className="rounded-xl bg-white/15 border border-white/20 px-3 py-2 text-white text-sm text-center">
                    Implementacion rapida
                  </div>
                  <div className="rounded-xl bg-white/15 border border-white/20 px-3 py-2 text-white text-sm text-center">
                    Soporte local
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-5 -right-4 rounded-xl bg-white shadow-lg border border-[#DBEAFE] px-3 py-2">
              <div className="flex items-center gap-2 text-[#1D4ED8]">
                <CheckCircle2 className="h-4 w-4" />
                <span className="text-xs font-semibold">Cumplimiento fiscal</span>
              </div>
            </div>
            <div className="absolute -bottom-5 -left-4 rounded-xl bg-white shadow-lg border border-[#DBEAFE] px-3 py-2">
              <div className="flex items-center gap-2 text-[#1D4ED8]">
                <CheckCircle2 className="h-4 w-4" />
                <span className="text-xs font-semibold">Automatizacion real</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}