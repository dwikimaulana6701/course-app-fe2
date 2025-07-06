import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
    const location = useLocation();

    const menuItems = [
        { name: "Product", path: "/admin/products" },
        { name: "Users", path: "/admin/users" },
    ];

    return (
        <aside className="w-64 h-screen bg-gray-100 p-4">
            <h2 className="font-bold text-lg mb-4">Admin Menu</h2>
            <nav className="flex flex-col gap-2">
                {menuItems.map((item) => (
                    <Link
                        key={item.path}
                        to={item.path}
                        className={`py-2 px-4 rounded-md ${
                            location.pathname === item.path
                                ? "bg-blue-500 text-white"
                                : "hover:bg-blue-100"
                        }`}
                    >
                        {item.name}
                    </Link>
                ))}
            </nav>
        </aside>
    );
};

export default Sidebar;
