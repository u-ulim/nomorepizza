import { MenuBtn } from "../MenuBtn";

// 1) props 타입 선언
interface MenuTitleProps {
  title: string;
  btnHref: string;
  btnText: string;
  btnClassName?: string; // 클래스 이름을 전달
}

// 2) React.FC에 제네릭으로 props 타입 전달
export const MenuTitle: React.FC<MenuTitleProps> = ({
  title,
  btnHref,
  btnText,
  btnClassName,
}) => {
  return (
    <div className="flex justify-between items-center mb-[30px]">
      <h1 className="text-title56">{title}</h1>
      <MenuBtn href={btnHref} className={btnClassName}>
        {btnText}
      </MenuBtn>
    </div>
  );
};
