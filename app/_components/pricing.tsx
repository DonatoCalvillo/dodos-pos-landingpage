import {
  Check,
  Download,
  MessageCircle,
  Sparkles,
  ShieldCheck,
  Headphones,
  FileSpreadsheet,
  CalendarCheck,
  CheckCircle2,
} from "lucide-react";
import { SectionHeader } from "./logo";
import { DOWNLOAD_URL, whatsappLink } from "./site-config";

const monthlyFeatures = [
  "Catálogo de productos y tornillería ilimitado",
  "Respaldos automáticos diarios protegidos en la nube",
  "Soporte prioritario y asesoría directa por WhatsApp",
  "Actualizaciones continuas incluidas sin costo extra",
  "Sin contratos forzosos: cancela cuando quieras",
];

const annualFeatures = [
  "Todo lo incluido en el Plan Mensual",
  "2 meses GRATIS incluidos (Ahorras $700 MXN al año)",
  "Asistencia sin costo en la carga de tu inventario inicial",
  "Prioridad máxima en soporte técnico por WhatsApp",
];

const lifetimeFeatures = [
  "Licencia permanente de por vida en tu mostrador",
  "1er año completo de soporte técnico prioritario incluido",
  "Soporte técnico opcional ampliable por $1,200 MXN/año posterior",
  "Actualizaciones continuas y catálogo ilimitado",
];

const onboardingServices = [
  "Carga asistida de tu catálogo en Excel a POSLY",
  "Configuración de tu impresora de tickets y lector de códigos",
  "Capacitación guiada de 30 minutos para ti y tus empleados en tu local",
];

