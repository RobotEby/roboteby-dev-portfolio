import { useEffect, useRef } from 'react';

export function useOrbitAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const planets = containerRef.current.querySelectorAll('.random-orbit');

    planets.forEach((planet, index) => {
      const element = planet as HTMLElement;
      const startAngle = Math.random() * 360;
      const radius = 100 + index * 35;
      const duration = 15 + Math.random() * 15;
      const direction = Math.random() > 0.5 ? 'normal' : 'reverse';

      element.style.transform = `rotate(${startAngle}deg) translateX(${radius}px) rotate(-${startAngle}deg)`;

      const animationName = `orbit${index}`;
      const keyframes = `
        @keyframes ${animationName} {
          from {
            transform: rotate(${startAngle}deg) translateX(${radius}px) rotate(-${startAngle}deg);
          }
          to {
            transform: rotate(${startAngle + 360}deg) translateX(${radius}px) rotate(-${startAngle + 360}deg);
          }
        }
      `;

      const styleSheet = document.createElement('style');
      styleSheet.textContent = keyframes;
      document.head.appendChild(styleSheet);

      element.style.animation = `${animationName} ${duration}s linear infinite ${direction}`;

      const handleMouseEnter = () => {
        element.style.animationPlayState = 'paused';
      };

      const handleMouseLeave = () => {
        element.style.animationPlayState = 'running';
      };

      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      };
    });
  }, []);

  return containerRef;
}
