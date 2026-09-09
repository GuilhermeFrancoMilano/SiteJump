import type { AnchorHTMLAttributes, ReactNode } from "react";
import { getWhatsAppUrl } from "@/config/site";
import { cn } from "@/lib/utils";

type WhatsAppActionProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  children: ReactNode;
  message?: string;
  pendingAriaLabel?: string;
};

export function WhatsAppAction({
  children,
  className,
  message,
  pendingAriaLabel = "WhatsApp indisponível — número pendente",
  target = "_blank",
  rel = "noreferrer",
  ...props
}: WhatsAppActionProps) {
  const href = getWhatsAppUrl(message);

  if (!href) {
    return (
      <span
        className={cn(className, "whatsapp-action--pending")}
        {...props}
        aria-disabled="true"
        aria-label={pendingAriaLabel}
        title="WhatsApp indisponível até a confirmação do número"
      >
        {children}
        <span className="whatsapp-action__pending" aria-hidden="true">
          Número pendente
        </span>
      </span>
    );
  }

  return (
    <a className={className} href={href} target={target} rel={rel} {...props}>
      {children}
    </a>
  );
}
