import { AnmBar } from "@/components/animation/bar/anm-bar";
import { AnmRectangle } from "@/components/animation/rectangle/anm-rectangle";
import { AnmRevealGrid } from "@/components/animation/reveal-grid/anm-reveal-grid";
import { AnmScannerText } from "@/components/animation/scanner-text/anm-scanner-text";
import { AnmScanner } from "@/components/animation/scanner/anm-scanner";
import BoidsBackground from "@/components/layout/boids-background";

export default function Lab() {
  return (
    <>
      <BoidsBackground />
      <AnmRevealGrid invertOpacity />
      <div className="absolute inset-0 pointer-events-none">
        <AnmScanner delay={1500} x={0} y={0} move={100} length={100} vertical />
        <AnmScanner delay={1500} x={0} y={0} move={100} length={100} />
      </div>
      <div>
        <p>lab TODO</p>
      </div>
    </>
  );
}
