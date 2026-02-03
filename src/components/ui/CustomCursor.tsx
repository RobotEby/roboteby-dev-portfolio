import { useEffect, useState } from 'react';
import { useMousePosition } from '@/hooks/useMousePostion';

const CustomCursor = () => {
  const { position, trail } = useMousePosition();
  const [isVisible, setIsVisible] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => {
      const desktop = window.innerWidth >= 1024;
      setIsDesktop(desktop);

      if (desktop) {
        document.body.classList.add('custom-cursor');
      } else {
        document.body.classList.remove('custom-cursor');
      }
    };

    checkDesktop();
    window.addEventListener('resize', checkDesktop);

    const showCursor = () => setIsVisible(true);
    window.addEventListener('mousemove', showCursor, { once: true });

    return () => {
      window.removeEventListener('resize', checkDesktop);
      document.body.classList.remove('custom-cursor');
    };
  }, []);

  if (!isDesktop || !isVisible) return null;

  return (
    <>
      {trail.map((pos, index) => (
        <div
          key={index}
          className="cursor-trail"
          style={{
            left: pos.x,
            top: pos.y,
            opacity: 1 - (index / trail.length) * 0.8,
            transform: `translate(-50%, -50%) scale(${1 - index * 0.08})`,
          }}
        />
      ))}

      <div
        className="cursor-dot"
        style={{
          left: position.x,
          top: position.y,
        }}
      />
    </>
  );
};

export default CustomCursor;
