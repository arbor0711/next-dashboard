"use client";

import { usePathname } from "next/navigation";
import React from "react";
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";

const Navbar = () => {
  const pathName = usePathname();

  return (
    <div
      className="navbar rounded-md"
      style={{ backgroundColor: "var(--bgSoft)" }}
    >
      <div className="flex-1">
        <h2 className="text-xl capitalize" style={{ color: "var(--textSoft)" }}>
          {pathName.split("/").pop()}
        </h2>
      </div>

      <div className="flex-none gap-2">
        <div className="flex justify-center align-middle gap-2 input input-bordered">
          <div className="my-auto">
            <MdSearch />
          </div>
          <div className="form-control flex my-auto">
            <input
              type="text"
              placeholder="Search"
              className="bg-inherit w-24 md:w-auto"
            />
          </div>
        </div>

        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="indicator">
              <MdNotifications />
              {/* <span className="badge badge-sm indicator-item">8</span> */}
            </div>
          </label>
          <div
            tabIndex={0}
            className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
          >
            <div className="card-body">
              <span className="font-bold text-lg">8 Items</span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
          </div>
        </div>

        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="indicator">
              <MdOutlineChat />
              {/* <span className="badge badge-sm indicator-item">8</span> */}
            </div>
          </label>
          <div
            tabIndex={0}
            className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
          >
            <div className="card-body">
              <span className="font-bold text-lg">8 Items</span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
          </div>
        </div>

        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="indicator">
              <MdPublic />
              {/* <span className="badge badge-sm indicator-item">8</span> */}
            </div>
          </label>
          <div
            tabIndex={0}
            className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
          >
            <div className="card-body">
              <span className="font-bold text-lg">8 Items</span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
