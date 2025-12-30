"use client";

import React from "react";

export default function Contact() {
  return (
    <>
      <div className="bg-[#fff] w-[1080px] m-auto pt-[60] pb-[60]">
        <h2 className="text-center">Contact</h2>
        <form action="">
          <table className="w-[1089px] m-auto mb-[24px]">
            <tr>
              <th className="py-[24px] w-[40%]">お名前</th>
              <td className="w-[60%]">
                <input
                  type="text"
                  className="block text-[18px] h-[42px] border-gray-100 m-auto w-[90%] focus:outline-none"
                />
              </td>
            </tr>

            <tr>
              <th className="py-[24px] w-[40%]">メールアドレス</th>
              <td className="w-[60%]">
                <input
                  type="e-mail"
                  className="block text-[18px] h-[42px] border-gray-100 m-auto  w-[90%] focus:outline-none"
                />
              </td>
            </tr>

            <tr>
              <th className="py-[24px] w-[40%]">お問い合わせ</th>
              <td className="w-[60%]">
                <input
                  type="text"
                  className="block text-[18px] h-[240px] m-auto  w-[90%] border-gray-100 focus:outline-none"
                />
              </td>
            </tr>
          </table>

          <button type="submit" className="block m-auto">送信</button>
        </form>
      </div>
    </>
  );
}
