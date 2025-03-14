import React, { CSSProperties } from "react";
import Link from "next/link";

import { RightArrow } from "../icon/Icon";

interface MenuBtnProps {
  href: string;
  children: React.ReactNode;
  style?: CSSProperties;
  className?: string;
}

export function MenuBtn({ href, children, style, className }: MenuBtnProps) {
  return (
    <Link href={href} style={style} className={className}>
      {children}
      <RightArrow className="text-primary" />
    </Link>
  );
}
