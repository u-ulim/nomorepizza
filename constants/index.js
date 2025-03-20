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

// 브랜드 컨텐츠
import brandImg01 from "@/src/assets/home/brandSection/BrandCard01.png";
import brandImg02 from "@/src/assets/home/brandSection/BrandCard02.png";
import brandImg03 from "@/src/assets/home/brandSection/BrandCard03.png";
export const brandContent = [
  {
    id: 1,
    src: `${brandImg01.src}`,
    topText: "최고의 순간을 노모어피자와!",
    title: "Brand Story",
    desc01: `"더이상의 피자는 없다",`,
    desc02: "소금 우유를 사용한 노모어만의 촉촉한 도우",
  },
  {
    id: 2,
    src: `${brandImg02.src}`,
    topText: "노모어피자와 함께 할 점주님을 모집합니다!",
    title: "With No More",
    desc01: `맞춤형 창업과 파격적인 마케팅,`,
    desc02: "다시 찾을 수 밖에 없는 피자",
  },
  {
    id: 3,
    src: `${brandImg03.src}`,
    topText: "노모어피자 매장을 찾아보세요!",
    title: "Store",
    desc01: `매장이 이렇게나 많이? 짧은 시간동안,`,
    desc02: "2023년 기준 80개의 지점으로 자리매김",
  },
];

// 뮤비 컨텐츠
export const movieContent = [
  {
    id: 1,
    src: "/movieSection/nomore.mp4",
  },
];
