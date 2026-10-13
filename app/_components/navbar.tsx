"use client";

import { useEffect, useState } from "react";
import { Download, Menu, X, Monitor, ShieldCheck } from "lucide-react";
import { Logo } from "./logo";
import { DOWNLOAD_URL } from "./site-config";

const navLinks = [
  { href: "#como-funciona", label: "¿Cómo Funciona?" },
  { href: "#beneficios", label: "Beneficios" },
  { href: "#hardware", label: "Kits de Hardware" },
  { href: "#precios", label: "Precios Claros" },
  { href: "#soporte", label: "Soporte" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-200 ${
        scrolled || open
          ? "border-b border-slate-200/80 bg-white/95 shadow-md shadow-brand-950/5 backdrop-blur-md"
          : "border-b border-slate-200/50 bg-white/90 backdrop-blur-sm"
      }`}
    >
      {/* Barra superior con fondo azul haciendo juego con el logo */}
      <div className="bg-brand-600 text-white text-[11px] py-1.5 px-4 text-center hidden md:flex items-center justify-center gap-4 font-bold tracking-wide shadow-xs">
        <span className="flex items-center gap-1.5 text-white/95">
          <Monitor className="size-3.5 text-white" /> Sistema de Mostrador para Windows
        </span>
        <span className="text-white/40">·</span>
        <span className="flex items-center gap-1.5 text-white">
          <ShieldCheck className="size-3.5 text-emerald-200" /> Funciona al 100% sin internet
        </span>
        <span className="text-white/40">·</span>
        <span className="text-white/95">Prueba completa 14 días sin costo</span>
      </div>

      <nav
        aria-label="Principal"
        className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8"
      >
        <div className="flex items-center gap-3">
          <a href="#inicio" aria-label="POSLY Inicio">
            <Logo />
          </a>
        </div>

        {/* Links escritorio */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-lg px-3.5 py-2 text-sm font-semibold text-slate-700 transition hover:bg-brand-50 hover:text-brand-700"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Escritorio - Azul Sólido Directo */}
        <div className="flex items-center gap-3">
          <a
            href={DOWNLOAD_URL}
            download
            className="hidden sm:inline-flex items-center gap-2.5 rounded-xl bg-brand-600 px-6 py-2.5 text-sm font-extrabold text-white shadow-md shadow-brand-600/30 transition-all duration-150 hover:bg-brand-700 hover:shadow-lg hover:shadow-brand-600/40 active:scale-[0.98]"
          >
            <Download className="size-4.5" strokeWidth={2.8} />

            <div className="text-left flex flex-col">
              <span className="leading-tight text-white font-extrabold tracking-tight">Descargar Gratis</span>
              <span className="text-[10px] font-medium text-blue-100 -mt-0.5">Prueba 14 Días · Windows</span>
            </div>
          </a>

          {/* Botón Móvil */}
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-expanded={open}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            className="flex size-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-xs lg:hidden active:bg-slate-50"
          >
            {open ? <X className="size-6 text-brand-700" /> : <Menu className="size-6" />}
          </button>
        </div>
      </nav>

      {/* Menú Móvil Desplegable */}
      {open && (
        <div className="border-b border-brand-100 bg-white px-4 py-5 shadow-2xl lg:hidden">
          <ul className="space-y-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-base font-semibold text-slate-800 hover:bg-brand-50 hover:text-brand-700"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 pt-4 border-t border-slate-100">
            <a
              href={DOWNLOAD_URL}
              download
              onClick={() => setOpen(false)}
              className="flex w-full items-center justify-center gap-2.5 rounded-xl bg-brand-600 py-3.5 text-base font-bold text-white shadow-lg shadow-brand-700/30 hover:bg-brand-700"
            >
              <Download className="size-5" strokeWidth={2.5} />
              <span>Descargar POSLY (Gratis 14 Días)</span>
            </a>
            <p className="mt-2 text-center text-xs text-slate-500">
              Instalación rápida en 1 clic · Windows 10/11
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
