import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { WhatsAppAction } from "@/components/ui/WhatsAppAction";

export function FinalCTA() {
  return (
    <section className="final-cta" aria-labelledby="final-cta-title">
      <div className="final-cta__inner shell">
        <p>READY TO JUMP?</p>
        <h2 id="final-cta-title" data-reveal>
          Sua marca está
          <span>pronta para o</span>
          próximo salto?
        </h2>
        <WhatsAppAction data-reveal>
          <span>Vamos conversar</span>
          <ArrowIcon />
        </WhatsAppAction>
        <div className="final-cta__coordinates" aria-hidden="true">
          <span>JUMP / 005</span>
          <span>STATUS / READY</span>
          <span>NEXT MOVE →</span>
        </div>
      </div>
    </section>
  );
}
