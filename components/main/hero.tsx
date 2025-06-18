import { HeroContent } from "@/components/sub/hero-content";

export const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full overflow-hidden">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute left-0 w-full h-full object-cover final-blackhole-position"
        style={{ 
          top: "calc(var(--blackhole-final-top) + 10px)",
          zIndex: -2 // Ensure blackhole stays behind stars
        }}
      >
        <source src="/videos/blackhole.webm" type="video/webm" />
      </video>

      <HeroContent />
    </div>
  );
};