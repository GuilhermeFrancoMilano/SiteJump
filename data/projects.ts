export type ProjectArtVariant = "pulse" | "orbit" | "field" | "lattice";

export type Project = {
  id: string;
  title: string;
  client: string;
  category: string;
  segment: string;
  year: string;
  cover: ProjectArtVariant;
  description: string;
  challenge: string;
  strategy: string;
  execution: string;
  deliverables: string[];
  gallery: ProjectArtVariant[];
  results: string[];
};

const placeholderCopy = {
  client: "Cliente a inserir",
  segment: "Segmento a inserir",
  year: "Ano a inserir",
  description:
    "Espaço preparado para a síntese do projeto, seu contexto e a ambição que orientou o trabalho.",
  challenge:
    "O desafio real será documentado aqui quando o case e suas informações forem aprovados para publicação.",
  strategy:
    "A estratégia aplicada será apresentada com contexto suficiente para conectar decisão, criação e objetivo.",
  execution:
    "Esta área receberá o recorte da execução, os principais desdobramentos e o papel de cada entrega.",
};

export const projects: Project[] = [
  {
    id: "01",
    title: "Projeto 01",
    category: "Estratégia & identidade",
    cover: "pulse",
    gallery: ["pulse", "lattice"],
    deliverables: ["Entregáveis a confirmar"],
    results: [],
    ...placeholderCopy,
  },
  {
    id: "02",
    title: "Projeto 02",
    category: "Campanha integrada",
    cover: "orbit",
    gallery: ["orbit", "field"],
    deliverables: ["Entregáveis a confirmar"],
    results: [],
    ...placeholderCopy,
  },
  {
    id: "03",
    title: "Projeto 03",
    category: "Conteúdo & direção",
    cover: "field",
    gallery: ["field", "pulse"],
    deliverables: ["Entregáveis a confirmar"],
    results: [],
    ...placeholderCopy,
  },
  {
    id: "04",
    title: "Projeto 04",
    category: "Performance & conversão",
    cover: "lattice",
    gallery: ["lattice", "orbit"],
    deliverables: ["Entregáveis a confirmar"],
    results: [],
    ...placeholderCopy,
  },
];
