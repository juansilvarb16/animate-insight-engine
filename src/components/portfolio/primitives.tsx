import { motion, useReducedMotion } from "framer-motion";
import { Box } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";

export function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Particles({ count = 24 }: { count?: number }) {
  const [dots, setDots] = useState<{ l: number; s: number; d: number; dl: number }[]>([]);
  useEffect(() => {
    setDots(Array.from({ length: count }, () => ({ l: Math.random() * 100, s: 1 + Math.random() * 2, d: 14 + Math.random() * 18, dl: -Math.random() * 30 })));
  }, [count]);
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map((p, i) => (
        <span
          key={i}
          className="particle absolute bottom-0 rounded-full bg-foreground"
          style={{ left: `${p.l}%`, width: p.s, height: p.s, animationDuration: `${p.d}s`, animationDelay: `${p.dl}s` }}
        />
      ))}
    </div>
  );
}

export function Section({ id, title, subtitle, dark, children }: { id: string; title: string; subtitle?: string; dark?: boolean; children: ReactNode }) {
  return (
    <section id={id} className={`${dark ? "dark" : ""} relative scroll-mt-16 bg-background text-foreground`}>
      <Particles count={dark ? 30 : 14} />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-6 py-24 md:grid-cols-[220px_1fr] md:py-32">
        <Reveal>
          <Box className="mb-3 h-5 w-5 text-muted-foreground" strokeWidth={1.5} />
          <h2 className="text-3xl font-semibold tracking-tight">{title}</h2>
          {subtitle && <p className="mt-2 max-w-[200px] text-sm text-muted-foreground">{subtitle}</p>}
        </Reveal>
        <div>{children}</div>
      </div>
    </section>
  );
}
