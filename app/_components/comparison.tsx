import { X, Check } from "lucide-react";

const comparisonData = [
  {
    topic: "Consultar un precio",
    beforeTitle: "Hojear la libreta o adivinar",
    beforeText: "El cliente espera mientras buscas precios en cuadernos viejos, etiquetas borrosas o preguntas a otra persona.",
    afterTitle: "Aparece en menos de 1 segundo",
    afterText: "Escaneas el código o escribes las primeras 3 letras (ej. 'tor') y el sistema te da el precio exacto al instante.",
  },
  {
    topic: "Dar cambio a clientes",
    beforeTitle: "Cuentas mentales y billetes cruzados",
    beforeText: "En horas pico, calcular con prisa causa errores. Al terminar el día faltan $50 o $200 pesos en el cajón.",
    afterTitle: "Calculadora automática de cambio",
    afterText: "Ingresas cuánto te entregó el cliente y en letras grandes te dice el cambio exacto. Tu cajón siempre cuadra.",
  },
  {
    topic: "Ganancia real del día",
    beforeTitle: "Cierras la cortina a ciegas",
    beforeText: "Cuentas el dinero físico pero no sabes cuánto fue ganancia neta, cuánto costo de mercancía ni qué reponer.",
    afterTitle: "Corte de caja en un clic",
    afterText: "Reporte instantáneo con entradas, salidas, ventas totales y tu utilidad neta en pesos antes de irte a descansar.",
  },
  {
    topic: "Seguridad de tu inventario",
    beforeTitle: "Riesgo de robo y extravío",
    beforeText: "Tornillos o herramientas que desaparecen sin registro. Y si la computadora se daña, pierdes todo.",
    afterTitle: "Copia protegida en la nube",
    afterText: "Todas tus ventas e inventario quedan respaldados diariamente. Si cambias de máquina, recuperas todo en 5 minutos.",
  },
];

export function Comparison() {
  return (
    <section id="como-funciona" className="relative bg-white py-20 sm:py-28 border-t border-slate-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado sin tag/badge y con el texto de dolor en el naranja de marca */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl font-extrabold text-ink sm:text-4xl lg:text-5xl tracking-tight leading-[1.18]">
            La diferencia entre{" "}
            <span className="text-[#EA580C]">cobrar con estrés</span> y{" "}
            <span className="text-brand-600">tener el control total</span>
          </h2>
          <p className="mt-4 text-base text-slate-600 sm:text-lg leading-relaxed">
            Diseñado pensando en la prisa real del mostrador: cuando hay tres clientes formados pidiendo clavos, manguera y pintura.
          </p>
        </div>

        {/* Grid Comparativo de Alto Contraste y Confiabilidad */}
        <div className="mt-14 space-y-4 sm:space-y-6 max-w-5xl mx-auto">
          {comparisonData.map((item) => (
            <div
              key={item.topic}
              className="grid grid-cols-1 md:grid-cols-2 rounded-2xl border border-slate-200 overflow-hidden shadow-xs"
            >
              {/* Lado Negativo: Sin POSLY con acento naranja tenue */}
              <div className="bg-slate-50/80 p-6 sm:p-7 border-b md:border-b-0 md:border-r border-slate-200">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#EA580C]">
                  <span className="flex size-5 items-center justify-center rounded-full bg-orange-100 text-[#EA580C]">
                    <X className="size-3.5" strokeWidth={3} />
                  </span>
                  <span>Sin POSLY · {item.topic}</span>
                </div>
                
                <h3 className="mt-3 text-lg font-bold text-slate-800">
                  {item.beforeTitle}
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {item.beforeText}
                </p>
              </div>

              {/* Lado Positivo: Con POSLY */}
              <div className="bg-brand-50/50 p-6 sm:p-7 relative border-l-0 md:border-l-2 md:border-l-brand-500">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-800">
                  <span className="flex size-5 items-center justify-center rounded-full bg-brand-600 text-white">
                    <Check className="size-3.5" strokeWidth={3} />
                  </span>
                  <span>Con POSLY</span>
                </div>

                <h3 className="mt-3 text-lg font-bold text-brand-950">
                  {item.afterTitle}
                </h3>
                <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                  {item.afterText}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mensaje de resumen de impacto */}
        <div className="mt-12 rounded-2xl border border-brand-200 bg-brand-50/70 p-6 sm:p-8 max-w-3xl mx-auto text-center">
          <h4 className="font-display text-lg font-bold text-ink">
            ¿El resultado? Atiendes a tus clientes en la mitad de tiempo
          </h4>
          <p className="mt-2 text-sm text-slate-600">
            Los clientes no hacen filas largas, tu personal no se equivoca cobrando y tú tienes la tranquilidad de saber exactamente cuánto dinero entró al cajón cada día.
          </p>
        </div>

      </div>
    </section>
  );
}
