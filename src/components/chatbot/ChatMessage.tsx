import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';

interface ChatMessageProps {
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const ChatMessage = ({ content, sender, timestamp }: ChatMessageProps) => {
  const { language } = useLanguage();
  const isRTL = language === 'he';
  const isUser = sender === 'user';
  
  // En RTL: user à gauche, bot à droite
  // En LTR: user à droite, bot à gauche
  const alignEnd = isRTL ? !isUser : isUser;
  
  return (
    <div
      className={cn(
        "flex w-full mb-3",
        alignEnd ? "justify-end" : "justify-start"
      )}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div
        className={cn(
          "max-w-[80%] px-4 py-2.5 rounded-lg text-sm",
          isUser
            ? "bg-primary text-primary-foreground"
            : "bg-card border border-border text-foreground",
          // Coins arrondis selon direction et position
          alignEnd 
            ? (isRTL ? "rounded-bl-sm" : "rounded-br-sm")
            : (isRTL ? "rounded-br-sm" : "rounded-bl-sm")
        )}
      >
        <p className="whitespace-pre-wrap break-words">{content}</p>
        <span className={cn(
          "text-[10px] mt-1 block",
          isUser ? "text-primary-foreground/70" : "text-muted-foreground"
        )}>
          {timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </span>
      </div>
    </div>
  );
};

export const TypingIndicator = () => {
  const { language } = useLanguage();
  const isRTL = language === 'he';
  
  return (
    <div className={cn("flex mb-3", isRTL ? "justify-end" : "justify-start")}>
      <div className={cn(
        "bg-card border border-border px-4 py-3 rounded-lg",
        isRTL ? "rounded-br-sm" : "rounded-bl-sm"
      )}>
        <div className="flex gap-1">
          <span className="w-2 h-2 bg-primary/60 rounded-full animate-typing-dot" style={{ animationDelay: '0ms' }} />
          <span className="w-2 h-2 bg-primary/60 rounded-full animate-typing-dot" style={{ animationDelay: '150ms' }} />
          <span className="w-2 h-2 bg-primary/60 rounded-full animate-typing-dot" style={{ animationDelay: '300ms' }} />
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
