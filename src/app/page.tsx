import Image from "next/image";
import { HudBar } from "@/components/hud/bar/hud-bar";
import { AnmRevealText } from "@/components/animation/scanner-text/anm-scanner-text";
import HudLayer from "@/components/hud/hud-layer";

export default function Home() {
  return (
    <>
      <>
        {/* TODO debug */}
        <HudLayer>
          <HudBar x={600} y={20} delay={500} length={300} />
          <HudBar x={600} y={20} delay={1000} length={300} vertical />
        </HudLayer>
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
        <AnmRevealText delay={900}>
          TODO:
          <p>this is a test |</p>
        </AnmRevealText>
      </div>
    </>
  );
}
