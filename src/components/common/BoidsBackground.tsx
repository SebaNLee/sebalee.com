"use client";

import { useRef } from "react";
import { WorldAPI } from "boids-wasm";

export default function BoidsBackground() {
  const worldRef = useRef<WorldAPI | null>(null);

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

    const world = new WorldAPI(
      (canvas.width * canvas.height) / 5000,
      canvas.width,
      canvas.height,
    );
    worldRef.current = world;
    worldRef.current.set_params("separation", 4.1);
    worldRef.current.set_params("alignment", 2.6);
    worldRef.current.set_params("cohesion", 4.0);
    worldRef.current.set_params("attraction", 0.15);
    worldRef.current.set_params("noise", 3.7);
    worldRef.current.set_params("max_speed", 100.0);
    worldRef.current.set_params("perception_radius", 30.0);
    worldRef.current.set_bounce_on_edge(false);

    // v.1
    // worldRef.current.set_params("separation", 3.1);
    // worldRef.current.set_params("alignment", 0.6);
    // worldRef.current.set_params("cohesion", 3.0);
    // worldRef.current.set_params("attraction", 4.5);
    // worldRef.current.set_params("noise", 1.7);
    // worldRef.current.set_params("max_speed", 300.0);
    // worldRef.current.set_params("perception_radius", 80.0);
    // worldRef.current.set_bounce_on_edge(false);

    const step = () => {
      if (!worldRef.current) {
        return;
      }

      worldRef.current.step(0.016);

      const buffer = worldRef.current.get_boids();

      ctx.save();
      ctx.globalCompositeOperation = "destination-out";
      ctx.fillStyle = "rgba(0, 0, 0, 0.7)"; // TODO easter egg alfa - 0.08
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.restore();

      ctx.fillStyle = "white";

      for (let i = 0; i < buffer.length; i += 2) {
        ctx.fillRect(buffer[i], buffer[i + 1], 1, 1);
      }

      requestAnimationFrame(step);
    };

    step();

    const onMove = (e: MouseEvent) => {
      const { left, top } = canvas.getBoundingClientRect();
      worldRef.current?.set_attractor(e.clientX - left, e.clientY - top);
    };

    const onLeave = () => worldRef.current?.clear_attractor();

    canvas.addEventListener("mousemove", onMove);
    canvas.addEventListener("mouseleave", onLeave);
  };

  return <canvas ref={canvasRef} className="absolute w-full h-full" />;
}
