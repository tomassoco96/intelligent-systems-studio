import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Star } from "lucide-react";

const testimonials = [
  {
    text: "Tomás automatizó todo nuestro proceso de captación de pacientes. En un mes ya teníamos el sistema funcionando solo.",
    name: "Dr. Roberto García",
    role: "Odontólogo, Buenos Aires",
  },
  {
    text: "Pasamos de enviar emails uno por uno a tener un sistema que contacta y hace follow-up automáticamente. Increíble.",
    name: "María López",
    role: "Marketing Manager",
  },
  {
    text: "El dashboard que me armó me permite ver todo en tiempo real. Ya no pierdo tiempo cruzando planillas.",
    name: "Estudio Jurídico Martínez & Asoc.",
    role: "",
  },
];

const Testimonials = () => {
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
            Lo que dicen mis <span className="gradient-text">clientes</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="bg-card border border-border rounded-2xl p-8 relative"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <span className="absolute top-4 left-6 text-5xl gradient-text opacity-20 font-heading leading-none">
                "
              </span>
              <p className="text-sm leading-relaxed mt-6 mb-6" style={{ color: "hsl(var(--text-body))" }}>
                {t.text}
              </p>
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={14} className="fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <p className="font-heading font-bold text-sm text-foreground">{t.name}</p>
              {t.role && <p className="text-xs text-muted-foreground">{t.role}</p>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
