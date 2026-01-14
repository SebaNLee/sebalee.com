"use client";

import clsx from "clsx";
import { useRef, useState } from "react";
import styles from "./masonry-dialog.module.css";

type Photo = { path: string };

export function MasonryDialog({ photos }: { photos: Photo[] }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [active, setActive] = useState<string | null>(null);

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
      <div
        className="
          columns-2 md:columns-3 2xl:columns-4
        "
      >
        {photos.map((photo, i) => (
          <div
            key={i}
            className={clsx(
              styles.item,
              "mb-3 md:mb-3 2xl:mb-4",
              "cursor-pointer",
            )}
            onClick={() => open(photo.path)}
          >
            <img src={photo.path} alt="" />
          </div>
        ))}
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
          <img
            src={active}
            alt=""
            onClick={() => close()}
            className="
              max-w-[85vw]
              max-h-[80vh]
            "
          />
        </dialog>
      )}
    </>
  );
}
