import { SectionLabel } from "@/components/ui/SectionLabel";

export function BrandStatement() {
  return (
    <section className="statement section-shell" aria-labelledby="statement-title">
      <div className="statement__ghost" aria-hidden="true">JUMP</div>
      <div className="statement__layout shell">
        <SectionLabel index="01 / JUMP PERFORMANCE">POSICIONAMENTO</SectionLabel>
        <h2 id="statement-title" data-reveal>
          Não vendemos posts.
          <span>Construímos movimento.</span>
        </h2>
        <div className="statement__copy" data-reveal>
          <p>
            A Jump conecta estratégia, criação e análise para desenvolver marketing que faz sentido para a marca e para o negócio.
          </p>
          <p>
            Não trabalhamos apenas para aparecer. Planejamos, executamos, analisamos e evoluímos continuamente.
          </p>
        </div>
        <div className="statement__keywords" aria-label="Pilares do posicionamento">
          {[
            ["01", "Dados."],
            ["02", "Ideias."],
            ["03", "Estratégia."],
            ["04", "Crescimento."],
          ].map(([index, word]) => (
            <span key={word} data-reveal>
              <small>{index}</small>
              {word}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
