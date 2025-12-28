import ReactLenis from "lenis/react";
import React, { useRef, useEffect } from "react";
import { gsap } from "../lib/gsap";
import "lenis/dist/lenis.css";

interface LenisProivderProps {
  children: React.ReactNode;
}

export default function LenisProivderProps({ children }: LenisProivderProps) {
  const lenisRef = useRef<any>(null);

  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(update);
    };
  }, []);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  const lenisOptions = {
    lerp: 0.1,
    duration: 1.5,
    smoothTouch: isMobile ? false : true, 
    touchMultiplier: isMobile ? 2 : 1,
  };

  return (
    <ReactLenis root ref={lenisRef} autoRaf={false} options={lenisOptions}>
      {children}
    </ReactLenis>
  );
}
