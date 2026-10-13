import React from "react";
import Image from "next/image";

export function Logo() {
  return (
    <div className="flex items-center gap-2.5">
      {/* Isotipo POSLY */}
      <div className="relative flex size-10 items-center justify-center overflow-hidden">
        <Image
          src="/posly-logo.png"
          alt="Logo POSLY"
          width={40}
          height={40}
          className="size-full object-contain"
          priority
        />
      </div>

      <div className="flex flex-col">
        <span className="font-display text-2xl font-black tracking-tight text-ink leading-none">
          POS<span className="text-brand-600">LY</span>
        </span>
        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mt-0.5">
          Punto de Venta
        </span>
      </div>
    </div>
  );
}

export function SectionBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-brand-200/80 bg-brand-50/90 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-700 shadow-xs">
      <span className="size-1.5 rounded-full bg-brand-600 animate-pulse" />
      {children}
    </div>
  );
}

export function SectionHeader({
  badge,
  title,
  subtitle,
  align = "center",
}: {
  badge?: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : "text-left"}`}>
      {badge && <SectionBadge>{badge}</SectionBadge>}
      <h2 className={`${badge ? "mt-4" : ""} font-display text-3xl font-extrabold text-ink sm:text-4xl lg:text-5xl tracking-tight leading-[1.15]`}>
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base text-slate-600 sm:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
