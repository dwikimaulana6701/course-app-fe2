import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

export default function Pagination() {
    return (
        <>
            <button className="size-10 flex items-center justify-center rounded-sm bg-[#F4F5FA] text-black">
                <ChevronLeftIcon className="size-5 stroke-3" />
            </button>

            <button className="size-10 px-[15px] py-[10px] flex items-center justify-center rounded-sm bg-yellow-400 text-white font-opensans font-semibold text-sm">
                1
            </button>
            {[2, 3, 4, 5, 6].map((page) => (
                <button
                    key={page}
                    className="size-10 flex items-center justify-center rounded-sm text-grayCustom font-opensans font-semibold text-sm hover:bg-gray-100"
                    >
                    {page}
                </button>
            ))}

            <button className="size-10 flex items-center justify-center rounded-sm bg-[#F4F5FA] text-black">
                <ChevronRightIcon className="size-5 stroke-3" />
            </button>
        </>
    );
}
