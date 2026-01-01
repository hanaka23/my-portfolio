"use client";

import Link from "next/link";

type HeaderVariant = "top" | "work";

export default function Header({ variant }: { variant: HeaderVariant }) {
  return (
    <nav
      className={`fixed z-[999] w-full ${
        variant === "work"
          ? "bg-[#fff] shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
          : ""
      }`}
    >
      <ol
        className="flex items-center justify-end pr-[24px]
    list-none gap-[24px]
    h-[var(--header-height)]
    [&_a]:!font-bold
    [&_a:hover]:text-[var(--color-text-hover)]
    [&_a]:transition-colors
    [&_a]:duration-200"
      >
        <li>
          <Link href="/#top">top</Link>
        </li>
        <li>
          <Link href="/#works">works</Link>
        </li>
        <li>
          <Link href="/#skills">skills</Link>
        </li>
        <li>
          <Link href="/#about">about me</Link>
        </li>
        <li>
          <Link href="/#contact">contact</Link>
        </li>
      </ol>
    </nav>
  );
}
