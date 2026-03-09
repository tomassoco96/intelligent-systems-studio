import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Search, PenTool, Code, TrendingUp } from "lucide-react";

const steps = [
  { icon: Search, title: "Diagnóstico", desc: "Analizo tus procesos actuales e identifico oportunidades de automatización" },
  { icon: PenTool, title: "Diseño", desc: "Diseño la arquitectura técnica y los flujos de trabajo" },
  { icon: Code, title: "Construcción", desc: "Desarrollo e implemento las automatizaciones con testing completo" },
  { icon: TrendingUp, title: "Optimización", desc: "Monitoreo, itero y escalo los sistemas según resultados" },
];

const Process = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={ref} className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
            Cómo <span className="gradient-text">trabajo</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 gradient-bg opacity-20" />

          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              className="text-center group"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.5 }}
            >
              <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-card border border-border group-hover:border-primary/40 transition-all duration-300 mb-5 group-hover:glow-blue">
                <step.icon size={24} className="text-muted-foreground group-hover:text-foreground transition-colors" />
                <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full gradient-bg text-xs font-bold text-foreground flex items-center justify-center">
                  {i + 1}
                </span>
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground max-w-[220px] mx-auto">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
