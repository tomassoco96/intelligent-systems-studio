import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const projects = [
  {
    title: "Sistema de Landing Pages para Odontólogos",
    tags: ["n8n", "Vercel", "GitHub API", "Gemini AI", "Google Sheets"],
    desc: "Sistema completo que genera landing pages personalizadas para consultorios dentales. 4 variantes de diseño premium, personalización automática con IA, y deploy directo a Vercel. Procesé +500 leads con generación en menos de 3 segundos por landing.",
    metrics: ["4 Variantes", "< 3s Generación", "500+ Landings"],
    visual: (
      <div className="grid grid-cols-2 gap-2 p-4">
        <div className="h-20 rounded-lg bg-blue-900/50 border border-blue-800/30" />
        <div className="h-20 rounded-lg bg-emerald-900/50 border border-emerald-800/30" />
        <div className="h-20 rounded-lg bg-pink-900/50 border border-pink-800/30" />
        <div className="h-20 rounded-lg bg-amber-900/50 border border-amber-800/30" />
      </div>
    ),
  },
  {
    title: "TomerClicks — Gestión de Contenido y Publicidad",
    tags: ["n8n", "Google Calendar", "Anthropic", "Google Sheets", "Dashboard"],
    desc: "Plataforma integral para gestionar contenido y campañas publicitarias. Incluye copywriter IA, programador automático, reportes de métricas en tiempo real y un dashboard protegido con autenticación.",
    metrics: ["5 Workflows", "Reportes Diarios", "IA Integrada"],
    visual: (
      <div className="p-4 space-y-2">
        <div className="h-4 w-3/4 rounded bg-primary/20" />
        <div className="h-16 rounded bg-card border border-border" />
        <div className="flex gap-2">
          <div className="h-8 flex-1 rounded bg-accent/20" />
          <div className="h-8 flex-1 rounded bg-primary/20" />
        </div>
      </div>
    ),
  },
  {
    title: "Outreach Multi-Nicho Automatizado",
    tags: ["WhatsApp API", "Evolution API", "Gmail", "Anti-Ban"],
    desc: "Sistema de outreach multicanal parametrizado que funciona para cualquier nicho. Secuencia inteligente de WhatsApp + Email con follow-ups automáticos, validación de números, y monitor anti-ban en tiempo real.",
    metrics: ["3 Canales", "Auto Follow-up", "Monitor 24/7"],
    visual: (
      <div className="p-4 flex items-center gap-2 text-xs text-muted-foreground">
        <div className="px-3 py-1.5 rounded bg-card border border-border">Lead</div>
        <span>→</span>
        <div className="px-3 py-1.5 rounded bg-green-900/30 border border-green-800/30">WA</div>
        <span>→</span>
        <div className="px-3 py-1.5 rounded bg-card border border-border">Follow-up</div>
        <span>→</span>
        <div className="px-3 py-1.5 rounded bg-blue-900/30 border border-blue-800/30">Email</div>
      </div>
    ),
  },
  {
    title: "CRM de Leads Centralizado",
    tags: ["React", "TypeScript", "Tailwind", "n8n Webhooks"],
    desc: "Dashboard CRM multi-proyecto para gestionar leads de distintos verticales. Visualización de funnel, triggers de automatización, y gestión de campañas — todo conectado a n8n como backend.",
    metrics: ["Multi-Proyecto", "Real-Time", "Self-Hosted"],
    visual: (
      <div className="p-4 space-y-2">
        <div className="flex gap-2">
          {[40, 60, 80, 30].map((w, i) => (
            <div key={i} className="h-12 rounded bg-primary/10 border border-border" style={{ width: `${w}%` }} />
          ))}
        </div>
        <div className="h-3 w-full rounded-full bg-card overflow-hidden">
          <div className="h-full w-2/3 gradient-bg rounded-full" />
        </div>
      </div>
    ),
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });
  const reversed = index % 2 !== 0;

  return (
    <motion.div
      ref={ref}
      className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      <div className={`flex flex-col ${reversed ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
        <div className="flex-1 p-8 md:p-10">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span key={tag} className="text-xs px-3 py-1 rounded-full gradient-border text-muted-foreground">
                {tag}
              </span>
            ))}
          </div>
          <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-4">
            {project.title}
          </h3>
          <p className="text-sm leading-relaxed mb-6" style={{ color: "hsl(var(--text-body))" }}>
            {project.desc}
          </p>
          <div className="flex flex-wrap gap-6 mb-6">
            {project.metrics.map((m) => (
              <span key={m} className="text-sm font-semibold text-foreground">
                {m}
              </span>
            ))}
          </div>
          <a href="#contacto" className="text-sm gradient-text font-medium hover:underline">
            Ver caso de estudio →
          </a>
        </div>
        <div className="lg:w-[45%] bg-surface-elevated flex items-center justify-center min-h-[200px] group-hover:scale-[1.01] transition-transform duration-300">
          {project.visual}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="proyectos" ref={ref} className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
            Proyectos <span className="gradient-text">destacados</span>
          </h2>
          <p className="text-muted-foreground mt-4">Sistemas reales corriendo en producción</p>
        </motion.div>

        <div className="space-y-8">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
