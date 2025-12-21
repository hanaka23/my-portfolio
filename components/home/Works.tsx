"use client";

import React from "react";
import Link from "next/link";
import { works } from "@/lib/works";

export default function Works() {
  return (
    <div className="bg-[#000] w-full pt-[60] pb-[60]">
      <h2 className="text-center text-[#fff]">Works</h2>

      <div className="flex justify-center gap-[30] text-[#fff] flex-wrap w-full">
        {works.map((work) => (
          <div key={work.id} className="text-center">
            <div>
              <Link href={`/works/${work.id}`}>
                <img
                  className="w-[360] h-[240]"
                  src={`/images/works/${work.image?.[0]?.src ?? "noimage.png"}`}
                  alt={work.image?.[0]?.alt ?? work.title}
                />
              </Link>
            </div>
            <p>{work.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
