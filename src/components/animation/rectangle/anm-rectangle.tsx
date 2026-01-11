import React from "react";
import styles from "./anm-rectangle.module.css";

type Props = {
  x: number; // %
  y: number; // %
  width: number; // %
  height: number; // %
  delay?: number;
  duration?: number;
  color?: string;
};

export function AnmRectangle({
  x,
  y,
  width,
  height,
  delay = 0,
  duration = 600,
  color = "rgb(10 10 10)",
}: Props) {
  return (
    <div
      className={styles.rectangle}
      style={
        {
          "--posx": `${x}%`,
          "--posy": `${y}%`,
          "--width": `${width}%`,
          "--height": `${height}%`,
          "--delay": `${delay}ms`,
          "--duration": `${duration}ms`,
          "--color": color,
        } as React.CSSProperties
      }
    />
  );
}
