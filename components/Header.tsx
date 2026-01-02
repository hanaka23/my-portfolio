"use client";

import Link from "next/link";
import { useState } from "react";

type HeaderVariant = "top" | "work";

export default function Header({ variant }: { variant: HeaderVariant }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav
      className={`fixed z-[999] w-full ${
        variant === "work"
          ? "bg-[var(--color-base)]  border-b border-[var(--color-border-gray)]"
          : "bg-[var(--color-base)] border-b border-[var(--color-border-gray)] md:border-none md:bg-transparent" // モバイル時は背景色が必要な場合が多いです
      }`}
    >
      <div className="flex items-center justify-end h-[var(--header-height)] px-[24px]">
        {/* ハンバーガーボタン (モバイルのみ表示) */}
        <button
          onClick={toggleMenu}
          className="relative flex flex-col justify-center items-center w-[24px] h-[20px] md:hidden z-[999]"
          aria-label="メニューを開く"
        >
          {/* 上の線 */}
          <span
            className={`absolute w-full h-[1px] bg-current transition-all duration-300 ${
              isOpen ? "rotate-45" : "-translate-y-[8px]"
            }`}
          />

          {/* 真ん中の線 */}
          <span
            className={`absolute w-full h-[1px] bg-current transition-opacity duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />

          {/* 下の線 */}
          <span
            className={`absolute w-full h-[1px] bg-current transition-all duration-300 ${
              isOpen ? "-rotate-45" : "translate-y-[8px]"
            }`}
          />
        </button>

        {/* ナビゲーションリスト */}
        <ol
          className={`
            fixed top-0 right-0 z-[100] h-screen w-2/3 bg-[var(--color-base)] flex flex-col items-center justify-center gap-8 transition-transform duration-300 ease-in-out
            md:static md:h-auto md:w-auto md:bg-transparent md:flex-row md:translate-x-0 md:gap-[24px] md:p-0
            ${isOpen ? "translate-x-0" : "translate-x-full"}
            list-none
            [&_a]:!font-bold
            [&_a:hover]:text-[var(--color-text-hover)]
            [&_a]:transition-colors
            [&_a]:duration-200
          `}
        >
          <li>
            <Link href="/#top" onClick={closeMenu}>
              top
            </Link>
          </li>
          <li>
            <Link href="/#works" onClick={closeMenu}>
              works
            </Link>
          </li>
          <li>
            <Link href="/#skills" onClick={closeMenu}>
              skills
            </Link>
          </li>
          <li>
            <Link href="/#about" onClick={closeMenu}>
              about me
            </Link>
          </li>
          <li>
            <Link href="/#contact" onClick={closeMenu}>
              contact
            </Link>
          </li>
        </ol>

        {/* 背景オーバーレイ (メニューが開いている時のみ) */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black/50 md:hidden z-100"
            onClick={closeMenu}
          />
        )}
      </div>
    </nav>
  );
}
