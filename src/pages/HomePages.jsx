import React, { useEffect, useState } from "react";
import HomeLayouts from "../layouts/HomeLayouts";
import {HeroTop, HeroEnd } from "../components/molecules/Hero";
import CardCourse from "../components/molecules/CardCourse";

const HomePages = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        const stored = localStorage.getItem("cardData");
        if (stored) {
        setCards(JSON.parse(stored));
        }
    }, []);

    return (
        <>
        <HomeLayouts>
            <main className="pt-7 px-5 items-center lg:px-[120px] lg:pt-16 md:px-[110px] md:pt-14">
                {/*section: Bg-Board */}
                <HeroTop />
                {/* <!-- Konten --> */}
                <section>
                    <div className="py-6 lg:pt-16 lg:pb-8">
                        <h3 className="font-poppins font-semibold text-2xl lg:text-[32px]">
                        Koleksi Video Pembelajaran Unggulan
                        </h3>
                        <p className="font-dmsans font-medium text-sm tracking-extra-tight text-grayCustom pt-x lg:text-base">
                        Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
                        </p>
                    </div>
                </section>
                {/* <!-- Nav Konten --> */}
                <section>
                    <nav className="relative space-y-3">
                        <div className="font-dmsans font-medium text-sm tracking-extra-tight space-x-9 overflow-hidden whitespace-nowrap md:text-base">
                        <a className="text-[#F64920]" href="#">
                            Semua Kelas
                        </a>
                        <a className="text-[#333333]" href="#">
                            Pemasaran
                        </a>
                        <a className="text-[#333333]" href="#">
                            Desain
                        </a>
                        <a className="text-[#333333]" href="#">
                            Pengembang Diri
                        </a>
                        <a className="text-[#333333]" href="#">
                            Bisnis
                        </a>
                        </div>
                        <div className="rounded-x bg-[#F64920] w-[52px] h-[6px]"></div>
                    </nav>
                </section>

                {/* <!-- Card --> */}
                <section className="mt-6 md:mt-8">
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 md:gap-x-6 md:gap-y-8">
                        {cards.map((card, index) => (
                            <CardCourse key={index} {...card} />
                        ))}
                    </div>
                </section>

                {/* Hero Down */}
                <HeroEnd />

                </main>
            </HomeLayouts>
        </>
    );
};

export default HomePages;
