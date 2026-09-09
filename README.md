# Jump Performance

Site institucional e portfólio one page da JUMP PERFORMANCE, desenvolvido em Next.js, TypeScript, Tailwind CSS e Vinext.

## Desenvolvimento local

Requer Node.js `>=22.13.0`.

```bash
npm ci
npm run dev
```

A prévia local abre em `http://localhost:5173`. O endereço de produção é
`https://jumpperformace.com.br`.

## Validação

```bash
npm run lint
npx tsc --noEmit
npm run build
```

O projeto não possui suíte de testes automatizados neste momento.

## Conteúdo editável

- `config/site.ts`: WhatsApp, e-mail e redes sociais.
- `data/packages.ts`: nomes, descrições, entregáveis e CTAs dos pacotes.
- `data/projects.ts`: projetos, cases, galeria e resultados verificados.
- `public/brand/`: identidade oficial fornecida e orientações para futuros masters vetoriais.

Enquanto esses dados não forem confirmados, o site mantém labels explícitos de placeholder e não publica clientes, números ou resultados fictícios.

## Estrutura principal

- `app/`: página, metadados e sistema visual global.
- `components/layout/`: header e footer.
- `components/sections/`: narrativa completa da home.
- `components/portfolio/`: cards, arte procedural e case study fullscreen.
- `components/ui/`: primitivas reutilizáveis e sistema de movimento.
- `.impeccable/`: direção visual, composição aprovada e evidências de revisão.

## Publicação

O site está publicado em `https://jumpperformace.com.br`. Contatos e cases reais
continuam centralizados nos arquivos editáveis e devem ser validados antes de
substituir os placeholders.
