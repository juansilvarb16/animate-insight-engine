export const profile = {
  name: "juan ribeiro",
  role: "estudante de engenharia de software · dados, automação & back-end",
  intro:
    "construo automações e análises com Python, SQL e JavaScript para transformar processos e dados em resultados confiáveis.",
  github: "https://github.com/juansilvarb16",
  githubUser: "juansilvarb16",
  linkedin: "https://www.linkedin.com/in/juansilvarb16",
  email: "juansilvarb16@gmail.com",
  location: "são paulo, brasil",
};

export const about = [
  "minha jornada na tecnologia começou em 2023, no ensino técnico em programação de jogos digitais na ETEC. foi ali que descobri o gosto por lógica, resolução de problemas e por construir coisas do zero.",
  "hoje curso engenharia de software na FIAP e trabalho na Vivo, onde lido diariamente com fluxos, estoque, conciliação e planilhas — e desenvolvo projetos próprios em Python e JavaScript para automatizar tarefas da loja.",
  "meu foco é migrar para a área técnica: dados, automações e desenvolvimento, conectando o aprendizado acadêmico às demandas reais do mercado.",
];

export const pipeline = [
  { label: "fonte", sub: "planilhas, sistemas e APIs" },
  { label: "ingestão", sub: "Python & PySpark" },
  { label: "transformação", sub: "bronze · silver · gold", layers: ["bronze", "silver", "gold"] },
  { label: "qualidade", sub: "validação e conciliação" },
  { label: "consumo", sub: "relatórios e automações" },
];

export const services = [
  { title: "python & análise de dados", desc: "manipulação e análise de grandes volumes de dados com Pandas e PySpark.", tags: ["python", "pandas", "pyspark"] },
  { title: "engenharia de dados", desc: "processamento e organização de dados em nuvem, em camadas confiáveis.", tags: ["databricks", "delta", "spark"] },
  { title: "sql & modelagem", desc: "consultas, modelagem de banco de dados e tratamento de inconsistências.", tags: ["sql", "modelagem", "joins"] },
  { title: "automações", desc: "scripts que eliminam tarefas repetitivas e aumentam a produtividade.", tags: ["python", "javascript", "excel"] },
  { title: "desenvolvimento", desc: "integrações, ferramentas internas e aplicações web com JavaScript.", tags: ["javascript", "apis", "git"] },
  { title: "processos & operação", desc: "organização de fluxos, conciliação financeira e padronização de rotinas.", tags: ["processos", "auditoria", "excel"] },
];

export const experience = [
  {
    role: "administrativo",
    company: "Vivo (Telefônica Brasil)",
    period: "mai 2026 — até o momento · são paulo",
    items: [
      "suporte comercial e operacional, com organização de fluxos e controle de estoque.",
      "triagem de movimentações em sistemas internos.",
      "apoio à emissão de notas fiscais e ao faturamento logístico.",
      "conciliação financeira diária e auditoria de vendas.",
      "tratamento de planilhas no Excel para corrigir inconsistências.",
      "projetos próprios em Python e JavaScript para automatizar tarefas da loja.",
    ],
  },
  {
    role: "auxiliar jurídico",
    company: "Costa Cruzeiros (Costa Crociere S.p.A.)",
    period: "fev 2026 — mai 2026 · são paulo",
    items: [
      "triagem e processamento de intimações com controle de prazos.",
      "extração de dados para procurações e cartas de preposição.",
      "coordenação logística de audiências.",
      "controle financeiro de pagamentos via RPA e SIP.",
    ],
  },
];

export const projects = [
  { kind: "python · iot", name: "ocean sentinel", desc: "protótipo da Global Solution 2026 (FIAP): estima o risco de acúmulo de resíduos no oceano com Python, modelagem matemática e uma boia inteligente simulada em ESP32.", tags: ["python", "esp32", "gs 2026"], preview: "layers", url: "https://github.com/juansilvarb16/Ocean-Sentinel-GS2026" },
  { kind: "edge computing · iot", name: "boias inteligentes", desc: "simulação de boia com ESP32 no Wokwi que lê sensores, calcula o índice de risco localmente e sinaliza com LEDs, display OLED, servo e buzzer.", tags: ["c++", "esp32", "wokwi"], preview: "grid", url: "https://github.com/juansilvarb16/boias-inteligentes-wowki" },
  { kind: "automação · python", name: "conciliação automática", desc: "script que cruza planilhas de vendas e estoque, aponta divergências e gera relatório diário.", tags: ["python", "pandas", "excel"], preview: "bars", url: "https://github.com/juansilvarb16" },
];

export const stack = [
  { cat: "linguagens", items: ["python", "sql", "javascript"] },
  { cat: "dados", items: ["pandas", "pyspark", "databricks"] },
  { cat: "ferramentas", items: ["git", "github", "excel", "vs code"] },
  { cat: "também uso", items: ["sistemas erp", "planilhas avançadas", "unity"] },
];

export const education = [
  { school: "FIAP", course: "engenharia de software", period: "2026 — 2030" },
  { school: "ETEC", course: "técnico em programação de jogos digitais", period: "2023 — 2025" },
];

export const certifications = [
  "Design Thinking – Process",
  "Formação Social e Sustentabilidade",
  "Big Data",
  "Assistente Administrativo",
  "Imersão Engenharia de Dados com IA",
];
