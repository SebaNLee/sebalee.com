import React from "react";
import styles from "./anm-bar.module.css";

type Props = {
  length?: number; // vw or vh
  thickness?: number; // px
  delay?: number;
  duration?: number;
  vertical?: boolean;
  barColor?: string;
};

export function AnmBar({
  length = 20,
  thickness = 1,
  delay = 0,
  duration = 650,
  vertical = false,
  barColor = "rgb(82 82 82)",
}: Props) {
  return (
    <div
      className={styles.bar}
      style={
        {
          "--length": vertical ? `${length}vh` : `${length}vw`,
          "--thickness": `${thickness}px`,
          "--delay": `${delay}ms`,
          "--duration": `${duration}ms`,
          "--sx": vertical ? 0 : 1,
          "--sy": vertical ? 1 : 0,
          "--bar-color": barColor,
        } as React.CSSProperties
      }
    />
  );
}
