const whatsappMessage =
  "Olá! Conheci a Jump Performance pelo site e gostaria de conversar sobre marketing para minha empresa.";

export const siteConfig = {
  company: "Jump Performance",
  whatsapp: {
    number: "",
    display: "Número a definir",
    message: whatsappMessage,
  },
  email: "",
  instagram: "",
  linkedin: "",
} as const;

export function getWhatsAppUrl(customMessage: string = siteConfig.whatsapp.message) {
  const number = siteConfig.whatsapp.number.replace(/\D/g, "");
  if (!number) return null;

  return `https://wa.me/${number}?text=${encodeURIComponent(customMessage)}`;
}
