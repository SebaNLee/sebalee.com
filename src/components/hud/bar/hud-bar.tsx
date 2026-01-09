import React from "react";
import styles from "./hud-bar.module.css";

type Props = {
  x: number;
  y: number;
  length?: number;
  thickness?: number;
  delay?: number;
  duration?: number;

  vertical?: boolean;
  color?: string;
};

export function HudBar({
  x,
  y,
  length = 200,
  thickness = 1,
  delay = 0,
  duration = 650,
  vertical = false,
  color = "rgb(82 82 82)",
}: Props) {
  return (
    <div
      className={styles.bar}
      style={
        {
          "--posx": `${x}px`,
          "--posy": `${y}px`,
          "--length": `${length}px`,
          "--thickness": `${thickness}px`,
          "--delay": `${delay}ms`,
          "--duration": `${duration}ms`,
          "--sx": vertical ? 0 : 1,
          "--sy": vertical ? 1 : 0,
          "--color": color,
        } as React.CSSProperties
      }
    />
  );
}
