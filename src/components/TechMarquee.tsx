import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const row1 = ["n8n", "React", "TypeScript", "Node.js", "Tailwind CSS", "Vercel"];
const row2 = ["Claude AI", "Gemini", "Google Cloud", "GitHub", "WhatsApp API", "PostgreSQL"];

const MarqueeRow = ({ items, reverse = false }: { items: string[]; reverse?: boolean }) => {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden py-2">
      <div className={`flex gap-4 ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`} style={{ width: "max-content" }}>
        {doubled.map((item, i) => (
          <div
            key={`${item}-${i}`}
            className="flex-shrink-0 px-5 py-2.5 rounded-full border border-border bg-card text-sm text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all duration-200 cursor-default"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

const TechMarquee = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={ref} className="py-20 overflow-hidden">
      <motion.p
        className="text-center text-sm uppercase tracking-widest text-muted-foreground mb-8"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
      >
        Stack Tecnológico
      </motion.p>
      <MarqueeRow items={row1} />
      <MarqueeRow items={row2} reverse />
    </section>
  );
};

export default TechMarquee;
