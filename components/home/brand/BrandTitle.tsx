import React from "react";

import { BrandContentItem } from "./BrandCard";

interface BrandTitleProps {
  item: BrandContentItem;
}

export const BrandTitle: React.FC<BrandTitleProps> = ({ item }) => {
  return (
    <div>
      <p>{item.topText}</p>
      <h1></h1>
      <p></p>
      <p></p>
    </div>
  );
};
