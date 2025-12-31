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

  const isMobile =
    typeof window !== "undefined" &&
    window.matchMedia("(pointer: coarse)").matches;

  const lenisOptions = {
    lerp: isMobile ? 1 : 0.1, // disable smoothing on mobile
    duration: isMobile ? 0 : 1.2,
    smoothTouch: false, // ALWAYS false (important)
    touchMultiplier: 1, // keep native feel
  };
  return (
    <ReactLenis root ref={lenisRef} autoRaf={false} options={lenisOptions}>
      {children}
    </ReactLenis>
  );
}
