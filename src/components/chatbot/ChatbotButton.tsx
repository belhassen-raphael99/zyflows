import { MessageCircle, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';

interface ChatbotButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

const ChatbotButton = ({ isOpen, onClick }: ChatbotButtonProps) => {
  const { t } = useLanguage();
  return (
    <button
      onClick={onClick}
      aria-label={isOpen ? t('closeChat') : t('openChat')}
      className={cn(
        "relative w-14 h-14 rounded-lg bg-card border border-primary/30",
        "flex items-center justify-center",
        "transition-all duration-300 hover:scale-105",
        "hover:border-primary/60 hover:shadow-[0_0_25px_hsl(var(--primary)/0.3)]",
        "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
      )}
    >
      {/* Circuit SVG Animation */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 56 56"
        fill="none"
      >
        <rect
          x="2"
          y="2"
          width="52"
          height="52"
          rx="6"
          stroke="hsl(var(--primary))"
          strokeWidth="1.5"
          strokeDasharray="200"
          className="animate-circuit-scan"
          fill="none"
        />
        {/* Circuit nodes */}
        <circle cx="8" cy="8" r="2" fill="hsl(var(--primary))" className="animate-pulse opacity-60" />
        <circle cx="48" cy="8" r="2" fill="hsl(var(--primary))" className="animate-pulse opacity-60" style={{ animationDelay: '0.5s' }} />
        <circle cx="8" cy="48" r="2" fill="hsl(var(--primary))" className="animate-pulse opacity-60" style={{ animationDelay: '1s' }} />
        <circle cx="48" cy="48" r="2" fill="hsl(var(--primary))" className="animate-pulse opacity-60" style={{ animationDelay: '1.5s' }} />
      </svg>

      {/* Icon */}
      <div className={cn(
        "relative z-10 transition-transform duration-300",
        isOpen && "rotate-90"
      )}>
        {isOpen ? (
          <X className="w-6 h-6 text-primary" />
        ) : (
          <MessageCircle className="w-6 h-6 text-primary" />
        )}
      </div>
    </button>
  );
};

export default ChatbotButton;
