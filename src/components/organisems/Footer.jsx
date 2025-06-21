import React from 'react'
import Logo from "../../assets/images/Logo.svg";

const Footer = () => {
    return (
        <footer className="bg-white p-5 border-t border-grayBorder md:px-[120px] md:py-[60px]">
            <div className="flex flex-col w-full md:flex-row md:justify-between">
                {/* <!-- leftCol --> */}
                <div className="flex flex-col">
                    <img className="w-[162px] px-[3.79px] py-[5.44px]" src={Logo} alt=""/>
                    <div className="flex flex-col gap-2 my-4 font-opensans text-sm tracking-extra-tight md:font-dmsans lg:w-3/4">
                        <span className="font-bold md:text-lg">Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!</span>
                        <p className="font-normal md:text-base">Jl. Usman Effendi No. 50 Lowokwaru, Malang</p>
                        <p className="font-normal md:text-base">+62-877-7123-1234</p>
                    </div>
                </div>
                {/* <!-- rightCol --> */}
                <div className="flex flex-col md:flex-row gap-[14px] md:gap-12">
                    {/* <!-- Kategori --> */}
                    <div>
                        <div className="flex items-center justify-between">
                            <span className="font-opensans font-bold text-base tracking-extra-tight md:font-dmsans">Kategori</span>
                            <div className="py-[6px] px-[9px] md:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="4" className="size-3 stroke-[#3A3541]/[.54]">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                </svg>
                            </div>
                        </div>
                        <ul className="font-dmsans font-medium text-base tracking-extra-tight text-grayCustom space-y-[13px] mt-[15px] hidden md:block">
                            <li>Digital & Teknologi</li>
                            <li>Pemasaran</li>
                            <li>Manajemen Bisnis</li>
                            <li>Pengembangan Diri</li>
                            <li>Desain</li>
                        </ul>
                    </div>
                    {/* <!-- Perusahaan --> */}
                    <div>
                        <div className="flex items-center justify-between">
                            <span className="font-opensans font-bold text-base tracking-extra-tight md:font-dmsans">Perusahaan</span>
                            <div className="py-[6px] px-[9px] md:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="4" className="size-3 stroke-[#3A3541]/[.54]">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                </svg>
                            </div>
                        </div>
                        <ul className="font-dmsans font-medium text-base tracking-extra-tight text-grayCustom space-y-[13px] mt-[15px] hidden md:block">
                            <li>Tentang Kami</li>
                            <li>FAQ</li>
                            <li>Kebijakan Privasi</li>
                            <li>Ketentuan Layanan</li>
                            <li>Bantuan</li>
                        </ul>
                    </div>
                    {/* <!-- Komunitas --> */}
                    <div>
                        <div className="flex items-center justify-between">
                            <span className="font-opensans font-bold text-base tracking-extra-tight md:font-dmsans">Komunitas</span>
                            <div className="py-[6px] px-[9px] md:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="4" className="size-3 stroke-[#3A3541]/[.54]">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                </svg>
                            </div>
                        </div>
                        <ul className="font-dmsans font-medium text-base tracking-extra-tight text-grayCustom space-y-[13px] mt-[15px] hidden md:block">
                            <li>Tips Sukses</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <hr className="border border-[#3A3541]/[.12] my-4"/>

            <div className="flex flex-col md:flex-row-reverse md:justify-between">
                <div className="flex gap-[15px] pb-3">
                    <div className="flex h-[35px] w-[35px] rounded-full border-[#222325] border-[1.5px]">
                        <svg className="size-5 m-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path fill="#000" d="M15.15 8.4a5.83 5.83 0 0 0-5.85 5.82v5.88a.9.9 0 0 0 .9.9h2.1a.9.9 0 0 0 .9-.9v-5.88a1.94 1.94 0 0 1 2.15-1.93a2 2 0 0 1 1.75 2v5.81a.9.9 0 0 0 .9.9h2.1a.9.9 0 0 0 .9-.9v-5.88a5.83 5.83 0 0 0-5.85-5.82"/>
                            <rect width="4.5" height="11.7" x="3" y="9.3" fill="#000" rx=".9" ry=".9"/>
                            <circle cx="5.25" cy="5.25" r="2.25" fill="#000"/>
                        </svg>
                    </div>
                    <div className="flex h-[35px] w-[35px] rounded-full border-[#222325] border-[1.5px]">
                        <svg className="size-5 m-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path fill="#000" d="M9.602 21.026v-7.274H6.818a.545.545 0 0 1-.545-.545V10.33a.545.545 0 0 1 .545-.545h2.773V7a4.547 4.547 0 0 1 4.86-4.989h2.32a.556.556 0 0 1 .557.546v2.436a.557.557 0 0 1-.557.545h-1.45c-1.566 0-1.867.742-1.867 1.833v2.413h3.723a.533.533 0 0 1 .546.603l-.337 2.888a.545.545 0 0 1-.545.476h-3.364v7.274a.96.96 0 0 1-.975.974h-1.937a.96.96 0 0 1-.963-.974"/>
                        </svg>
                    </div>
                    <div className="flex h-[35px] w-[35px] rounded-full border-[#222325] border-[1.5px]">
                        <svg className="size-5 m-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g fill="none" stroke="#000" strokeWidth="2.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8"/>
                                <path d="M3 16V8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5Z"/>
                                <path strokeLinecap="round" strokeLinejoin="round" d="m17.5 6.51l.01-.011"/>
                            </g>
                        </svg>
                    </div>
                    <div className="flex h-[35px] w-[35px] rounded-full border-[#222325] border-[1.5px]">
                        <svg className="size-5 m-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M23 3.01s-2.018 1.192-3.14 1.53a4.48 4.48 0 0 0-7.86 3v1a10.66 10.66 0 0 1-9-4.53s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5q-.001-.418-.08-.83C21.94 5.674 23 3.01 23 3.01"/>
                        </svg>
                    </div>
                </div>
                <span className="font-dmsans font-medium text-base tracking-extra-tight text-grayCustom">@2023 Gerobak Sayur All Rights Reserved.</span>
            </div>
        </footer>
    )
}

export default Footer