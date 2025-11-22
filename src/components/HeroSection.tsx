import { ArrowDown, Download } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";


const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden hero-section"
      aria-label="Hero"
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.28,
          filter: "saturate(0.9) contrast(0.95) blur(0.4px)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/95 to-background z-0" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1
            className="font-extrabold tracking-tight leading-tight text-4xl sm:text-6xl md:text-7xl lg:text-8xl"
            style={{ textShadow: "0 10px 30px rgba(15,23,42,0.06)" }}
          >
            <span className="block">
              <span className="text-foreground/80 mr-3">I'm</span>
              <span
                className="bg-gradient-to-r from-slate-800 via-slate-600 to-indigo-600 bg-clip-text text-transparent font-display"
                style={{ letterSpacing: "-0.02em", fontWeight: 800 }}
              >
                Shamit Dholakiya
              </span>
            </span>
          </h1>

          <p className="mt-4 text-lg sm:text-xl md:text-2xl text-muted-foreground/90 font-medium">
            Full‑stack Developer — AI & scalable web systems
          </p>

          <div className="mx-auto mt-6 w-28 h-1 rounded-full bg-gradient-to-r from-indigo-400 to-slate-500 shadow-sm" />

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => scrollToSection("projects")}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-primary text-primary-foreground hover:scale-[1.02] transition-transform shadow-md"
            >
              <ArrowDown size={16} />
              View Projects
            </button>

          </div>

          <p className="mt-6 text-sm sm:text-base text-muted-foreground/80 max-w-2xl mx-auto">
            Building performant, maintainable web apps and AI-enabled systems with a pragmatic focus on reliability and UX.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;