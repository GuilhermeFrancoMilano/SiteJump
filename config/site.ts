const whatsappMessage =
  "Olá! Conheci a Jump Performance pelo site e gostaria de conversar sobre marketing para minha empresa.";

const emailSubject = "Solicitação de orçamento — Jump Performance";
const emailMessage =
  "Olá, equipe da Jump Performance!\n\nGostaria de fazer um orçamento com vocês. Podemos conversar sobre os serviços que melhor atendem à minha empresa?";

export const siteConfig = {
  company: "Jump Performance",
  whatsapp: {
    number: "5511978537933",
    display: "(11) 97853-7933",
    message: whatsappMessage,
  },
  email: {
    address: "jumpperformac@gmail.com",
    subject: emailSubject,
    message: emailMessage,
  },
  instagram: "https://www.instagram.com/jumpperformance_/",
  linkedin: "https://www.linkedin.com/in/jump-performance-b34542438/",
} as const;

export function getWhatsAppUrl(customMessage: string = siteConfig.whatsapp.message) {
  const number = siteConfig.whatsapp.number.replace(/\D/g, "");
  if (!number) return null;

  return `https://wa.me/${number}?text=${encodeURIComponent(customMessage)}`;
}

export function getEmailUrl() {
  const { address, subject, message } = siteConfig.email;

  return `mailto:${address}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
}
