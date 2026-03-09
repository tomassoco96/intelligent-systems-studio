import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, MessageCircle, Github, Linkedin, MapPin, Check, Copy } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "", presupuesto: "" });
  const [submitted, setSubmitted] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("tomasoco96@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contacto" ref={ref} className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">Hablemos</h2>
            <p className="mb-8" style={{ color: "hsl(var(--text-body))" }}>
              ¿Tenés un proceso que querés automatizar? ¿Necesitás un sistema que trabaje por vos?
              Escribime y lo resolvemos.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-muted-foreground" />
                <span className="text-sm text-foreground">tomasoco96@gmail.com</span>
                <button onClick={copyEmail} className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Copiar email">
                  {copied ? <Check size={14} /> : <Copy size={14} />}
                </button>
              </div>
              <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-foreground hover:text-primary transition-colors">
                <MessageCircle size={18} className="text-muted-foreground" />
                WhatsApp
              </a>
              <a href="https://github.com/tomassoco96" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-foreground hover:text-primary transition-colors">
                <Github size={18} className="text-muted-foreground" />
                tomassoco96
              </a>
              <a href="#" className="flex items-center gap-3 text-sm text-foreground hover:text-primary transition-colors">
                <Linkedin size={18} className="text-muted-foreground" />
                LinkedIn
              </a>
              <div className="flex items-center gap-3 text-sm text-muted-foreground mt-4">
                <MapPin size={18} />
                Buenos Aires, Argentina 🇦🇷
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <motion.div
                  className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center mb-4"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Check size={28} className="text-foreground" />
                </motion.div>
                <p className="font-heading text-xl font-bold text-foreground">¡Mensaje enviado!</p>
                <p className="text-muted-foreground text-sm mt-2">Te respondo en menos de 24hs</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="text-sm text-muted-foreground mb-1.5 block">Nombre</label>
                  <input
                    required
                    value={form.nombre}
                    onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                    className="w-full bg-card border border-border rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-1.5 block">Email</label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-card border border-border rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-1.5 block">Mensaje</label>
                  <textarea
                    required
                    rows={4}
                    value={form.mensaje}
                    onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                    className="w-full bg-card border border-border rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none"
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-1.5 block">Presupuesto estimado</label>
                  <select
                    value={form.presupuesto}
                    onChange={(e) => setForm({ ...form, presupuesto: e.target.value })}
                    className="w-full bg-card border border-border rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary/50 transition-colors"
                  >
                    <option value="">Seleccionar</option>
                    <option value="<500">&lt; $500</option>
                    <option value="500-2000">$500 - $2000</option>
                    <option value="2000-5000">$2000 - $5000</option>
                    <option value="5000+">$5000+</option>
                    <option value="unsure">No estoy seguro</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full gradient-bg text-foreground font-semibold py-3.5 rounded-xl hover:glow-gradient transition-shadow duration-300"
                >
                  Enviar Mensaje →
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
