import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true, // 컨테이너를 중앙 정렬
      padding: "15px", // 좌우 패딩 15px 적용
      screens: {
        xl: "1280px", // xl 이상에서 컨테이너 최대 너비 1280px (즉, 내부 컨텐츠는 1250px)
      },
    },
    extend: {
      colors: {
        primary: "#FF7900",
        primaryLight: "#FFD27F",
        primaryDark: "#CC5A00",
        primaryAccent: "#FF8533",

        secondary: "#333333",
        secondaryLight: "#4d4d4d",

        white: "#ffffff",
        black: "#1a1a1a",

        pink100: "#fff8f5",
        pink200: "#fbe9e7",

        gray50: "#f5f5f5",
        gray100: "#f7f7f7",
        gray200: "#f0f4f8",
        gray300: "#666666",
        gray400: "#333333",

        orange100: "#fde6d6",
        orange200: "#FFF1e6",
        orange300: "#fff3e0",
        orange400: "#fae3c6",

        textLight: "#fffff0",
        textDark: "#1a1a1a",
      },

      fontSize: {
        title56: [
          "56px",
          { fontWeight: "bold", lineHeight: "67px", letterSpacing: "-1%" },
        ],
        title24: [
          "24px",
          { fontWeight: "600", lineHeight: "32px", letterSpacing: "-1%" },
        ],

        text17: ["17px", { lineHeight: "auto", letterSpacing: "-2%" }],
        text20: ["20px", { lineHeight: "auto", letterSpacing: "-2%" }],
        textBold20: [
          "20px",
          { fontWeight: "bold", lineHeight: "auto", letterSpacing: "-2%" },
        ],
        text12: ["12px", { lineHeight: "auto", letterSpacing: "-2%" }],

        subTitle28: ["28px", { lineHeight: "36px", letterSpacing: "-2%" }],
        subTitle17: [
          "17px",
          { fontWeight: "600", lineHeight: "25px", letterSpacing: "-3%" },
        ],

        subTitleBold28: [
          "28px",
          { fontWeight: "600", lineHeight: "34px", letterSpacing: "-2%" },
        ],
        subTitleBold36: [
          "36px",
          { fontWeight: "bold", lineHeight: "36px", letterSpacing: "-2%" },
        ],
        subTitleBold12: [
          "12px",
          { fontWeight: "600", lineHeight: "25px", letterSpacing: "-3%" },
        ],
      },
    },
  },
  plugins: [],
} satisfies Config;
