"use client";

import { Points, PointMaterial } from "@react-three/drei";
import { Canvas, type PointsProps, useFrame } from "@react-three/fiber";
import * as random from "maath/random";
import { useState, useRef, Suspense, useEffect } from "react";
import type { Points as PointsType } from "three";

export const StarBackground = (props: PointsProps) => {
  const ref = useRef<PointsType | null>(null);
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000 * 3), { radius: 1.2 })
  );

  useEffect(() => {
    // Fade in stars after entry loader finishes (3s + 0.8s buffer)
    const timer = setTimeout(() => {
      if (ref.current) {
        ref.current.material.opacity = 1;
      }
    }, 3800);

    return () => clearTimeout(timer);
  }, []);

  useFrame((_state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        stride={3}
        positions={new Float32Array(sphere)}
        frustumCulled
        {...props}
      >
        <PointMaterial
          transparent
          color="#fff"
          size={0.003}
          sizeAttenuation
          depthWrite={false}
          opacity={0}
        />
      </Points>
    </group>
  );
};

export const StarsCanvas = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // Start fade-in after entry loader finishes (3s + 0.8s buffer)
    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 3800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      className={`w-full h-auto fixed inset-0 z-[-1] transition-opacity duration-1000 ${
        fadeIn ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <StarBackground />
        </Suspense>
      </Canvas>
    </div>
  );
};