import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Zap, Globe, Send, BarChart3, Brain, MessageSquare } from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "Automatización con n8n",
    desc: "Diseño workflows que conectan tus herramientas y eliminan tareas repetitivas. Desde CRMs hasta notificaciones — todo automatizado.",
  },
  {
    icon: Globe,
    title: "Landing Pages Inteligentes",
    desc: "Generación automática de landing pages personalizadas para cada lead. 4 variantes de diseño, deploy instantáneo, personalización con IA.",
  },
  {
    icon: Send,
    title: "Outreach Automatizado",
    desc: "Campañas multicanal (WhatsApp + Email) con secuencias inteligentes, follow-ups automáticos y monitoreo anti-ban incluido.",
  },
  {
    icon: BarChart3,
    title: "Dashboards & Analytics",
    desc: "Paneles de control en tiempo real para visualizar métricas, trackear leads y tomar decisiones basadas en datos.",
  },
  {
    icon: Brain,
    title: "Integración de IA",
    desc: "Incorporo Claude, Gemini y otros modelos de IA en tus procesos para clasificación, generación de contenido y toma de decisiones.",
  },
  {
    icon: MessageSquare,
    title: "Consultoría Técnica",
    desc: "Análisis de tus procesos actuales, diseño de arquitectura de automatización, y plan de implementación paso a paso.",
  },
];

const Services = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="servicios" ref={ref} className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
            Lo que <span className="gradient-text">hago</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            Servicios de automatización e inteligencia artificial para escalar tu negocio
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              className="group bg-card border border-border rounded-2xl p-8 hover:border-primary/40 hover:-translate-y-1 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center mb-5">
                <s.icon size={20} className="text-foreground" />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-3">{s.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "hsl(var(--text-body))" }}>
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
