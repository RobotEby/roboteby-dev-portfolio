import { Github, Linkedin, Heart, Terminal, Image } from 'lucide-react';
import { FaDiscord } from 'react-icons/fa';

const SectionDivider = ({ label }: { label: string }) => (
  <div className="relative flex items-center justify-center my-4">
    <div className="absolute inset-0 flex items-center">
      <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </div>
    <span className="relative px-4 text-xs font-mono text-muted-foreground bg-black/90">
      // {label} //
    </span>
  </div>
);

interface CommandButtonProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  external?: boolean;
}

const CommandButton = ({ href, icon, label, external = false }: CommandButtonProps) => (
  <a
    href={href}
    target={external ? '_blank' : undefined}
    rel={external ? 'noopener noreferrer' : undefined}
    className="cmd-button inline-flex items-center gap-2 px-4 py-2 text-xs font-mono text-muted-foreground hover:text-foreground transition-all duration-300"
  >
    <span className="text-primary">◈</span>
    {icon}
    <span>[ {label} ]</span>
  </a>
);

const Footer = () => {
  return (
    <footer className="w-full border-t border-primary/20 bg-black/90 backdrop-blur-lg mt-auto">
      <div className="max-w-[1200px] mx-auto px-5 py-6">
        <SectionDivider label="Social" />

        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 my-6">
          <CommandButton
            href="https://github.com/RobotEby"
            icon={<Github className="w-4 h-4" />}
            label="GitHub"
            external
          />
          <CommandButton
            href="https://discordapp.com/users/719950847248957520"
            icon={<FaDiscord className="w-4 h-4" />}
            label="Discord"
            external
          />
          <CommandButton
            href="https://linkedin.com/in/RobotEby"
            icon={<Linkedin className="w-4 h-4" />}
            label="LinkedIn"
            external
          />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6 my-6 text-sm font-mono">
          <span className="text-muted-foreground">
            <span className="text-primary">$</span> ssh howosec:~$ whoami
          </span>
          <span className="hidden md:inline text-primary/30">│</span>
          <span className="inline-flex items-center gap-2 text-muted-foreground">
            &copy; Copyright 2026 Made by howosec
          </span>
        </div>

        <div className="flex items-center justify-center gap-2 py-3 px-4 bg-black/50 rounded border border-primary/10">
          <Terminal className="w-3 h-3 text-primary/50" />
          <span className="text-[10px] md:text-xs font-mono text-muted-foreground/60">
            <span className="text-primary/70">root@hoWo:~#</span>
            <span className="mx-2 hidden sm:inline">Port: 1337</span>
            <span className="mx-2">│</span>
            <span className="status-active">Status: ACTIVE</span>
            <span className="mx-2 hidden sm:inline">│</span>
            <span className="hidden sm:inline">v0.1.0</span>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
