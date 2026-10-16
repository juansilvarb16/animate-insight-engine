import { motion, useMotionValue, useSpring, useScroll } from "framer-motion";
import { ArrowRight, ArrowUpRight, Box, Check, Database, BarChart3, Activity } from "lucide-react";
import { profile, pipeline } from "@/data/profile";
import { Particles, Reveal } from "./primitives";

const links = [
  ["sobre", "#sobre"],
  ["o que eu faço", "#servicos"],
  ["experiência", "#experiencia"],
  ["projetos", "#projetos"],
  ["stack", "#stack"],
  ["formação", "#formacao"],
  ["contato", "#contato"],
];

export function Navbar() {
  const { scrollYProgress } = useScroll();
  return (
    <header className="dark fixed inset-x-0 top-0 z-50 border-b border-border bg-background/70 text-foreground backdrop-blur-md">
      <motion.div style={{ scaleX: scrollYProgress }} className="absolute inset-x-0 top-0 h-px origin-left bg-foreground" />
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2 text-sm font-semibold">
          <Box className="h-4 w-4" strokeWidth={1.5} /> {profile.name}
        </a>
        <ul className="hidden gap-6 text-xs text-muted-foreground lg:flex">
          {links.map(([l, h]) => (
            <li key={h}><a href={h} className="link-underline transition-colors hover:text-foreground">{l}</a></li>
          ))}
        </ul>
        <a href="#contato" className="rounded-full border border-border px-3 py-1 font-mono text-[11px] transition-colors hover:bg-foreground hover:text-background">fale comigo</a>
      </nav>
    </header>
  );
}

const title = `olá, eu sou ${profile.name}`;

export function Hero() {
  const mx = useMotionValue(50);
  const my = useMotionValue(50);
  const sx = useSpring(mx, { stiffness: 80, damping: 20 });
  const sy = useSpring(my, { stiffness: 80, damping: 20 });
  return (
    <section id="top" className="dark relative overflow-hidden bg-background pt-28 pb-20 text-foreground">
      <Particles count={36} />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-[1.3fr_1fr]">
        <div
          className="relative overflow-hidden rounded-2xl border border-border bg-card p-8 md:p-12"
          onMouseMove={(e) => {
            const r = e.currentTarget.getBoundingClientRect();
            mx.set(((e.clientX - r.left) / r.width) * 100);
            my.set(((e.clientY - r.top) / r.height) * 100);
          }}
        >
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{ background: useSpringBg(sx, sy) }}
          />
          <h1 className="relative text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            {title.split("").map((c, i) => (
              <motion.span key={i} initial={{ opacity: 0, y: 12, filter: "blur(6px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ delay: 0.2 + i * 0.035, duration: 0.5 }}>
                {c}
              </motion.span>
            ))}
          </h1>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.8 }} className="relative">
            <p className="mt-6 text-lg">{profile.role}</p>
            <p className="mt-3 max-w-md text-sm text-muted-foreground">{profile.intro}</p>
            <p className="mt-6 font-hand text-2xl text-muted-foreground">construindo minha jornada na tecnologia</p>
            <div className="mt-8 flex flex-wrap items-center gap-4 text-sm">
              <a href="#projetos" className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2 font-medium text-background transition-transform hover:scale-105">
                ver projetos <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer" className="link-underline">github</a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="link-underline">linkedin</a>
            </div>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5, duration: 1 }} className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-2xl border border-border bg-card">
          <div className="absolute inset-0 grid place-items-center">
            <span className="text-[9rem] font-semibold tracking-tighter text-muted-foreground/30">jr</span>
          </div>
          <div className="absolute bottom-4 left-4 font-mono text-[11px] text-muted-foreground">{profile.location}</div>
        </motion.div>
      </div>
    </section>
  );
}

import { useTransform, type MotionValue } from "framer-motion";
function useSpringBg(x: MotionValue<number>, y: MotionValue<number>) {
  return useTransform([x, y], ([a, b]) => `radial-gradient(420px circle at ${a}% ${b}%, var(--glow), transparent 70%)`);
}

const icons = [Database, Activity, null, Check, BarChart3];

export function Pipeline() {
  return (
    <section className="relative bg-background text-foreground">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <Reveal className="mb-12 flex flex-wrap items-baseline justify-between gap-2">
          <p className="text-sm">como o dado percorre meu trabalho</p>
          <p className="font-hand text-xl text-muted-foreground">regra de negócio entra, dado confiável sai</p>
        </Reveal>
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between md:gap-0">
          {pipeline.map((s, i) => {
            const Icon = icons[i];
            return (
              <div key={s.label} className="contents">
                <Reveal delay={i * 0.18} className="flex flex-col items-center text-center">
                  {s.layers ? (
                    <div className="flex gap-1.5">
                      {s.layers.map((l) => (
                        <span key={l} className="rounded-md border border-foreground px-3 py-2 font-mono text-[11px]">{l}</span>
                      ))}
                    </div>
                  ) : (
                    <div className="grid h-14 w-14 place-items-center rounded-lg border border-foreground">
                      {Icon && <Icon className="h-6 w-6" strokeWidth={1.5} />}
                    </div>
                  )}
                  <p className="mt-3 text-sm font-medium">{s.label}</p>
                  <p className="text-[11px] text-muted-foreground">{s.sub}</p>
                </Reveal>
                {i < pipeline.length - 1 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.18, duration: 0.6 }}
                    className="hidden h-px flex-1 origin-left border-t border-dashed border-line md:mx-3 md:mb-10 md:block"
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export { ArrowUpRight };
