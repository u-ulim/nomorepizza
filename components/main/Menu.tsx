import React from "react";
import { MenuTitle } from "./MenuTitle";

export const Menu = () => {
  return (
    <section className="container">
      <MenuTitle
        title="Menu"
        btnHref="/about"
        btnText="About 페이지로 이동"
        btnStyle={{ color: "blue" }}
      />
    </section>
  );
};
