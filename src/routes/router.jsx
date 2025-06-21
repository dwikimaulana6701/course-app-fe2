import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import HomePages from "../pages/HomePages";
import Category from "../pages/Category";
import AdminPage from "../pages/Admin";

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
        path: "/admin",
        element: <AdminPage />,
    },
    {
        path: "/kategori",
        element: <Category />,
    },
]);