import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { getEmailUrl, getWhatsAppUrl, siteConfig } from "@/config/site";

const contactItems = [
  {
    label: "WhatsApp",
    value: siteConfig.whatsapp.display,
    href: getWhatsAppUrl(),
  },
  {
    label: "E-mail",
    value: siteConfig.email.address,
    href: getEmailUrl(),
  },
  {
    label: "Instagram",
    value: "@jumpperformance_",
    href: siteConfig.instagram,
  },
  {
    label: "LinkedIn",
    value: "Jump Performance",
    href: siteConfig.linkedin,
  },
];

export function Contact() {
  return (
    <section className="contact section-shell" id="contato" aria-labelledby="contact-title">
      <div className="contact__layout shell">
        <div className="contact__header">
          <SectionLabel index="05 / CONTATO">CANAL ABERTO</SectionLabel>
          <h2 id="contact-title" data-reveal>
            Comece uma
            <span>conversa.</span>
          </h2>
        </div>

        <div className="contact__list">
          {contactItems.map((item, index) =>
            item.href ? (
              <a
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                key={item.label}
                data-reveal
              >
                <span>0{index + 1}</span>
                <strong>{item.label}</strong>
                <small>{item.value}</small>
                <ArrowIcon />
              </a>
            ) : (
              <div className="contact__placeholder" key={item.label} data-reveal>
                <span>0{index + 1}</span>
                <strong>{item.label}</strong>
                <small>{item.value}</small>
                <span className="contact__pending">PENDENTE</span>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
