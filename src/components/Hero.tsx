import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const titleWords = ["Transformo", "ideas", "en"];
  const titleLine2 = ["sistemas", "inteligentes"];

  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background orbs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[120px]" />
      </div>

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3">
            <motion.div
              className="inline-flex items-center gap-2 gradient-bg px-4 py-1.5 rounded-full mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-sm font-medium text-foreground">Automatización & IA</span>
            </motion.div>

            <h1 className="font-heading font-bold text-foreground leading-[1.1] mb-6">
              <span className="block text-5xl md:text-7xl">
                {titleWords.map((word, i) => (
                  <motion.span
                    key={i}
                    className="inline-block mr-3"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + i * 0.05, duration: 0.5 }}
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
              <span className="block text-5xl md:text-7xl mt-1">
                {titleLine2.map((word, i) => (
                  <motion.span
                    key={i}
                    className={`inline-block mr-3 ${word === "inteligentes" ? "gradient-text" : ""}`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 + i * 0.05, duration: 0.5 }}
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
            </h1>

            <motion.p
              className="text-lg md:text-xl max-w-[560px] mb-10"
              style={{ color: "hsl(var(--text-body))" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              Diseño y construyo automatizaciones que trabajan 24/7. Workflows inteligentes,
              landing pages que convierten, y outreach que escala — todo conectado con IA.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <a
                href="#proyectos"
                className="gradient-bg text-foreground font-semibold px-8 py-4 rounded-full hover:glow-gradient transition-shadow duration-300"
              >
                Ver Proyectos ↓
              </a>
              <a
                href="#contacto"
                className="gradient-border rounded-full px-8 py-4 text-foreground font-semibold hover:bg-surface-elevated/50 transition-colors"
              >
                Contactar →
              </a>
            </motion.div>
          </div>

          {/* Right decoration */}
          <motion.div
            className="hidden lg:flex lg:col-span-2 justify-center items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 rounded-2xl bg-card border border-border overflow-hidden p-5 font-mono text-xs">
                <div className="flex gap-1.5 mb-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                </div>
                <pre className="text-muted-foreground leading-relaxed">
{`{
  "workflow": "outreach",
  "trigger": "new_lead",
  "steps": [
    "enrich_data",
    "score_lead",
    "send_whatsapp",
    "schedule_followup"
  ],
  "ai_model": "claude-3",
  "status": "`}<span className="text-green-400">running</span>{`"
}`}
                </pre>
              </div>
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 rounded-xl gradient-bg opacity-20 blur-sm"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-12 h-12 rounded-full bg-accent/20 blur-sm"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span className="text-xs uppercase tracking-widest">scroll</span>
        <ChevronDown size={20} className="animate-bounce-slow" />
      </motion.div>
    </section>
  );
};

export default Hero;
