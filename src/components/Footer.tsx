const Footer = () => (
  <footer className="border-t border-border py-12">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
        <div>
          <span className="font-heading text-2xl font-bold gradient-text">TS</span>
          <p className="text-sm text-muted-foreground mt-2">Automatización & IA</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground mb-3">Navegación</p>
          <div className="space-y-2">
            {["Inicio", "Sobre Mí", "Servicios", "Proyectos"].map((l) => (
              <a key={l} href={`#${l.toLowerCase().replace(/ /g, "-")}`} className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                {l}
              </a>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground mb-3">Conectar</p>
          <div className="space-y-2">
            {[
              { label: "Contacto", href: "#contacto" },
              { label: "GitHub", href: "https://github.com/tomassoco96" },
              { label: "LinkedIn", href: "#" },
              { label: "WhatsApp", href: "https://wa.me/" },
            ].map((l) => (
              <a key={l.label} href={l.href} className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground mb-3">Newsletter</p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="tu@email.com"
              className="flex-1 bg-card border border-border rounded-lg px-3 py-2 text-xs text-foreground focus:outline-none focus:border-primary/50 min-w-0"
            />
            <button className="gradient-bg text-foreground text-xs px-3 py-2 rounded-lg font-medium shrink-0">
              →
            </button>
          </div>
        </div>
      </div>
      <div className="h-px gradient-bg opacity-20 mb-6" />
      <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
        <p>© 2026 Tomás Socolsky. Hecho con React + ☕</p>
        <p>Buenos Aires, Argentina</p>
      </div>
    </div>
  </footer>
);

export default Footer;
