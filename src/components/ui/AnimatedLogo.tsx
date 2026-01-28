import { cn } from '@/lib/utils';
import logoZ from '@/assets/logo-z.png';

interface AnimatedLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showName?: boolean;
}

const AnimatedLogo = ({ className, size = 'md', showName = false }: AnimatedLogoProps) => {
  const sizeClasses = {
    sm: 'h-10',
    md: 'h-14',
    lg: 'h-16',
  };

  const containerSizeClasses = {
    sm: 'w-14 h-14',
    md: 'w-18 h-18',
    lg: 'w-20 h-20',
  };

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-2xl',
  };

  return (
    <div className={cn('group flex items-center gap-1.5', className)}>
      {/* Logo Container with Animations */}
      <div className={cn('relative flex items-center justify-center', containerSizeClasses[size])}>
        
        {/* Pulse Radial - Cercles concentriques qui pulsent */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="absolute w-full h-full rounded-full border border-primary/20 animate-logo-pulse-1" />
          <div className="absolute w-[85%] h-[85%] rounded-full border border-primary/15 animate-logo-pulse-2" />
          <div className="absolute w-[70%] h-[70%] rounded-full border border-primary/10 animate-logo-pulse-3" />
        </div>

        {/* Orbite Lumineuse - Anneau rotatif */}
        <div className="absolute inset-0 animate-logo-orbit">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <defs>
              <linearGradient id="orbitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(175, 65%, 50%)" stopOpacity="0" />
                <stop offset="50%" stopColor="hsl(175, 65%, 50%)" stopOpacity="0.8" />
                <stop offset="100%" stopColor="hsl(175, 70%, 60%)" stopOpacity="0" />
              </linearGradient>
            </defs>
            <circle
              cx="50"
              cy="50"
              r="46"
              fill="none"
              stroke="url(#orbitGradient)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeDasharray="70 220"
            />
          </svg>
        </div>

        {/* Glow orb suivant l'orbite */}
        <div className="absolute inset-0 animate-logo-orbit">
          <div 
            className="absolute w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_hsl(175,65%,50%,0.8),0_0_20px_hsl(175,65%,50%,0.4)]"
            style={{ top: '2px', left: '50%', transform: 'translateX(-50%)' }}
          />
        </div>

        {/* Logo Image */}
        <img
          src={logoZ}
          alt="Zyflows Logo"
          className={cn(
            sizeClasses[size],
            'w-auto object-contain transition-all duration-300 relative z-10',
            'group-hover:scale-105 group-hover:drop-shadow-[0_0_15px_hsl(175,65%,50%,0.6)]'
          )}
        />
      </div>

      {showName && (
        <span 
          className={cn(
            textSizeClasses[size],
            'font-bold gradient-text transition-all duration-300 group-hover:drop-shadow-[0_0_10px_hsl(175,65%,50%,0.4)]'
          )}
        >
          Zyflows
        </span>
      )}
    </div>
  );
};

export default AnimatedLogo;
