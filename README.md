# Jump Performance

Site institucional e portfólio one page da JUMP PERFORMANCE, desenvolvido em Next.js, TypeScript, Tailwind CSS e Vinext.

## Desenvolvimento local

Requer Node.js `>=22.13.0`.

```bash
npm ci
npm run dev
```

A prévia abre em `http://localhost:5173`.

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
- `public/brand/`: diretório recomendado para inserir a identidade oficial quando os arquivos forem fornecidos.

Enquanto esses dados não forem confirmados, o site mantém labels explícitos de placeholder e não publica clientes, números ou resultados fictícios.

## Estrutura principal

- `app/`: página, metadados e sistema visual global.
- `components/layout/`: header e footer.
- `components/sections/`: narrativa completa da home.
- `components/portfolio/`: cards, arte procedural e case study fullscreen.
- `components/ui/`: primitivas reutilizáveis e sistema de movimento.
- `.impeccable/`: direção visual, composição aprovada e evidências de revisão.

## Publicação

Nenhum deploy ou domínio foi configurado. A publicação deve ser feita somente após inserir e validar os assets, contatos e cases reais.
