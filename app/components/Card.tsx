import React from "react";
import { MdSupervisedUserCircle } from "react-icons/md";

const Card = () => {
  return (
    <div className=" flex-1 card p-5 -bg--bgSoft hover:bg-slate-800">
      <div className="flex gap-2 justify-center align-text-top">
        <div>
          <MdSupervisedUserCircle />
        </div>
        <div className="flex-1">
          <p className="text-xs">Total Users</p>
          <p className="font-bold text-lg">10298</p>
          <p className="text-xs">
            <span className="text-lime-400">12%</span>more than previous week
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
