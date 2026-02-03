import { useState, useEffect } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
  glitchIntensity?: number;
}

const GlitchText = ({ text, className = '', glitchIntensity = 0.1 }: GlitchTextProps) => {
  const [displayText, setDisplayText] = useState(text);
  const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?/\\~`0123456789';

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() < glitchIntensity) {
        const glitched = text
          .split('')
          .map((char, i) => {
            if (Math.random() < 0.3) {
              return glitchChars[Math.floor(Math.random() * glitchChars.length)];
            }
            return char;
          })
          .join('');

        setDisplayText(glitched);

        setTimeout(() => setDisplayText(text), 50);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [text, glitchIntensity]);

  return (
    <span
      className={`relative inline-block ${className}`}
      style={{
        textShadow: '2px 0 #ff5c5c, -2px 0 #a70000',
      }}
    >
      <span className="relative z-10">{displayText}</span>

      <span
        className="absolute inset-0 text-accent opacity-70 animate-glitch-1"
        style={{ clipPath: 'inset(20% 0 30% 0)' }}
        aria-hidden="true"
      >
        {displayText}
      </span>
      <span
        className="absolute inset-0 text-accent-2 opacity-70 animate-glitch-2"
        style={{ clipPath: 'inset(60% 0 10% 0)' }}
        aria-hidden="true"
      >
        {displayText}
      </span>
    </span>
  );
};

export default GlitchText;
