import { AnmRevealGrid } from "@/components/animation/reveal-grid/anm-reveal-grid";
import { GALLERIES } from "../page";
import { AnmRevealText } from "@/components/animation/reveal-text/anm-reveal-text";
import { FiArrowLeft } from "react-icons/fi";
import Link from "next/link";
import fs from "fs";
import path from "path";
import sizeOf from "image-size";

type Props = {
  params: Promise<{
    folder: string;
  }>;
};

export async function generateStaticParams() {
  return GALLERIES.map((gallery) => ({ folder: gallery.slug }));
}

export default async function GalleryFolder({ params }: Props) {
  const { folder } = await params;

  const MAX = 30; // TODO hardcode

  const imagesDir = path.join(process.cwd(), "public", "images", folder);

  const files = fs
    .readdirSync(imagesDir)
    .filter((f) => /\.(jpg|jpeg|png|webp)$/i.test(f));

  const photos = files.map((file) => {
    const filePath = path.join(imagesDir, file);
    const buffer = fs.readFileSync(filePath);
    const { width, height } = sizeOf(buffer);

    return {
      src: `/images/${folder}/${file}`,
      width,
      height,
    };
  });

  return (
    <>
      <AnmRevealGrid invertOpacity />
      <div>
        <AnmRevealText delay={500}>
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
            <Link href="/gallery">
              <FiArrowLeft
                className="
              fixed
              top-2 md:top-5 2xl:top-8
              left-2 md:left-5 2xl:left-8
              text-base md:text-xl 2xl:text-2xl
              "
              />
            </Link>
            <div className="flex flex-col md:flex-1 md:flex-col items-center md:items-start">
              <p className="font-satoshi text-3xl font-normal md:font-thin md:text-6xl 2xl:text-7xl">
                GALLERY
              </p>
              <p className="font-satoshi text-[0.6em] md:text-lg 2xl:text-xl">
                {folder}
              </p>
            </div>

            <div
              className="
                md:w-[55vw]
                px-6 md:px-0
                py-2 md:py-4 2xl:py-6

                scrollbar-none
                md:h-[90vh]
                overflow-y-auto
                overscroll-contain
              "
            >
              <div
                className="
                columns-2 md:columns-3 2xl:columns-4
                gap-1 md:gap-3 2xl:gap-4
                "
              >
                {photos.map((photo, i) => (
                  <div
                    key={i}
                    className="
                    mb-1 md:mb-3 2xl:mb-4
                    "
                  >
                    <img src={photo.src} alt="" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnmRevealText>
      </div>
    </>
  );
}
