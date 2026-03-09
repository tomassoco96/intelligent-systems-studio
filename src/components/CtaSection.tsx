import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MessageCircle } from "lucide-react";

const CtaSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent" />
      </div>
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
            ¿Listo para automatizar tu negocio?
          </h2>
          <p className="text-muted-foreground mb-10 text-lg">
            Contame tu idea y te muestro cómo podemos automatizarla
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#contacto"
              className="gradient-bg text-foreground font-semibold px-10 py-4 rounded-full hover:glow-gradient transition-shadow duration-300 text-lg"
            >
              Agendar Reunión
            </a>
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-border text-foreground font-semibold px-8 py-4 rounded-full hover:bg-card transition-colors"
            >
              <MessageCircle size={20} className="text-green-400" />
              Enviar WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
