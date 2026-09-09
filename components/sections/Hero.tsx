import { ActionLink } from "@/components/ui/ActionLink";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { DataSignalGraphic } from "@/components/ui/DataSignalGraphic";
import { WhatsAppAction } from "@/components/ui/WhatsAppAction";

export function Hero() {
  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <div className="hero__grid" aria-hidden="true" />
      <div className="hero__index" aria-hidden="true">
        <span>DATA SIGNAL</span>
        <span>CALIBRATION RAIL</span>
        <span>001 / ACTIVE</span>
      </div>

      <div className="hero__content shell">
        <div className="hero__statement">
          <p className="hero__context">Estratégia que transforma atenção em direção.</p>
          <h1 id="hero-title">
            <span className="hero-line">Marketing que não</span>
            <span className="hero-line">para no conteúdo.</span>
            <span className="hero-line hero-line--accent">Ele gera movimento.</span>
          </h1>
        </div>

        <aside className="hero__calibration" aria-label="Ciclo de performance da Jump">
          <div className="calibration__ticks" aria-hidden="true">
            {[0, 25, 50, 75, 100].map((tick) => (
              <span key={tick}>{String(tick).padStart(2, "0")}</span>
            ))}
          </div>
          <div className="calibration__copy">
            <span>STATUS / ACTIVE</span>
            <strong>Movimento é processo.</strong>
            <p>Dados orientam. Estratégia direciona. Criação coloca a marca em ação.</p>
          </div>
          <span className="calibration__crosshair" aria-hidden="true" />
        </aside>

        <div className="hero__aside">
          <p>Estratégia, criatividade e dados conectados para transformar atenção em crescimento.</p>
          <div className="hero__actions">
            <ActionLink href="#projetos" tone="lime">
              Ver projetos <ArrowIcon direction="down" />
            </ActionLink>
            <WhatsAppAction className="action-link action-link--outline">
              <span>
                Falar com a Jump <ArrowIcon />
              </span>
            </WhatsAppAction>
          </div>
          <div className="hero__disciplines" aria-label="Pilares da Jump">
            <span>Dados</span>
            <span>Estratégia</span>
            <span>Otimização</span>
          </div>
        </div>
      </div>

      <DataSignalGraphic className="hero__signal" />

      <div className="hero__coordinates shell" aria-hidden="true">
        <span>X: 023.5505</span>
        <span>Y: 046.6333</span>
        <span>SCROLL / EXPLORE</span>
      </div>
    </section>
  );
}
