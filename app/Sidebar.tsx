import Link from "next/link";
import React from "react";
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";
import MenuLink from "./components/MenuLink";

const Sidebar = () => {
  const menuItems = [
    {
      title: "Pages",
      list: [
        { title: "Dashboard", path: "/dashboard", icon: <MdDashboard /> },
        {
          title: "Users",
          path: "/dashboard/user",
          icon: <MdSupervisedUserCircle />,
        },
        {
          title: "Products",
          path: "/dashboard/products",
          icon: <MdShoppingBag />,
        },
        {
          title: "Transactions",
          path: "/dashboard/transactions",
          icon: <MdAttachMoney />,
        },
      ],
    },
    {
      title: "Analytics",
      list: [
        {
          title: "Revenue",
          path: "/dashboard/revenue",
          icon: <MdWork />,
        },
        {
          title: "Reports",
          path: "/dashboard/reports",
          icon: <MdAnalytics />,
        },
        {
          title: "Teams",
          path: "/dashboard/teams",
          icon: <MdPeople />,
        },
      ],
    },
    {
      title: "User",
      list: [
        {
          title: "Settings",
          path: "/dashboard/settings",
          icon: <MdOutlineSettings />,
        },
        {
          title: "Help",
          path: "/dashboard/help",
          icon: <MdHelpCenter />,
        },
        {
          title: "Logout",
          path: "/dashboard/teams",
          icon: <MdLogout />,
        },
      ],
    },
  ];

  return (
    <>
      <div className="flex gap-5 p-5 align-middle">
        <div className="avatar">
          <div
            className="w-16 mask mask-circle"
            style={{ backgroundColor: "gray" }}
          >
            <img src="https://i.pravatar.cc/300" />
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <h3 className="font-bold">User1</h3>
          <p className="text-xs">Administrator</p>
        </div>
      </div>
      <div className="menu p-5">
        {menuItems.map((menuItem) => (
          <ul key={menuItem.title} className="mb-3">
            <p className="mb-2">{menuItem.title}</p>
            {menuItem.list.map((item) => (
              <li key={item.title}>
                <MenuLink item={item} />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </>
  );
};

export default Sidebar;
