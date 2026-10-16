export const profile = {
  name: "juan ribeiro",
  role: "estudante de engenharia de software · dados, automação & back-end",
  intro:
    "construo automações e análises com python, sql e javascript para transformar processos e dados em resultados confiáveis.",
  github: "https://github.com/juansilvarb16",
  githubUser: "juansilvarb16",
  linkedin: "https://www.linkedin.com/in/juansilvarb16",
  email: "juansilvarb16@gmail.com",
  location: "são paulo, brasil",
};

export const about = [
  "minha jornada na tecnologia começou em 2023, no ensino técnico em programação de jogos digitais na etec. foi ali que descobri o gosto por lógica, resolução de problemas e por construir coisas do zero.",
  "hoje curso engenharia de software na fiap e trabalho na vivo, onde lido diariamente com fluxos, estoque, conciliação e planilhas — e desenvolvo projetos próprios em python e javascript para automatizar tarefas da loja.",
  "meu foco é migrar para a área técnica: dados, automações e desenvolvimento, conectando o aprendizado acadêmico às demandas reais do mercado.",
];

export const pipeline = [
  { label: "fonte", sub: "planilhas, sistemas e apis" },
  { label: "ingestão", sub: "python & pyspark" },
  { label: "transformação", sub: "bronze · silver · gold", layers: ["bronze", "silver", "gold"] },
  { label: "qualidade", sub: "validação e conciliação" },
  { label: "consumo", sub: "relatórios e automações" },
];

export const services = [
  { title: "python & análise de dados", desc: "manipulação e análise de grandes volumes de dados com pandas e pyspark.", tags: ["python", "pandas", "pyspark"] },
  { title: "engenharia de dados", desc: "processamento e organização de dados em nuvem, em camadas confiáveis.", tags: ["databricks", "delta", "spark"] },
  { title: "sql & modelagem", desc: "consultas, modelagem de banco de dados e tratamento de inconsistências.", tags: ["sql", "modelagem", "joins"] },
  { title: "automações", desc: "scripts que eliminam tarefas repetitivas e aumentam a produtividade.", tags: ["python", "javascript", "excel"] },
  { title: "desenvolvimento", desc: "integrações, ferramentas internas e aplicações web com javascript.", tags: ["javascript", "apis", "git"] },
  { title: "processos & operação", desc: "organização de fluxos, conciliação financeira e padronização de rotinas.", tags: ["processos", "auditoria", "excel"] },
];

export const experience = [
  {
    role: "administrativo",
    company: "vivo (telefônica brasil)",
    period: "mai 2026 — atual",
    items: [
      "suporte comercial e operacional, com organização de fluxos e controle de estoque.",
      "triagem e direcionamento de movimentações em sistemas internos.",
      "suporte à emissão de notas fiscais e faturamento logístico.",
      "conciliação financeira diária e auditoria de vendas.",
      "tratamento de planilhas no excel para corrigir inconsistências de dados.",
      "projetos próprios em python e javascript para automatizar tarefas da loja.",
    ],
  },
  {
    role: "auxiliar jurídico",
    company: "costa cruzeiros (costa crociere s.p.a.)",
    period: "fev 2026 — mai 2026",
    items: [
      "triagem e processamento de intimações judiciais com controle de prazos.",
      "extração de dados para elaboração de documentos jurídicos.",
      "coordenação logística de audiências e correspondentes nacionais.",
      "controle financeiro de pagamentos via rpa e solicitações internas.",
    ],
  },
];

export const projects = [
  { kind: "dados · satélite", name: "ocean sentinel", desc: "plataforma inteligente de monitoramento de plástico oceânico utilizando dados de satélites.", tags: ["dados", "satélite", "global solution 2026"], preview: "layers", url: "https://github.com/juansilvarb16/Ocean-Sentinel-GS2026" },
  { kind: "web · api", name: "wbdev5 — consumo de api", desc: "atividade de desenvolvimento web consumindo uma api externa e exibindo os dados na interface.", tags: ["javascript", "api", "fetch"], preview: "grid", url: "https://github.com/juansilvarb16/wbdev5" },
  { kind: "automação · python", name: "conciliação automática", desc: "script que cruza planilhas de vendas e estoque, aponta divergências e gera relatório diário.", tags: ["python", "pandas", "excel"], preview: "bars", url: "https://github.com/juansilvarb16" },
];

export const stack = [
  { cat: "linguagens", items: ["python", "sql", "javascript"] },
  { cat: "dados", items: ["pandas", "pyspark", "databricks"] },
  { cat: "ferramentas", items: ["git", "github", "excel", "vs code"] },
  { cat: "também uso", items: ["sistemas erp", "planilhas avançadas", "unity"] },
];

export const education = [
  { school: "fiap", course: "engenharia de software", period: "2026 — 2030" },
  { school: "etec", course: "técnico em programação de jogos digitais", period: "2023 — 2025" },
];
