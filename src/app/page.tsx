import Image from "next/image";
import { AnmBar } from "@/components/animation/bar/anm-bar";
import { AnmScannerText } from "@/components/animation/scanner-text/anm-scanner-text";
import { AnmScanner } from "@/components/animation/scanner/anm-scanner";
import Link from "next/link";
import { AnmRevealText } from "@/components/animation/reveal-text/anm-reveal-text";

export default function Home() {
  return (
    <>
      <div className="absolute inset-0 pointer-events-none"></div>
      <div>
        <AnmRevealText delay={500}>
          <div>
            <p className="font-satoshi text-4xl">Sebastian Nicolas Lee</p>
            <p className="font-satoshi text-xs">Software Engineering Student</p>
            <p className="font-satoshi text-x1">Test</p>
          </div>
        </AnmRevealText>

        {/* <div className="items-end justify-items-center">
          <p className="font-ava text-4xl">Sebastian Nicolas Lee</p>
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
          <p className="text-x1">Test</p>
        </div> */}
      </div>
    </>
  );
}
