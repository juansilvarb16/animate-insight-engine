import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { ArrowUpRight, Box, Github, Linkedin, Mail, Star } from "lucide-react";
import { about, education, experience, profile, projects, services, stack } from "@/data/profile";
import { Reveal, Section } from "./primitives";

export function About() {
  return (
    <Section id="sobre" title="sobre">
      <div className="grid gap-10 md:grid-cols-[1.6fr_1fr]">
        <div className="space-y-5 text-[15px] leading-relaxed">
          {about.map((p, i) => (
            <Reveal key={i} delay={i * 0.1}><p>{p}</p></Reveal>
          ))}
        </div>
        <Reveal delay={0.2} className="space-y-6 text-sm">
          {education.map((e) => (
            <div key={e.school}>
              <p className="font-mono text-[11px] text-muted-foreground">formação</p>
              <p>{e.course} — {e.school}</p>
              <p className="text-muted-foreground">{e.period}</p>
            </div>
          ))}
          <div>
            <p className="font-mono text-[11px] text-muted-foreground">atualmente</p>
            <p>vivo · {profile.location}</p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

export function Services() {
  return (
    <Section id="servicos" title="o que eu faço" subtitle="é com o que faço. cada área com as ferramentas que uso nela." dark>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={(i % 3) * 0.1}>
            <div className="card-hover h-full rounded-xl border border-border bg-card p-5">
              <Box className="mb-4 h-4 w-4 text-muted-foreground" strokeWidth={1.5} />
              <h3 className="text-sm font-semibold">{s.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{s.desc}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">{s.tags.map((t) => <span key={t} className="tag">{t}</span>)}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Experience() {
  return (
    <Section id="experiencia" title="experiência" subtitle="vivência corporativa em telecom e jurídico.">
      <div className="relative pl-8">
        <motion.div initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }} transition={{ duration: 1.2 }} className="absolute left-0 top-2 bottom-0 w-px origin-top bg-line" />
        {experience.map((e, i) => (
          <Reveal key={e.company} delay={i * 0.15} className="relative mb-12 last:mb-0">
            <span className="absolute -left-[36px] top-1.5 h-2 w-2 rounded-full bg-foreground" />
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-semibold">{e.role}</h3>
              <span className="font-mono text-[11px] text-muted-foreground">{e.period}</span>
            </div>
            <p className="text-sm text-muted-foreground">{e.company}</p>
            <ul className="mt-4 space-y-2 text-sm">
              {e.items.map((it) => (
                <li key={it} className="flex gap-3"><span className="mt-2.5 h-px w-3 shrink-0 bg-muted-foreground" />{it}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Preview({ type }: { type: string }) {
  if (type === "bars")
    return (
      <div className="flex h-full items-end gap-2 p-5">
        {[40, 70, 55, 90, 65, 80, 45].map((h, i) => (
          <motion.div key={i} initial={{ height: 0 }} whileInView={{ height: `${h}%` }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.6 }} className="flex-1 rounded-sm bg-primary-foreground/70" />
        ))}
      </div>
    );
  if (type === "layers")
    return (
      <div className="flex h-full flex-col justify-center gap-2 p-5">
        {["bronze", "silver", "gold"].map((l, i) => (
          <motion.div key={l} initial={{ x: -30, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="rounded border border-primary-foreground/40 px-3 py-1.5 font-mono text-[11px] text-primary-foreground" style={{ marginLeft: i * 18 }}>
            {l}
          </motion.div>
        ))}
      </div>
    );
  return (
    <div className="grid h-full grid-cols-4 gap-1.5 p-5">
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }} className="rounded-sm bg-primary-foreground/25" />
      ))}
    </div>
  );
}

export function Projects() {
  return (
    <Section id="projetos" title="projetos" subtitle="automações, dados e web. do script à entrega.">
      <div className="grid gap-5 md:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.12}>
            <a href={profile.github} target="_blank" rel="noreferrer" className="card-hover group block h-full overflow-hidden rounded-xl border border-border bg-card">
              <div className="h-36 bg-primary transition-transform duration-500 group-hover:scale-[1.03]"><Preview type={p.preview} /></div>
              <div className="p-5">
                <p className="font-mono text-[10px] text-muted-foreground">{p.kind}</p>
                <h3 className="mt-1 flex items-center justify-between font-semibold">{p.name}<ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">{p.tags.map((t) => <span key={t} className="tag">{t}</span>)}</div>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Stack() {
  return (
    <Section id="stack" title="stack" subtitle="ferramentas que uso no dia a dia, por área." dark>
      <div className="divide-y divide-border">
        {stack.map((s, i) => (
          <Reveal key={s.cat} delay={i * 0.08} className="grid gap-3 py-5 sm:grid-cols-[180px_1fr]">
            <p className="text-sm font-medium">{s.cat}</p>
            <div className="flex flex-wrap gap-2">{s.items.map((t) => <span key={t} className="tag transition-colors hover:border-foreground hover:text-foreground">{t}</span>)}</div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Education() {
  return (
    <Section id="formacao" title="formação" subtitle="base técnica e graduação." dark>
      <div className="grid gap-4 sm:grid-cols-2">
        {education.map((e, i) => (
          <Reveal key={e.school} delay={i * 0.1}>
            <div className="card-hover rounded-xl border border-border bg-card p-5">
              <p className="text-sm font-semibold">{e.course}</p>
              <p className="mt-1 text-xs text-muted-foreground">{e.school} · {e.period}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

type Repo = { id: number; name: string; description: string | null; language: string | null; stargazers_count: number; html_url: string; pushed_at: string; fork: boolean };

function ago(d: string) {
  const days = Math.floor((Date.now() - new Date(d).getTime()) / 864e5);
  if (days < 1) return "hoje";
  if (days < 30) return `há ${days} dia${days > 1 ? "s" : ""}`;
  const m = Math.floor(days / 30);
  return m < 12 ? `há ${m} ${m > 1 ? "meses" : "mês"}` : `há ${Math.floor(m / 12)} ano(s)`;
}

export function GithubRepos() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["repos", profile.githubUser],
    queryFn: async () => {
      const r = await fetch(`https://api.github.com/users/${profile.githubUser}/repos?sort=pushed&per_page=12`);
      if (!r.ok) throw new Error(String(r.status));
      return ((await r.json()) as Repo[]).filter((x) => !x.fork).slice(0, 6);
    },
    staleTime: 5 * 60_000,
  });
  return (
    <Section id="github" title="no github" subtitle="repositórios públicos com atividade recente, direto da api." dark>
      {isLoading && <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{Array.from({ length: 3 }).map((_, i) => <div key={i} className="h-28 animate-pulse rounded-xl bg-card" />)}</div>}
      {(isError || (data && data.length === 0)) && <p className="text-sm text-muted-foreground">não foi possível carregar os repositórios agora — veja direto no github.</p>}
      {data && data.length > 0 && (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((r, i) => (
            <Reveal key={r.id} delay={(i % 3) * 0.08}>
              <a href={r.html_url} target="_blank" rel="noreferrer" className="card-hover group flex h-full flex-col rounded-xl border border-border bg-card p-5">
                <div className="flex items-start justify-between"><h3 className="text-sm font-semibold">{r.name}</h3><ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground group-hover:text-foreground" /></div>
                <p className="mt-2 flex-1 text-xs text-muted-foreground">{r.description ?? "sem descrição."}</p>
                <div className="mt-4 flex items-center gap-4 font-mono text-[10px] text-muted-foreground">
                  {r.language && <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-foreground" />{r.language}</span>}
                  {r.stargazers_count > 0 && <span className="flex items-center gap-1"><Star className="h-3 w-3" />{r.stargazers_count}</span>}
                  <span>atualizado {ago(r.pushed_at)}</span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      )}
      <a href={profile.github} target="_blank" rel="noreferrer" className="link-underline mt-8 inline-flex items-center gap-1 text-xs">todos os repositórios <ArrowUpRight className="h-3 w-3" /></a>
    </Section>
  );
}

export function Contact() {
  const items = [
    { icon: Linkedin, label: "linkedin", href: profile.linkedin },
    { icon: Github, label: "github", href: profile.github },
    { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
  ];
  return (
    <Section id="contato" title="contato" subtitle="aberto a estágios em desenvolvimento ou dados.">
      <Reveal>
        <p className="max-w-xl text-3xl font-semibold leading-tight tracking-tight md:text-4xl">vamos conversar sobre dados, automação ou o seu próximo projeto.</p>
      </Reveal>
      <div className="mt-10 flex flex-wrap gap-3">
        {items.map(({ icon: Icon, label, href }, i) => (
          <Reveal key={label} delay={0.1 + i * 0.08}>
            <a href={href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm transition-colors hover:bg-foreground hover:text-background">
              <Icon className="h-4 w-4" /> {label}
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="dark bg-background text-muted-foreground">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 border-t border-border px-6 py-8 text-xs">
        <p>© {new Date().getFullYear()} {profile.name}. feito com café e código.</p>
        <div className="flex gap-4">
          <a href={profile.github} target="_blank" rel="noreferrer" className="link-underline">github</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="link-underline">linkedin</a>
        </div>
      </div>
    </footer>
  );
}
