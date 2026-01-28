"use client";

import { TopographyAPI } from "procedural-engines-wasm";

export default function TopographyBackground() {
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

    const flagMobile = window.innerWidth <= 768;

    const MAP = flagMobile ? 65 : 257;
    const LEVELS = flagMobile ? 10 : 27;
    const ROUGHNESS = 0.9;
    const HURST = 0.6;
    const BLUR_RADIOUS = flagMobile ? 6 : 12;
    const BLUR_ITERATIONS = 1;

    const sx = width / (MAP - 1);
    const sy = height / (MAP - 1);

    const topo = new TopographyAPI(
      MAP,
      LEVELS,
      ROUGHNESS,
      HURST,
      BLUR_RADIOUS,
      BLUR_ITERATIONS,
    );
    topo.compute();

    const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

    (async () => {
      ctx.clearRect(0, 0, width, height);

      await delay(3500);

      for (let level = 0; level < LEVELS; level++) {
        ctx.strokeStyle = "rgb(150,150,150)";
        ctx.beginPath();

        const polylines = topo.get_level_borders(level);

        let polylineEnd = true;

        for (let i = 0; i < polylines.length; i += 2) {
          const x = polylines[i];
          const y = polylines[i + 1];

          if (x < 0 || y < 0) {
            polylineEnd = true;
            continue;
          }

          polylineEnd ? ctx.moveTo(x * sx, y * sy) : ctx.lineTo(x * sx, y * sy);

          polylineEnd = false;
        }

        ctx.stroke();
        await delay(flagMobile ? 80 : 40);
      }
    })();
  };

  return <canvas ref={canvasRef} className="absolute w-full h-full" />;
}
