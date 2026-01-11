import React from "react";
import styles from "./anm-bar.module.css";

type Props = {
  x: number; // %
  y: number; // %
  length?: number; // %
  thickness?: number; // px
  delay?: number;
  duration?: number;
  vertical?: boolean;
  barColor?: string;
};

export function AnmBar({
  x,
  y,
  length = 20,
  thickness = 1,
  delay = 0,
  duration = 600,
  vertical = false,
  barColor = "rgb(10 10 10)",
}: Props) {
  return (
    <div
      className={styles.bar}
      style={
        {
          "--posx": `${x}%`,
          "--posy": `${y}%`,
          "--length": `${length}%`,
          "--thickness": `${thickness}px`,
          "--delay": `${delay}ms`,
          "--duration": `${duration}ms`,
          "--vertical": vertical ? 1 : 0,
          "--bar-color": barColor,
        } as React.CSSProperties
      }
    />
  );
}
