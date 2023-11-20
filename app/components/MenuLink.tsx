import Link from "next/link";
import React from "react";
interface Props {
  item: {
    title: string;
    path: string;
    icon: React.JSX.Element;
  };
}
const MenuLink = ({ item }: Props) => {
  return (
    <>
      <Link href={item.path} className="active:bg-blue-600">
        {item.icon}
        {item.title}
      </Link>
    </>
  );
};

export default MenuLink;
