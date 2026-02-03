import { useTypingEffect } from '@/hooks/useTypingEffect';

interface TypingTextProps {
  phrases: string[];
  className?: string;
  cursorClassName?: string;
  typingSpeed?: number;
  deleteSpeed?: number;
  pauseDuration?: number;
}

const TypingText = ({
  phrases,
  className = '',
  cursorClassName = 'text-primary animate-blink ml-1',
  typingSpeed = 100,
  deleteSpeed = 50,
  pauseDuration = 2000,
}: TypingTextProps) => {
  const { displayText, longestPhrase } = useTypingEffect({
    phrases,
    typingSpeed,
    deleteSpeed,
    pauseDuration,
  });

  return (
    <span className="relative inline-block">
      <span className={`invisible ${className}`} aria-hidden="true">
        {longestPhrase}
        <span className="invisible">|</span>
      </span>

      <span className={`absolute inset-0 ${className} left-0 top-0`}>
        {displayText}
        <span className={cursorClassName}>|</span>
      </span>
    </span>
  );
};

export default TypingText;
