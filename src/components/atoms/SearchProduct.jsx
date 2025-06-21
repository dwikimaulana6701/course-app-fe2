import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'

export default function SearchProduct({ className = '' }) {
    return (
        <div className={`relative ${className}`}>
            <input
                type="text"
                placeholder="Cari Kelas"
                className="w-[152px] px-4 py-3 bg-white text-base text-grayCustom placeholder-grayCustom font-medium font-dmsans tracking-extra-tight border border-gray-200 rounded-x focus:outline-none"
            />
            <MagnifyingGlassIcon
                className="size-6 text-grayCustom absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                aria-hidden="true"
            />
        </div>
    )
}
