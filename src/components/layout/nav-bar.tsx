"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/projects", label: "Projects" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="justify-items-center">
      <nav className="fixed flex gap-6">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={clsx(
              "hover:font-semibold transition",
              pathname === href && "font-semibold",
            )}
          >
            {label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
