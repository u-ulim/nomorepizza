export const navMenus = [
  {
    title: "메뉴",
    subItems: ["전체메뉴", "피자", "사이드&파스타"],
  },
  {
    title: "매장정보",
    subItems: ["지역명 찾기", "매장명 찾기", "현위치 찾기"],
  },
  {
    title: "창업문의",
    subItems: [
      "창업문의",
      "매장별 매출 안내",
      "개설절차",
      "창업 비용 및 혜택",
      "마케팅 및 스페셜",
    ],
  },
  {
    title: "브랜드",
    subItems: ["Overview", "CEO", "History", "BI"],
  },
];

import mainImg01 from "@/src/assets/slide01.png";
import mainImg02 from "@/src/assets/slide02.png";
import mainImg03 from "@/src/assets/slide03.png";

export const mainSlides = [
  {
    type: "image",
    id: 1,
    src: `${mainImg01.src}`,
    text: "Welcome to NoMorePizza",
  },
  {
    type: "image",
    id: 2,
    src: `${mainImg02.src}`,
    text: "Best Place for No Pizza",
  },
  {
    type: "image",
    id: 3,
    src: `${mainImg03.src}`,
    text: "Enjoy Something Different",
  },
];
