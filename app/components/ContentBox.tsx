import React, { ReactElement } from "react";
interface Props {
  children: ReactElement;
}

const ContentBox = ({ children }: Props) => {
  return <div className=" -bg--bgSoft p-5 rounded-xl">{children}</div>;
};

export default ContentBox;
