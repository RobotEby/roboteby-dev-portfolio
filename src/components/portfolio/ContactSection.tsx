import { Mail, MapPin, Github, Linkedin } from 'lucide-react';
import { FaDiscord } from 'react-icons/fa';

export function ContactSection() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">&gt; cat contact.txt</h2>
        <div className="contact-content">
          <div className="contact-info slide-in-left">
            <p className="contact-intro">
              Curte security research, CTFs ou projetos malucos? Bora trocar uma ideia — me chama aí
              nos canais abaixo.
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <Mail size={20} />
                <span>kerlon.amaral1@gmail.com</span>
              </div>
              <div className="contact-item">
                <MapPin size={20} />
                <span>Minas Gerais, Brasil</span>
              </div>
            </div>
            <div className="social-links hidden md:flex justify-start">
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
              <a
                href="discordapp.com/users/719950847248957520"
                className="social-link"
                aria-label="Github"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaDiscord size={24} />
              </a>
            </div>
          </div>
          <div className="contact-terminal slide-in-right">
            <div className="terminal-header">
              <span className="code-dot red"></span>
              <span className="code-dot yellow"></span>
              <span className="code-dot green"></span>
              <span className="terminal-title">terminal</span>
            </div>
            <div className="terminal-content">
              <p>
                <span className="prompt">$</span> echo "Let's connect"
              </p>
              <p className="output">Let's connect</p>
              <p>
                <span className="prompt">$</span> cat social_links.txt
              </p>
              <p className="output">github.com/RobotEby</p>
              <p className="output">https://www.linkedin.com/in/RobotEby/</p>
              <p>
                <span className="prompt">$</span> <span className="text- cursor-blink"></span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
