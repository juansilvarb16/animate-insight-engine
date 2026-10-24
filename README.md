# Animate Insight Engine

CRIE O PROMPT COM ANIMAÇÕES Juan Ribeiro | @connector:linkedin:"LinkedIn" PERFIL PARA USAR DE BASE juansilvarb16 (Juan Silva Ribeiro)  GITHUB, ARQUIVO DE INSPIRAÇÃO ANEXADO.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://animate-insight-engine.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/200abaa4-92a8-480d-a550-23f949961ec8).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.
# Portfólio Profissional - Juan Ribeiro

**Acesse o projeto online:** [Live App](https://animate-insight-engine.lovable.app)

## 📌 Sobre o Projeto

Este projeto foi desenvolvido como parte do **Checkpoint 6 (Vibecoding)** do curso de Engenharia de Software da FIAP. O objetivo principal foi construir uma landing page de portfólio utilizando IA Generativa, aplicando o conceito de *Human-in-the-loop* ("Eu primeiro, IA depois"). 

O foco do desenvolvimento não se limitou ao código gerado, mas abrangeu o pensamento crítico, a direção de arte, a engenharia de prompts e a correção de arquitetura para focar em performance.

## 🎨 Identidade Visual (IDV) e Design

A identidade visual foi pensada antes da geração do código para evitar um design genérico, resultando em uma estética *dark mode* minimalista, editorial e focada em dados:

* **Paleta de Cores:** Fundo principal (`#0B0F19`), superfície dos cards (`#161E2E`), texto com alto contraste (`#F9FAFB`) e detalhes em Índigo (`#6366F1`) para guiar o olhar.
* **Tipografia:** *Space Grotesk* (títulos para um ar tecnológico), *DM Sans* (leitura fluida no corpo do texto), *JetBrains Mono* (tags de código) e *Caveat* (toque humano manuscrito).
* **Estrutura:** Hero section com foco em conversão ("aberto a estágio"), fluxo de trabalho em dados, galeria de projetos e consumo de dados reais.

## 🚀 Principais Desafios e Soluções (Troubleshooting)

Durante o processo de construção com IA, atuei como diretor do projeto para garantir a usabilidade:

1. **Performance e Parallax:** Efeitos 3D pesados e complexos sugeridos pela IA foram descartados por travarem a rolagem no mobile. Substituí tudo por um efeito de **Parallax leve em CSS puro**, mantendo a profundidade visual sem sacrificar o desempenho.
2. **Conteúdo Real:** Inclusão de projetos acadêmicos e técnicos reais, como o *Ocean Sentinel* (Python/IoT) e *Boias Inteligentes* (Edge Computing, C++, ESP32), corrigindo as descrições genéricas criadas pela IA.
3. **Curadoria de Visibilidade:** Criação de uma lógica no Front-End para exibir projetos extras exclusivamente para avaliadores através de uma rota parametrizada na URL (`?acesso=professor`).
4. **Integração com API:** Seção "No GitHub" consumindo a API pública do GitHub para atualizar meus repositórios dinamicamente.

---

## 💻 Desenvolvimento Local

Se você preferir rodar e editar este projeto localmente, precisará do Node.js e npm instalados na sua máquina.

```sh
# Clone este repositório
git clone <url-deste-repositorio>

# Entre na pasta do projeto
cd <nome-do-repositorio>

# Instale as dependências
npm i

# Inicie o servidor de desenvolvimento
npm run dev
```

## 🌐 Deploy na Vercel

O projeto está otimizado para ser publicado facilmente na Vercel (o framework detecta as configurações automaticamente):

1. Conecte este repositório à sua conta na Vercel.
2. O comando de build é `npm run build` e a versão recomendada do Node.js é a 22 (já fixada no `.nvmrc`).
3. Nenhuma variável de ambiente (`Environment variables`) é necessária para a execução padrão.
4. Clique em **Deploy**. Cada novo *push* na branch principal (`main`) atualizará o site automaticamente.
## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Deploy on Vercel

The build target is detected automatically (Nitro picks the Vercel preset), so no `vercel.json` or preset pinning is needed.

1. Connect the repository to Vercel and pick the branch you deploy from.
2. Build command: `npm run build`. Node.js: 22 (pinned in `.nvmrc`). No output directory setting is required.
3. Environment variables: this app reads none, so nothing to add.
4. Deploy. Every push to that branch triggers a new deployment.
