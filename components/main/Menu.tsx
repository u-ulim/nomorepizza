import React from "react";
import { MenuTitle } from "./MenuTitle";
import { MenuContents } from "./MenuContents";

export const Menu = () => {
  return (
    <section className="container">
      <MenuTitle
        title="Menu"
        btnHref="/menu"
        btnText="The more Menus"
        // 여기는 인라인 style 대신 className로
        btnClassName="text-primary flex items-center gap-[12px]"
      />
      <div className="flex justify-between">
        <MenuContents />
        <MenuContents />
      </div>
    </section>
  );
};
