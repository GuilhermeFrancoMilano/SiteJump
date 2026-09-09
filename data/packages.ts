export type MarketingPackage = {
  id: string;
  name: string;
  audience: string;
  features: string[];
  cta: string;
  featured?: boolean;
};

export const marketingPackages: MarketingPackage[] = [
  {
    id: "01",
    name: "Jump Start",
    audience: "Para marcas que querem organizar sua presença digital.",
    features: [
      "Planejamento mensal",
      "Calendário de conteúdo",
      "Direção criativa",
      "Criação de peças",
      "Copywriting",
      "Gestão de redes sociais",
      "Relatório mensal",
    ],
    cta: "Quero começar",
  },
  {
    id: "02",
    name: "Jump Scale",
    audience: "Para marcas prontas para acelerar.",
    features: [
      "Estratégia digital",
      "Planejamento de conteúdo",
      "Gestão de redes sociais",
      "Criativos de campanha",
      "Gestão de mídia paga",
      "Otimizações recorrentes",
      "Relatórios de performance",
      "Reunião estratégica",
    ],
    cta: "Quero escalar",
    featured: true,
  },
  {
    id: "03",
    name: "Jump Performance",
    audience: "Para empresas que querem uma operação de marketing mais completa.",
    features: [
      "Estratégia de crescimento",
      "Gestão completa de conteúdo",
      "Direção criativa",
      "Criativos para mídia",
      "Gestão de campanhas",
      "Funis e conversão",
      "Landing pages",
      "Análise de dados",
      "Otimização contínua",
      "Acompanhamento estratégico",
    ],
    cta: "Quero performance",
  },
];
