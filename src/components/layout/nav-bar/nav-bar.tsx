"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { AnmScannerText } from "../../animation/scanner-text/anm-scanner-text";
import styles from "./nav-bar.module.css";

const links = [
  { href: "/", label: "HOME" },
  { href: "/projects", label: "PROJECTS" },
  { href: "/gallery", label: "GALLERY" },
  { href: "/lab", label: "LAB" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="-translate-y-1/2">
      <AnmScannerText delay={2000}>
        <nav className="flex gap-7 px-5 py-2">
          {links.map(({ href, label }) => (
            <Link key={href} href={href}>
              <span
                className={clsx(
                  styles.item,
                  pathname.split("/")[1] === href.split("/")[1] &&
                    styles.active,
                  "px-[0.2rem] py-[0.05rem] tracking-wider",
                  "text-[0.6rem] md:text-xs 2xl:text-base",
                )}
              >
                {label}
              </span>
            </Link>
          ))}
        </nav>
      </AnmScannerText>
    </div>
  );
}
