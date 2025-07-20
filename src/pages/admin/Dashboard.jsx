import React, { useEffect, useState } from "react";
import { getProducts, getUsers } from "../../services/api";
import { ShoppingCartIcon, UserGroupIcon } from "@heroicons/react/24/outline";

const Dashboard = () => {
  const [productCount, setProductCount] = useState(0);
  const [userCount, setUserCount] = useState(0);

  useEffect(() => {
    fetchCounts();
  }, []);

  const fetchCounts = async () => {
    try {
      const [productRes, userRes] = await Promise.all([
        getProducts(),
        getUsers(),
      ]);

      setProductCount(productRes.data.length);
      setUserCount(userRes.data.length);
    } catch (error) {
      console.error("Failed to fetch counts:", error);
    }
  };

  const cards = [
    {
      title: "Total Produk",
      count: productCount,
      icon: <ShoppingCartIcon className="w-10 h-10 text-blue-600" />,
      bg: "bg-blue-100",
      border: "border-blue-300",
      text: "text-blue-900",
    },
    {
      title: "Total Pengguna",
      count: userCount,
      icon: <UserGroupIcon className="w-10 h-10 text-green-600" />,
      bg: "bg-green-100",
      border: "border-green-300",
      text: "text-green-900",
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 font-poppins">
        Admin - Dashboard
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`p-5 rounded-2xl border shadow-sm flex items-center justify-between ${card.bg} ${card.border}`}
          >
            <div>
              <h2 className={`text-lg font-medium mb-2 ${card.text}`}>
                {card.title}
              </h2>
              <p className={`text-4xl font-bold ${card.text}`}>
                {card.count}
              </p>
            </div>
            <div>{card.icon}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
