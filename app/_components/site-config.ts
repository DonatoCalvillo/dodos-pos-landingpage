// Configuración central de enlaces y contacto.
// Reemplaza estos valores antes de publicar.

/** Número de WhatsApp en formato internacional sin "+" ni espacios (52 + 10 dígitos). */
export const WHATSAPP_NUMBER = "520000000000";

/** Ruta pública del instalador. Coloca el archivo en /public/downloads/. */
export const DOWNLOAD_URL = "/downloads/POSLY_Setup.exe";

export const APP_VERSION = "0.1.0";

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WA_DEMO = whatsappLink(
  "Hola, quiero ver una demo de POSLY para mi ferretería."
);
