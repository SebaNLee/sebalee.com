import { AnmRevealGrid } from "@/components/animation/reveal-grid/anm-reveal-grid";
import { AnmRevealText } from "@/components/animation/reveal-text/anm-reveal-text";
import { Project } from "./components/project";

export default function Projects() {
  return (
    <>
      <AnmRevealGrid invertOpacity />
      <div
        className="
            w-full h-full gap-1
            flex flex-col md:flex-row
            items-center
            justify-start md:justify-center
            pt-[8%] md:pt-0
            px-1 md:px-10 2xl:p-40
            "
      >
        <div className="flex flex-col md:flex-1 md:flex-col items-center md:items-start">
          <h2 className="font-satoshi text-3xl font-normal md:font-thin md:text-6xl 2xl:text-7xl">
            PROJECTS
          </h2>
        </div>

        <div
          className="
              md:w-[35vw]
              mt-12 md:mt-0
              px-6 md:px-0

              scrollbar-none
              max-h-[90vh]
              overflow-y-auto
              overscroll-contain
              "
        >
          <div>
            <Project
              name={"node_thing"}
              link={"https://github.com/teofum/node_thing"}
              icons={[
                "devicon-typescript-plain",
                "devicon-react-original",
                "devicon-nextjs-plain",
                "devicon-webgpu-plain",
              ]}
              description={
                "This app is a node-based shader editor. It works like the node graphs used in game engines, but focused on shaders. You can connect different shader nodes to compose powerful visual effects and create fun outputs in an intuitive way."
              }
            />
            <Project
              name={"boids-engine"}
              link={"https://github.com/SebaNLee/boids-engine"}
              icons={["devicon-rust-original", "devicon-wasm-original"]}
              description={
                "A slightly modified Boids algorithm engine that simulates the flocking behavior of birds. Originally intended to be used as the background of this webpage, but ended up with a more minimalistic design. You can see it in /lab tho!"
              }
            />
            <Project
              name={"Arqui-TPE-20251Q"}
              link={"https://github.com/SebaNLee/Arqui-TPE-20251Q"}
              icons={["devicon-c-original", "ASM"]}
              description={
                "An operating system based on the Pure64 kernel. Learned the distinction between kernel and user space of an operating system and many more design decisions. Extra attention was also given to visual and design elements, do check it out!"
              }
            />
            <Project
              name={"SO-TP2-20252Q"}
              link={"https://github.com/SebaNLee/SO-TP2-20252Q"}
              icons={["devicon-c-original", "ASM"]}
              description={
                "This one is based on the earlier Arqui-TPE-20251Q operating system. Extended the project adding an internal scheduler, process notions, semaphores, pipes, memory management, and much more."
              }
            />
            <Project
              name={"sebalee.com"}
              link={"https://github.com/SebaNLee/sebalee.com"}
              icons={[
                "devicon-typescript-plain",
                "devicon-react-original",
                "devicon-nextjs-plain",
                "devicon-wasm-original",
              ]}
              description={
                "The website you are currently on. Personal portfolio webpage with a variety of stuff to showcase."
              }
            />
            <Project
              name={"itba-github"}
              link={"https://github.com/SebaNLee/itba-github"}
              icons={[
                "devicon-c-original",
                "ASM",
                "devicon-java-plain",
                "devicon-ruby-plain",
                "SQL",
                "devicon-python-plain",
              ]}
              description={
                "Repo to store all my ITBA related personal code. Really not for showcase, but feel free to explore it. "
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}
