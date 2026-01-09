import Image from "next/image";
import { HudBar } from "@/components/hud/bar/hud-bar";
import { AnmRevealText } from "@/components/animation/reveal-text/anm-scanner-text";

export default function Home() {
  return (
    <>
      <>
        {/* TODO debug */}
        <HudBar x={140} y={42} delay={500} length={300} />
        <HudBar x={140} y={42} delay={1000} length={300} vertical />
      </>
      <div className="">
        <Image
          className="dark:invert"
          src="next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
        />
        <br />
        <AnmRevealText x={270} y={120} delay={900}>
          TODO:
          <p>this is a test |</p>
        </AnmRevealText>
      </div>
    </>
  );
}
