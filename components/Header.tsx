"use client";

import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <nav className="fixed right-[20px]">
      <ol className="flex list-none gap-[20px]">
        <li>
          <Link className="text-[#000] no-underline" href="#top">
            top
          </Link>
        </li>
        <li>
          <Link className="text-[#000] no-underline" href="#works">
            works
          </Link>
        </li>
        <li>
          <Link className="text-[#000] no-underline" href="#skills">
            skills
          </Link>
        </li>
        <li>
          <Link className="text-[#000] no-underline" href="#about">
            about me
          </Link>
        </li>
        <li>
          <Link className="text-[#000] no-underline" href="#contact">
            contact
          </Link>
        </li>
      </ol>
    </nav>
  );
}
