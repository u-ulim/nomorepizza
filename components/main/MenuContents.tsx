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

import { RightArrow } from "../icon/Icon";

export const MenuContents: React.FC<MenuContentsProps> = ({ item }) => {
  return (
    <div className="relative w-[616px] h-[524px] bg-orange300 rounded-[12px] overflow-hidden">
      <Image src={item.src} alt={item.title} width={616} height={372} />
      <div className="flex items-center gap-[7px]">
        <h2>{item.title}</h2>
        <RightArrow />
      </div>
      <p>{item.text}</p>
    </div>
  );
};
