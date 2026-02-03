import { Github, Linkedin } from 'lucide-react';
import { useOrbitAnimation } from '@/hooks/useOrbitAnimation';
import TypingText from '../ui/TypingText';

const orbitIcons = [
  {
    name: 'docker',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
  },
  {
    name: 'linux',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
  },
  {
    name: 'python',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  },
  {
    name: 'git',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  },
  {
    name: 'react',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  {
    name: 'nodejs',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  },
  {
    name: 'bash',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg',
  },
];

const phrases = [' Full Stack', 'entusiasta em websec', 'Malware Dev', 'Analysis'];

export function HeroSection() {
  const orbitRef = useOrbitAnimation();

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <p className=" font-bold mb-6 leading-tight">
              <span className="colored-arrow">&gt;</span> whoami:
              <span className="text-primary animate-blink"> howosec</span>
            </p>

            <h1 className="hero-title flex items-center gap-2">
              <TypingText phrases={phrases} typingSpeed={100} deleteSpeed={50} />
            </h1>

            <p className="hero-quote">
              Η προσβολή που γίνεται σε έναν άνδρα πρέπει να είναι τέτοια ώστε να μην υπάρχει φόβος
              εκδίκησης. Οι προσβολές πρέπει να γίνονται όλες μαζί, ώστε να προσβάλλουν λιγότερο,
              ενώ τα οφέλη πρέπει να δίνονται σταδιακά για να εκτιμηθούν καλύτερα.
            </p>

            <div className="hero-social hidden md:flex gap-4">
              <a
                href="https://github.com/RobotEby"
                className="social-link"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/RobotEby"
                className="social-link"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="avatar-container" ref={orbitRef}>
              <div className="sun-core">
                <div className="avatar-placeholder">
                  <img src="/images/profile.png" alt="freebsd-daemon" />
                </div>
              </div>

              {orbitIcons.map((icon) => (
                <button
                  key={icon.name}
                  className={`orbit-icon ${icon.name} random-orbit`}
                  type="button"
                >
                  <img src={icon.src} alt={`${icon.name} Icon`} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
