import { SectionLabel } from "@/components/ui/SectionLabel";

export function DataSignal() {
  return (
    <section className="data-section" aria-labelledby="data-title" data-scroll-section>
      <div className="data-section__inner shell">
        <div className="data-section__copy">
          <SectionLabel index="DATA SIGNAL / 002">FEEDBACK LOOP</SectionLabel>
          <h2 id="data-title" data-reveal>
            Dados não são
            <span>o fim do processo.</span>
            <em>São o próximo movimento.</em>
          </h2>
          <div data-reveal>
            <p>Cada campanha gera sinais.</p>
            <p>
              A Jump transforma esses sinais em decisões, e decisões melhores constroem performance mais consistente.
            </p>
          </div>
        </div>

        <div className="data-section__visual" aria-hidden="true">
          <svg viewBox="0 0 800 820" preserveAspectRatio="xMidYMid meet">
            <g className="data-grid">
              {Array.from({ length: 9 }).map((_, index) => (
                <line key={`h-${index}`} x1="0" y1={index * 100 + 10} x2="800" y2={index * 100 + 10} />
              ))}
              {Array.from({ length: 9 }).map((_, index) => (
                <line key={`v-${index}`} x1={index * 100} y1="0" x2={index * 100} y2="820" />
              ))}
            </g>
            <path
              className="data-wave data-wave--blue"
              pathLength="1"
              d="M-40 620C90 610 105 270 250 285s145 260 278 218c105-34 105-250 305-277"
            />
            <path
              className="data-wave data-wave--lime"
              pathLength="1"
              d="M-40 190C115 205 105 490 275 475s115-220 280-192c130 22 126 285 278 306"
            />
            <g className="data-points">
              <circle cx="250" cy="285" r="8" />
              <circle cx="275" cy="475" r="8" />
              <circle className="data-point--focus" cx="525" cy="493" r="13" />
              <circle cx="555" cy="283" r="8" />
            </g>
            <circle className="data-ring" cx="526" cy="390" r="86" />
            <circle className="data-ring data-ring--outer" cx="526" cy="390" r="126" />
          </svg>
          <span className="data-section__readout data-section__readout--top">
            INPUT / SIGNAL<br />STATUS / RECEIVING
          </span>
          <span className="data-section__readout data-section__readout--bottom">
            DECISION NODE<br />X: 0526 / Y: 0390
          </span>
        </div>
      </div>
    </section>
  );
}
