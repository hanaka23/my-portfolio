"use client";

import React from "react";
import Link from "next/link";
import { works } from "@/lib/works";

export default function Works() {
  return (
    <div className="bg-[#fff] max-w-[1080px] mx-auto py-[60px]">
      <h2 className="text-center text-2xl font-semibold mb-10">
        Works
      </h2>

      <div className="flex justify-center gap-[30px] flex-wrap w-full">
        {works.map((work) => (
          <Link
            key={work.id}
            href={`/works/${work.id}`}
            className="
              group
              w-[360px]
              transition
              duration-300
              ease-out
              hover:-translate-y-2
              hover:shadow-xl
            "
          >
            <div className="bg-[#fff] rounded-lg overflow-hidden">
              <div className="h-[240px] flex items-center justify-center">
                <img
                  src={`/images/works/${work.image?.[0]?.src ?? "noimage.png"}`}
                  alt={work.image?.[0]?.alt ?? work.title}
                  className="
                    w-[90%]
                    h-auto
                    transition
                    duration-300
                    ease-out
                    group-hover:scale-105
                  "
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
