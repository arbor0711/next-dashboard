import React from "react";
import Card from "./Card";

const CardBox = () => {
  return (
    <div className="flex gap-2">
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default CardBox;
