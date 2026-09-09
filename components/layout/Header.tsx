"use client";

import { useEffect, useState } from "react";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { Wordmark } from "@/components/ui/Wordmark";
import { WhatsAppAction } from "@/components/ui/WhatsAppAction";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navigation = [
  { label: "Pacotes", href: "#pacotes" },
  { label: "Projetos", href: "#projetos" },
  { label: "Método", href: "#metodo" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 24);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  return (
    <header className="site-header" data-scrolled={scrolled}>
      <a className="site-header__brand" href="#inicio" aria-label="Jump Performance — início">
        <Wordmark />
      </a>

      <nav className="desktop-nav" aria-label="Navegação principal">
        {navigation.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <WhatsAppAction
        className="header-cta"
        aria-label="Falar com a Jump pelo WhatsApp"
        pendingAriaLabel="Falar com a Jump pelo WhatsApp — número pendente"
      >
        <span>Falar com a Jump</span>
        <ArrowIcon />
      </WhatsAppAction>

      <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
        <SheetTrigger asChild>
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
          >
            <span />
            <span />
          </button>
        </SheetTrigger>
        <SheetContent
          className="mobile-menu"
          side="top"
          showCloseButton={false}
        >
          <SheetTitle className="sr-only">Menu principal</SheetTitle>
          <SheetDescription className="sr-only">
            Navegue pelas seções do site da Jump Performance.
          </SheetDescription>
          <Wordmark className="mobile-menu__brand" />
          <SheetClose asChild>
            <button className="mobile-menu__close" type="button" aria-label="Fechar menu">
              <span />
              <span />
            </button>
          </SheetClose>
          <nav aria-label="Navegação mobile">
            {navigation.map((item, index) => (
              <SheetClose asChild key={item.href}>
                <a href={item.href}>
                  <span>0{index + 1}</span>
                  {item.label}
                  <ArrowIcon direction="right" />
                </a>
              </SheetClose>
            ))}
          </nav>
          <WhatsAppAction
            className="mobile-menu__cta"
            pendingAriaLabel="Falar com a Jump pelo WhatsApp — número pendente"
          >
            Falar com a Jump <ArrowIcon />
          </WhatsAppAction>
        </SheetContent>
      </Sheet>
    </header>
  );
}
