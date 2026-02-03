import { useState, useEffect, useCallback, useRef } from 'react';

interface Position {
  x: number;
  y: number;
}

interface UseMousePositionReturn {
  position: Position;
  trail: Position[];
}

const TRAIL_LENGTH = 8;
const THROTTLE_MS = 16;

export function useMousePosition(): UseMousePositionReturn {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [trail, setTrail] = useState<Position[]>([]);
  const lastUpdate = useRef<number>(0);
  const animationFrameId = useRef<number>();

  const updatePosition = useCallback((x: number, y: number) => {
    setPosition({ x, y });
    setTrail((prev) => {
      const newTrail = [{ x, y }, ...prev].slice(0, TRAIL_LENGTH);
      return newTrail;
    });
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastUpdate.current < THROTTLE_MS) return;

      lastUpdate.current = now;

      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }

      animationFrameId.current = requestAnimationFrame(() => {
        updatePosition(e.clientX, e.clientY);
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [updatePosition]);

  return { position, trail };
}
