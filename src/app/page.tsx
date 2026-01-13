import { FiArrowUpRight } from "react-icons/fi";
import { AnmRevealText } from "@/components/animation/reveal-text/anm-reveal-text";
import { AnmRevealGrid } from "@/components/animation/reveal-grid/anm-reveal-grid";

export default function Home() {
  return (
    <>
      <AnmRevealGrid invertOpacity />
      <div className="absolute inset-0 pointer-events-none"></div>
      <div>
        <AnmRevealText delay={500}>
          <div
            className="
            w-full h-full gap-1
            flex flex-col md:flex-row
            items-center
            justify-start md:justify-center
            pt-[40%] md:pt-0
            px-6 md:px-10 2xl:p-40
            "
          >
            <div className="flex flex-col md:flex-1 md:flex-col items-center md:items-start">
              <p className="font-satoshi text-3xl font-thin md:text-6xl 2xl:text-7xl">
                SEBASTIÁN NICOLÁS LEE
              </p>
              <p className="font-satoshi text-[0.6em] md:text-lg 2xl:text-xl">
                Software Engineering Student
              </p>
            </div>

            <div
              className="
              text-justify
              flex flex-col md:flex-col
              md:w-[35vw]
              items-center md:items-start
              mt-auto md:mt-0
              mb-3 md:mb-0
              gap-2 md:gap-4
              text-xs md:text-sm 2xl:text-base
              px-12 md:px-0
              "
            >
              <p>Welcome to my website!</p>
              <p>
                Pleased to make your acquaintance. I&apos;m Sebalee. I always
                like having an active project; if it&apos;s not on GitHub
                it&apos;s usually some geeky offline stuff.{" "}
              </p>
              <p>
                Enjoy low-level work, system architecture design, and classical
                ML. I&apos;ve learned web development too. Fun, but not my
                endgame.
              </p>
              <p>
                Outside tech, I generally enjoy learning new stuff: love
                reading, drinking good tea and mate, video games (mostly indie
                games) and tinkering with electronics.
              </p>

              <p className="flex flex-row underline text-xs md:text-md gap-5 mt-8 md:mt-8">
                <a
                  href="https://github.com/SebaNLee"
                  className="flex items-center"
                >
                  GitHub
                  <FiArrowUpRight />
                </a>
                <a
                  href="https://www.linkedin.com/in/sebalee/"
                  className="flex items-center"
                >
                  LinkedIn
                  <FiArrowUpRight />
                </a>
                <a
                  href="https://mailto:seba.nico.lee@gmail.com"
                  className="flex items-center"
                >
                  seba.nico.lee@gmail.com
                  <FiArrowUpRight />
                </a>
              </p>
            </div>
          </div>
        </AnmRevealText>
      </div>
    </>
  );
}
