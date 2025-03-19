import React from "react";
import { BrandCard } from "./BrandCard";
import { brandContent } from "@/constants";

export const Brand = () => {
  return (
    <section className="container flex flex-col gap-[50px]">
      {brandContent.map((item, index) => {
        // 홀수 index 판별 (0-based 이므로 % 2 ! == 0)
        const isOdd = index % 2 !== 0;
        return (
          <BrandCard
            cssProps={`flex gap-[38px] items-center ${
              isOdd ? "flex-row-reverse text-right" : "justify-start"
            }`}
            item={item}
            key={index}
            isOdd={isOdd}
          />
        );
      })}
    </section>
  );
};
