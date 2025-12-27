import { useEffect, useRef } from "react";

const ICONS = [
  "/assets/yarn.svg",
  "/assets/hook.svg",
  "/assets/scissors.svg",
  "/assets/thread.svg",
  "/assets/pin.svg",
  "/assets/pencil.svg",
];

class CraftItem {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
  image: HTMLImageElement;

  constructor(
    canvas: HTMLCanvasElement,
    images: HTMLImageElement[]
  ) {
    this.image = images[Math.floor(Math.random() * images.length)];

    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;

    this.size = 20 + Math.random() * 40;
    this.speedY = 0.2 + Math.random() * 0.6;
    this.speedX = (Math.random() - 0.5) * 0.2;

    this.rotation = Math.random() * Math.PI * 2;
    this.rotationSpeed = (Math.random() - 0.5) * 0.002;

    this.opacity = 0.1 + Math.random() * 0.15;
  }

  update(canvas: HTMLCanvasElement) {
    this.y -= this.speedY;
    this.x += this.speedX;
    this.rotation += this.rotationSpeed;

    if (this.y < -this.size) {
      this.y = canvas.height + this.size;
      this.x = Math.random() * canvas.width;
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.save();
    ctx.globalAlpha = this.opacity;
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rotation);
    ctx.drawImage(
      this.image,
      -this.size / 2,
      -this.size / 2,
      this.size,
      this.size
    );
    ctx.restore();
  }
}

export default function CraftCanvasBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Respect reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    // Load images
    const images: HTMLImageElement[] = [];
    ICONS.forEach(src => {
      const img = new Image();
      img.src = src;
      images.push(img);
    });

    const items: CraftItem[] = [];
    const COUNT = Math.min(100, Math.floor(window.innerWidth / 10));

    for (let i = 0; i < COUNT; i++) {
      items.push(new CraftItem(canvas, images));
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      items.forEach(item => {
        item.update(canvas);
        item.draw(ctx);
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 bg-[#fff7f0]"
    />
  );
}
