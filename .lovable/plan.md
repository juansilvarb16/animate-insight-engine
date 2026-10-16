# Portfólio Juan Silva Ribeiro — com animações

Landing page de portfólio em uma única página, misturando o briefing (dark mode tech) com o vídeo de inspiração (minimalista, editorial, seções numeradas, seção "no GitHub").

## Seções
1. **Navbar fixa** — logo "juan ribeiro", links (sobre, o que eu faço, projetos, github, contato), botão "Fale Comigo". Fica com fundo desfocado ao rolar.
2. **Hero** — "olá, eu sou Juan Silva Ribeiro", título "Transformando ideias em experiências digitais", subtítulo, botões "Ver Projetos" e "Baixar Currículo", frase manuscrita "construindo minha jornada na tecnologia". Texto surge palavra por palavra, efeito de digitação em monospace, fundo com grade de pontos/partículas sutil.
3. **Fluxo de trabalho** — diagrama ideia → design → código → teste → deploy, com linha tracejada desenhando-se ao rolar.
4. **O que eu faço** — 6 cards (Front-End, UI/UX, Responsivo, Performance, Integração de APIs, Git/versionamento) com tags monospace; entram em cascata.
5. **Projetos** — grade de cards clicáveis com prévia visual estilizada, nome, tags (React, Tailwind, TypeScript) e ícone de link externo; inclinação 3D e brilho que segue o mouse.
6. **No GitHub** — cards de repositórios carregados ao vivo do perfil `juansilvarb16` (nome, descrição, linguagem, estrelas), com fallback se a API falhar; link "todos os repositórios".
7. **Sobre / Contato** — texto breve, links para LinkedIn, GitHub e e-mail.
8. **Footer** — copyright e redes.

## Animações
- Revelação ao rolar (fade + subida) em todas as seções
- Contador/progresso de rolagem no topo
- Cursor com brilho seguindo o mouse (desktop)
- Hover magnético nos botões, sublinhado animado nos links
- Respeita "reduzir movimento" do sistema

## Visual
Fundo #0B0F19, cards #161E2E, texto #F9FAFB / #9CA3AF, destaque #6366F1. Fontes: Space Grotesk (títulos), DM Sans (corpo), JetBrains Mono (detalhes), Caveat (frase manuscrita). Totalmente responsivo.

## Observações
- Textos de "Sobre", projetos de destaque e link do currículo serão de exemplo — você me envia os reais depois.
- Não consigo ler o LinkedIn automaticamente; usarei apenas o link do perfil.

## Detalhes técnicos
- `src/routes/index.tsx` substituído; componentes em `src/components/portfolio/*`.
- `framer-motion` para animações; tokens no `src/styles.css`; fontes via `<link>` no `__root.tsx`.
- Repositórios via `https://api.github.com/users/juansilvarb16/repos?sort=updated` com React Query no cliente.
- head() com título/descrição/og próprios.
