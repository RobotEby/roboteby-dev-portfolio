import { Navbar } from '@/components/portfolio/Navbar';
import { HeroSection } from '@/components/portfolio/HeroSection';
import { AboutSection } from '@/components/portfolio/AboutSection';
import { ProjectsSection } from '@/components/portfolio/ProjectsSection';
import { ContactSection } from '@/components/portfolio/ContactSection';
import { useSectionAnimations } from '@/hooks/useSectionAnimations';
import Footer from '@/components/layout/Footer';
import AsciiTankAnimation from '@/components/animations/AsciiTankAnimation';

const Index = () => {
  useSectionAnimations();

  return (
    <div className="portfolio">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <section className="py-16">
        <div className="container mx-auto">
          <div className="contact-terminal slide-in-right w-full max-w-2xl md:w-1/2">
            <div className="terminal-header">
              <span className="code-dot red"></span>
              <span className="code-dot yellow"></span>
              <span className="code-dot green"></span>
              <span className="terminal-title">battle.sh</span>
            </div>
            <div className="terminal-content p-4">
              <AsciiTankAnimation />
              <div className="text-center mt-4 pt-4 border-t border-border/30">
                <p className="text-muted italic mb-4">
                  "O conhecimento é poder. Mas compartilhá-lo é o que nos torna mais fortes."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
