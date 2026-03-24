import { useState } from 'react';
import { Accessibility } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';
import AccessibilityPanel from './AccessibilityPanel';

const FloatingAccessibilityButton = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsPanelOpen(true)}
        className={cn(
          'fixed bottom-6 left-6 z-[99]',
          'w-14 h-14 rounded-full',
          'bg-primary text-primary-foreground',
          'shadow-lg shadow-primary/25',
          'flex items-center justify-center',
          'transition-all duration-300 ease-out',
          'hover:scale-110 hover:shadow-xl hover:shadow-primary/30',
          'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background',
          'active:scale-95'
        )}
        aria-label={t('openAccessibility')}
        aria-haspopup="dialog"
        aria-expanded={isPanelOpen}
      >
        <Accessibility className="w-6 h-6" />
      </button>

      {/* Panel */}
      <AccessibilityPanel
        isOpen={isPanelOpen}
        onClose={() => setIsPanelOpen(false)}
      />
    </>
  );
};

export default FloatingAccessibilityButton;
