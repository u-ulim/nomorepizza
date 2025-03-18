// item에 들어갈 데이터 구조 (필요에 따라 수정)
export interface BrandContentItem {
  id: number;
  src: string;
  topText: string;
  title: string;
  desc01: string;
  desc02: string;
}

// BrandContents 컴포넌트의 props 인터페이스
export interface BrandCardProps {
  cssProps: string;
  item: BrandContentItem; // item은 선택적으로 전달될 수 있습니다.
}

interface BrandContentProps {
  cssProps: string;
  item: BrandContentItem;
}

import React from "react";

import Image from "next/image";
import { BrandTitle } from "./BrandTitle";

export const BrandCard: React.FC<BrandCardProps> = ({
  item,
  cssProps,
}: BrandContentProps) => {
  return (
    <div className={cssProps}>
      <Image
        src={item.src}
        alt={item.title}
        width={616}
        height={502}
        className="rounded-[12px]"
      />
      <BrandTitle item={item} />
    </div>
  );
};
