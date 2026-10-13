import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "POSLY | Punto de Venta para Ferreterías y Tlapalerías en México",
  description:
    "Programa de punto de venta para ferreterías de mostrador. Cobra aunque no haya internet, vende por pieza, metro o kilo, haz tu corte de caja y guarda una copia de tu información en la nube. Prueba gratis 14 días.",
};

// Un solo modo claro: le indica al navegador que no aplique modo oscuro.
export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es-MX"
      className={`${inter.variable} ${jakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
