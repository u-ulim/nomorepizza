// 네비게이션 메뉴
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

// 메인 슬라이드
import mainImg01 from "@/src/assets/home/slideSection/slide01.png";
import mainImg02 from "@/src/assets/home/slideSection/slide02.png";
import mainImg03 from "@/src/assets/home/slideSection/slide03.png";
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

// 메인 메뉴들
import menuImg01 from "@/src/assets/home/menuSection/옥수수새우피자.png";
import menuImg02 from "@/src/assets/home/menuSection/바질마스카포네 뇨끼.png";
export const menuContentImages = [
  {
    id: 1,
    src: `${menuImg01.src}`,
    title: "옥수수 새우 피자",
    text: "매콤한 양념에 숙성된 통새우와 달콤한 하바나 통 옥수수의 토핑으로 구성된 노모어피자의 인기메뉴",
  },
  {
    id: 2,
    src: `${menuImg02.src}`,
    title: "바질마스카포네 뇨끼 피자",
    text: "바질과 썬드라이토마토 그리고 마스카포네 치즈의 풍미와 쫄깃한 뇨끼를 함께 즐길 수 있는 피자",
  },
];
