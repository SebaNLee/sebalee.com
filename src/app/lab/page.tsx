import { AnmBar } from "@/components/animation/bar/anm-bar";
import { AnmRectangle } from "@/components/animation/rectangle/anm-rectangle";
import { AnmRevealGrid } from "@/components/animation/reveal-grid/anm-reveal-grid";
import { AnmRevealText } from "@/components/animation/reveal-text/anm-reveal-text";
import { AnmScanner } from "@/components/animation/scanner/anm-scanner";
import BoidsBackground from "@/components/layout/boids-background";
import TopographyBackground from "@/components/layout/topography-background";
import { FiArrowUpRight } from "react-icons/fi";
import LabShowcase from "./components/lab-showcase";

export const SHOWCASE = [
  {
    id: "boids-engine",
    Component: BoidsBackground,
    title: "boids-engine",
    description: [
      "Currently showcasing boids-engine.",
      "A slightly modified Boids algorithm. The bird-oid objects get attracted to your mouse!",
      "Coded in Rust and running it with WebAssembly, should be pretty efficient.",
    ],
  },
  {
    id: "topography-engine",
    Component: TopographyBackground,
    title: "topography-engine",
    description: [
      "Currently showcasing topography-engine.",
      "Computes topography-map-like borders using diamond-square, marching squares and box blur.",
      "Was also coded in Rust and running it with WebAssembly, should be pretty efficient.",
    ],
  },
];

const MINUTES = Math.floor(Date.now() / 60000);

export default function Lab() {
  return (
    <>
      <AnmRevealGrid invertOpacity />
      <div className="absolute inset-0 pointer-events-none">
        {/* 1 */}
        <AnmScanner
          delay={1000}
          x={20}
          y={0}
          move={60}
          length={100}
          duration={850}
          vertical
        />
        <AnmScanner
          delay={1000}
          x={0}
          y={20}
          move={60}
          length={100}
          duration={850}
        />
        {/* 2 */}
        <AnmScanner
          delay={1600}
          x={80}
          y={0}
          move={0}
          length={100}
          duration={700}
          vertical
        />
        <AnmScanner
          delay={1600}
          x={0}
          y={80}
          move={-60}
          length={100}
          duration={700}
        />
        {/* 3 */}
        <AnmScanner
          delay={2150}
          x={80}
          y={0}
          move={-30}
          length={100}
          duration={600}
          vertical
        />
        <AnmScanner
          delay={2150}
          x={0}
          y={20}
          move={30}
          length={100}
          duration={600}
        />
        {/* 4 */}
        <AnmScanner
          delay={2580}
          x={50}
          y={0}
          move={50}
          length={100}
          duration={700}
          vertical
        />
        <AnmScanner
          delay={2580}
          x={50}
          y={0}
          move={-50}
          length={100}
          duration={700}
          vertical
        />
        <AnmScanner
          delay={2580}
          x={0}
          y={50}
          move={50}
          length={100}
          duration={700}
        />
        <AnmScanner
          delay={2580}
          x={0}
          y={50}
          move={-50}
          length={100}
          duration={700}
        />
      </div>
      <div>
        <AnmRevealText delay={2580} duration={400}>
          <LabShowcase />
        </AnmRevealText>
      </div>
    </>
  );
}
