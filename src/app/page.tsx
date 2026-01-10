import Image from "next/image";
import { AnmBar } from "@/components/animation/bar/anm-bar";
import { AnmRevealText } from "@/components/animation/scanner-text/anm-scanner-text";
import HudScanner from "@/components/animation/scanner/anm-scanner";

export default function Home() {
  return (
    <>
      <>
        {/* TODO debug */}
        <AnmBar delay={500} length={300} />
        <AnmBar delay={1000} length={300} vertical />
        <AnmBar delay={200} length={110} vertical />
        <HudScanner x={0} y={0} move={600} length={200} vertical />
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
