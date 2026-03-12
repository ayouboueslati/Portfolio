import React, { useEffect, useState } from 'react';
import {
  SiReact, SiNextdotjs, SiVuedotjs, SiAngular,
  SiTypescript, SiJavascript, SiPython, SiCplusplus,
  SiKotlin, SiSwift, SiDocker, SiKubernetes,
  SiFirebase, SiPostgresql, SiMongodb, SiGit,
  SiLinux, SiAmazon, SiNodedotjs, SiTailwindcss,
  SiDart, SiFlutter, SiNestjs, SiGraphql,
  SiHtml5, SiCss3
} from 'react-icons/si';

const ICONS = [
  SiReact, SiNextdotjs, SiVuedotjs, SiAngular,
  SiTypescript, SiJavascript, SiPython, SiCplusplus,
  SiKotlin, SiSwift, SiDocker, SiKubernetes,
  SiFirebase, SiPostgresql, SiMongodb, SiGit,
  SiLinux, SiAmazon, SiNodedotjs, SiTailwindcss,
  SiDart, SiFlutter, SiNestjs, SiGraphql,
  SiHtml5, SiCss3
];

interface FloatingIconProps {
  Icon: React.ElementType;
  delay: number;
  duration: number;
  startX: number;
  startY: number;
  scale: number;
}

const FloatingIcon: React.FC<FloatingIconProps> = ({ Icon, delay, duration, startX, startY, scale }) => {
  return (
    <div
      className="floating-tech-icon"
      style={{
        left: `${startX}%`,
        top: `${startY}%`,
        animationDuration: `${duration}s`,
        animationDelay: `-${delay}s`,
        transform: `scale(${scale})`,
      }}
      aria-hidden="true"
    >
      <Icon />
    </div>
  );
};

export default function FloatingTechBackground() {
  const [icons, setIcons] = useState<FloatingIconProps[]>([]);

  useEffect(() => {
    // Generate static random values once on mount to avoid hydration mismatch
    // and layout thrashing
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Increase number of icons for much better density
    const isMobile = window.innerWidth < 768;
    const count = isMobile ? 30 : 60;
    
    // Create a larger pool by repeating the icons array
    const iconPool = [];
    while (iconPool.length < count) {
      iconPool.push(...ICONS);
    }
    
    const selected = iconPool.slice(0, count).sort(() => 0.5 - Math.random());

    const generatedIcons = selected.map((Icon) => {
      return {
        Icon,
        delay: Math.random() * 20, 
        duration: prefersReducedMotion ? 0 : 40 + Math.random() * 60, // Even slower for better atmosphere
        startX: Math.random() * 110 - 5, // -5% to 105% to hit the very edges
        startY: Math.random() * 110 - 5,
        scale: 0.4 + Math.random() * 1.2,
      };
    });

    setIcons(generatedIcons);
  }, []);

  if (icons.length === 0) return null;

  return (
    <div className="floating-tech-background" aria-hidden="true">
      <div className="floating-tech-overlay"></div>
      {icons.map((props, i) => (
        <FloatingIcon key={i} {...props} />
      ))}
    </div>
  );
}
