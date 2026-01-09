import React from "react";
import styles from "./anm-scanner-text.module.css";

type Props = {
  delay?: number;
  duration?: number;
  fontColor?: string;
  scannerColor?: string;
  fontSize?: number;
  children: React.ReactNode;
};

export function AnmRevealText({
  delay = 0,
  duration = 1000,
  fontColor = "rgb(255 255 255)",
  scannerColor = "rgb(82 82 82)",
  fontSize = 16,
  children,
}: Props) {
  return (
    <div
      className={styles.wrapper}
      style={
        {
          "--delay": `${delay}ms`,
          "--duration": `${duration}ms`,
          "--font-color": fontColor,
          "--scanner-color": scannerColor,
          "--fontSize": `${fontSize}px`,
        } as React.CSSProperties
      }
    >
      <span className={styles.text}>{children}</span>
      <span className={styles.scanner} />
    </div>
  );
}
