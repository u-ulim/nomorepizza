import React, { CSSProperties } from "react";
import Link from "next/link";

interface MenuBtnProps {
  href: string;
  children: React.ReactNode;
  style?: CSSProperties;
}

export function MenuBtn({ href, children, style }: MenuBtnProps) {
  return (
    <Link href={href} style={style}>
      {children}
    </Link>
  );
}
