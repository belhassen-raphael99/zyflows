import heroVideo from '@/assets/hero-video.mp4';

const HeroVideo = () => {
  return (
    <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
      {/* Glow effect */}
      <div 
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          boxShadow: 'inset 0 0 60px hsl(var(--primary) / 0.3)',
        }}
      />
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        className="w-full h-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
    </div>
  );
};

export default HeroVideo;
