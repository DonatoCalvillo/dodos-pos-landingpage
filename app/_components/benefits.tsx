import {
  Scale,
  Layers,
  CreditCard,
  Percent,
  WifiOff,
  Wallet,
  ArrowLeftRight,
  Undo2,
  Package,
  ClipboardCheck,
  FileUp,
  TrendingUp,
  FileText,
  Users,
  Receipt,
  Database,
  CheckCircle2,
} from "lucide-react";
import { DOWNLOAD_URL } from "./site-config";

const benefitsList = [
  {
    icon: Scale,
    tag: "Mostrador Ágil",
    title: "Venta por piezas, metros o kilos",
    desc: "El cliente pide piezas, un tramo o un peso. Escribes la cantidad, o la toma la báscula en kilogramos, y Posly calcula el importe. Se busca por nombre o con el lector.",
    highlight: "Doble clic o un escaneo y el producto entra al carrito.",
  },
  {
    icon: Layers,
    tag: "Varios Clientes",
    title: "Más de una venta abierta",
    desc: "Si llega alguien más, abres otra pestaña sin mezclar los productos. Cobras solo la venta que estás viendo y las demás siguen en espera.",
    highlight: "Atajo F7 para una venta nueva y F5 para cobrar.",
  },
  {
    icon: CreditCard,
    tag: "Cobro Claro",
    title: "Efectivo, tarjeta o los dos",
    desc: "El cambio se calcula al momento. En tarjeta se guarda el folio. En un pago mixto se separa qué parte va al cajón y qué parte va a la terminal.",
    highlight: "El cajón puede abrirse solo al cobrar en efectivo.",
  },
  {
    icon: Percent,
    tag: "Precios",
    title: "Descuento y mayoreo sin rehacer la venta",
    desc: "Un producto puede tener descuento por porcentaje o por monto, con fecha o sin ella, y un precio menor a partir de cierta cantidad. También puedes rebajar solo el ticket que estás cobrando.",
    highlight: "El precio del carrito ya llega con el descuento vigente.",
  },
  {
    icon: WifiOff,
    tag: "Siempre Funciona",
    title: "Cobra sin internet",
    desc: "Productos, ventas, usuarios y caja viven en esa computadora. Si se va la luz de la red, el mostrador sigue. Internet solo hace falta para buscar una actualización o para la copia en la nube de quien tiene licencia.",
    highlight: "No dependes de una conexión para cobrar.",
  },
  {
    icon: Wallet,
    tag: "Control de Dinero",
    title: "Corte de caja sin adivinar",
    desc: "El Corte X dice cuánto efectivo debería haber, con el fondo, las ventas en efectivo, las entradas y las salidas. El Corte Z pide contar el cajón antes de mostrar el esperado y guarda si cuadra, sobra o falta.",
    highlight: "Puedes seguir vendiendo y actualizar el cierre.",
  },
  {
    icon: ArrowLeftRight,
    tag: "Caja",
    title: "Entradas y salidas explicadas",
    desc: "Un pago a proveedor, un retiro o el cambio extra se anotan aparte de las ventas. Las devoluciones en efectivo también quedan como salida del día, así el cajón tiene un motivo para cada peso.",
    highlight: "El efectivo esperado usa esos movimientos.",
  },
  {
    icon: Undo2,
    tag: "Devoluciones",
    title: "Regresar un producto sin borrar el ticket",
    desc: "Buscas la venta por fecha o por el número del ticket, eliges cuánto regresa y si la mercancía vuelve al anaquel. El dinero sale de la caja de hoy. El ticket original se conserva.",
    highlight: "Reimprime el comprobante con doble clic.",
  },
  {
    icon: Package,
    tag: "Existencias",
    title: "Inventario que avisa",
    desc: "Ves stock, mínimo, deseado, precio y costo. Lo agotado se marca en rojo y lo que está en el mínimo o por debajo, en amarillo. El sugerido de compra dice cuánto pedir para llegar a lo deseado.",
    highlight: "Exporta el inventario a Excel o el pedido a un archivo.",
  },
  {
    icon: ClipboardCheck,
    tag: "Conteo",
    title: "Auditoría y kárdex",
    desc: "Si el anaquel no coincide, escribes la cantidad real y Posly guarda el ajuste. El kárdex muestra cada entrada y salida: alta, venta, devolución o conteo, con lo que había antes y lo que quedó.",
    highlight: "Cada movimiento queda con fecha y referencia.",
  },
  {
    icon: FileUp,
    tag: "Catálogo",
    title: "Un producto o todo un archivo",
    desc: "Das de alta un producto con código, precios, unidad, mínimo, deseado y foto. Si son muchos, los cargas desde un CSV. También puedes ocultar del mostrador lo que ya no vendes, sin borrar las ventas viejas.",
    highlight: "La prueba incluye hasta 100 productos durante 14 días.",
  },
  {
    icon: TrendingUp,
    tag: "Ganancia",
    title: "Utilidad del periodo",
    desc: "Eliges las fechas y ves lo vendido, lo que costó esa mercancía, la ganancia y el margen. Las devoluciones del periodo ya van descontadas. Renta y sueldos no entran en esta cifra: es la ganancia de los productos.",
    highlight: "El costo es el que quedó guardado en el ticket.",
  },
  {
    icon: FileText,
    tag: "Reportes",
    title: "Ventas, caja e inventario en un solo lugar",
    desc: "Resumen por día, semana o mes, detalle de cada ticket, corte de caja, existencias y productos más vendidos. Hay gráfica y puedes guardar el reporte en Excel o PDF.",
    highlight: "El neto ya resta descuentos y devoluciones.",
  },
  {
    icon: Users,
    tag: "Equipo",
    title: "Cada quien entra con lo que le toca",
    desc: "Hay usuario y contraseña, o una credencial con código de barras. Al cajero le dejas vender; a quien administra, caja, reportes, productos o usuarios. La cuenta inicial queda para el dueño.",
    highlight: "Si el empleado está inactivo, no puede entrar.",
  },
  {
    icon: Receipt,
    tag: "Ticket",
    title: "El papel sale con los datos del negocio",
    desc: "Nombre, logo, RFC, dirección, teléfono y mensajes del pie. Eliges qué se imprime y en qué orden, y si el rollo es de 58 u 80 mm. La vista previa muestra el ticket antes de guardar.",
    highlight: "Un campo vacío no aparece en el papel.",
  },
  {
    icon: Database,
    tag: "Tranquilidad",
    title: "Copia en esta computadora y, con licencia, también fuera",
    desc: "Posly guarda una copia al cerrar, o cada cierto tiempo, en Documentos. Puedes restaurar una de la última semana. Con licencia, al cerrar el día también prepara una copia cifrada para la nube.",
    highlight: "Restaurar una copia local vuelve a abrir el programa con esos datos.",
  },
];

