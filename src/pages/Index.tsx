import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import CtaSection from "@/components/CtaSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <main className="relative">
      {/* Noise overlay */}
      <div className="noise-overlay" />

      {/* Background orbs */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[600px] h-[600px] rounded-full bg-primary/[0.04] blur-[150px]" />
        <div className="absolute top-[60%] right-[5%] w-[500px] h-[500px] rounded-full bg-accent/[0.04] blur-[150px]" />
      </div>

      <Navbar />
      <Hero />
      <TechMarquee />
      <About />
      <Services />
      <Projects />
      <Process />
      <Testimonials />
      <CtaSection />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
