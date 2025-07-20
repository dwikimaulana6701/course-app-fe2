import React, { useState } from "react";
import { getUserByEmail, createUser } from "../../services/api/userApi";
import { Link, useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    phone: "",
    password: "",
    confirm: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirm) {
      alert("Konfirmasi kata sandi tidak cocok.");
      return;
    }
    try {
      const existing = await getUserByEmail(formData.email);
      if (existing.data.length > 0) {
        alert("Email sudah terdaftar.");
        return;
      }

      const { confirm: _, ...newUser } = formData;
      await createUser(newUser);
      alert("Registrasi berhasil, silakan masuk.");
      navigate("/login");
    } catch (error) {
      console.error("Gagal registrasi:", error);
      alert("Terjadi kesalahan saat registrasi, silakan coba lagi!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-4">
        <div id="username">
          <label
            className="text-grayCustom font-dmsans tracking-extra-tight text-sm md:font-normal md:text-base md:text-[#4A505C]"
            htmlFor="name"
          >
            Nama Lengkap<span className="text-[#FF5C2B]"> *</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={handleChange}
            className="border border-grayBorder rounded-x w-full text-black h-12 px-3 mt-1"
            required
          />
        </div>

        <div id="email">
          <label
            className="text-grayCustom font-dmsans tracking-extra-tight text-sm md:font-normal md:text-base md:text-[#4A505C]"
            htmlFor="email"
          >
            E-Mail<span className="text-[#FF5C2B]"> *</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
            className="border border-grayBorder rounded-x w-full text-black h-12 px-3 mt-1"
            required
          />
        </div>

        <div id="gender">
          <label
            className="text-grayCustom font-dmsans tracking-extra-tight text-sm md:font-normal md:text-base md:text-[#4A505C]"
            htmlFor="gender"
          >
            Jenis Kelamin<span className="text-[#FF5C2B]"> *</span>
          </label>
          <div className="relative w-full">
            <select
              name="gender"
              id="gender"
              onChange={handleChange}
              className="relative border border-grayBorder rounded-x w-full font-dmsans font-normal text-sm tracking-extra-tight text-black h-12 px-x py-3 mt-1 appearance-none"
              required
            >
              <option value="">Pilih</option>
              <option value="pria">Pria</option>
              <option value="wanita">Wanita</option>
              <option value="lainnya">Lainnya</option>
            </select>
            <svg
              className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 text-disabled pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m12 13.171l4.95-4.95l1.414 1.415L12 16L5.636 9.636L7.05 8.222z"
              />
            </svg>
          </div>
        </div>

        <div id="phone">
          <label
            className="text-grayCustom font-dmsans tracking-extra-tight text-sm md:font-normal md:text-base md:text-[#4A505C]"
            htmlFor="phone"
          >
            No. Hp<span className="text-[#FF5C2B]"> *</span>
          </label>
          <div className="flex gap-3 w-full md:gap-6">
            <div className="flex w-[122px] border border-grayBorder rounded-md h-12 mt-1 lg:w-[157px]">
              <div className="flex w-11 items-center justify-center rounded-l-md bg-[#F4F5FA] lg:w-11">
                <svg
                  className="block w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 72 72"
                >
                  <path className="h-3" fill="#d22f27" d="M5 17h62v38H5z" />
                  <path className="h-3" fill="#fff" d="M5 36h62v19H5z" />
                </svg>
              </div>
              <div className="border-l border-grayBorder h-full"></div>
              <div className="relative flex w-[78px] items-center px-x py-1 lg:w-[113px]">
                <select
                  name="phone_code"
                  id="phone_code"
                  className="w-full bg-transparent font-dmsans font-normal text-sm tracking-extra-tight text-black focus:outline-none appearance-none"
                >
                  <option value="62">+62</option>
                </select>
                <svg
                  className="absolute right-[10px] top-1/2 -translate-y-1/2 w-6 h-6 text-grayCustom pointer-events-none"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m12 13.171l4.95-4.95l1.414 1.415L12 16L5.636 9.636L7.05 8.222z"
                  />
                </svg>
              </div>
            </div>
            <input
              type="text"
              id="phone"
              name="phone"
              onChange={handleChange}
              className="w-full border border-grayBorder rounded-lg h-12 px-3 mt-1 text-black focus:outline-none"
              required
            />
          </div>
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
              onChange={handleChange}
              className="border border-grayBorder rounded-[10px] w-full h-12 px-3 mt-2"
              required
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
        </div>

        <div id="confirm-pw">
          <label
            className="text-grayCustom font-dmsans tracking-extra-tight text-sm lg:font-normal lg:text-base lg:text-[#4A505C]"
            htmlFor="confirm"
          >
            Konfirmasi Kata Sandi<span className="text-[#FF5C2B]"> *</span>
          </label>
          <div className="relative w-full">
            <input
              type="password"
              id="confirm"
              name="confirm"
              onChange={handleChange}
              className="border border-grayBorder rounded-[10px] w-full h-12 px-3 mt-2"
              required
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
        </div>

        <div id="forget-pw">
          <div className="flex justify-end max-w-full">
            <a
              className="text-right font-dmsans font-medium text-sm tracking-extra-tight text-grayCustom hover:underline lg:font-medium lg:text-base lg:text-[#4A505C]"
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
        Daftar
      </button>
      <Link
        to="/login"
        className="flex justify-center bg-grin text-center cursor-pointer hover:bg-green-100 rounded-x font-bold text-sm tracking-extra-tight py-[7px] px-[22px] text-[#3ECF4C] lg:py-x lg:text-base"
      >
        Masuk
      </Link>
    </form>
  );
};

export default RegisterForm;
