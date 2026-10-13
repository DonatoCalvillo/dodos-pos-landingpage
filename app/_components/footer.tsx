import { Download, MessageCircle, ExternalLink, ShieldCheck, Heart } from "lucide-react";
import { Logo } from "./logo";
import { DOWNLOAD_URL, WA_DEMO } from "./site-config";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white pb-24 text-slate-600 md:pb-0">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-10 border-b border-slate-100">
          
          {/* Logo y Eslogan */}
          <div className="md:col-span-5">
            <Logo />
            <p className="mt-3 text-sm text-slate-500 max-w-sm">
              Punto de venta y control de mostrador profesional para ferreterías, tlapalerías y materiales de construcción en México.
            </p>
          </div>

          {/* Enlaces Legales */}
          <div className="md:col-span-4 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-slate-600">
            <a href="/aviso-de-privacidad" className="hover:text-brand-700 transition">
              Aviso de Privacidad
            </a>
            <a href="/terminos" className="hover:text-brand-700 transition">
              Términos del Servicio
            </a>
            <a href="#soporte" className="hover:text-brand-700 transition">
              Soporte Técnico
            </a>
          </div>

          {/* Dodos Branding Obligatorio */}
          <div className="md:col-span-3 md:text-right">
            <a
              href="https://www.dodos.com.mx/"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-bold text-slate-700 shadow-xs transition hover:border-brand-500 hover:text-brand-700 hover:bg-white"
            >
              <span>Powered by Dodos</span>
              <ExternalLink className="size-3 text-brand-600" />
            </a>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2">
          <p>© 2026 POSLY. Todos los derechos reservados.</p>
          <p className="flex items-center gap-1">
            Hecho en México para el comercio ferretero tradicional.
          </p>
        </div>

      </div>
    </footer>
  );
}

/** Barra de Acción Fija para Móviles - Crucial para Conversión Móvil */
export function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex items-center gap-2 border-t border-slate-200 bg-white/95 px-3 py-2.5 backdrop-blur-md md:hidden shadow-lg">
      <a
        href={DOWNLOAD_URL}
        download
        className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-brand-600 py-3 text-sm font-bold text-white shadow-md shadow-brand-700/25 active:scale-[0.98]"
      >
        <Download className="size-4" strokeWidth={2.5} />
        <span>Descargar Gratis (14 Días)</span>
      </a>

      <a
        href={WA_DEMO}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Hablar por WhatsApp"
        className="flex size-11 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-md shadow-emerald-700/25 active:scale-[0.98]"
      >
        <MessageCircle className="size-5" />
      </a>
    </div>
  );
}
