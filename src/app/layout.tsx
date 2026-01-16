import type { Metadata } from "next";
import "./globals.css";
import BoidsBackground from "@/components/layout/boids-background";
import Script from "next/script";
import { AnmBar } from "@/components/animation/bar/anm-bar";
import { AnmRectangle } from "@/components/animation/rectangle/anm-rectangle";
import NavBar from "@/components/layout/nav-bar/nav-bar";
import { AnmRevealText } from "@/components/animation/reveal-text/anm-reveal-text";

export const metadata: Metadata = {
  title: "Sebastián Nicolás Lee",
  description:
    "Sup! I'm Sebalee, currently a software engineering student. I always like having an active project; if it's not on GitHub it's usually some geeky offline stuff.",
  openGraph: {
    title: "Sebastián Nicolás Lee - Portfolio",
    description: "Sebalee's portfolio",
    url: "https://sebalee.com",
    siteName: "Sebastián Nicolás Lee",
    images: [
      {
        url: "https://sebalee.com/og.png",
        width: 1200,
        height: 630,
        alt: "Sebastián Nicolás Lee portfolio preview",
      },
    ],

    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/icon.png" type="image/png" />
      <body
        className={`font-satoshi font-medium antialiased text-neutral-950 bg-[rgb(238,242,250)]`}
      >
        {/* Google tag (gtag.js) */}
        <Script
          id="gtag-1"
          src="https://www.googletagmanager.com/gtag/js?id=G-MYPY986RMT"
          strategy="afterInteractive"
        />
        {/* Google tag (gtag.js) */}
        <Script id="gtag-2" strategy="afterInteractive">
          {`
          // Google tag (gtag.js)
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-MYPY986RMT');
        `}
        </Script>
        <div className="relative flex flex-col min-h-svh w-screen px-[2vw] pt-[7.5vh] pb-[2.5vh]">
          <div className="relative flex-1 h-full w-full">
            <AnmRevealText delay={2880} duration={1200}>
              {children}
            </AnmRevealText>
          </div>
          <div className="absolute left-0 right-0 top-[5.25%] flex justify-center ">
            <NavBar />
          </div>
          <div className="absolute inset-0 pointer-events-none">
            <AnmBar x={0} y={2} delay={700} length={100} />
            <AnmBar x={0} y={3} delay={700} length={100} />
            <AnmBar x={0} y={7.5} delay={700} length={100} />
            <AnmBar x={0} y={97.5} delay={700} length={100} />
            <AnmBar x={0} y={98.5} delay={700} length={100} />

            <AnmBar x={2} y={0} delay={100} length={100} vertical />
            <AnmBar x={98} y={0} delay={100} length={100} vertical />

            <AnmRectangle x={0} y={2} width={2} height={1} delay={1300} />
            <AnmRectangle x={98} y={2} width={2} height={1} delay={1400} />
            <AnmRectangle x={0} y={97.5} width={2} height={1} delay={1500} />
            <AnmRectangle x={98} y={97.5} width={2} height={1} delay={1600} />
          </div>
        </div>
      </body>
    </html>
  );
}
