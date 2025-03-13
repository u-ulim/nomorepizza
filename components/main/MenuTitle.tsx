import React, { CSSProperties } from "react";
import { MenuBtn } from "./MenuBtn";

// 1) props 타입 선언
interface MenuTitleProps {
  title: string;
  btnHref: string;
  btnText: string;
  btnStyle?: CSSProperties; // 선택적으로 사용할 수 있게 ? 붙임
}

// 2) React.FC에 제네릭으로 props 타입 전달
export const MenuTitle: React.FC<MenuTitleProps> = ({
  title,
  btnHref,
  btnText,
  btnStyle,
}) => {
  return (
    <div className="flex justify-between items-center">
      <h1>{title}</h1>
      <MenuBtn href={btnHref} style={btnStyle}>
        {btnText}
      </MenuBtn>
    </div>
  );
};
