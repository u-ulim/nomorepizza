import React from "react";
import { BrandCard } from "./BrandCard";
import { brandContent } from "@/constants";

export const Brand = () => {
  return (
    <section className="container flex flex-col gap-[50px]">
      {brandContent.map((item, index) => (
        <BrandCard
          cssProps="flex justify-left gap-[38px]"
          item={item}
          key={index}
        />
      ))}
    </section>
  );
};
