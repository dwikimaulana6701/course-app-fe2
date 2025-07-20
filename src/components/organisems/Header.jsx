import React, { useState } from "react";
import Logo from "../../assets/images/Logo.svg";
import Avatar from "../../assets/images/profil.jpg";
import { useLocation, Link } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const isLoggedIn = !!currentUser;

  const isAuthPage = location.pathname === "/login" || location.pathname === "/register";

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    window.location.href = "/login";
  };

  return (
    <div className="bg-white shadow-md px-6 py-4 md:px-[120px] md:py-3 md:h-20 h-[74px] relative z-50 border-b border-grayBorder">
      <div className="flex items-center justify-between h-full">
        <Link to="/">
          <img
            className="w-[145px] md:w-[193px] px-1 md:px-[22px] box-content"
            src={Logo}
            alt="logo"
          />
        </Link>

        {!isAuthPage && (
          <div className="hidden md:flex items-center gap-9">
            <Link to="/kategori" className="font-dmsans font-medium text-base tracking-extra-tight text-grayCustom">Kategori</Link>
            {!isLoggedIn ? (
              <div className="flex gap-4">
                <Link to="/login" className="bg-[#3ECF4C] rounded-x font-dmsans font-bold text-base text-white py-x px-[26px]">
                  Login
                </Link>
                <Link to="/register" className="border rounded-x font-dmsans font-bold text-base text-[#3ECF4C] py-x px-[26px]">
                  Register
                </Link>
              </div>
            ) : (
              <div className="relative">
                <img
                  className="w-11 h-11 rounded-lg cursor-pointer bg-cover bg-"
                  src={Avatar}
                  alt="profil"
                  onClick={toggleDropdown}
                />
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg py-2 z-50">
                    <p className="px-4 py-2 text-sm text-gray-800">Hi, {currentUser?.name || "User"}</p>
                    <Link to="/admin/dashboard" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Admin</Link>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {!isAuthPage && (
          <button onClick={toggleMenu} className="md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 24 24" strokeWidth="1.5"
              stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
            </svg>
          </button>
        )}
      </div>

      {isMenuOpen && !isAuthPage && (
        <div className="md:hidden mt-2 bg-white border rounded-md shadow-md p-4 space-y-3">
          <Link to="/kategori" className="block font-dmsans font-medium text-base tracking-extra-tight text-grayCustom">Kategori</Link>
          {!isLoggedIn ? (
            <>
              <Link to="/login" className="block text-[#3ECF4C] font-bold">
                Login
              </Link>
              <Link to="/register" className="block text-[#3ECF4C] font-bold">
                Register
              </Link>
            </>
          ) : (
            <>
              <p className="text-gray-800">Hi, {currentUser?.name || "User"}</p>
              <Link to="/admin/dashboard" className="block text-gray-700">Admin</Link>
              <button
                onClick={handleLogout}
                className="w-full text-left text-red-500"
              >
                Logout
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
