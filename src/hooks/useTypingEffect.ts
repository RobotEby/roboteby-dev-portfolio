import { useState, useEffect, useMemo } from 'react';

interface UseTypingEffectOptions {
  phrases: string[];
  typingSpeed?: number;
  deleteSpeed?: number;
  pauseDuration?: number;
}

interface UseTypingEffectReturn {
  displayText: string;
  isTyping: boolean;
  currentPhrase: string;
  longestPhrase: string;
}

export function useTypingEffect({
  phrases = [],
  typingSpeed = 100,
  deleteSpeed = 50,
  pauseDuration = 2000,
}: UseTypingEffectOptions): UseTypingEffectReturn {
  const [displayText, setDisplayText] = useState('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const longestPhrase = useMemo(() => {
    if (!phrases || phrases.length === 0) return '';
    return phrases.reduce(
      (longest, current) => (current.length > longest.length ? current : longest),
      '',
    );
  }, [phrases]);

  useEffect(() => {
    if (!phrases || phrases.length === 0 || isPaused) return;

    const currentPhrase = phrases[currentPhraseIndex];

    if (!currentPhrase) return;

    const timeout = setTimeout(
      () => {
        if (isDeleting) {
          setDisplayText(currentPhrase.substring(0, currentCharIndex - 1));
          setCurrentCharIndex((prev) => prev - 1);

          if (currentCharIndex <= 1) {
            setIsDeleting(false);
            setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
          }
        } else {
          setDisplayText(currentPhrase.substring(0, currentCharIndex + 1));
          setCurrentCharIndex((prev) => prev + 1);

          if (currentCharIndex === currentPhrase.length) {
            setIsPaused(true);
            setTimeout(() => {
              setIsPaused(false);
              setIsDeleting(true);
            }, pauseDuration);
          }
        }
      },
      isDeleting ? deleteSpeed : typingSpeed,
    );

    return () => clearTimeout(timeout);
  }, [
    currentCharIndex,
    isDeleting,
    currentPhraseIndex,
    isPaused,
    phrases,
    typingSpeed,
    deleteSpeed,
    pauseDuration,
  ]);

  return {
    displayText,
    isTyping: !isDeleting && !isPaused,
    currentPhrase: phrases[currentPhraseIndex] || '',
    longestPhrase,
  };
}
