import React from "react";
import styles from "./anm-scanner.module.css";

type Props = {
  x: number; // %
  y: number; // %
  move: number; // %
  length?: number; // %
  thickness?: number; // px
  delay?: number;
  duration?: number;
  vertical?: boolean;
  scannerColor?: string;
};

export function AnmScanner({
  x,
  y,
  move,
  length = 20,
  thickness = 1,
  delay = 0,
  duration = 1900,
  vertical = false,
  scannerColor = "rgb(82 82 82)",
}: Props) {
  return (
    <div
      className={styles.scanner}
      style={
        {
          "--posx": `${x}%`,
          "--posy": `${y}%`,
          "--move": `${move}%`,
          "--length": `${length}%`,
          "--thickness": `${thickness}px`,
          "--delay": `${delay}ms`,
          "--duration": `${duration}ms`,
          "--vertical": vertical ? 1 : 0,
          "--scanner-color": scannerColor,
        } as React.CSSProperties
      }
    />
  );
}
