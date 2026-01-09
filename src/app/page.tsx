import Image from "next/image";
import { HudBar } from "@/components/hud/bar/hud-bar";
import { AnmRevealText } from "@/components/animation/scanner-text/anm-scanner-text";
import HudLayer from "@/components/hud/hud-layer";
import HudScanner from "@/components/hud/scanner/hud-scanner";

export default function Home() {
  return (
    <>
      <>
        {/* TODO debug */}
        <HudLayer>
          <HudBar x={1910} y={20} delay={500} length={300} />
          <HudBar x={600} y={20} delay={1000} length={300} vertical />
          <HudBar x={230} y={120} delay={200} length={110} vertical />
          <HudScanner x={0} y={0} move={1920} length={1920} vertical />
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
        <br />
        <AnmRevealText
          delay={900}
          fontColor="rgb(0 255 0)"
          scannerColor="rgb(0 0 255)"
        >
          TODO:
          <p>second test</p>
        </AnmRevealText>
      </div>
    </>
  );
}
