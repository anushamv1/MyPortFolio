import { useEffect, useState, useRef } from 'react';

export default function CursorFollower() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const rafRef = useRef<number>();
  const targetPositionRef = useRef({ x: 0, y: 0 });
  const currentPositionRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    let isMoving = false;

    const updatePosition = (e: MouseEvent) => {
      targetPositionRef.current = { x: e.clientX, y: e.clientY };
      
      if (!isMoving) {
        isMoving = true;
        animatePosition();
      }
    };

    const animatePosition = () => {
      const current = currentPositionRef.current;
      const target = targetPositionRef.current;
      
      // Smooth interpolation with higher performance
      const lerp = 0.15; // Increased for smoother movement
      current.x += (target.x - current.x) * lerp;
      current.y += (target.y - current.y) * lerp;
      
      setMousePosition({ x: current.x, y: current.y });
      
      // Continue animation if still moving
      const distance = Math.abs(target.x - current.x) + Math.abs(target.y - current.y);
      if (distance > 0.5) {
        rafRef.current = requestAnimationFrame(animatePosition);
      } else {
        isMoving = false;
        setMousePosition(target);
        currentPositionRef.current = target;
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.closest('button, a, [role="button"], .clickable, input, textarea, select, [data-interactive]');
      setIsHovering(!!isInteractive);
    };

    document.addEventListener('mousemove', updatePosition, { passive: true });
    document.addEventListener('mouseover', handleMouseOver, { passive: true });

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseover', handleMouseOver);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Main cursor follower */}
      <div
        className="fixed pointer-events-none z-50 mix-blend-difference will-change-transform"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: `scale(${isHovering ? 1.5 : 1}) translate3d(0,0,0)`,
          transition: 'transform 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        }}
      >
        <div className="w-6 h-6 bg-white rounded-full opacity-90" />
      </div>

      {/* Trailing cursor with glow */}
      <div
        className="fixed pointer-events-none z-40 will-change-transform"
        style={{
          left: mousePosition.x - 20,
          top: mousePosition.y - 20,
          transform: `scale(${isHovering ? 2 : 1.2}) translate3d(0,0,0)`,
          transition: 'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        }}
      >
        <div className="w-10 h-10 bg-gradient-to-r from-blue-500/40 to-purple-500/40 rounded-full blur-sm" />
      </div>

      {/* 3D rotating element */}
      <div
        className="fixed pointer-events-none z-30 will-change-transform"
        style={{
          left: mousePosition.x - 30,
          top: mousePosition.y - 30,
          transform: `rotate(${mousePosition.x * 0.05}deg) scale(${isHovering ? 1.8 : 1}) translate3d(0,0,0)`,
          transition: 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        }}
      >
        <div className="w-15 h-15 border border-cyan-400/30 rounded-full animate-spin-slow" 
             style={{ animation: 'spin 8s linear infinite' }} />
      </div>

      {/* Outer glow ring */}
      <div
        className="fixed pointer-events-none z-20 will-change-transform"
        style={{
          left: mousePosition.x - 40,
          top: mousePosition.y - 40,
          transform: `scale(${isHovering ? 2.5 : 1.5}) translate3d(0,0,0)`,
          transition: 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        }}
      >
        <div className="w-20 h-20 bg-gradient-to-r from-pink-500/15 to-yellow-500/15 rounded-full blur-lg" 
             style={{ animation: 'pulse 3s ease-in-out infinite' }} />
      </div>
    </>
  );
}