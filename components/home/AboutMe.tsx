"use client";

import React from "react";

export default function AboutMe() {
  return (
    <>
      <h3>About Me</h3>
      <div>
        <div className="flex items-center gap-[24px]">
          <div className="w-[200px] h-[200px] rounded-full overflow-hidden">
            <a href="">
              <img
                className="object-cover w-full h-full scale-140"
                src="/images/ai_icon.png"
                alt="プロフィール　画像"
              />
            </a>
          </div>
          <p>
            熊本県出身。熊本高専卒業。主に制御系と情報系を学習し、Python ,C言語
            ,IOT,AIの知識があります。
            <br />
            web、モバイル、IOTと色んなことにとても興味があり、様々なことに挑戦をし続けていきたいです。
            <br />
            ユーザーに感動を届ける、ワクワクするプロダクトを全力を注いで生み出していきたいです！
            <br />
          </p>
        </div>
      </div>
    </>
  );
}
