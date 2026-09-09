import { SectionLabel } from "@/components/ui/SectionLabel";

const steps = [
  {
    index: "01",
    title: "Entender",
    description: "Antes de criar, entendemos marca, mercado, público e objetivo.",
  },
  {
    index: "02",
    title: "Planejar",
    description: "Transformamos informação em estratégia, conceito e direcionamento.",
  },
  {
    index: "03",
    title: "Executar",
    description: "Conteúdo, campanhas e experiências digitais entram em movimento.",
  },
  {
    index: "04",
    title: "Otimizar",
    description: "Dados voltam para o processo e orientam a próxima decisão.",
  },
];

export function Methodology() {
  return (
    <section
      className="method section-shell"
      id="metodo"
      aria-labelledby="method-title"
      data-scroll-section
    >
      <div className="method__header shell">
        <SectionLabel index="04 / MÉTODO">CICLO CONTÍNUO</SectionLabel>
        <h2 id="method-title" data-reveal>
          Do sinal
          <span>à performance.</span>
        </h2>
        <p data-reveal>
          A melhor próxima decisão começa no que o movimento anterior revelou.
        </p>
      </div>

      <ol className="method__steps shell">
        {steps.map((step) => (
          <li key={step.index} data-reveal>
            <span className="method__node" aria-hidden="true" />
            <span className="method__number">{step.index}</span>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </li>
        ))}
      </ol>

      <div className="method__rail shell" aria-hidden="true">
        <span />
      </div>
    </section>
  );
}
