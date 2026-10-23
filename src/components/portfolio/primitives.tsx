import { motion, useReducedMotion } from "framer-motion";
import { Box } from "lucide-react";
import { useEffect, useRef, type ReactNode } from "react";

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

export function Section({ id, title, subtitle, dark, children }: { id: string; title: string; subtitle?: string; dark?: boolean; children: ReactNode }) {
  return (
    <section id={id} className={`${dark ? "dark" : ""} relative scroll-mt-16 bg-background text-foreground`}>
      <div className="relative mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[220px_1fr] md:py-24">
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

/**
 * Parallax leve via scroll: desloca o elemento na vertical (máx. `max` px)
 * conforme sua posição na viewport. Desativado em telas ≤768px e com
 * prefers-reduced-motion. Usa rAF + listener passive e translate3d.
 */
export function Parallax({ children, speed = 0.08, max = 40, className }: { children: ReactNode; speed?: number; max?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const mq = window.matchMedia("(min-width: 769px) and (prefers-reduced-motion: no-preference)");
    if (!mq.matches) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const center = r.top + r.height / 2 - window.innerHeight / 2;
      const y = Math.max(-max, Math.min(max, -center * speed));
      el.style.transform = `translate3d(0, ${y.toFixed(1)}px, 0)`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [speed, max]);
  return (
    <div ref={ref} className={className} style={{ willChange: "transform" }}>
      {children}
    </div>
  );
}
