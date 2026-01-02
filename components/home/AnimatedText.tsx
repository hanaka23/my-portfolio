// components/AnimatedText.tsx
"use client";

import React from "react";

type Props = {
  text: string;
};

export default function AnimatedText({ text }: Props) {
  return (
    <span className="flex flex-wrap">
      {text.split("").map((char, index) => (
        <span
          key={index}
          className="inline-block opacity-0 translate-y-2 animate-fadeInUp"
          style={{
            animationDelay: `${index * 0.1}s`,
            animationFillMode: "forwards",
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
}
