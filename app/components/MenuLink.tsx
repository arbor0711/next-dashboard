"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
interface Props {
  item: {
    title: string;
    path: string;
    icon: React.JSX.Element;
  };
}

// usePathname hook from next
const MenuLink = ({ item }: Props) => {
  const pathName = usePathname();
  const activeMenu = pathName === item.path ? "active" : "";

  return (
    <>
      <Link href={item.path} className={activeMenu}>
        {item.icon}
        {item.title}
      </Link>
    </>
  );
};

export default MenuLink;
