import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 group"
    aria-label="Contactar por WhatsApp"
  >
    <span className="absolute inset-0 rounded-full bg-green-500 animate-pulse-ring" />
    <div className="relative w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200">
      <MessageCircle size={26} className="text-foreground" />
    </div>
    <span className="absolute -top-10 right-0 bg-card border border-border text-foreground text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
      ¿Charlamos?
    </span>
  </a>
);

export default WhatsAppButton;
