import Image from "next/image";
import { HudBar } from "@/components/hud/bar/hud-bar";

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
        <p>TODO</p>
      </div>
    </>
  );
}
