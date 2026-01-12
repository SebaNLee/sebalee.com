import Image from "next/image";
import { AnmBar } from "@/components/animation/bar/anm-bar";
import { AnmRevealText } from "@/components/animation/scanner-text/anm-scanner-text";
import { AnmScanner } from "@/components/animation/scanner/anm-scanner";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="absolute inset-0 pointer-events-none">
        <AnmBar x={20} y={20} delay={500} length={20} />
        <AnmBar x={20} y={20} delay={1000} length={15} vertical />
        <AnmScanner delay={1500} x={0} y={0} move={100} length={100} vertical />
        <AnmScanner
          delay={1500}
          x={100}
          y={0}
          move={-100}
          length={100}
          vertical
        />
        <AnmScanner delay={1500} x={0} y={0} move={100} length={100} />
        <AnmScanner delay={1500} x={0} y={100} move={-100} length={100} />
      </div>
      <div>
        <div className="">start here</div>
        <br />
        <AnmRevealText delay={900}>
          TODO:
          <p>this is a test |</p>
        </AnmRevealText>
        <hr />
        <br />
        <AnmRevealText
          delay={900}
          fontColor="rgb(0 255 0)"
          scannerColor="rgb(0 0 255)"
        >
          TODO:
          <p>second test</p>
        </AnmRevealText>
        <div className="items-end justify-items-center">
          {/* <p className="font-ava text-4xl">Sebastian Nicolas Lee</p>
          <p className="font-ibm text-xs">Software Engineering Student</p>
          <p className="font-ibm-logo text-x1">Test</p>
          <br />
          <p className="font-helvetica text-4xl">Sebastian Nicolas Lee</p>
          <p className="font-helvetica text-xs">Software Engineering Student</p>
          <p className="font-helvetica text-x1">Test</p>
          <br />
          <p className="font-inter text-4xl">Sebastian Nicolas Lee</p>
          <p className="font-inter text-xs">Software Engineering Student</p>
          <p className="font-inter text-x1">Test</p>
          <br />
          <p className="font-satoshi text-4xl">Sebastian Nicolas Lee</p>
          <p className="font-satoshi text-xs">Software Engineering Student</p>
          <p className="font-satoshi text-x1">Test</p>
          <br />
          <p className="text-4xl">Sebastian Nicolas Lee</p>
          <p className="text-xs">Software Engineering Student</p>
          <p className="text-x1">Test</p> */}
        </div>
        <div>
          <br />
          <AnmRevealText delay={900}>
            <Link href="/about">About</Link>
          </AnmRevealText>
          <br />
          <AnmRevealText delay={1200}>
            <Link href="/gallery">Gallery</Link>
          </AnmRevealText>
          <br />
          <AnmRevealText delay={1500}>
            <Link href="/projects">Projects</Link>
          </AnmRevealText>
          <br />
          <p className="border ">border test</p>
        </div>
      </div>
    </>
  );
}
