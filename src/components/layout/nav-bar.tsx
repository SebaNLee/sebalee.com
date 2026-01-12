"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { AnmRevealText } from "../animation/scanner-text/anm-scanner-text";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/projects", label: "Projects" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    //border border-neutral-950 rounded-2xl
    <div className="absolute left-[3vw] right-[3vw] top-[3.4vh] bottom-[92.6vh] flex justify-center p-1">
      <AnmRevealText delay={1500}>
        <nav className="flex gap-6">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={clsx(
                "hover:font-semibold transition",
                pathname === href && "font-semibold",
              )}
            >
              <span className="text-sm">{label}</span>
            </Link>
          ))}
        </nav>
      </AnmRevealText>
    </div>
  );
}
