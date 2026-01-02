"use client";

import React from "react";
import RadarChart from "./RadarChart";

export default function Skills() {
  return (
    <>
      <div className="py-[32px] md:py-[64px]">
        <h3 className="text-center">Skills</h3>
        <div className="flex justify-center gap-[30] w-full h-[500]">
          <RadarChart />
        </div>
        <div className="w-fit ml-auto text-[12px]">
          <p>レベル 定義</p>
          <p>
            1：入門 / 初心者　2：基礎 / 学習中　3：実務レベル / 中級 　4：上級 /
            応用力あり　5：専門家 / 自走可能
          </p>
        </div>
      </div>
    </>
  );
}
