"use client";

import React from "react";
import Link from "next/link";
import { works } from "@/lib/works";

export default function Works() {
  return (
    <div className="bg-[#fff] w-[1080px] m-auto pt-[60] pb-[60]">
      <h2 className="text-center">Skills</h2>

      <div className="flex justify-center gap-[30] flex-wrap w-full">
        {works.map((work) => (
          <div key={work.id} className="text-center">
            <div className="w-[360px] h-[240px] flex items-center">
              <Link href={`/works/${work.id}`}>
                <img
                  className="w-[90%] h-auto"
                  src={`/images/works/${work.image?.[0]?.src ?? "noimage.png"}`}
                  alt={work.image?.[0]?.alt ?? work.title}
                />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
