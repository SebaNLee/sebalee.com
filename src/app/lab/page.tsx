import { AnmBar } from "@/components/animation/bar/anm-bar";
import { AnmScannerText } from "@/components/animation/scanner-text/anm-scanner-text";
import { AnmScanner } from "@/components/animation/scanner/anm-scanner";

export default function Lab() {
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
        <p>lab TODO</p>
        <AnmScannerText delay={900}>
          TODO:
          <p>this is a test |</p>
        </AnmScannerText>
        <hr />
        <br />
        <AnmScannerText
          delay={900}
          fontColor="rgb(0 255 0)"
          scannerColor="rgb(0 0 255)"
        >
          TODO:
          <p>second test</p>
        </AnmScannerText>
      </div>
    </>
  );
}
