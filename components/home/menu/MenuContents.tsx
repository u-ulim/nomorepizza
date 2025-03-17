interface MenuItem {
  src: string;
  title: string;
  text: string;
}

interface MenuContentsProps {
  item: MenuItem;
}

import React from "react";

import Image from "next/image";

import { RightArrow } from "@/components/icon/Icon";

export const MenuContents: React.FC<MenuContentsProps> = ({ item }) => {
  return (
    <div className="relative w-[616px] h-[524px] bg-orange300 rounded-[12px] overflow-hidden">
      <Image
        src={item.src}
        alt={item.title}
        width={616}
        height={372}
        className="mb-[32px]"
      />
      <div className="flex items-center gap-[7px] justify-center mb-[10px]">
        <h2 className="text-subTitleBold28 text-textDark">{item.title}</h2>
        <RightArrow width="8px" className="text-textDark" />
      </div>
      <p className="w-[390px] text-gray300 text-subTitle17 mx-auto">
        {item.text}
      </p>
    </div>
  );
};
