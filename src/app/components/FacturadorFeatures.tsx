import {
  FileText,
  Send,
  Boxes,
  ShieldCheck,
  Settings2,
  Handshake,
  CheckCircle2,
} from "lucide-react";

const functionalityBlocks = [
  {
    icon: FileText,
    title: "Emisión de DTE sin complicaciones",
    description: "Crea y transmite tus documentos electrónicos desde una sola plataforma.",
    points: [
      "Soporta los principales tipos de DTE usados por empresas salvadoreñas.",
      "Flujo guiado para reducir errores y acelerar la emisión diaria.",
    ],
  },
  {
    icon: Send,
    title: "Envío automático por correo al cliente",
    description: "Envía cada comprobante automáticamente al finalizar la emisión.",
    points: [
      "Adjunta representación en PDF + archivo JSON del DTE.",
      "Compatible con Gmail y Outlook Graph (Azure OAuth2).",
    ],
  },
  {
    icon: Boxes,
    title: "Control comercial e inventario",
    description: "Mantiene tu operacion comercial conectada y con visibilidad en tiempo real.",
    points: [
      "Gestión de clientes y productos con datos completos.",
      "Kardex y movimientos de inventario para control real de existencias.",
      "Cuentas por cobrar con estado de cuenta, abonos y saldos por cliente.",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Anexos y cumplimiento fiscal",
    description: "Te ayuda a mantener consistencia y orden para control tributario.",
    points: [
      "Generacion de anexos aplicables por periodo.",
      "Exportacion en formatos listos para revision y presentacion.",
      "Filtros por ambiente y controles para mantener consistencia fiscal.",
    ],
  },
  {
    icon: Settings2,
    title: "Estabilidad y operacion empresarial",
    description: "Diseñado para operar de forma continua con herramientas de soporte.",
    points: [
      "Actualizaciones automáticas de la aplicación.",
      "Licenciamiento por dispositivo con activación sencilla.",
      "Herramientas administrativas para respaldo y continuidad operativa.",
    ],
  },
  {
    icon: Handshake,
    title: "Pensado para PYMEs salvadoreñas",
    description: "Interfaz orientada a resultados para equipos comerciales y administrativos.",
    points: [
      "Interfaz clara, rapida y facil de usar.",
      "Implementacion ágil con acompañamiento inicial.",
      "Menos tiempo en procesos manuales, más enfoque en vender y crecer.",
    ],
  },
];

export function FacturadorFeatures() {
  return (
    <section id="facturador-funcionalidades" className="min-h-screen py-24 px-6 bg-white flex items-center">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex items-center rounded-full border border-[#BFDBFE] bg-[#EFF6FF] px-4 py-1.5 text-xs font-semibold text-[#1D4ED8] mb-5">
            Funcionalidades de SDW Facturador
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Todo lo que una PYME necesita para facturar con control
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Solución completa para emitir DTE, ahorrar tiempo en operaciones diarias y mantener
            consistencia en procesos administrativos y fiscales.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {functionalityBlocks.map((block) => {
            const Icon = block.icon;
            return (
              <article
                key={block.title}
                className="rounded-2xl border border-gray-200 bg-gradient-to-b from-white to-gray-50/60 p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0063F9]/10 flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-[#0063F9]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{block.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{block.description}</p>
                <ul className="space-y-2.5">
                  {block.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-sm text-gray-700">
                      <CheckCircle2 className="h-4 w-4 text-[#0284C7] mt-0.5 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
