---
name: "Jump Performance"
description: "Um painel editorial de sinais para estratégia, criação e performance em movimento."
colors:
  carbon: "#080010"
  graphite: "#1a1f26"
  off-white: "#f5f7fa"
  electric-lime: "#c8ff3d"
  electric-blue: "#2d58ff"
  muted: "#aeb4be"
  border: "rgba(245, 247, 250, 0.18)"
  border-strong: "rgba(245, 247, 250, 0.34)"
  surface: "#111019"
typography:
  display:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "clamp(4rem, 7vw, 8rem)"
    fontWeight: 800
    lineHeight: 0.82
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "clamp(2.7rem, 4.8vw, 5.4rem)"
    fontWeight: 700
    lineHeight: 0.88
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "clamp(1.7rem, 2.4vw, 2.8rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Manrope, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "normal"
  label:
    fontFamily: "ui-monospace, SFMono-Regular, Consolas, monospace"
    fontSize: "0.67rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.12em"
  label-action:
    fontFamily: "Manrope, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: "0.13em"
rounded:
  square: "0px"
  round: "9999px"
spacing:
  xs: "0.5rem"
  sm: "0.75rem"
  md: "1rem"
  lg: "1.5rem"
  xl: "2rem"
  2xl: "3rem"
components:
  action-primary:
    backgroundColor: "{colors.electric-lime}"
    textColor: "{colors.carbon}"
    typography: "{typography.label-action}"
    rounded: "{rounded.square}"
    padding: "0.9rem 1.1rem"
  action-primary-hover:
    backgroundColor: "{colors.electric-blue}"
    textColor: "{colors.off-white}"
    typography: "{typography.label-action}"
    rounded: "{rounded.square}"
    padding: "0.9rem 1.1rem"
  action-outline:
    backgroundColor: "transparent"
    textColor: "{colors.off-white}"
    typography: "{typography.label-action}"
    rounded: "{rounded.square}"
    padding: "0.9rem 1.1rem"
  action-outline-hover:
    backgroundColor: "{colors.off-white}"
    textColor: "{colors.carbon}"
    typography: "{typography.label-action}"
    rounded: "{rounded.square}"
    padding: "0.9rem 1.1rem"
  package-featured:
    backgroundColor: "{colors.electric-blue}"
    textColor: "{colors.off-white}"
    rounded: "{rounded.square}"
  project-card:
    backgroundColor: "{colors.graphite}"
    textColor: "{colors.off-white}"
    rounded: "{rounded.square}"
---

# Design System: Jump Performance

## Overview

**Creative North Star: "Data Signal Instrument Panel"**

A Jump se comporta como um instrumento editorial de calibração: informação entra, vira direção, atravessa a execução e retorna como sinal legível. O mundo visual combina campos foscos de carbono e grafite, tipografia off-white comprimida, trilhos finos e marcações técnicas para comunicar precisão sem perder energia.

O sistema é direto, premium e experimental com disciplina. Lima elétrico indica calibração, estado e decisão; azul elétrico desenha fluxo, dados e continuidade. A profundidade é estrutural e plana, criada por campos cromáticos, escala tipográfica, recortes e linhas — nunca por ornamento volumétrico.

**Key Characteristics:**

- Campos foscos de carbono e grafite contrastados por planos off-white.
- Headlines condensadas, densas e em caixa alta; texto corrido aberto e legível.
- Lima para calibração e ação; azul para sinal, percurso e leitura de dados.
- Painéis quadrados, trilhos finos, índices, coordenadas e nós circulares pontuais.
- Movimento leve que revela sequência e progresso, com equivalência estática em movimento reduzido.

## Colors

A paleta tem contraste alto e função explícita: cada acento comunica um tipo diferente de informação.

### Primary

- **Lima de Calibração** (`electric-lime`): destaca estado ativo, decisões, ações prioritárias, nós de foco e inversões de alto impacto.

### Secondary

- **Azul de Sinal** (`electric-blue`): traça caminhos, ondas, progresso e conexões; também pode sustentar um campo ativo quando o conteúdo representa escala ou performance.

### Neutral

