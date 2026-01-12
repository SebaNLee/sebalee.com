"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { AnmRevealText } from "../../animation/scanner-text/anm-scanner-text";
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
    <div className="absolute left-[3vw] right-[3vw] top-[3.4vh] bottom-[92.6vh] flex justify-center p-1">
      <AnmRevealText delay={1500}>
        <nav className="flex gap-7 px-3">
          {links.map(({ href, label }) => (
            <Link key={href} href={href}>
              <span
                className={clsx(
                  styles.item,
                  pathname === href && styles.active,
                  "text-xs px-[0.2rem] py-[0.05rem]",
                )}
              >
                {label}
              </span>
            </Link>
          ))}
        </nav>
      </AnmRevealText>
    </div>
  );
}
