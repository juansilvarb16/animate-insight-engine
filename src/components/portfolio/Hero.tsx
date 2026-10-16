import { motion, useMotionValue, useSpring, useScroll, useTransform, type MotionValue } from "framer-motion";
import { ArrowRight, ArrowUpRight, Box, Check, Database, BarChart3, Activity } from "lucide-react";
import { profile, pipeline } from "@/data/profile";
import { Particles, Reveal, useFinePointer } from "./primitives";
import photo from "@/assets/juan.png.asset.json";

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
  const fine = useFinePointer();
  const px = useSpring(useMotionValue(0), { stiffness: 60, damping: 18 });
  const py = useSpring(useMotionValue(0), { stiffness: 60, damping: 18 });
  const l1x = useTransform(px, (v) => v * 60);
  const l1y = useTransform(py, (v) => v * 60);
  const l2x = useTransform(px, (v) => v * -90);
  const l2y = useTransform(py, (v) => v * -90);
  const l3x = useTransform(px, (v) => v * 30);
  const l3y = useTransform(py, (v) => v * 30);
  const cardX = useTransform(px, (v) => v * -14);
  const cardY = useTransform(py, (v) => v * -14);
  const stageRX = useTransform(py, (v) => v * -18);
  const stageRY = useTransform(px, (v) => v * 22);
  return (
    <section
      id="top"
      className="dark relative overflow-hidden bg-background pt-28 pb-20 text-foreground"
      onMouseMove={(e) => {
        if (!fine) return;
        px.set(e.clientX / window.innerWidth - 0.5);
        py.set(e.clientY / window.innerHeight - 0.5);
      }}
    >
      <Particles count={36} />
      {/* camadas de profundidade */}
      <motion.div aria-hidden style={fine ? { x: l1x, y: l1y } : {}} className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full border border-border" />
      <motion.div aria-hidden style={fine ? { x: l2x, y: l2y } : {}} className="pointer-events-none absolute right-[8%] top-16 h-40 w-40 rounded-full border border-dashed border-line opacity-60" />
      <motion.div aria-hidden style={fine ? { x: l3x, y: l3y } : {}} className="pointer-events-none absolute bottom-10 left-[42%] font-mono text-[10px] text-muted-foreground/60">{"{ dados: confiáveis }"}</motion.div>
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-[1.3fr_1fr]">
        <motion.div
          style={fine ? { x: cardX, y: cardY } : {}}
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
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5, duration: 1 }} className="relative mx-auto w-full max-w-sm [perspective:1200px]">
          <motion.div style={fine ? { rotateX: stageRX, rotateY: stageRY } : {}} className="relative aspect-square [transform-style:preserve-3d]">
            {/* anel orbital */}
            <div aria-hidden className="absolute -inset-6 hidden rounded-full border border-dashed border-line opacity-50 md:block" style={{ transform: "translateZ(-60px)" }}>
              <div className="orbit absolute inset-0"><span className="absolute -top-1 left-1/2 h-2 w-2 rounded-full bg-foreground" /></div>
            </div>
            {/* foto */}
            <div className="absolute inset-0 overflow-hidden rounded-2xl border border-border bg-card shadow-2xl" style={{ transform: "translateZ(0px)" }}>
              <img src={photo.url} alt="juan ribeiro" className="h-full w-full object-cover grayscale contrast-110" />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background to-transparent" />
              <div className="absolute bottom-4 left-4 font-mono text-[11px] text-foreground/80">{profile.location}</div>
            </div>
            {/* cubo 3d */}
            <div className="absolute -right-4 -top-6 h-20 w-20 md:-right-10" style={{ transform: "translateZ(80px)" }}>
              <Cube />
            </div>
            {/* chip flutuante */}
            <div className="absolute -bottom-5 -left-4 rounded-lg border border-border bg-card/90 px-3 py-2 font-mono text-[10px] backdrop-blur md:-left-10" style={{ transform: "translateZ(50px)" }}>
              <span className="text-muted-foreground">status:</span> aberto a estágio
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function useSpringBg(x: MotionValue<number>, y: MotionValue<number>) {
  return useTransform([x, y], ([a, b]) => `radial-gradient(420px circle at ${a}% ${b}%, var(--glow), transparent 70%)`);
}

function Cube() {
  const faces = [
    "rotateY(0deg)", "rotateY(90deg)", "rotateY(180deg)", "rotateY(-90deg)", "rotateX(90deg)", "rotateX(-90deg)",
  ];
  return (
    <div className="h-full w-full [perspective:600px]">
      <div className="spin-3d relative h-full w-full">
        {faces.map((f, i) => (
          <div key={i} className="absolute inset-0 grid place-items-center border border-foreground/60 bg-card/40 font-mono text-[10px] text-muted-foreground backdrop-blur-sm" style={{ transform: `${f} translateZ(40px)` }}>
            {["py", "sql", "js", "spark", "git", "db"][i]}
          </div>
        ))}
      </div>
    </div>
  );
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