export function Pricing() {
  return (
    <section id="precios" className="relative bg-tech-blueprint py-20 sm:py-28 border-t border-slate-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          title="Sin letras chiquitas ni cargos sorpresa"
          subtitle="Empieza con 14 días de prueba gratis completa. Si te sirve y mejora tu mostrador, eliges el plan que mejor se adapte."
        />

        {/* 3 Planes Principales */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">
          
          {/* Plan Mensual */}
          <div className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-7 sm:p-8 shadow-sm shadow-brand-900/5 transition hover:border-brand-200 hover:shadow-md">
            <div>
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-slate-700">
                  Plan Mensual
                </span>
                <span className="text-xs font-medium text-slate-500">Sin plazo forzoso</span>
              </div>

              <div className="mt-6 flex items-baseline gap-2">
                <span className="font-display text-4xl sm:text-5xl font-extrabold text-ink tracking-tight">
                  $350
                </span>
                <span className="text-sm font-semibold text-slate-500">
                  MXN / mes
                </span>
              </div>

              <p className="mt-2 text-sm text-slate-600">
                Ideal para pagar mes a mes con total flexibilidad.
              </p>

              {/* Lista de características */}
              <ul className="mt-8 space-y-3.5 text-sm text-slate-700 border-t border-slate-100 pt-6">
                {monthlyFeatures.map((feat) => (
                  <li key={feat} className="flex items-start gap-3">
                    <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 mt-0.5">
                      <Check className="size-3.5" strokeWidth={3} />
                    </span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 pt-6 border-t border-slate-100">
              <a
                href={DOWNLOAD_URL}
                download
                className="flex w-full items-center justify-center gap-2 rounded-xl border-2 border-slate-300 bg-white py-3.5 text-sm font-bold text-slate-800 transition hover:border-brand-600 hover:bg-brand-50 hover:text-brand-700 active:scale-[0.98]"
              >
                <Download className="size-4.5" />
                <span>Probar 14 Días Gratis</span>
              </a>
              <p className="mt-2 text-center text-xs text-slate-500">
                Descarga inmediata · No pide tarjeta
              </p>
            </div>
          </div>

          {/* Plan Anual (Destacado - Mejor Valor) */}
          <div className="relative flex flex-col justify-between rounded-3xl border-2 border-brand-600 bg-white p-7 sm:p-8 shadow-xl shadow-brand-900/10">
            {/* Badge Mejor Valor */}
            <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-brand-600 px-4 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-brand-700/30 whitespace-nowrap">
              Opción Más Elegida · Mejor Valor
            </span>

            <div>
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-brand-50 border border-brand-200 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-800">
                  Plan Anual
                </span>
                <span className="rounded-full bg-emerald-100 text-emerald-800 px-2.5 py-0.5 text-xs font-bold">
                  Ahorras $700 MXN
                </span>
              </div>

              <div className="mt-6 flex items-baseline gap-2">
                <span className="font-display text-4xl sm:text-5xl font-extrabold text-brand-950 tracking-tight">
                  $3,500
                </span>
                <span className="text-sm font-semibold text-slate-600">
                  MXN / año
                </span>
              </div>

              <p className="mt-2 text-sm text-brand-800 font-medium">
                Pagas 10 meses y recibes 12 (incluye 2 meses GRATIS).
              </p>

              {/* Lista de características */}
              <ul className="mt-8 space-y-3.5 text-sm text-slate-800 border-t border-brand-100 pt-6">
                {annualFeatures.map((feat) => (
                  <li key={feat} className="flex items-start gap-3">
                    <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-600 text-white mt-0.5 shadow-xs">
                      <Check className="size-3.5" strokeWidth={3} />
                    </span>
                    <span className="font-medium">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 pt-6 border-t border-brand-100">
              <a
                href={DOWNLOAD_URL}
                download
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-600 py-3.5 text-sm font-bold text-white shadow-md shadow-brand-700/25 transition hover:bg-brand-700 active:scale-[0.98]"
              >
                <Download className="size-4.5" />
                <span>Descargar Prueba Gratis por 14 Días</span>
              </a>

              <a
                href={whatsappLink("Hola, quiero contratar el Plan Anual de POSLY para mi ferretería.")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex w-full items-center justify-center gap-2 text-xs font-bold text-brand-700 hover:text-brand-900"
              >
                <MessageCircle className="size-3.5 text-emerald-600" />
                <span>O contrata directo por WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Plan Vitalicio */}
          <div className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-7 sm:p-8 shadow-sm shadow-brand-900/5 transition hover:border-brand-200 hover:shadow-md">
            <div>
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                  Plan Vitalicio
                </span>
                <span className="text-xs font-medium text-emerald-600 font-bold">Un solo pago</span>
              </div>

              <div className="mt-6 flex items-baseline gap-2">
                <span className="font-display text-4xl sm:text-5xl font-extrabold text-ink tracking-tight">
                  $3,500
                </span>
                <span className="text-sm font-semibold text-slate-500">
                  MXN / único
                </span>
              </div>

              <p className="mt-2 text-sm text-slate-600">
                Licencia definitiva para tu mostrador sin rentas mensuales.
              </p>

              {/* Lista de características */}
              <ul className="mt-8 space-y-3.5 text-sm text-slate-700 border-t border-slate-100 pt-6">
                {lifetimeFeatures.map((feat) => (
                  <li key={feat} className="flex items-start gap-3">
                    <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 mt-0.5">
                      <Check className="size-3.5" strokeWidth={3} />
                    </span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 pt-6 border-t border-slate-100">
              <a
                href={whatsappLink("Hola, me interesa adquirir la licencia del Plan Vitalicio de POSLY ($3,500 MXN).")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-xl border-2 border-slate-900 bg-slate-900 py-3.5 text-sm font-bold text-white transition hover:bg-slate-800 active:scale-[0.98]"
              >
                <MessageCircle className="size-4.5 text-emerald-400" />
                <span>Contratar Plan Vitalicio</span>
              </a>
              <p className="mt-2 text-center text-xs text-slate-500">
                Soporte ampliable a $1,200 MXN/año tras el 1er año
              </p>
            </div>
          </div>

        </div>

        {/* Tarjeta de Servicio de Instalación y Onboarding Opcional */}
        <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-6 sm:p-9 max-w-5xl mx-auto shadow-xs">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-brand-600" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Servicio Opcional · Pago Único
                </span>
              </div>
              <h3 className="mt-2.5 font-display text-xl sm:text-2xl font-bold text-ink">
                Instalación, Carga de Catálogo y Capacitación en Tu Local
              </h3>
              <p className="mt-1 text-sm text-slate-600 max-w-2xl">
                ¿Prefieres no preocuparte por configurar nada? Nosotros nos encargamos de que tu punto de venta quede 100% operativo.
              </p>
            </div>

            <div className="shrink-0 text-left lg:text-right">
              <div className="font-display text-3xl font-extrabold text-ink">
                $1,000 <span className="text-sm font-normal text-slate-500">MXN</span>
              </div>
              <a
                href={whatsappLink("Hola, me interesa agendar el servicio de instalación de POSLY en mi local.")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-4 py-2 text-xs font-bold text-white transition hover:bg-brand-700"
              >
                <MessageCircle className="size-3.5 text-emerald-400" />
                <span>Agendar Visita</span>
              </a>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm text-slate-700">
            {onboardingServices.map((service, index) => (
              <div key={index} className="flex items-start gap-2.5 rounded-xl bg-slate-50 p-3.5">
                <CheckCircle2 className="size-4.5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
