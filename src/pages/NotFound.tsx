import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import MatrixRain from '@/components/animations/MatrixRain';
import GlitchText from '@/components/animations/GlitchText';

const NotFound = () => {
  const location = useLocation();
  const [errorMessages, setErrorMessages] = useState<string[]>([]);
  const [showDaemon, setShowDaemon] = useState(false);

  const hackingMessages = [
    '[BREACH DETECTED]',
    'kernel panic - not syncing: VFS: Unable to mount root fs',
    'Unauthorized access attempt logged...',
    'Segmentation fault (core dumped)',
    '>>> Tracing route to /dev/null',
    'ERROR: Memory corruption detected',
    '[!] Stack smashing detected ***',
    '>>> Initiating countermeasures...',
    'Permission denied: root access required',
    'Fatal error: Page not found in memory at 0xDEADBEEF',
  ];

  useEffect(() => {
    console.error('404 Error: User attempted to access non-existent route:', location.pathname);

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < 6) {
        setErrorMessages((prev) => [
          ...prev,
          hackingMessages[Math.floor(Math.random() * hackingMessages.length)],
        ]);
        currentIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => setShowDaemon(true), 500);
      }
    }, 400);

    return () => clearInterval(interval);
  }, [location.pathname]);

  return (
    <div className="min-h-screen relative overflow-hidden bg-background">
      <MatrixRain />

      <div className="fixed inset-0 pointer-events-none z-10 scanlines" />

      <div className="fixed inset-0 pointer-events-none z-10 crt-flicker" />

      <div className="relative z-20 min-h-screen flex flex-col items-center justify-center px-4 p-6">
        <div className="code-block w-full max-w-2xl">
          <div className="code-header">
            <span className="code-dot red"></span>
            <span className="code-dot yellow"></span>
            <span className="code-dot green"></span>
            <span className="ml-auto text-muted text-sm">error.log</span>
          </div>

          <div className="terminal-content p-6 font-mono text-sm">
            <div className="text-center mb-8">
              <GlitchText
                text="404"
                className="text-7xl md:text-8xl font-bold text-primary"
                glitchIntensity={0.15}
              />
            </div>

            <div className="space-y-2 mb-6 min-h-[180px]">
              {errorMessages.map((msg, i) => (
                <p
                  key={i}
                  className="text-accent animate-fade-in"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <span className="text-muted">$</span> {msg}
                </p>
              ))}
              {errorMessages.length < 6 && (
                <p className="text-primary animate-pulse">
                  <span className="text-muted">$</span> _
                </p>
              )}
            </div>

            <div className="border-t border-border/30 pt-4 mt-4">
              <p className="text-muted">
                <span className="text-destructive">&gt;</span> Route not found:
                <span className="text-accent"> {location.pathname}</span>
              </p>
              <p className="text-muted mt-2">
                <span className="text-destructive">&gt;</span> Suggested action:
                <span className="text-primary"> Retun to /home</span>
              </p>
            </div>
          </div>
        </div>

        {showDaemon && (
          <div className="mt-8 animate-fade-in text-center">
            <Link to="/" className="inline-block group">
              <img
                src="/videos/daemon.gif"
                alt="FreeBSD Daemon"
                className="w-32 h-32 md:w-40 md:h-40 mx-auto transition-transform group-hover:scale-110"
              />
              <p className="mt-4 text-muted group-hover:text-primary transition-colors">
                Clique no daemon para explorar à página
              </p>
            </Link>
          </div>
        )}

        <Link to="/" className="mt-8 glow-button animate-fade-in" style={{ animationDelay: '2s' }}>
          ← Voltar para Página Principal
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
