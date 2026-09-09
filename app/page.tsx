import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BrandStatement } from "@/components/sections/BrandStatement";
import { Contact } from "@/components/sections/Contact";
import { DataSignal } from "@/components/sections/DataSignal";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Hero } from "@/components/sections/Hero";
import { Methodology } from "@/components/sections/Methodology";
import { Packages } from "@/components/sections/Packages";
import { Portfolio } from "@/components/sections/Portfolio";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { MotionSystem } from "@/components/ui/MotionSystem";

export default function Home() {
  return (
    <>
      <MotionSystem />
      <Header />
      <main>
        <Hero />
        <BrandStatement />
        <Packages />
        <Portfolio />
        <Methodology />
        <DataSignal />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
