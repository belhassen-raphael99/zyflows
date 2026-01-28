import { ReactNode, Suspense, lazy } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingAccessibilityButton from '@/components/accessibility/FloatingAccessibilityButton';
import ChatbotWidget from '@/components/chatbot/ChatbotWidget';

const SplineGlobe = lazy(() => import('@/components/3d/SplineGlobe'));
interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Aurora Background Effect */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] animate-aurora"
          style={{
            background: `
              radial-gradient(circle at 30% 30%, hsl(217 91% 60% / 0.08) 0%, transparent 50%),
              radial-gradient(circle at 70% 70%, hsl(280 70% 50% / 0.05) 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, hsl(45 90% 60% / 0.04) 0%, transparent 50%)
            `
          }}
        />
      </div>

      {/* Spline Globe Background */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
        <Suspense fallback={null}>
          <SplineGlobe />
        </Suspense>
      </div>
      
      {/* Overlay to ensure content readability */}
      <div className="fixed inset-0 z-0 bg-background/60 pointer-events-none" />
      
      <Navbar />
      <main className="flex-1 pt-20 relative z-10">
        {children}
      </main>
      <Footer />
      <FloatingAccessibilityButton />
      <ChatbotWidget />
    </div>
  );
};

export default Layout;
