import React from 'react'
import BgBoard from "../../assets/images/bigetron.jpg";
import BgEnd from "../../assets/images/bgEnd.png";

export function HeroTop() {
    return (
        <>
            <section className="relative flex items-center bg-cover bg-center rounded-x max-w-full" style={{ backgroundImage: `url(${BgBoard})` }}>
                <div className="absolute inset-0 bg-black opacity-60 rounded-x"></div>
                <div className="relative text-center z-10 py-[37px] px-5 lg:pt-[69px] lg:pb-[51px] lg:px-[140px]">
                    <h1 className="font-poppins font-bold text-2xl text-white lg:text-5xl">
                    Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video
                    Interaktif!
                    </h1>
                    <p className="font-dmsans font-medium text-sm tracking-extra-tight text-white mt-3 lg:text-base">
                    Temukan ilmu baru yang menarik dan mendalam melalui koleksi video
                    pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat
                    berpartisipasi dalam latihan interaktif yang akan meningkatkan
                    pemahaman Anda.
                    </p>
                    <button className="font-normal text-sm text-white mt-6 px-[7.5px] py-x rounded-x bg-[#3ECF4C] hover:bg-green-600 cursor-pointer lg:font-bold lg:text-base lg:py-x lg:px-[26px] ">
                    Temukan Video Course untuk Dipelajari!
                    </button>
                </div>
            </section>
        </>
    )
}

export function HeroEnd() {
    return(
        <>
            <section className="relative flex items-center justify-center bg-cover bg-center rounded max-w-full mt-6 mb-7 py-12 px-5 overflow-hidden lg:py-[92px] lg:px-[337.5px] md:my-16" style={{ backgroundImage: `url(${BgEnd})` }}>
                <div className="absolute inset-0 bg-black opacity-80 rounded"></div>
                <div className="container relative text-center z-10">
                    <span className="font-dmsans font-medium text-base tracking-extra-tight text-[#C1C2C4] pb-1 lg:text-lg">
                    NEWSLETTER
                    </span>
                    <h3 className="font-poppins font-semibold text-2xl text-white pb-x lg:text-[32px]">
                    Mau Belajar Lebih Banyak?
                    </h3>
                    <p className="font-dmsans font-normal text-sm tracking-extra-tight text-[#F4F5FA] pb-10 lg:text-base">
                    Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran
                    spesial dari program-program terbaik hariesok.id
                    </p>
                    <div className="relative rounded-x flex flex-col gap-4 max-w-full lg:gap-5">
                    <input
                        type="email"
                        className="bg-white font-dmsans font-normal text-sm tracking-extra-tight rounded-x px-[75px] py-x text-center md:text-base lg:text-left lg:pl-8 lg:pr-[161px] lg:py-[18px] lg:h-[58px]"
                        placeholder="Masukkan Emailmu"
                    />
                    <button className="py-x px-[26px] bg-[#FFBD3A] hover:bg-yellow-500 rounded-x font-dmsans font-bold text-white text-sm tracking-extra-tight cursor-pointer lg:absolute lg:inset-y-2 lg:right-2 lg:text-center">
                        Subscribe
                    </button>
                    </div>
                </div>
            </section>
        </>
    )
}