- **Carbono Profundo** (`carbon`): fundo dominante e texto sobre campos claros ou lima.
- **Grafite Instrumental** (`graphite`): superfície secundária para método, dossiers e painéis técnicos.
- **Off-white Óptico** (`off-white`): texto principal no escuro e campo de inversão editorial.
- **Cinza de Leitura** (`muted`): texto secundário, descrições e telemetria de menor prioridade.
- **Trilho Sutil** (`border`): divisórias e grids de baixa ênfase.
- **Trilho Ativo** (`border-strong`): contornos interativos e separadores que precisam resistir em campos escuros.
- **Superfície de Espécime** (`surface`): base profunda para arte procedural e recortes internos.

### Named Rules

**The Two-Signal Rule.** Lima marca calibração, decisão ou ação; azul representa sinal, percurso ou dado. Não troque seus papéis por conveniência decorativa.

**The Controlled Inversion Rule.** Use off-white ou um acento como campo editorial completo e intencional, não como uma coleção de cartões claros soltos sobre o carbono.

## Typography

**Display Font:** Barlow Condensed, com fallback sans-serif

**Body Font:** Manrope, com fallback sans-serif

**Label/Mono Font:** ui-monospace, SFMono-Regular, Consolas, monospace

**Character:** Barlow Condensed comprime afirmações grandes em blocos de alta densidade; Manrope mantém explicações claras e contemporâneas. A voz monoespaçada funciona como telemetria, índice e estado, nunca como corpo longo.

### Hierarchy

- **Display** (`typography.display`): títulos de seção e afirmações dominantes, normalmente em caixa alta e com linhas muito próximas.
- **Headline** (`typography.headline`): títulos internos de dossiers, etapas e módulos de alta importância.
- **Title** (`typography.title`): nomes de contatos, títulos compactos e hierarquia de suporte.
- **Body** (`typography.body`): explicações com largura controlada, preferencialmente entre 31 e 52 caracteres por linha nos módulos densos.
- **Label** (`typography.label`): índices, coordenadas, status e microcopy técnica em caixa alta.
- **Action Label** (`typography.label-action`): verbos curtos de navegação e conversão em caixa alta.

### Named Rules

**The Compressed Claim Rule.** Reserve Barlow Condensed para frases que precisam funcionar como forma e mensagem; preserve Manrope para leitura contínua.

**The Telemetry Rule.** Monoespaçada comunica orientação e estado em doses pequenas. Nunca a use para parágrafos promocionais.

## Layout

O sistema usa um shell central fluido de até 112rem, com respiro lateral de 1.5rem no desktop e 1rem em telas compactas. Seções editoriais se organizam em doze colunas, permitindo títulos largos, cópia deslocada e assimetrias controladas; bordas contínuas mantêm os módulos alinhados como uma folha técnica.

Em até 1120px, composições de três partes reduzem para duas e ações podem ocupar uma faixa inteira. Em até 820px, grids extensos viram pares ou pilhas, a navegação passa a overlay integral e áreas de dados separam texto e visual em blocos verticais. Em até 560px, módulos se tornam coluna única, preservando alvos de toque e o contraste entre escala tipográfica e microinformação.

O ritmo é amplo entre narrativas e preciso dentro dos instrumentos: seções respiram em blocos de 6–13rem, enquanto controles e células usam incrementos recorrentes de 0.5–3rem. Não centralize automaticamente; alinhamentos de borda, offsets e espaço negativo carregam a hierarquia.

## Elevation & Depth

O sistema não usa sombras. A profundidade vem de campos tonais inteiros, bordas hairline, sobreposições fullscreen, escala, recorte e contraste. O cabeçalho pode ganhar um véu de carbono translúcido com blur ao rolar, mas superfícies permanecem materialmente planas.

### Named Rules

**The Flat Instrument Rule.** Elementos não flutuam: estado e prioridade aparecem por inversão de cor, trilho, escala ou movimento, nunca por drop shadow.

## Shapes

Controles, cartões, faixas, menus e dossiers usam cantos quadrados. Bordas de 1px constroem células e rails; traços de 2px aparecem apenas quando um nó ou alvo precisa de mais presença. Círculos são reservados a pontos de sinal, indicadores de status, orbitais e crosshairs.

