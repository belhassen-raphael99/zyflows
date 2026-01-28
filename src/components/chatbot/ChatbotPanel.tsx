import { useEffect, useRef, KeyboardEvent } from 'react';
import { X, Send } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import ChatMessage, { TypingIndicator } from './ChatMessage';
import { useLanguage } from '@/contexts/LanguageContext';
import logoZ from '@/assets/logo-z.png';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface ChatbotPanelProps {
  isOpen: boolean;
  onClose: () => void;
  messages: Message[];
  isTyping: boolean;
  inputValue: string;
  onInputChange: (value: string) => void;
  onSendMessage: () => void;
}

const ChatbotPanel = ({
  isOpen,
  onClose,
  messages,
  isTyping,
  inputValue,
  onInputChange,
  onSendMessage,
}: ChatbotPanelProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const { t, language } = useLanguage();
  const isRTL = language === 'he';

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  // Focus input when panel opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  // Handle Escape key
  useEffect(() => {
    const handleEscape = (e: globalThis.KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey && inputValue.trim()) {
      e.preventDefault();
      onSendMessage();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-label={t('chatbot.title')}
      dir={isRTL ? 'rtl' : 'ltr'}
      className={cn(
        "fixed bottom-24 right-6 z-[100]",
        "w-[380px] max-w-[90vw] h-[500px] max-h-[70vh]",
        "bg-popover/95 backdrop-blur-xl",
        "border border-border rounded-lg",
        "shadow-[0_0_40px_hsl(var(--primary)/0.15)]",
        "flex flex-col overflow-hidden",
        "animate-scale-up"
      )}
    >
      {/* Header */}
      <div className={cn(
        "flex items-center justify-between px-4 py-3 border-b border-border bg-card/50",
        isRTL && "flex-row-reverse"
      )}>
        <div className={cn("flex items-center gap-2", isRTL && "flex-row-reverse")}>
          <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
            <img src={logoZ} alt="Zyflows" className="w-6 h-6 object-contain" />
          </div>
          <div className={isRTL ? "text-right" : "text-left"}>
            <h3 className="text-sm font-semibold text-foreground">{t('chatbot.title')}</h3>
            <p className="text-xs text-muted-foreground">{t('chatbot.online')}</p>
          </div>
        </div>
        <button
          onClick={onClose}
          aria-label={t('chatbot.close')}
          className="p-1.5 rounded-md hover:bg-muted transition-colors"
        >
          <X className="w-4 h-4 text-muted-foreground" />
        </button>
      </div>

      {/* Messages Area */}
      <ScrollArea className="flex-1 p-4" ref={scrollRef}>
        <div aria-live="polite">
          {messages.length === 0 && (
            <div className="text-center text-muted-foreground text-sm py-8">
              <img src={logoZ} alt="Zyflows" className="w-10 h-10 mx-auto mb-3 opacity-40" />
              <p>{t('chatbot.welcome')}</p>
            </div>
          )}
          {messages.map((message) => (
            <ChatMessage
              key={message.id}
              content={message.content}
              sender={message.sender}
              timestamp={message.timestamp}
            />
          ))}
          {isTyping && <TypingIndicator />}
        </div>
      </ScrollArea>

      {/* Input Area */}
      <div className="p-3 border-t border-border bg-card/30">
        <div className={cn("flex gap-2", isRTL && "flex-row-reverse")}>
          <Textarea
            ref={inputRef}
            value={inputValue}
            onChange={(e) => onInputChange(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={t('chatbot.placeholder')}
            dir={isRTL ? 'rtl' : 'ltr'}
            rows={1}
            className={cn(
              "flex-1 bg-background/50 border-border/50 focus:border-primary",
              "resize-none min-h-[40px] max-h-[120px] py-2",
              isRTL && "text-right"
            )}
          />
          <button
            onClick={onSendMessage}
            disabled={!inputValue.trim()}
            aria-label={t('chatbot.send')}
            className={cn(
              "p-2.5 rounded-md transition-all duration-200",
              "bg-primary text-primary-foreground",
              "hover:bg-primary/90 hover:shadow-[0_0_15px_hsl(var(--primary)/0.4)]",
              "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none"
            )}
          >
            <Send className={cn("w-4 h-4", isRTL && "rotate-180")} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatbotPanel;
