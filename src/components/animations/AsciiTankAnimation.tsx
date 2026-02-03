import { useState, useEffect } from 'react';

const AsciiTankAnimation = () => {
  const [phase, setPhase] = useState<'enter' | 'aim' | 'fire' | 'projectile' | 'impact'>('enter');
  const [tankPosition, setTankPosition] = useState(-100);
  const [projectilePosition, setProjectilePosition] = useState(0);
  const [showMuzzleFlash, setShowMuzzleFlash] = useState(false);
  const [showImpact, setShowImpact] = useState(false);

  const tankArt = `     ___
   |PzDiv|
   _|___|_▄
  |▀▀▀▀▀▀▀|__
  |  ◉◉◉  |__|▄▄
  |_______|
 ◯  ◯  ◯`;

  const projectile = '━━━━━●';
  const muzzleFlash = '💥';
  const impactEffect = '✸✹✸';

  useEffect(() => {
    const runAnimation = () => {
      setPhase('enter');
      setTankPosition(-100);
      setProjectilePosition(0);
      setShowMuzzleFlash(false);
      setShowImpact(false);

      let pos = -100;
      const enterInterval = setInterval(() => {
        pos += 5;
        setTankPosition(pos);
        if (pos >= 20) {
          clearInterval(enterInterval);
          setPhase('aim');

          setTimeout(() => {
            setPhase('fire');
            setShowMuzzleFlash(true);

            setTimeout(() => {
              setShowMuzzleFlash(false);
              setPhase('projectile');

              let projPos = 0;
              const projectileInterval = setInterval(() => {
                projPos += 10;
                setProjectilePosition(projPos);

                if (projPos >= 100) {
                  clearInterval(projectileInterval);
                  setPhase('impact');
                  setShowImpact(true);

                  setTimeout(() => {
                    setShowImpact(false);
                    setTimeout(runAnimation, 1000);
                  }, 500);
                }
              }, 50);
            }, 200);
          }, 500);
        }
      }, 30);
    };

    runAnimation();

    return () => {};
  }, []);

  return (
    <div className="relative w-full h-40 overflow-hidden font-mono text-xs">
      <pre
        className="absolute text-primary whitespace-pre transition-transform duration-100"
        style={{
          left: `${tankPosition}px`,
          top: '50%',
          transform: 'translateY(-50%)',
          textShadow: '0 0 10px hsl(var(--primary))',
        }}
      >
        {tankArt}
      </pre>

      {showMuzzleFlash && (
        <span
          className="absolute text-2xl animate-pulse"
          style={{
            left: `${tankPosition + 130}px`,
            top: '50%',
            transform: 'translateY(-70%)',
          }}
        >
          {muzzleFlash}
        </span>
      )}

      {phase === 'projectile' && (
        <span
          className="absolute text-accent-2 font-bold"
          style={{
            left: `${tankPosition + 140 + projectilePosition}px`,
            top: '50%',
            transform: 'translateY(-50%)',
            textShadow: '0 0 15px #ff5c5c, 0 0 30px #ff5c5c',
          }}
        >
          {projectile}
        </span>
      )}

      {showImpact && (
        <span
          className="absolute text-3xl animate-ping"
          style={{
            right: '20px',
            top: '50%',
            transform: 'translateY(-50%)',
            color: '#ff5c5c',
          }}
        >
          {impactEffect}
        </span>
      )}

      <div className="absolute bottom-4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </div>
  );
};

export default AsciiTankAnimation;
