import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const bootMessages = [
  { delay: 200, text: '[OK] Loading kernel modules...' },
  { delay: 400, text: '[OK] Initializing memory...' },
  { delay: 600, text: '[OK] Starting security protocols...' },
  { delay: 800, text: '[OK] Mounting file systems...' },
  { delay: 1000, text: '[OK] Establishing secure connection...' },
  { delay: 1200, text: '[OK] Loading user interface...' },
  { delay: 1400, text: '[OK] System ready.' },
];

interface BootSplashProps {
  onComplete: () => void;
}

const BootSplash = ({ onComplete }: BootSplashProps) => {
  const [visibleMessages, setVisibleMessages] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);
  const [showCommand, setShowCommand] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  const timers = useRef<number[]>([]);
  const didComplete = useRef(false);

  useEffect(() => {
    bootMessages.forEach((msg, index) => {
      const t = window.setTimeout(() => {
        setVisibleMessages((prev) => [...prev, msg.text]);
        setProgress(((index + 1) / bootMessages.length) * 100);
      }, msg.delay);
      timers.current.push(t);
    });

    timers.current.push(
      window.setTimeout(() => {
        setShowCommand(true);
      }, 1600),
    );

    timers.current.push(
      window.setTimeout(() => {
        setIsExiting(true);
      }, 2400),
    );

    timers.current.push(
      window.setTimeout(() => {
        if (!didComplete.current) {
          didComplete.current = true;
          onComplete();
        }
      }, 2800),
    );

    return () => {
      timers.current.forEach((id) => clearTimeout(id));
      timers.current = [];
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden"
        >
          <div className="boot-scanlines absolute inset-0 pointer-events-none" />

          <div className="w-full max-w-2xl px-6 font-mono text-sm">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-6">
              <h1 className="text-primary text-lg md:text-xl font-bold">ROBOTEBY SYSTEM v0.1.0</h1>
              <div className="h-px bg-gradient-to-r from-primary via-primary/50 to-transparent mt-2" />
            </motion.div>

            <div className="space-y-1 mb-6 min-h-[180px]">
              {visibleMessages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.15 }}
                  className="text-muted-foreground"
                >
                  <span className="text-primary">{message.slice(0, 4)}</span>
                  <span>{message.slice(4)}</span>
                </motion.div>
              ))}
            </div>

            <div className="mb-6">
              <div className="h-4 bg-black border border-primary/30 rounded overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary to-accent"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.2 }}
                />
              </div>
              <div className="text-right text-xs text-muted-foreground mt-1">
                {Math.round(progress)}%
              </div>
            </div>

            {showCommand && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-muted-foreground"
              >
                <span className="text-primary">kali@robotEby:~#</span>{' '}
                <span>./start_session.sh</span>
                <span className="animate-blink ml-1">█</span>
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BootSplash;
