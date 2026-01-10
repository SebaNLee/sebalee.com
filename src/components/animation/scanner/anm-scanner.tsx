import React from "react";
import styles from "./anm-scanner.module.css";

type Props = {
  x: number;
  y: number;
  move: number;
  length?: number;
  thickness?: number;
  delay?: number;
  duration?: number;
  vertical?: boolean;
  invert?: boolean;
  scannerColor?: string;
};

export default function AnmScanner({
  x,
  y,
  move,
  length = 200,
  thickness = 1,
  delay = 0,
  duration = 1900,
  vertical = false,
  invert = false,
  scannerColor = "rgb(82 82 82)",
}: Props) {
  return (
    <div
      className={styles.scanner}
      style={
        {
          "--posx": `${x}px`,
          "--posy": `${y}px`,
          "--move": `${move}px`,
          "--length": `${length}px`,
          "--thickness": `${thickness}px`,
          "--delay": `${delay}ms`,
          "--duration": `${duration}ms`,
          "--sx": vertical ? 0 : 1,
          "--sy": vertical ? 1 : 0,
          "--invert": invert ? 1 : 0,
          "--scanner-color": scannerColor,
        } as React.CSSProperties
      }
    />
  );
}
