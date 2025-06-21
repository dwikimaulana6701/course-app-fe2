import React from "react";
import LoginForm from "../components/organisems/LoginForm";
import Header from "../components/organisems/Header";

const LoginPage = () => {
  return (
    <>
      <Header/>
        <div className="pt-7 px-5 md:py-16 max-w-screen-md md:w-[590px] mx-auto h-full">
          <div className="bg-white p-5 rounded-[4px] border-2 border-[#F1F1F1] lg:p-9">
            <div className="flex flex-col justify-center">
              <div className="text-center pb-9">
                <h3 className="font-poppins font-semibold text-2xl lg:font-bold lg:text-[32px] mb-[10px]">
                  Masuk ke Akun
                </h3>
                <p className="font-dmsans font-normal text-sm text-grayCustom tracking-extra-tight md:font-normal md:font-sans md:text-base">
                  Yuk, lanjutin belajarmu di videobelajar.
                </p>
              </div>

              <LoginForm />
              <div className="flex items-center max-w-full gap-2 py-5 md:py-6">
                <hr className="bg-[#F1F1F1] border-grayBorder w-full h-[2px]" />
                <span className="text-center font-dmsans tracking-extra-tight font-normal text-sm text-[#4A505C] w-auto px-2 lg:font-normal lg:text-base">
                  atau
                </span>
                <hr className="bg-[#F1F1F1] border-grayBorder w-full h-[2px]" />
              </div>
              <button className="flex items-center gap-2 justify-center w-full cursor-pointer py-2 px-[26px] border-[#F1F1F1] border rounded-x">
                <img
                  src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000"
                  className="w-5 h-5"
                  alt=""
                />
                <span className="font-bold text-sm text-[#4A505C] lg:font-bold lg:text-base">
                  Daftar dengan Google
                </span>
              </button>
            </div>
          </div>
        </div>
    </>
  );
};

export default LoginPage;
