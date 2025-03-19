import React from "react";

import { BrandContentItem } from "./BrandCard";

interface BrandTitleProps {
  item: BrandContentItem;
}

export const BrandTitle: React.FC<BrandTitleProps> = ({ item }) => {
  return (
    <div>
      <p className="text-text17 text-textDark">{item.topText}</p>
      <h1 className="text-title56 text-textDark">{item.title}</h1>
      <p className="text-subTitle17 text-gray300">{item.desc01}</p>
      <p className="text-subTitle17 text-gray300">{item.desc02}</p>
    </div>
  );
};
