import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  tilt?: boolean;
  glow?: boolean;
  id?: string;
}

const GlassCard = ({ children, className = '', hover = true, tilt = false, glow = false, id }: GlassCardProps) => {
  const hoverClass = hover ? 'transition-all duration-300 hover:-translate-y-1' : '';
  const tiltClass = tilt ? 'hover-tilt' : '';
  const glowClass = glow ? 'border-glow-pulse' : '';
  
  return (
    <div
      id={id}
      className={`glass-card p-6 ${hoverClass} ${tiltClass} ${glowClass} ${className}`}
    >
      {children}
    </div>
  );
};

export default GlassCard;
