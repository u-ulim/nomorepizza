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

import mainImg01 from "@/src/assets/1920Main.png";

export const mainSlides = [
  {
    id: 1,
    image: `${mainImg01.src}`,
    text: "Welcome to NoMorePizza",
  },
  { id: 2, image: "/images/slide2.jpg", text: "Best Place for No Pizza" },
  { id: 3, image: "/images/slide3.jpg", text: "Enjoy Something Different" },
];
