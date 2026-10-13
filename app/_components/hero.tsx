import {
  Download,
  MessageCircle,
  Zap,
  WifiOff,
  Database,
} from "lucide-react";
import { PosMockup } from "./pos-mockup";
import { DOWNLOAD_URL, WA_DEMO } from "./site-config";

const keyPillars = [
  {
    icon: WifiOff,
    title: "Funciona sin internet",
    desc: "Cobra y despacha aunque se caiga la red en tu colonia.",
  },
  {
    icon: Zap,
    title: "Cobra en 3 segundos",
    desc: "Vende por pieza, metro o kilo sin hacer cuentas a mano.",
  },
  {
    icon: Database,
    title: "Cero pérdida de dinero",
    desc: "Corte de caja transparente y respaldo automático en la nube.",
  },
];

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-tech-blueprint pt-24 pb-16 lg:pt-32 lg:pb-24">
      {/* Contenedor Principal */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Columna Izquierda: Mensaje Claro + Conversión */}
          <div className="lg:col-span-7 xl:col-span-6">

            {/* Titular Principal H1 - Con la línea decorativa bien separada con margen negativo inferior */}
            <h1 className="font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl xl:text-6xl leading-[1.25]">
              Cobra en segundos, controla tu dinero y{" "}
              <span className="relative inline-block text-brand-600">
                nunca más dudes
                <svg
                  className="absolute -bottom-3 sm:-bottom-4 left-0 w-full text-brand-300 pointer-events-none"
                  viewBox="0 0 250 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 8C50 3 150 2 247 8"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              del precio de una pieza.
            </h1>

            {/* Subtítulo enfocado en la realidad del mostrador */}
            <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl font-normal">
              El sistema de mostrador que <strong className="text-slate-900 font-semibold">funciona sin internet</strong>, te avisa qué productos comprar y respalda tus ventas en la nube. Diseñado específicamente para el mostrador de ferretería.
            </p>

            {/* CTAs Principales con Botón Sólido */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={DOWNLOAD_URL}
                download
                className="group relative inline-flex items-center justify-center gap-3 rounded-2xl bg-brand-600 px-7 py-4 text-base font-bold text-white shadow-xl shadow-brand-600/30 transition hover:bg-brand-700 hover:shadow-2xl hover:shadow-brand-600/40 active:scale-[0.98]"
              >
                <Download className="size-5 transition group-hover:-translate-y-0.5" strokeWidth={2.5} />
                <div className="text-left">
                  <span className="block leading-none">Descargar Prueba Gratis</span>
                  <span className="block text-[11px] font-medium text-blue-100 mt-1">
                    14 días completos · Windows 10/11
                  </span>
                </div>
              </a>

              <a
                href={WA_DEMO}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-2xl border-2 border-slate-300/80 bg-white px-6 py-4 text-base font-bold text-slate-800 shadow-xs transition hover:border-brand-500 hover:bg-brand-50/50 hover:text-brand-700"
              >
                <MessageCircle className="size-5 text-emerald-600" />
                <span>Ver Demo en WhatsApp</span>
              </a>
            </div>

            {/* Subnota sutil de instalación */}
            <div className="mt-4 text-xs font-semibold text-slate-500">
              Instalación rápida en 1 clic · Sin registros complicados
            </div>

          </div>

          {/* Columna Derecha: Vista Limpia de la Aplicación */}
          <div className="lg:col-span-5 xl:col-span-6">
            <PosMockup />
          </div>

        </div>

        {/* 3 Pilares Clave */}
        <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {keyPillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="flex items-start gap-4 rounded-2xl border border-brand-100 bg-white p-5 shadow-sm shadow-brand-900/5 transition hover:border-brand-300 hover:shadow-md"
              >
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 border border-brand-100">
                  <Icon className="size-6" />
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-ink">
                    {pillar.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-600 leading-snug">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
