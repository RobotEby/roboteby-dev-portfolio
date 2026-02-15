import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const navLinks = [
  { href: '/', label: '/home', isPage: true },
  { href: '#about', label: '/about-me', isPage: false },
  { href: '#projects', label: '/projects', isPage: false },
  { href: '#contact', label: '/contact', isPage: false },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const [activeLink, setActiveLink] = useState('/');

  useEffect(() => {
    const chars = '%#$@^*&!?';
    const intervalTime = 3000;
    const glitchEffect = () => {
      const el = document.querySelector('.glitch-text');
      if (!el) return;
      const originalText = 'guest@robotEby';
      let iterations = 0;
      const interval = setInterval(() => {
        el.textContent = originalText
          .split('')
          .map((letter, index) => {
            if (index < iterations) return originalText[index];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('');
        iterations += 1 / 3;
        if (iterations >= originalText.length) clearInterval(interval);
      }, 30);
    };
    const mainTimer = setInterval(glitchEffect, intervalTime);
    return () => clearInterval(mainTimer);
  }, []);

  useEffect(() => {
    if (location.pathname === '/') {
      setActiveLink(location.hash || '/');
    } else {
      setActiveLink(location.pathname);
    }
  }, [location]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, link: (typeof navLinks)[0]) => {
    setMenuOpen(false);

    setActiveLink(link.href);

    if (link.isPage) {
      if (link.href === '/' && location.pathname === '/') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        window.history.pushState(null, '', '/');
      }
      return;
    }

    e.preventDefault();

    const executeScroll = () => {
      const targetId = link.href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
        window.history.pushState(null, '', link.href);
      }
    };

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(executeScroll, 100);
    } else {
      executeScroll();
    }
  };

  return (
    <header className="nav-header w-full  fixed top-0 z-50 bg-background/80 backdrop-blur-md border-b border-primary/10">
      <div className="max-w-[1200px] w-full mx-auto px-5 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold text-foreground"
          onClick={(e) => handleNavClick(e, navLinks[0])}
        >
          robot<span className="text-primary">Eby</span>
        </Link>

        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={(e) => handleNavClick(e, link)}
              className={`menu-link text-sm transition-colors hover:text-primary ${
                activeLink === link.href ? 'active text-primary font-bold' : 'text-muted-foreground'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <span className="glitch-text text-sm font-mono">kali@robotEby:~$</span>
        </div>

        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-foreground p-2">
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {menuOpen && (
        <nav className="md:hidden fixed top-[70px] left-0 w-full h-screen bg-black/95 backdrop-blur-lg border-b border-primary/10 p-5 flex flex-col gap-6 items-left pt-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={(e) => handleNavClick(e, link)}
              className={`menu-link text-xl ${
                activeLink === link.href ? 'active text-primary' : 'text-muted-foreground'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 border-t border-primary/20 w-full text-left">
            <span className="glitch-text text-sm font-mono">kali@robotEby:~$</span>
          </div>
        </nav>
      )}
    </header>
  );
}
