import { AnmBar } from "@/components/animation/bar/anm-bar";
import { AnmRectangle } from "@/components/animation/rectangle/anm-rectangle";
import { AnmRevealGrid } from "@/components/animation/reveal-grid/anm-reveal-grid";
import { AnmRevealText } from "@/components/animation/reveal-text/anm-reveal-text";
import { AnmScanner } from "@/components/animation/scanner/anm-scanner";
import BoidsBackground from "@/components/layout/boids-background";
import { FiArrowUpRight } from "react-icons/fi";

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
          <BoidsBackground />
          <div
            className="
            w-full h-full gap-1
            flex flex-col md:flex-row
            items-center
            justify-start md:justify-center
            pt-[8%] md:pt-0
            px-1 md:px-10 2xl:p-40
            "
          >
            <div className="flex flex-col md:flex-1 md:flex-col items-center md:items-start">
              <p className="font-satoshi text-3xl font-normal md:font-thin md:text-6xl 2xl:text-7xl">
                LAB
              </p>
              {/* TODO add random when adding other proyects, framework */}
              <p className="font-satoshi text-[0.6em] md:text-lg 2xl:text-xl opacity-60">
                Featuring: {"boids-engine"}
              </p>
            </div>

            <div
              className="
                  text-justify
                  flex flex-col md:flex-col
                  md:w-[35vw]
                  items-center md:items-start
                  mt-auto md:mt-0
                  mb-3 md:mb-0
                  gap-2 md:gap-4
                  text-xs md:text-sm 2xl:text-base
                  px-12 md:px-0
                  "
            >
              {/* TODO add random when adding other proyects, framework */}
              <p>Currently showcasing boids-engine.</p>
              <p>
                A slightly modified Boids algorithm. The bird-oid objects get
                attracted to your mouse!
              </p>
              <p>
                Coded in Rust and running it with WebAssembly, should be pretty
                efficient.
              </p>
            </div>
          </div>
        </AnmRevealText>
      </div>
    </>
  );
}
