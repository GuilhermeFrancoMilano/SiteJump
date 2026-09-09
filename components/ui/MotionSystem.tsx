"use client";

import { useEffect } from "react";

export function MotionSystem() {
  useEffect(() => {
    const root = document.documentElement;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const revealItems = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const scrollSections = Array.from(
      document.querySelectorAll<HTMLElement>("[data-scroll-section]"),
    );

    if (reducedMotion.matches) {
      revealItems.forEach((item) => item.setAttribute("data-visible", "true"));
      scrollSections.forEach((section) => section.style.setProperty("--section-progress", "1"));
      return;
    }

    root.classList.add("motion-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).setAttribute("data-visible", "true");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8%", threshold: 0.12 },
    );

    revealItems.forEach((item) => observer.observe(item));

    let frame = 0;
    const updateScroll = () => {
      frame = 0;
      const viewport = window.innerHeight;
      root.style.setProperty("--page-y", `${window.scrollY}px`);

      scrollSections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const raw = (viewport - rect.top) / (viewport + rect.height);
        const progress = Math.min(1, Math.max(0, raw));
        section.style.setProperty("--section-progress", progress.toFixed(4));
      });
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateScroll);
    };

    updateScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      observer.disconnect();
      root.classList.remove("motion-ready");
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}
