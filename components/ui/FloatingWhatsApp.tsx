"use client";

import { useEffect, useState } from "react";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { WhatsAppAction } from "@/components/ui/WhatsAppAction";

export function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  return (
    <WhatsAppAction
      className="floating-contact"
      data-visible={visible}
      aria-label="Abrir conversa com a Jump no WhatsApp"
      pendingAriaLabel="WhatsApp da Jump indisponível — número pendente"
    >
      <span className="floating-contact__status" aria-hidden="true" />
      <span>WhatsApp</span>
      <ArrowIcon />
    </WhatsAppAction>
  );
}
