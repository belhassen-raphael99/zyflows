import { useAccessibility } from '@/contexts/AccessibilityContext';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { X, RotateCcw, Type, Palette, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AccessibilityPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const AccessibilityPanel = ({ isOpen, onClose }: AccessibilityPanelProps) => {
  const { settings, setFontSize, setContrast, toggleReduceAnimations, resetSettings } = useAccessibility();

  const fontSizeLabels = ['רגיל', 'גדול', 'גדול מאוד'];
  const contrastOptions: { value: 'normal' | 'high' | 'inverted'; label: string }[] = [
    { value: 'normal', label: 'רגיל' },
    { value: 'high', label: 'ניגודיות גבוהה' },
    { value: 'inverted', label: 'צבעים הפוכים' },
  ];

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          'fixed inset-0 bg-background/80 backdrop-blur-sm z-[100] transition-opacity duration-300',
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        className={cn(
          'fixed left-0 top-0 h-full w-80 max-w-[90vw] bg-card border-l border-border z-[101] shadow-2xl transition-transform duration-300 ease-out',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
        role="dialog"
        aria-modal="true"
        aria-labelledby="accessibility-panel-title"
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border">
            <h2 id="accessibility-panel-title" className="text-lg font-semibold">
              הגדרות נגישות
            </h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              aria-label="סגור תפריט נגישות"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-4 space-y-6">
            {/* Font Size */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm font-medium">
                <Type className="w-4 h-4 text-primary" />
                <span>גודל גופן</span>
              </div>
              <div className="space-y-2">
                <Slider
                  value={[settings.fontSize]}
                  onValueChange={(value) => setFontSize(value[0])}
                  max={2}
                  min={0}
                  step={1}
                  className="w-full"
                  aria-label="גודל גופן"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  {fontSizeLabels.map((label, index) => (
                    <span
                      key={label}
                      className={cn(
                        'transition-colors',
                        settings.fontSize === index && 'text-primary font-medium'
                      )}
                    >
                      {label}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Contrast */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm font-medium">
                <Palette className="w-4 h-4 text-primary" />
                <span>ניגודיות צבעים</span>
              </div>
              <div className="grid grid-cols-1 gap-2">
                {contrastOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setContrast(option.value)}
                    className={cn(
                      'p-3 rounded-lg border text-sm text-right transition-all duration-200',
                      settings.contrast === option.value
                        ? 'border-primary bg-primary/10 text-primary'
                        : 'border-border hover:border-primary/50 hover:bg-primary/5'
                    )}
                    aria-pressed={settings.contrast === option.value}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Reduce Animations */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm font-medium">
                <Zap className="w-4 h-4 text-primary" />
                <span>אנימציות</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg border border-border">
                <span className="text-sm">הפחתת אנימציות</span>
                <Switch
                  checked={settings.reduceAnimations}
                  onCheckedChange={toggleReduceAnimations}
                  aria-label="הפחתת אנימציות"
                />
              </div>
              <p className="text-xs text-muted-foreground">
                הפעלת אפשרות זו תפחית את האנימציות באתר לשיפור הנגישות
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-border">
            <Button
              variant="outline"
              onClick={resetSettings}
              className="w-full gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              איפוס להגדרות ברירת מחדל
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccessibilityPanel;
