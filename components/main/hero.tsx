import { HeroContent } from "@/components/sub/hero-content";

export const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute left-0 w-full h-full object-cover -z-20"
        style={{ 
          top: "calc(var(--blackhole-final-top) + 10px)" // Move 10-15px lower for navbar alignment
        }}
      >
        <source src="/videos/blackhole.webm" type="video/webm" />
      </video>

      <HeroContent />
    </div>
  );
};