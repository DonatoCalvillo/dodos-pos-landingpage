import {
  Download,
  CheckCircle2,
  Monitor,
  ShieldCheck,
  PackageOpen,
  HardDrive,
  MessageCircle,
  FileCheck2,
  MousePointerClick,
  Sparkles,
} from "lucide-react";
import { DOWNLOAD_URL, APP_VERSION, WA_DEMO } from "./site-config";

const requirements = [
  {
    icon: Monitor,
    title: "Sistema Compatible",
    desc: "Windows 10 y Windows 11 (64 bits). Funciona fluido en cualquier laptop o PC de mostrador.",
  },
  {
    icon: ShieldCheck,
    title: "Sin Permisos de Administrador",
    desc: "Instalador ligero en 1 solo archivo. No altera registros delicados de tu computadora.",
  },
  {
    icon: PackageOpen,
    title: "Catálogos Ferretero/Abarrotero Listo",
    desc: "Incluye base de datos genérica de muestra (+150 productos) para que pruebes de inmediato.",
  },
  {
    icon: FileCheck2,
    title: "14 Días de Prueba Completa",
    desc: "Sin limitaciones de funciones ni marcas de agua en tickets. Si te gusta, te quedas con él.",
  },
];

export function DownloadArea() {
  return (
    <section id="descarga" className="relative bg-white py-20 sm:py-28 border-t border-slate-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Caja de Descarga Principal de Gran Carácter */}
        <div className="relative overflow-hidden rounded-3xl border-2 border-brand-200 bg-brand-50/40 p-8 sm:p-12 lg:p-16 max-w-5xl mx-auto shadow-xl shadow-brand-900/5">
          {/* Fondo tecnológico de cuadrícula azul */}
          <div className="bg-dot-pattern absolute inset-0 -z-10 opacity-60" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Texto y Botón de Descarga */}
            <div className="lg:col-span-7">
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink tracking-tight">
                Área de Descarga Oficial de POSLY
              </h2>

              <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
                Descarga el instalador oficial, ejecútalo en 1 clic y empieza a cobrar en tu ferretería hoy mismo.
              </p>

              {/* Botón Principal de Descarga */}
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href={DOWNLOAD_URL}
                  download
                  className="group relative flex items-center justify-center gap-3.5 rounded-2xl bg-brand-600 px-8 py-5 text-base sm:text-lg font-bold text-white shadow-xl shadow-brand-600/35 transition hover:bg-brand-700 hover:shadow-2xl hover:shadow-brand-600/45 active:scale-[0.98]"
                >
                  <Download className="size-6 transition group-hover:-translate-y-0.5" strokeWidth={2.5} />
                  <div className="text-left">
                    <span className="block leading-tight font-extrabold">Descargar POSLY_Setup.exe</span>
                    <span className="block text-xs font-medium text-brand-100 mt-0.5">
                      Instalador Ligero · Windows 10/11 · Prueba Gratis
                    </span>
                  </div>
                </a>
              </div>

              <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-slate-500">
                <CheckCircle2 className="size-4 text-emerald-600" />
                <span>Instalación instantánea sin registros complicados</span>
              </div>
            </div>

            {/* Checklist de Requisitos y Certeza Técnica */}
            <div className="lg:col-span-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-4">
              <h3 className="font-display text-sm font-bold uppercase tracking-wider text-slate-800 border-b border-slate-100 pb-2.5">
                Especificaciones del Instalador
              </h3>

              {requirements.map((req) => {
                const Icon = req.icon;
                return (
                  <div key={req.title} className="flex items-start gap-3">
                    <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600 mt-0.5">
                      <Icon className="size-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">{req.title}</h4>
                      <p className="text-[11px] text-slate-500 leading-snug">{req.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>

        {/* Sección de Soporte y Acompañamiento Inmediato */}
        <div
          id="soporte"
          className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8 max-w-4xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        >
          <div className="flex items-start gap-4">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-800">
              <MessageCircle className="size-6" />
            </div>
            <div>
              <h3 className="font-display text-base sm:text-lg font-bold text-ink">
                ¿Tienes dudas con la instalación o quieres una demo guiada?
              </h3>
              <p className="mt-1 text-sm text-slate-600">
                Escríbenos por WhatsApp y un asesor técnico te asiste en vivo en tu mostrador.
              </p>
            </div>
          </div>

          <a
            href={WA_DEMO}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-bold text-white shadow-md shadow-emerald-700/20 transition hover:bg-emerald-700 active:scale-[0.98]"
          >
            <MessageCircle className="size-4" />
            <span>Hablar con un Asesor</span>
          </a>
        </div>

      </div>
    </section>
  );
}
