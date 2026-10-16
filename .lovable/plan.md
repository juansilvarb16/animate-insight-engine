# Portfólio Juan Ribeiro — recriação do portfólio do vídeo

Recriar fielmente o estilo do vídeo (monocromático, editorial, minimalista, alternando claro/escuro, partículas sutis, título da seção à esquerda com ícone de cubo e conteúdo à direita), usando os dados do seu perfil em PDF. Tudo em letras minúsculas como no original.

## Estrutura (igual ao vídeo)
1. **Navbar fixa** — "juan ribeiro" com ícone, links: sobre, o que eu faço, experiência, projetos, stack, formação, contato; botão PT/EN e alternância claro/escuro.
2. **Hero** — "olá, eu sou juan ribeiro", "estudante de engenharia de software · dados, automação & back-end", frase manuscrita "construindo minha jornada na tecnologia", botões "ver projetos", GitHub, LinkedIn. Espaço para sua foto em preto e branco (placeholder até você enviar).
3. **Como o dado percorre meu trabalho** — diagrama animado: fonte → ingestão → transformação (bronze/silver/gold) → qualidade → consumo.
4. **Sobre** — resumo do PDF (ETEC Jogos Digitais → FIAP Eng. Software, Vivo, foco em dados) + coluna lateral com formação.
5. **O que eu faço** — 6 cards: Python & análise de dados (Pandas, PySpark), Engenharia de dados (Databricks), SQL & modelagem, Automações (Python/JS), Desenvolvimento JavaScript, Processos & organização.
6. **Experiência** — linha do tempo: Vivo (Administrativo, mai/2026–atual) e Costa Cruzeiros (Auxiliar Jurídico, fev–mai/2026) com os tópicos do PDF.
7. **Projetos** — cards com prévia visual, categoria, nome, descrição e tags (exemplos de automação Python/JS e dados — você troca pelos reais).
8. **Stack** — tabela por categoria: linguagens (Python, SQL, JavaScript), dados (Pandas, PySpark, Databricks), ferramentas (Excel, Git, GitHub).
9. **Formação** — FIAP (2026–2030), ETEC (2023–2025).
10. **No GitHub** — repositórios ao vivo de `juansilvarb16` (nome, descrição, linguagem, atualização), link "todos os repositórios".
11. **Contato / rodapé** — LinkedIn, GitHub, e-mail.

## Animações
- Seções surgindo ao rolar (fade + subida), cards em cascata
- Hero com brilho que segue o mouse e texto revelado letra a letra
- Linha do diagrama e da linha do tempo desenhando-se ao rolar
- Barra de progresso de rolagem no topo, partículas flutuantes no fundo
- Cards com elevação e borda destacada no hover
- Respeita "reduzir movimento"

## Visual
Preto/branco puro com cinzas; fontes Inter Tight (texto), JetBrains Mono (tags), Caveat (manuscrito). Responsivo.

## Observações
- Foto, projetos de destaque e e-mail serão provisórios até você enviar os reais.

## Detalhes técnicos
- `src/routes/index.tsx` reescrito; seções em `src/components/portfolio/*`; dados em `src/data/profile.ts`.
- `framer-motion`; tokens em `src/styles.css` (claro e `.dark`); fontes via `<link>` no `__root.tsx`.
- GitHub via API pública no cliente com React Query e fallback.
- head() com título/descrição/og próprios.
