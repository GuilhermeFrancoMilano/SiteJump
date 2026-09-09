import type { RefObject } from "react";
import { ProjectArtwork } from "@/components/portfolio/ProjectArtwork";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { WhatsAppAction } from "@/components/ui/WhatsAppAction";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import type { Project } from "@/data/projects";

type CaseStudyModalProps = {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  returnFocusRef: RefObject<HTMLButtonElement | null>;
};

export function CaseStudyModal({
  project,
  open,
  onOpenChange,
  returnFocusRef,
}: CaseStudyModalProps) {
  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="case-dialog"
        showCloseButton={false}
        aria-describedby="case-dialog-description"
        onCloseAutoFocus={(event) => {
          event.preventDefault();
          returnFocusRef.current?.focus();
        }}
      >
        <DialogClose asChild>
          <button className="case-dialog__close" type="button" aria-label="Fechar estudo de caso">
            <span />
            <span />
          </button>
        </DialogClose>
        <div className="case-dialog__intro">
          <div className="case-dialog__index">
            <span>CASE STUDY / {project.id}</span>
            <span>CONTEÚDO TEMPORÁRIO</span>
          </div>
          <DialogTitle className="case-dialog__title">{project.title}</DialogTitle>
          <DialogDescription id="case-dialog-description" className="case-dialog__description">
            Estrutura pronta para receber o case real sem publicar clientes, resultados ou informações ainda não confirmadas.
          </DialogDescription>
          <dl className="case-dialog__facts">
            <div>
              <dt>Cliente</dt>
              <dd>{project.client}</dd>
            </div>
            <div>
              <dt>Segmento</dt>
              <dd>{project.segment}</dd>
            </div>
            <div>
              <dt>Categoria</dt>
              <dd>{project.category}</dd>
            </div>
            <div>
              <dt>Ano</dt>
              <dd>{project.year}</dd>
            </div>
          </dl>
        </div>

        <ProjectArtwork variant={project.cover} id={project.title} className="case-dialog__cover" />

        <div className="case-dialog__body">
          <section>
            <span>01 / VISÃO GERAL</span>
            <h3>O ponto de partida.</h3>
            <p>{project.description}</p>
          </section>
          <section>
            <span>02 / DESAFIO</span>
            <h3>O que precisava mover.</h3>
            <p>{project.challenge}</p>
          </section>
          <section>
            <span>03 / ESTRATÉGIA</span>
            <h3>A direção escolhida.</h3>
            <p>{project.strategy}</p>
          </section>
          <section>
            <span>04 / EXECUÇÃO</span>
            <h3>A estratégia em ação.</h3>
            <p>{project.execution}</p>
          </section>
          <section>
            <span>05 / ENTREGÁVEIS</span>
            <h3>O sistema entregue.</h3>
            <ul>
              {project.deliverables.map((deliverable) => (
                <li key={deliverable}>{deliverable}</li>
              ))}
            </ul>
          </section>
          <section>
            <span>06 / RESULTADOS</span>
            <h3>Resultados verificados.</h3>
            {project.results.length ? (
              <ul>
                {project.results.map((result) => (
                  <li key={result}>{result}</li>
                ))}
              </ul>
            ) : (
              <p>Conteúdo a inserir após a validação dos resultados reais do projeto.</p>
            )}
          </section>
        </div>

        <div className="case-dialog__gallery" aria-label="Galeria temporária do projeto">
          {project.gallery.map((item, index) => (
            <ProjectArtwork
              key={`${project.id}-${item}-${index}`}
              variant={item}
              id={`${project.title}, visual ${index + 1}`}
            />
          ))}
        </div>

        <footer className="case-dialog__footer">
          <span className="case-dialog__prompt">Quer um projeto assim?</span>
          <WhatsAppAction>
            Vamos conversar <ArrowIcon />
          </WhatsAppAction>
        </footer>
      </DialogContent>
    </Dialog>
  );
}
