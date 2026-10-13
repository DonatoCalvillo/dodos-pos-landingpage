import Image from "next/image";
import {
  Coins,
  CheckCircle2,
  Receipt,
} from "lucide-react";

export function PosMockup() {
  return (
    <div className="relative mx-auto w-full max-w-2xl lg:max-w-none">
      {/* Halo de luz azul tecnológica detrás del elemento */}
      <div className="absolute -inset-4 -z-10 rounded-3xl bg-linear-to-tr from-brand-500/20 via-sky-400/15 to-transparent blur-2xl" />

      {/* Contenedor Limpio de la Aplicación POSLY (Sin barra superior de Mac ni barra inferior de estado) */}
      <div className="relative overflow-hidden rounded-2xl border-2 border-brand-200/90 bg-white shadow-app">
        <Image
          src="/ferresys-app-cobro.png"
          alt="Interfaz real de POSLY cobrando en mostrador con ventana de pago rápido"
          width={1400}
          height={750}
          className="w-full h-auto object-cover object-top select-none block"
          priority
        />

        {/* Recuadro 1: Calculadora de Cambio */}
        <div className="absolute top-4 right-4 sm:top-6 sm:right-6 max-w-[210px] rounded-xl border border-brand-200 bg-white/95 p-3 shadow-lg shadow-brand-900/10 backdrop-blur-sm hidden sm:block">
          <div className="flex items-center gap-2 text-xs font-bold text-brand-800">
            <Coins className="size-4 text-brand-600" />
            <span>Calculadora de Cambio</span>
          </div>
          <p className="mt-1 text-[11px] font-medium text-slate-600 leading-tight">
            El sistema te dice al centavo cuánto regresar para que nunca falte en caja.
          </p>
        </div>

        {/* Recuadro 2: Venta por Metro, Kilo o Pieza */}
        <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 max-w-[240px] rounded-xl border border-emerald-200 bg-white/95 p-3 shadow-lg shadow-emerald-900/10 backdrop-blur-sm hidden sm:block">
          <div className="flex items-center gap-2 text-xs font-bold text-emerald-800">
            <CheckCircle2 className="size-4 text-emerald-600" />
            <span>Venta por Metro, Kilo o Pieza</span>
          </div>
          <p className="mt-1 text-[11px] font-medium text-slate-600 leading-tight">
            Escribe &quot;cable&quot; o &quot;clavo&quot; y cobra fracciones exactas sin calculadora externa.
          </p>
        </div>
      </div>

      {/* Ticket Desplegado Físico Ilustrativo */}
      <div className="absolute -bottom-8 -right-3 sm:-right-8 w-44 sm:w-52 rounded-xl border border-slate-200 bg-white p-3.5 shadow-xl shadow-slate-900/10 rotate-2 hidden md:block z-10">
        <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-800 uppercase tracking-wider pb-1.5 border-b border-dashed border-slate-200">
          <Receipt className="size-3.5 text-brand-600" />
          <span>Ticket de Compra</span>
        </div>
        <div className="mt-2 space-y-1 font-mono text-[10px] text-slate-600">
          <div className="flex justify-between">
            <span>2.5m Manguera 1/2</span>
            <span>$45.00</span>
          </div>
          <div className="flex justify-between">
            <span>1kg Clavo Concreto</span>
            <span>$38.00</span>
          </div>
          <div className="flex justify-between font-bold text-slate-900 pt-1 border-t border-slate-100 text-[11px]">
            <span>TOTAL:</span>
            <span className="text-brand-700">$83.00</span>
          </div>
          <div className="flex justify-between text-emerald-700 font-bold">
            <span>CAMBIO:</span>
            <span>$117.00</span>
          </div>
        </div>
        <p className="mt-2 text-center text-[9px] font-sans font-bold text-emerald-700 bg-emerald-50 py-1 rounded">
          ¡Abre tu cajón en 1 segundo!
        </p>
      </div>
    </div>
  );
}
