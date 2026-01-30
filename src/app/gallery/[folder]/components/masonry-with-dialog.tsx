"use client";

import clsx from "clsx";
import { useRef, useState } from "react";
import styles from "./masonry-with-dialog.module.css";
import { MasronySkeleton } from "./masonry-skeleton";
import Image from "next/image";

type Photo = { path: string };

export function MasonryWithDialog({ photos }: { photos: Photo[] }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [active, setActive] = useState<string | null>(null);

  const [loaded, setLoaded] = useState(0);
  const flagLoaded = loaded === photos.length;

  const open = (src: string) => {
    setActive(src);
    dialogRef.current?.showModal();
  };

  const close = () => {
    dialogRef.current?.close();
    setActive(null);
  };

  return (
    <>
      <div className="relative">
        {!flagLoaded && (
          <div className="absolute inset-0 z-10">
            <MasronySkeleton />
          </div>
        )}
        <div
          className={clsx(
            "columns-2 md:columns-3 2xl:columns-4",
            "gap-3 md:gap-4",
            !flagLoaded && "opacity-0",
          )}
        >
          {photos.map((photo, i) => (
            <div
              key={i}
              className={clsx(
                styles.item,
                "mb-1 md:mb-2",
                "cursor-pointer inline-block",
              )}
              onClick={() => open(photo.path)}
            >
              <Image
                src={photo.path}
                alt=""
                width={500}
                height={500}
                onLoad={() => setLoaded((value) => value + 1)}
              />
            </div>
          ))}
        </div>
      </div>

      {active && (
        <dialog
          ref={dialogRef}
          onClick={close}
          className="
            top-1/2 left-1/2
            -translate-x-1/2 -translate-y-1/2
            border bg-transparent outline-none
          "
        >
          {/* full quality when dialog */}
          <img
            src={active}
            alt=""
            onClick={() => close()}
            className="
              max-w-[95vw]
              max-h-[90vh]
            "
          />
        </dialog>
      )}
    </>
  );
}
