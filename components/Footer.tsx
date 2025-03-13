import React from "react";
import Link from "next/link";

import LetterLogo from "@/src/assets/letterLogo";

export const Footer = () => {
  return (
    <div className="flex items-center justify-center flex-col container">
      <Link href="/">
        {/* 로고 */}
        <LetterLogo className="w-[265px] text-primary mb-[40px]" />
      </Link>
      <div className="items-center flex flex-col">
        <p>
          서울특별시 중구 동호로 14길 19, 4층 427호 (주)노모어에프앤비 |
          노모어피자대표: 강병양 | 사업자등록번호 511-88-02603
        </p>
        <p className="mb-[20px]">문의: nomorepizza@naver.com</p>
      </div>
      <div>
        <p>copyright © 2024 - nomore pizza All rights reserved.</p>
      </div>
    </div>
  );
};
