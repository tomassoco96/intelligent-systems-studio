import { motion, useMotionValue, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const stats = [
  { value: 50, suffix: "+", label: "Workflows Creados" },
  { value: 1000, suffix: "+", label: "Leads Automatizados" },
  { value: 5, suffix: "+", label: "Nichos Digitalizados" },
];

const CountUp = ({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target]);

  return (
    <span className="gradient-text font-heading text-4xl md:text-5xl font-bold">
      {count}{suffix}
    </span>
  );
};

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="sobre-mi" ref={ref} className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          className="grid md:grid-cols-2 gap-16 items-center"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Photo placeholder */}
          <div className="flex justify-center">
            <div className="relative w-72 h-[360px] md:w-80 md:h-[440px] rounded-2xl gradient-border overflow-hidden -rotate-2 hover:rotate-0 transition-transform duration-500 hover:glow-gradient">
              <div className="w-full h-full bg-card flex items-center justify-center">
                <div className="text-center">
                  <span className="font-heading text-6xl font-bold gradient-text">TS</span>
                  <p className="text-muted-foreground text-sm mt-2">Foto de perfil</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-xs uppercase tracking-[0.2em] gradient-text font-semibold">
              SOBRE MÍ
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
              Automatizo lo que otros hacen manual
            </h2>
            <p className="mb-4" style={{ color: "hsl(var(--text-body))" }}>
              Soy Tomás Socolsky, consultor de automatización e inteligencia artificial. Me especializo
              en diseñar sistemas que eliminan trabajo repetitivo y escalan operaciones usando
              herramientas como n8n, Claude AI, y APIs modernas.
            </p>
            <p style={{ color: "hsl(var(--text-body))" }}>
              Trabajo con profesionales y empresas que quieren dejar de perder tiempo en tareas
              manuales. Desde campañas de outreach automatizadas hasta landing pages que se generan
              solas — construyo la infraestructura digital que trabaja mientras dormís.
            </p>

            <div className="grid grid-cols-3 gap-6 mt-10">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="text-center md:text-left"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.15, duration: 0.5 }}
                >
                  <CountUp target={stat.value} suffix={stat.suffix} inView={inView} />
                  <p className="text-xs md:text-sm text-muted-foreground mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
