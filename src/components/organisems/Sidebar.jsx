import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  UsersIcon,
  RectangleStackIcon,
  HomeIcon,
} from "@heroicons/react/24/solid";

const Sidebar = () => {
  const location = useLocation();
  const menuItems = [
    { name: "Dashboard", path: "/admin/dashboard", icon: <HomeIcon className="w-6 h-6" /> },
    { name: "Users", path: "/admin/users", icon: <UsersIcon className="w-6 h-6" /> },
    { name: "Products", path: "/admin/products", icon: <RectangleStackIcon className="w-6 h-6" /> },
  ];

  return (
    <div className="h-full py-6 flex flex-col items-center md:items-stretch">
      <div className="flex flex-col gap-4">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              to={item.path}
              key={item.path}
              className={`flex items-center md:justify-start justify-center gap-3 px-4 py-2 rounded-md transition-colors
                ${isActive ? 'bg-green-200 text-green-700' : 'text-gray-700 hover:bg-gray-200'}
              `}
              title={item.name}
            >
              {item.icon}
              <span className="hidden md:inline">{item.name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