export function Benefits() {
  return (
    <section id="beneficios" className="relative bg-tech-blueprint py-20 sm:py-28 border-t border-slate-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado sin tag/badge superior */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl font-extrabold text-ink sm:text-4xl lg:text-5xl tracking-tight leading-[1.15]">
            Creado para el ritmo y la exigencia de tu mostrador
          </h2>
          <p className="mt-4 text-base text-slate-600 sm:text-lg leading-relaxed">
            Sin complicaciones innecesarias. Todo lo que necesitas para operar rápido, seguro y sin fugas de dinero.
          </p>
        </div>

        {/* Cuadrícula de beneficios: 1 columna en móvil, 2 en tablet, 3 en escritorio */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-7">
          {benefitsList.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group relative flex flex-col justify-between rounded-3xl border border-brand-100 bg-white p-6 sm:p-7 shadow-md shadow-brand-900/5 shadow-card-hover"
              >
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 border border-brand-100/80 group-hover:bg-brand-600 group-hover:text-white transition duration-200">
                      <Icon className="size-6" />
                    </div>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-right text-xs font-bold uppercase tracking-wider text-slate-600">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-lg sm:text-xl font-bold text-ink tracking-tight leading-snug">
                    {item.title}
                  </h3>

                  <p className="mt-2.5 text-sm sm:text-base text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Sub-destacado con check */}
                <div className="mt-5 pt-4 border-t border-slate-100 flex items-start gap-2.5 text-xs sm:text-sm font-semibold text-brand-800">
                  <CheckCircle2 className="mt-0.5 size-4.5 text-emerald-600 shrink-0" />
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
