import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import HomePages from "../pages/HomePages";
import Category from "../pages/Category";

import AdminLayout from "../layouts/AdminLayout";
import Products from "../pages/admin/Products";
import Dashboard from "../pages/admin/Dashboard";
import Users from "../pages/admin/Users";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePages />,
    },
    {
        path: "/login",
        element: <LoginPage />,
    },
    {
        path: "/register",
        element: <RegisterPage />,
    },
    {
        path: "/kategori",
        element: <Category />,
    },
    {
        path: "/admin",
        element: <AdminLayout />,
        children: [
            {path: "dashboard", element: <Dashboard />},
            {path: "users", element: <Users />},
            {path: "products", element: <Products />},
        ],
    },
]);