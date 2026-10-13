import {
  ScanBarcode,
  Printer,
  Package,
  CheckCircle2,
  MessageCircle,
  Usb,
} from "lucide-react";
import { whatsappLink } from "./site-config";

const hardwareItems = [
  {
    badge: "Hardware Mostrador",
    icon: ScanBarcode,
    title: "Lector de Código de Barras",
    subtitle: "Para mostrador con polvo y uso rudo continuo.",
    variants: [
      {
        name: "Lector USB de Mano",
        price: "$450 MXN",
        details: "Gatillo ergonómico de alta velocidad. Conectas al USB y lee al instante.",
      },
      {
        name: "Lector Omnidireccional",
        price: "$1,200 MXN",
        details: "Manos libres. Pasas el producto y lo detecta en cualquier ángulo sin apuntar.",
      },
    ],
    features: [
      "Lectura instantánea de etiquetas y empaques arrugados",
      "Conexión USB directa, sin programas extra",
      "Compatible de fábrica con POSLY",
    ],
    highlight: false,
  },
  {
    badge: "Hardware Mostrador",
    icon: Printer,
    title: "Impresora Térmica de Tickets",
    subtitle: "Impresión limpia sin tinta ni cartuchos caros.",
    variants: [
      {
        name: "Impresora 58 mm",
        price: "$650 MXN",
        details: "Formato ticket estándar compacto. Apertura automática de cajón.",
      },
      {
        name: "Impresora 80 mm",
        price: "$1,500 MXN",
        details: "Ticket ancho con corte automático de papel de alta velocidad.",
      },
    ],
    features: [
      "No gasta en tinta: usa papel térmico económico",
      "Envía señal para abrir el cajón de dinero al cobrar",
      "Imprime logotipo de tu ferretería y folio de ticket",
    ],
    highlight: false,
  },
  {
    badge: "Kit Recomendado",
    icon: Package,
    title: "Kit Mostrador Completo",
    subtitle: "Lector + Impresora + Cajón de Dinero de 4 billetes.",
    variants: [
      {
        name: "Kit Todo en Uno",
        price: "$2,200 MXN",
        details: "Lector USB + Impresora de Tickets + Cajón de Acero con llave.",
      },
    ],
    features: [
      "Todo probado y configurado de fábrica para POSLY",
      "Cajón de dinero de uso pesado que abre solo al cobrar",
      "Solo enchufas a tu computadora y empiezas a vender",
      "Ahorras tiempo buscando compatibilidades",
    ],
    highlight: true,
  },
];

export function Hardware() {
  return (
    <section id="hardware" className="relative bg-white py-20 sm:py-28 border-t border-slate-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado sin tag/badge superior */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl font-extrabold text-ink sm:text-4xl lg:text-5xl tracking-tight leading-[1.15]">
            Listo para Enchufar y Cobrar
          </h2>
          <p className="mt-4 text-base text-slate-600 sm:text-lg leading-relaxed">
            Equipamiento físico de uso rudo probado con POSLY. Te lo entregamos configurado y listo para trabajar.
          </p>
        </div>

        {/* Grid de 3 Cards de Hardware */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">
          {hardwareItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`relative flex flex-col justify-between rounded-3xl p-7 sm:p-8 transition duration-200 ${
                  item.highlight
                    ? "border-2 border-brand-600 bg-brand-50/40 shadow-xl shadow-brand-900/10"
                    : "border border-slate-200 bg-white shadow-sm hover:border-brand-200 hover:shadow-md"
                }`}
              >
                {/* Badge Superior */}
                {item.highlight && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-brand-600 px-4 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-brand-700/30">
                    Combo Más Elegido
                  </span>
                )}

                <div>
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex size-13 items-center justify-center rounded-2xl ${
                        item.highlight
                          ? "bg-brand-600 text-white shadow-md shadow-brand-700/25"
                          : "bg-brand-50 text-brand-600 border border-brand-100"
                      }`}
                    >
                      <Icon className="size-6.5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                        {item.badge}
                      </span>
                      <h3 className="font-display text-xl font-bold text-ink">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                    {item.subtitle}
                  </p>

                  {/* Precios y Variantes Claras */}
                  <div className="mt-6 space-y-2.5">
                    {item.variants.map((v) => (
                      <div
                        key={v.name}
                        className="rounded-2xl border border-slate-200/90 bg-white p-3.5 shadow-xs"
                      >
                        <div className="flex items-baseline justify-between gap-2">
                          <span className="text-sm font-bold text-slate-900">{v.name}</span>
                          <span className="font-display text-lg font-extrabold text-brand-700">
                            {v.price}
                          </span>
                        </div>
                        <p className="mt-1 text-xs text-slate-500 leading-snug">
                          {v.details}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Lista de características */}
                  <ul className="mt-6 space-y-2.5 text-xs sm:text-sm text-slate-700">
                    {item.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5">
                        <CheckCircle2 className="size-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Botón de pedido WhatsApp con producto precargado */}
                <div className="mt-8 pt-5 border-t border-slate-100">
                  <a
                    href={whatsappLink(`Hola, me interesa comprar el ${item.title} para POSLY.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-bold transition active:scale-[0.98] ${
                      item.highlight
                        ? "bg-brand-600 text-white shadow-md shadow-brand-700/25 hover:bg-brand-700"
                        : "border-2 border-slate-200 bg-white text-slate-800 hover:border-brand-500 hover:text-brand-700"
                    }`}
                  >
                    <MessageCircle className="size-4 text-emerald-600" />
                    <span>Pedir con Envío por WhatsApp</span>
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Nota de asesoría */}
        <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-5 max-w-2xl mx-auto flex items-center justify-center gap-3 text-xs sm:text-sm text-slate-600 text-center">
          <Usb className="size-4 text-brand-600 shrink-0" />
          <span>
            ¿Ya tienes lector o impresora en tu local? <strong>POSLY es compatible</strong> con cualquier marca estándar USB.
          </span>
        </div>

      </div>
    </section>
  );
}
