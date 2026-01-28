"use client";

import { useRef } from "react";
import { BoidsAPI } from "procedural-engines-wasm";

export default function BoidsBackground() {
  const boidsRef = useRef<BoidsAPI | null>(null);

  const canvasRef = (canvas: HTMLCanvasElement | null) => {
    if (!canvas) {
      return;
    }

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) {
      return;
    }

    const { width, height } = canvas.parentElement!.getBoundingClientRect();

    canvas.width = width;
    canvas.height = height;
    canvas.style.backgroundColor = "transparent";

    const flagMobile = window.innerWidth <= 768;
    const BOIDS = flagMobile ? 100 : 300;

    const world = new BoidsAPI(BOIDS, canvas.width, canvas.height);
    boidsRef.current = world;
    boidsRef.current.set_params("separation", 4.1);
    boidsRef.current.set_params("alignment", 2.6);
    boidsRef.current.set_params("cohesion", 4.0);
    boidsRef.current.set_params("attraction", 0.15);
    boidsRef.current.set_params("noise", 3.7);
    boidsRef.current.set_params("max_speed", 100.0);
    boidsRef.current.set_params("perception_radius", 30.0);
    boidsRef.current.set_bounce_on_edge(false);

    // v.1
    // boidsRef.current.set_params("separation", 3.1);
    // boidsRef.current.set_params("alignment", 0.6);
    // boidsRef.current.set_params("cohesion", 3.0);
    // boidsRef.current.set_params("attraction", 4.5);
    // boidsRef.current.set_params("noise", 1.7);
    // boidsRef.current.set_params("max_speed", 300.0);
    // boidsRef.current.set_params("perception_radius", 80.0);
    // boidsRef.current.set_bounce_on_edge(false);

    const step = () => {
      if (!boidsRef.current) {
        return;
      }

      boidsRef.current.step(0.016);

      const buffer = boidsRef.current.get_boids();

      ctx.save();
      ctx.globalCompositeOperation = "destination-out";
      ctx.fillStyle = "rgb(0, 0, 0)"; // easter egg: rgba(0, 0, 0, 0)
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.restore();

      ctx.fillStyle = "black";
      const size = flagMobile
        ? Math.max(1, Math.min(canvas.width, canvas.height) / 500)
        : 1;

      for (let i = 0; i < buffer.length; i += 2) {
        ctx.fillRect(buffer[i], buffer[i + 1], size, size);
      }

      requestAnimationFrame(step);
    };

    step();

    const onMove = (e: MouseEvent) => {
      const { left, top } = canvas.getBoundingClientRect();
      boidsRef.current?.set_attractor(e.clientX - left, e.clientY - top);
    };

    const onLeave = () => boidsRef.current?.clear_attractor();

    const container = canvas.parentElement!;
    container.addEventListener("mousemove", onMove);
    container.addEventListener("mouseleave", onLeave);
  };

  return <canvas ref={canvasRef} className="absolute w-full h-full" />;
}
