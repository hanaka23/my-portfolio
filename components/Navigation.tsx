"use client";

import Link from "next/link";
import React from "react";

export default function Navigation() {
  return (
    <>
      <nav className="fixed right-[20]">
        <ol className="flex list-none gap-[20]">
          <li className=""><Link className="text-[#000] no-underline" href="#">top</Link></li>
          <li className=""><Link className="text-[#000] no-underline" href="#">works</Link></li>
          <li className=""><Link className="text-[#000] no-underline" href="#">about me</Link></li>
          <li className=""><Link className="text-[#000] no-underline" href="#">skills</Link></li>
          <li className=""><Link className="text-[#000] no-underline" href="#">contact</Link></li>
        </ol>
      </nav>
    </>
  )
}
