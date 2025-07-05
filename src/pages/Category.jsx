import React, { useEffect, useState } from "react";
import HomeLayouts from '../layouts/HomeLayouts'
import CardCourse from '../components/molecules/CardCourse'
import DropdownMenu from '../components/atoms/Dropdown'
import SearchProduct from '../components/atoms/SearchProduct'
import FilterSide from '../components/organisems/FilterSide'
import { NewspaperIcon } from '@heroicons/react/24/outline'
import { ShoppingBagIcon } from '@heroicons/react/24/outline'
import { ClockIcon } from '@heroicons/react/24/outline'
import Pagination from '../components/atoms/Pagination'
import { getProducts } from '../services/api'

const Category = () => {
    const [cards, setCards] = useState([]);
    
        useEffect(() => {
        const fetchData = async () => {
            try {
            const response = await getProducts();
            setCards(response.data);
            } catch (error) {
            console.error("Error fetching cards:", error);
            }
        };
        fetchData();
        }, []);

    return (
        <>
            <HomeLayouts>
                <main className="py-7 px-5 items-center md:px-[120px] md:py-16">
                    <div className="pb-x">
                        <h3 className="font-poppins font-semibold text-2xl lg:text-[32px]">
                        Koleksi Video Pembelajaran Unggulan
                        </h3>
                        <p className="font-dmsans font-normal text-sm tracking-extra-tight text-grayCustom pt-x lg:text-base">
                        Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
                        </p>
                    </div>

                    <div className='flex flex-col md:flex-row md:justify-between'>
                        <div className='flex flex-col w-full mb-6 bg-white border self-start gap-3 border-grayBorder rounded-x p-4 md:p-5 md:gap-4 md:w-1/2 lg:w-1/3 md:mr-[42px]'>
                            <div className='flex items-center justify-between'>
                                <h6 className="font-poppins font-semibold text-lg text-grayCustom" >Filter</h6>
                                <span className='font-dmsans font-medium text-base tracking-extra-tight text-error'>Reset</span>
                            </div>
                            <FilterSide
                                icon={<NewspaperIcon />}
                                title="Bidang Studi"
                                items={["Pemasaran", "Digital & Teknologi", "Pengembangan Diri", "Bisnis Manajemen"]}
                                type="checkbox"
                            />
                            <FilterSide
                                icon={<ShoppingBagIcon />}
                                title="Harga"
                                items={["Pemasaran", "Digital & Teknologi", "Pengembangan Diri", "Bisnis Manajemen"]}
                                type="checkbox"
                            />
                            <FilterSide
                                icon={<ClockIcon />}
                                title="Durasi"
                                items={["Pemasaran", "Digital & Teknologi", "Pengembangan Diri", "Bisnis Manajemen"]}
                                type="radio"
                            />
                        </div>
                        <div className='md:w-1/2 lg:w-2/3'>
                            <div className='flex justify-between md:justify-end mb-6 gap-4'>
                                <DropdownMenu />
                                <SearchProduct />
                            </div>
                            <div className='grid grid-cols-1 gap-4 md:m- lg:grid-cols-2 lg:gap-x-6 lg:gap-y-8'>
                                {cards.map((card, index) => (
                                    <CardCourse key={index} {...card} />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center mt-6 md:mt-8 md:justify-end items-center gap-[6px] bg-[#fffdf5]'>
                        <Pagination />
                    </div>
                </main>
            </HomeLayouts>
        </>
    )
}

export default Category