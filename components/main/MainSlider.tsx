"use client";

import { motion, useAnimation } from "framer-motion";

import { useEffect, useState } from "react";
import { mainSlides } from "@/constants";

export const MainSlider = () => {
  const controls = useAnimation();
  return (
    <div className="w-full h-screen overflow-hidden">
      {/* 슬라이드 컨테이너 */}
      <motion.div
        className="flex w-full h-full"
        animate={controls}
        transition={{ type: "spring", stiffness: 100 }}
      >
        {mainSlides.map((slide) => (
          <div
            key={slide.id}
            className="w-full h-full flex-shrink-0 flex items-center justify-center bg-cover bg-center bg-orange200"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <h1 className="text-title56 text-black">{slide.text}</h1>
          </div>
        ))}
      </motion.div>

      {/* 좌우 버튼 */}
      {/* <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 text-white p-4 rounded-full"
      >
        ◀
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 text-white p-4 rounded-full"
      >
        ▶
      </button> */}
    </div>
  );
};

export default MainSlider;
