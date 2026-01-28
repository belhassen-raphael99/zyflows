import { useState, useCallback } from 'react';
import ChatbotButton from './ChatbotButton';
import ChatbotPanel from './ChatbotPanel';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const WEBHOOK_URL = 'https://n8n.srv945050.hstgr.cloud/webhook/zyflows-chatbot';

// Generate a unique session ID
const generateSessionId = () => {
  const stored = sessionStorage.getItem('chatbot-session-id');
  if (stored) return stored;
  const newId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  sessionStorage.setItem('chatbot-session-id', newId);
  return newId;
};

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [sessionId] = useState(generateSessionId);

  const toggleChat = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const sendMessage = useCallback(async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: `user_${Date.now()}`,
      content: inputValue.trim(),
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userMessage.content,
          sessionId,
          timestamp: userMessage.timestamp.toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      
      const botMessage: Message = {
        id: `bot_${Date.now()}`,
        content: data.response || data.message || "Je suis là pour vous aider !",
        sender: 'bot',
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Chatbot error:', error);
      
      const errorMessage: Message = {
        id: `bot_${Date.now()}`,
        content: "Désolé, je rencontre des difficultés techniques. Veuillez réessayer plus tard.",
        sender: 'bot',
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  }, [inputValue, sessionId]);

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <ChatbotPanel
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        messages={messages}
        isTyping={isTyping}
        inputValue={inputValue}
        onInputChange={setInputValue}
        onSendMessage={sendMessage}
      />
      <ChatbotButton isOpen={isOpen} onClick={toggleChat} />
    </div>
  );
};

export default ChatbotWidget;
