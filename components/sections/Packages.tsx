import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { WhatsAppAction } from "@/components/ui/WhatsAppAction";
import { marketingPackages } from "@/data/packages";

export function Packages() {
  return (
    <section className="packages section-shell" id="pacotes" aria-labelledby="packages-title">
      <div className="packages__header shell">
        <SectionLabel index="02 / PACOTES">OPERAÇÕES DE MARKETING</SectionLabel>
        <h2 id="packages-title" data-reveal>
          Três ritmos.
          <span>Uma operação em movimento.</span>
        </h2>
        <p data-reveal>
          Escolha o nível de estrutura que acompanha o momento da sua marca. Escopo e investimento são definidos na conversa.
        </p>
      </div>

      <div className="package-stack shell">
        {marketingPackages.map((item) => (
          <article
            className="package-row"
            data-featured={item.featured || undefined}
            data-reveal
            key={item.id}
          >
            <div className="package-row__identity">
              <span className="package-row__number">{item.id}</span>
              <div>
                {item.featured && <span className="package-row__badge">Mais escolhido</span>}
                <h3>{item.name}</h3>
                <p>{item.audience}</p>
              </div>
            </div>
            <ul className="package-row__features">
              {item.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <WhatsAppAction
              className="package-row__cta"
              message={`Olá! Conheci a Jump pelo site e quero conversar sobre o pacote ${item.name}.`}
            >
              <span>{item.cta}</span>
              <ArrowIcon />
            </WhatsAppAction>
          </article>
        ))}
      </div>
    </section>
  );
}
