"use client";

import { useState } from "react";
import { SHOWCASE } from "../page";
import { FiArrowRight } from "react-icons/fi";

export default function LabShowcase() {
  const [index, setIndex] = useState(0);

  const project = SHOWCASE[index];
  const { Component } = project;

  return (
    <>
      <Component key={project.id} />
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
            LAB
          </h2>
          <h3 className="font-satoshi text-[0.6em] md:text-lg 2xl:text-xl opacity-60">
            Featuring: {project.title}
          </h3>
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
          {project.description.map((line, i) => (
            <p key={i}>{line}</p>
          ))}

          <button
            // TODO fix, z-20 not elegant
            className="pointer-events-auto cursor-pointer text-base md:text-xl 2xl:text-2xl z-20"
            onClick={() => setIndex((i) => (i + 1) % SHOWCASE.length)}
          >
            <FiArrowRight />
          </button>
        </div>
      </div>
    </>
  );
}
