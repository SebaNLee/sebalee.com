import React from "react";
import styles from "./anm-scanner-text.module.css";

type Props = {
  delay?: number;
  duration?: number;
  color?: string;
  fontSize?: number;
  children: React.ReactNode;
};

export function AnmRevealText({
  delay = 0,
  duration = 1000,
  color = "rgb(255 255 255)",
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
          "--color": color,
          "--fontSize": `${fontSize}px`,
        } as React.CSSProperties
      }
    >
      <span className={styles.text}>{children}</span>
      <span className={styles.scanner} />
    </div>
  );
}
