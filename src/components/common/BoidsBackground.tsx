"use client";

import { useRef } from "react";
import { WorldAPI } from "boids-wasm";

export default function BoidsBackground() {
  const worldRef = useRef<WorldAPI | null>(null);

  const canvasRef = (canvas: HTMLCanvasElement) => {
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      return;
    }

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const world = new WorldAPI(
      (canvas.width * canvas.height) / 5000,
      canvas.width,
      canvas.height,
    );
    worldRef.current = world;
    worldRef.current.set_params("separation", 3.1);
    worldRef.current.set_params("alignment", 0.6);
    worldRef.current.set_params("cohesion", 3.0);
    worldRef.current.set_params("attraction", 4.5);
    worldRef.current.set_params("noise", 1.7);
    worldRef.current.set_params("max_speed", 300.0);
    worldRef.current.set_params("perception_radius", 80.0);
    worldRef.current.set_bounce_on_edge(false);

    const step = () => {
      if (!worldRef.current) {
        return;
      }

      worldRef.current.step(0.016);

      const buffer = worldRef.current.get_boids();

      ctx.fillStyle = "rgba(0, 0, 0, 0.7)"; // TODO easter egg alfa - 0.08
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "white";

      for (let i = 0; i < buffer.length; i += 2) {
        ctx.fillRect(buffer[i], buffer[i + 1], 1, 1);
      }

      requestAnimationFrame(step);
    };

    step();

    const onMove = (e: MouseEvent) =>
      worldRef.current?.set_attractor(e.clientX, e.clientY);
    const onLeave = () => worldRef.current?.clear_attractor();

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
  };

  return (
    <canvas
      ref={canvasRef}
      className="fixed w-full h-full -z-1 bg-gray-950 pointer-events-none"
    />
  );
}
