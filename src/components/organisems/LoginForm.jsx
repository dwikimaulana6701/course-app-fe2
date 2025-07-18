import React, { useState } from "react";
import { loginUser } from "../../services/api/userApi";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email.trim()) {
      newErrors.email = "Email wajib diisi.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Format email tidak valid.";
    }
    if (!formData.password) {
      newErrors.password = "Kata sandi wajib diisi.";
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await loginUser(formData.email, formData.password);
      const matchedUser = response.data[0];

      if (!matchedUser) {
        setErrors({ password: "Email atau Kata Sandi salah." });
        return;
      }

      localStorage.setItem("currentUser", JSON.stringify(matchedUser));
      alert("Login Berhasil");
      setFormData({ email: "", password: "" });
      navigate("/");
    } catch (error) {
      console.error("Login error:", error);
      alert("Login gagal. Silakan coba lagi.");
      return;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-4">
        <div id="email">
          <label
            className="text-grayCustom font-dmsans tracking-extra-tight text-sm md:font-normal md:text-base md:text-[#4A505C]"
            htmlFor="email"
          >
            E-Mail<span className="text-[#FF5C2B]"> *</span>
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border border-grayBorder rounded-x w-full text-black h-12 px-3 mt-1"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div id="password">
          <label
            className="text-grayCustom font-dmsans tracking-extra-tight text-sm lg:font-normal lg:text-base lg:text-[#4A505C]"
            htmlFor="password"
          >
            Kata Sandi<span className="text-[#FF5C2B]"> *</span>
          </label>
          <div className="relative w-full">
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="border border-grayBorder rounded-[10px] w-full h-12 px-3 mt-2"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-4 flex items-center text-disabled"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="size-6"
                viewBox="0 0 24 24"
              >
                <path d="M3.53 2.47a.75.75 0 0 0-1.06 1.06l18 18a.75.75 0 1 0 1.06-1.06l-18-18ZM22.676 12.553a11.249 11.249 0 0 1-2.631 4.31l-3.099-3.099a5.25 5.25 0 0 0-6.71-6.71L7.759 4.577a11.217 11.217 0 0 1 4.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113Z" />
                <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0 1 15.75 12ZM12.53 15.713l-4.243-4.244a3.75 3.75 0 0 0 4.244 4.243Z" />
                <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 0 0-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 0 1 6.75 12Z" />
              </svg>
            </button>
          </div>
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password}</p>
          )}
        </div>

        <div id="forget-pw">
          <div className="flex justify-end max-w-full">
            <a
              className="text-right font-dmsans font-medium text-sm tracking-extra-tight text-grayCustom lg:font-medium lg:text-base lg:text-[#4A505C]"
              href=""
            >
              Lupa Password?
            </a>
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="bg-[#3ECF4C] hover:bg-green-600 cursor-pointer font-bold text-sm text-white rounded-x tracking-extra-tight py-[7px] px-[22px] mb-4 mt-6 w-full mx-auto flex justify-center lg:py-x lg:text-base"
      >
        Masuk
      </button>
      <Link
        to="/register"
        className="flex justify-center bg-grin text-center cursor-pointer hover:bg-green-100 rounded-x font-bold text-sm tracking-extra-tight py-[7px] px-[22px] text-[#3ECF4C] lg:py-x lg:text-base"
      >
        Daftar
      </Link>
    </form>
  );
};

export default LoginForm;
