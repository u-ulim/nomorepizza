import React from "react";
import Link from "next/link";

import LetterLogo from "@/src/assets/letterLogo";

export const Footer = () => {
  return (
    <div className="flex  items-center justify-center container">
      <Link href="/">
        {/* 로고 */}
        <LetterLogo className="w-[265px] text-primary" />
      </Link>
    </div>
  );
};
