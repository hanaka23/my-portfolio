"use client";

import React from "react";

export default function Works() {
  return (
    <>
    <div className="bg-[#000] w-full pt-[60] pb-[60]">
      <div className="flex justify-center gap-[30] text-[#fff]">
        <div className="text-center">
          <div>
            <a href=""><img className="w-[360] h-[240]" src="/images/IMG_3401.jpg" alt="頭部方向推定　画像" /></a>
          </div>
          <p>頭部方向推定を用いたカメラ操作アルゴリズム（IoT）</p>
        </div>

        <div className="text-center">
          <div>
            <a href=""><img className="w-[360] h-[240]" src="/images/Swift_quiz.jpg" alt="" /></a>
          </div>
          <p>クイズアプリ（Swift）</p>
        </div>

        <div className="text-center">
          <div>
            <a href=""><img className="w-[360] h-[240]" src="/images/Swift_lifegraph.jpg" alt="" /></a>
          </div>
          <p>人生グラフアプリ（Swift）</p>
        </div> 
      </div>
    </div>
    
    
    
    </>
  )
}
