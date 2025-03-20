interface movieContentProps {
  src?: string;
}

import React from "react";

import { movieContent } from "@/constants";

export const Movie: React.FC<movieContentProps> = () => {
  return (
    <section className="container">
      <video
        src={movieContent[0].src}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover object-center border border-pink rounded-[24px]"
      />
    </section>
  );
};
