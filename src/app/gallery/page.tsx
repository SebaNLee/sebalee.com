import { AnmRevealGrid } from "@/components/animation/reveal-grid/anm-reveal-grid";
import { AnmRevealText } from "@/components/animation/reveal-text/anm-reveal-text";
import Link from "next/link";

export type GalleryFolder = {
  slug: string;
  title: string;
  city?: string;
  country: string;
  year: number;
  device?: string;
};

export const GALLERIES: GalleryFolder[] = [
  {
    slug: "2015-tandil",
    title: "Tandil",
    country: "Argentina",
    year: 2015,
    device: "GT-I9500",
  },
  {
    slug: "2016-tandil",
    title: "Tandil",
    country: "Argentina",
    year: 2016,
    device: "GT-I9500",
  },
  {
    slug: "2017-japanese-garden",
    title: "Japanese Garden",
    city: "CABA",
    country: "Argentina",
    year: 2017,
    device: "SM-C5000",
  },
  {
    slug: "2018-iguazu",
    title: "Iguazú",
    country: "Argentina/Brazil",
    year: 2018,
    device: "SM-N9500",
  },
  {
    slug: "2019-seoul",
    title: "Seoul",
    country: "South Korea",
    year: 2019,
    device: "SM-N9500",
  },
  {
    slug: "2020-new-york-city",
    title: "New York City",
    country: "United States",
    year: 2020,
    device: "SM-N9500",
  },
  {
    slug: "2023-sydney",
    title: "Sydney",
    country: "Australia",
    year: 2023,
    device: "SM-G998B",
  },
  {
    slug: "2023-seoul",
    title: "Seoul",
    country: "South Korea",
    year: 2023,
    device: "SM-G998B",
  },
  {
    slug: "2023-tokyo",
    title: "Tokyo",
    country: "Japan",
    year: 2023,
    device: "SM-G998B",
  },
  {
    slug: "2023-kyoto",
    title: "Kyoto",
    country: "Japan",
    year: 2023,
    device: "SM-G998B",
  },
  {
    slug: "2023-osaka",
    title: "Osaka",
    country: "Japan",
    year: 2023,
    device: "SM-G998B",
  },
  {
    slug: "2023-london",
    title: "London",
    country: "United Kingdom",
    year: 2023,
    device: "SM-G998B",
  },
];

export default function Gallery() {
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
          <p className="font-satoshi text-3xl font-normal md:font-thin md:text-6xl 2xl:text-7xl">
            GALLERY
          </p>
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
          {[...GALLERIES]
            .sort((a, b) => b.year - a.year)
            .map((gallery, i, arr) => {
              const flagYear = i === 0 || gallery.year !== arr[i - 1].year;

              return (
                <div
                  key={gallery.slug}
                  className="
                    text-sm md:text-base 2xl:text-xl
                    my-0 md:my-0.5 2xl:my-1
                    "
                >
                  {flagYear && (
                    <p
                      className="
                        opacity-50
                        text-base md:text-xl 2xl:text-2xl
                        mt-3 md:mt-8 2xl:mt-10
                        "
                    >
                      {gallery.year}
                    </p>
                  )}
                  <Link href={`/gallery/${gallery.slug}`} className="underline">
                    {`${gallery.title} - `}
                    {gallery.city && `${gallery?.city}, `}
                    {gallery.country}
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}
