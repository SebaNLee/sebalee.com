import Image from "next/image";
import { AnmBar } from "@/components/animation/bar/anm-bar";
import { AnmRevealText } from "@/components/animation/scanner-text/anm-scanner-text";
import { AnmScanner } from "@/components/animation/scanner/anm-scanner";

export default function Home() {
  return (
    <>
      <div className="relative w-full h-full">
        <div className="absolute w-full h-full">
          <AnmBar delay={200} length={10.1} vertical />
          <AnmBar delay={500} length={20} />
          <AnmBar delay={1000} length={15} vertical />
          <AnmScanner delay={50} x={0} y={0} move={100} length={100} vertical />
          <AnmScanner
            delay={50}
            x={100}
            y={0}
            move={-100}
            length={100}
            vertical
          />
          <AnmScanner delay={50} x={0} y={0} move={100} length={100} />
          <AnmScanner delay={50} x={0} y={100} move={-100} length={100} />
        </div>
        <div>
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
          {/* <div className="items-end justify-items-center">
            <p className="font-ava text-4xl">Sebastian Nicolas Lee</p>
            <p className="font-ibm text-xs">Software Engineering Student</p>
            <p className="font-ibm-logo text-x1">Test</p>
          </div> */}
        </div>
      </div>
    </>
  );
}
