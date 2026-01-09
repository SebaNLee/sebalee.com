"use client";

import React, { useEffect, useState } from "react";

type Props = {
  children: React.ReactNode;
};

export const BASE_WIDTH = 1920;
export const BASE_HEIGHT = 1080;

export default function HudLayer({ children }: Props) {
  const [scale, setScale] = useState(1);

  // useEffect: window does not exist on server (SSR error)
  useEffect(() => {
    function updateScale() {
      const vw = window.innerWidth;
      const vh = window.innerHeight;

      const targetScale = BASE_WIDTH / BASE_HEIGHT;
      const currentScale = vw / vh;

      if (targetScale > currentScale) {
        setScale(Math.min(vw / BASE_WIDTH, vh / BASE_HEIGHT));
      } else {
        setScale(Math.max(vw / BASE_WIDTH, vh / BASE_HEIGHT));
      }
    }

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,

          width: BASE_WIDTH,
          height: BASE_HEIGHT,

          transformOrigin: "top left",
          transform: `scale(${scale})`,
        }}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
