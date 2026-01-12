import React from "react";
import styles from "./anm-reveal-text.module.css";

type Props = {
  delay?: number;
  duration?: number;
  children: React.ReactNode;
};

export function AnmRevealText({ delay = 0, duration = 900, children }: Props) {
  return (
    <div
      className={styles.wrapper}
      style={
        {
          "--delay": `${delay}ms`,
          "--duration": `${duration}ms`,
        } as React.CSSProperties
      }
    >
      <span className={styles.text}>{children}</span>
    </div>
  );
}
