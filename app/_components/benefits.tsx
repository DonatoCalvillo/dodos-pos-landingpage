import {
  Scale,
  WifiOff,
  Wallet,
  Database,
  CheckCircle2,
} from "lucide-react";
import { DOWNLOAD_URL } from "./site-config";

const benefitsList = [
  {
    icon: Scale,
    tag: "Mostrador Ágil",
    title: "Venta por piezas, metros o kilos",
    desc: "El cliente pide 3.5 metros de manguera o 1.250 kg de clavos. Solo escribes la cantidad y el sistema calcula el importe exacto sin margen de error.",
    highlight: "Búsqueda por código de barras o escribiendo el nombre",
  },
  {
    icon: WifiOff,
    tag: "Siempre Funciona",
    title: "Modo Offline 100% garantizado",
    desc: "¿Se fue el internet en tu colonia? Tu mostrador no se detiene ni un segundo. Todas las ventas, cobros e inventario operan directamente en tu equipo.",
    highlight: "No dependes de conexiones lentas para cobrar",
  },
  {
    icon: Wallet,
    tag: "Control de Dinero",
    title: "Corte de caja transparente",
    desc: "Registra entradas, salidas de dinero para proveedores y compras menores. Al final del turno, el sistema cuadra el efectivo contra el total cobrado.",
    highlight: "Conoce tu ganancia neta en pesos cada día",
  },
  {
    icon: Database,
    tag: "Tranquilidad Total",
    title: "Respaldo automático en la nube",
    desc: "Al cerrar tu caja, tu información se comprime y se envía a una bóveda protegida en la nube. Si tu computadora se rompe o se moja, no pierdes nada.",
    highlight: "Recupera tu catálogo e historial en un solo clic",
  },
];

export function Benefits() {
  return (
    <section id="beneficios" className="relative bg-tech-blueprint py-20 sm:py-28 border-t border-slate-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado sin tag/badge superior */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl font-extrabold text-ink sm:text-4xl lg:text-5xl tracking-tight leading-[1.15]">
            Creado para el ritmo y la exigencia de una ferretería
          </h2>
          <p className="mt-4 text-base text-slate-600 sm:text-lg leading-relaxed">
            Sin complicaciones innecesarias. Todo lo que necesitas para operar rápido, seguro y sin fugas de dinero.
          </p>
        </div>

        {/* 4 Cards de Gran Calidad Gráfica y Azul Profesional */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {benefitsList.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group relative flex flex-col justify-between rounded-3xl border border-brand-100 bg-white p-7 sm:p-9 shadow-md shadow-brand-900/5 shadow-card-hover"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex size-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 border border-brand-100/80 group-hover:bg-brand-600 group-hover:text-white transition duration-200">
                      <Icon className="size-7" />
                    </div>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-slate-600">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="mt-6 font-display text-xl sm:text-2xl font-bold text-ink tracking-tight">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-base text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Sub-destacado con check */}
                <div className="mt-6 pt-5 border-t border-slate-100 flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-brand-800">
                  <CheckCircle2 className="size-4.5 text-emerald-600 shrink-0" />
                  <span>{item.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mini Banner CTA integrado dentro de beneficios */}
        <div className="mt-12 text-center">
          <p className="text-sm font-medium text-slate-600">
            ¿Listo para ver cómo acelera la atención en tu local?
          </p>
          <a
            href={DOWNLOAD_URL}
            download
            className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-brand-700 hover:text-brand-800 underline underline-offset-4"
          >
            Descargar la prueba de 14 días sin costo →
          </a>
        </div>

      </div>
    </section>
  );
}
