import { Suspense, lazy } from 'react';

const Spline = lazy(() => import('@splinetool/react-spline'));

const SplineGlobe = () => {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
      {/* Glow effect under the globe */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[60%] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, hsl(var(--primary) / 0.3) 0%, hsl(var(--accent) / 0.15) 40%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      
      <Suspense fallback={<SplineLoader />}>
        <Spline
          scene="https://prod.spline.design/b2xxZxdJrRJAQllh/scene.splinecode"
          className="w-full h-full"
        />
      </Suspense>
    </div>
  );
};

const SplineLoader = () => (
  <div className="w-full h-full flex items-center justify-center">
    <div className="relative">
      {/* Animated loading sphere */}
      <div 
        className="w-32 h-32 md:w-48 md:h-48 rounded-full animate-pulse"
        style={{
          background: 'radial-gradient(circle at 30% 30%, hsl(var(--primary) / 0.4), hsl(var(--accent) / 0.2), transparent)',
          boxShadow: '0 0 60px hsl(var(--primary) / 0.3), inset 0 0 40px hsl(var(--primary) / 0.1)',
        }}
      />
      <div className="absolute inset-0 rounded-full animate-spin" style={{ animationDuration: '3s' }}>
        <div 
          className="absolute top-0 left-1/2 w-2 h-2 rounded-full bg-primary"
          style={{ boxShadow: '0 0 10px hsl(var(--primary))' }}
        />
      </div>
      <p className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm text-muted-foreground whitespace-nowrap">
        טוען אנימציה...
      </p>
    </div>
  </div>
);

export default SplineGlobe;
