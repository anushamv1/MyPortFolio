import { useEffect, useRef } from 'react';

interface Skill {
  name: string;
  icon: string;
  color: string;
  size: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  rotation: number;
  rotationSpeed: number;
}

export default function FloatingSkills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<Skill[]>([]);
  const animationRef = useRef<number>();

  const skillsData = [
    { name: 'Java', icon: '☕', color: '#f89820', size: 60 },
    { name: 'Spring Boot', icon: '🍃', color: '#6db33f', size: 55 },
    { name: 'JavaScript', icon: '🟨', color: '#f7df1e', size: 50 },
    { name: 'MySQL', icon: '🐬', color: '#4479a1', size: 50 },
    { name: 'TypeScript', icon: '🔷', color: '#3178c6', size: 45 },
    { name: 'REST APIs', icon: '🔗', color: '#ff9500', size: 48 },
    { name: 'Git', icon: '📚', color: '#f05032', size: 45 },
    { name: 'Docker', icon: '🐳', color: '#2496ed', size: 52 },
    { name: 'Linux', icon: '🐧', color: '#fcc624', size: 48 },
   
  ];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const initializeSkills = () => {
      const containerRect = container.getBoundingClientRect();
      const skills: Skill[] = skillsData.map((skill, index) => ({
        ...skill,
        x: Math.random() * (containerRect.width - skill.size),
        y: Math.random() * (containerRect.height - skill.size),
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 0.5
      }));
      skillsRef.current = skills;
    };

    const animate = () => {
      const container = containerRef.current;
      if (!container) return;

      const containerRect = container.getBoundingClientRect();
      
      skillsRef.current.forEach(skill => {
        // Update position
        skill.x += skill.vx;
        skill.y += skill.vy;
        skill.rotation += skill.rotationSpeed;

        // Bounce off edges
        if (skill.x <= 0 || skill.x >= containerRect.width - skill.size) {
          skill.vx *= -1;
        }
        if (skill.y <= 0 || skill.y >= containerRect.height - skill.size) {
          skill.vy *= -1;
        }

        // Keep within bounds
        skill.x = Math.max(0, Math.min(containerRect.width - skill.size, skill.x));
        skill.y = Math.max(0, Math.min(containerRect.height - skill.size, skill.y));
      });

      // Update DOM elements
      const skillElements = container.querySelectorAll('.floating-skill');
      skillElements.forEach((element, index) => {
        const skill = skillsRef.current[index];
        if (skill && element instanceof HTMLElement) {
          element.style.transform = `translate(${skill.x}px, ${skill.y}px) rotate(${skill.rotation}deg)`;
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      initializeSkills();
    };

    initializeSkills();
    animate();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const handleSkillClick = (skill: Skill) => {
    // Add a burst animation on click
    skill.vx += (Math.random() - 0.5) * 2;
    skill.vy += (Math.random() - 0.5) * 2;
    skill.rotationSpeed += (Math.random() - 0.5) * 2;
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-96 overflow-hidden rounded-lg backdrop-blur-sm border border-slate-600/30"
      style={{
        background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.1) 0%, rgba(30, 41, 59, 0.1) 100%)',
        boxShadow: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.1), 0 8px 32px rgba(0, 0, 0, 0.3)'
      }}
    >
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/3 to-purple-500/3 rounded-lg" />
      
      {skillsData.map((skill, index) => (
        <div
          key={skill.name}
          className="floating-skill absolute cursor-pointer transition-all duration-300 hover:scale-110 will-change-transform"
          style={{
            width: skill.size,
            height: skill.size,
            fontSize: `${skill.size * 0.4}px`,
          }}
          onClick={() => handleSkillClick(skillsRef.current[index])}
          title={skill.name}
        >
          <div 
            className="w-full h-full rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-md"
            style={{
              background: `linear-gradient(135deg, ${skill.color}20, ${skill.color}10)`,
              boxShadow: `
                0 4px 20px ${skill.color}80,
                0 8px 40px ${skill.color}60,
                inset 0 1px 0 rgba(255, 255, 255, 0.3),
                inset 0 -1px 0 rgba(0, 0, 0, 0.2)
              `,
              border: `2px solid ${skill.color}60`
            }}
          >
            <span className="text-white font-bold text-shadow" style={{ fontSize: `${skill.size * 0.5}px` }}>
              {skill.icon}
            </span>
          </div>
          
          {/* Skill name tooltip */}
          <div 
            className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-white text-xs px-3 py-1 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10 backdrop-blur-md"
            style={{
              background: 'rgba(15, 23, 42, 0.8)',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            {skill.name}
          </div>
        </div>
      ))}

      {/* Floating text overlay */}
      <div 
        className="absolute top-4 left-4 text-white/90 text-sm font-medium px-3 py-1 rounded-lg backdrop-blur-md"
        style={{
          background: 'rgba(15, 23, 42, 0.6)',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}
      >
        Interactive Skills • Click to interact
      </div>
    </div>
  );
}