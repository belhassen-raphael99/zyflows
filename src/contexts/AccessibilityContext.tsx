import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AccessibilitySettings {
  fontSize: number; // 0 = normal, 1 = large, 2 = extra large
  contrast: 'normal' | 'high' | 'inverted';
  reduceAnimations: boolean;
}

interface AccessibilityContextType {
  settings: AccessibilitySettings;
  setFontSize: (size: number) => void;
  setContrast: (mode: 'normal' | 'high' | 'inverted') => void;
  toggleReduceAnimations: () => void;
  resetSettings: () => void;
}

const defaultSettings: AccessibilitySettings = {
  fontSize: 0,
  contrast: 'normal',
  reduceAnimations: false,
};

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
};

interface AccessibilityProviderProps {
  children: ReactNode;
}

export const AccessibilityProvider = ({ children }: AccessibilityProviderProps) => {
  const [settings, setSettings] = useState<AccessibilitySettings>(() => {
    const saved = localStorage.getItem('accessibility-settings');
    return saved ? JSON.parse(saved) : defaultSettings;
  });

  useEffect(() => {
    localStorage.setItem('accessibility-settings', JSON.stringify(settings));
    
    // Apply font size
    const root = document.documentElement;
    const fontSizeMap = ['100%', '120%', '140%'];
    root.style.fontSize = fontSizeMap[settings.fontSize];
    
    // Apply contrast classes
    root.classList.remove('high-contrast', 'inverted-contrast');
    if (settings.contrast === 'high') {
      root.classList.add('high-contrast');
    } else if (settings.contrast === 'inverted') {
      root.classList.add('inverted-contrast');
    }
    
    // Apply reduced motion
    if (settings.reduceAnimations) {
      root.classList.add('reduce-motion');
    } else {
      root.classList.remove('reduce-motion');
    }
  }, [settings]);

  const setFontSize = (size: number) => {
    setSettings(prev => ({ ...prev, fontSize: Math.max(0, Math.min(2, size)) }));
  };

  const setContrast = (mode: 'normal' | 'high' | 'inverted') => {
    setSettings(prev => ({ ...prev, contrast: mode }));
  };

  const toggleReduceAnimations = () => {
    setSettings(prev => ({ ...prev, reduceAnimations: !prev.reduceAnimations }));
  };

  const resetSettings = () => {
    setSettings(defaultSettings);
  };

  return (
    <AccessibilityContext.Provider
      value={{
        settings,
        setFontSize,
        setContrast,
        toggleReduceAnimations,
        resetSettings,
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
};