**The Square Field Rule.** A geometria retangular é a norma operacional. Não arredonde painéis para suavizar a interface; use o token circular somente para dados e marcadores.

## Components

### Buttons and Action Links

- **Shape:** retângulos quadrados com contorno hairline e área mínima de toque confortável.
- **Primary:** campo lima, texto carbono, rótulo curto em caixa alta e seta angular; no hover ou foco, inverte para azul e off-white.
- **Outline:** fundo transparente e borda clara; no hover ou foco, vira campo off-white com texto carbono.
- **Focus:** contorno lima de 2px com offset amplo; o estado não depende apenas do deslocamento da seta.
- **Pending:** ações ainda sem destino ficam dessaturadas, com `aria-disabled` e uma etiqueta monoespaçada explícita; não simule disponibilidade.

### Navigation

- **Desktop:** wordmark à esquerda, links técnicos centralizados e ação contornada à direita; após rolagem, o fundo recebe transparência controlada e blur.
- **Link state:** um trilho lima cresce horizontalmente em hover ou foco.
- **Mobile:** overlay carbono fullscreen, itens numerados em Barlow Condensed, separadores hairline e botão de fechar quadrado; a chamada principal fecha a pilha.

### Section Labels

- **Style:** índice entre colchetes seguido de nome funcional, em monoespaçada, caixa alta e espaçamento largo.
- **Role:** orienta a leitura e conecta módulos ao vocabulário de instrumento; permanece pequeno mesmo ao lado de títulos enormes.

### Package Rows

- **Structure:** grandes faixas editoriais divididas em identidade, lista e ação, com separadores contínuos e zero arredondamento.
- **Active state:** a opção destacada ocupa um campo azul completo; lima permanece como linha de calibração e resposta interativa.
- **Responsive:** colunas viram faixas empilhadas sem converter o conjunto em cartões SaaS independentes.

### Project Dossier Cards

- **Frame:** painéis de espécime quadrados com arte procedural, índice, ano, categoria, título e ação sobrepostos.
- **State:** hover ou foco torna o trilho lima, aproxima levemente a arte e traz a ação para a posição de leitura.
- **Composition:** use proporções e larguras assimétricas quando houver espaço; no mobile, priorize uma coluna completa.

### Case and Menu Overlays

- **Frame:** superfícies fullscreen, sem raio ou sombra, com botão de fechar quadrado e foco devolvido ao acionador.
- **Case dossier:** fatos em células hairline, corpo em módulos editoriais e arte em campos amplos; em telas estreitas, a ordem de leitura se torna linear.

### Contact Rows and Floating Contact

- **Rows:** índice, canal, valor e estado compartilham uma linha estruturada; hover ou foco usa um campo lima e deslocamento curto do conteúdo.
- **Floating contact:** aparece somente após rolagem suficiente, mantém formato retangular no desktop e reduz para controle compacto no mobile.

## Do's and Don'ts

### Do:

- **Do** use campos foscos, linhas finas e alinhamento de grid para construir hierarquia antes de adicionar decoração.
- **Do** mantenha lima e azul em papéis semânticos distintos e verificáveis.
- **Do** combine afirmações condensadas com texto Manrope de largura controlada e telemetria monoespaçada curta.
- **Do** preserve estados equivalentes de hover, foco visível e movimento reduzido em todos os componentes interativos.
- **Do** use o wordmark temporário “JUMP / PERFORMANCE” até existir um ativo oficial aprovado.

### Don't:

- **Don't** transforme o sistema em uma página de agência genérica com cartões uniformes de serviços, prova inventada ou tabela SaaS.
- **Don't** introduza cantos arredondados, sombras, glassmorphism, glows ou profundidade 3D em painéis de marca.
- **Don't** trate lima e azul como ruído neon, estética cyberpunk, gamer, cripto ou “IA genérica”.
- **Don't** espalhe microcopy técnica até competir com a mensagem principal; índices e coordenadas devem orientar, não decorar.
- **Don't** recrie um símbolo de marca não fornecido nem use resultados, logos de clientes ou métricas sem validação.
