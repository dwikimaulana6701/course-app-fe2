// src/components/atoms/DropdownMenu.jsx
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

export default function DropdownMenu() {
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <MenuButton className="inline-flex w-[152px] md:w-full justify-center gap-x-1.5 bg-white px-4 py-3 text-base text-grayCustom font-medium font-dmsans tracking-extra-tight border border-grayBorder rounded-x focus:outline-none focus:ring-0 cursor-pointer">
                    Urutkan
                    <ChevronDownIcon aria-hidden="true" className="-mr-1 size-6 text-gray-400" />
                </MenuButton>
            </div>

            <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-[156px] origin-top-right rounded-md bg-white shadow-lg transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
            >
                <div className="py-1">
                    <MenuItem>
                        <a href="#" className="block px-4 py-2 font-dmsans font-medium text-sm tracking-extra-tight text-grayCustom hover:text-black hover:bg-gray-100">
                        Harga Rendah
                        </a>
                    </MenuItem>
                    <MenuItem>
                        <a href="#" className="block px-4 py-2 font-dmsans font-medium text-sm tracking-extra-tight text-grayCustom hover:text-black hover:bg-gray-100">
                        Harga Tinggi
                        </a>
                    </MenuItem>
                    <MenuItem>
                        <a href="#" className="block px-4 py-2 font-dmsans font-medium text-sm tracking-extra-tight text-grayCustom hover:text-black hover:bg-gray-100">
                        A to Z
                        </a>
                    </MenuItem>
                    <MenuItem>
                        <a href="#" className="block px-4 py-2 font-dmsans font-medium text-sm tracking-extra-tight text-grayCustom hover:text-black hover:bg-gray-100">
                        Z to A
                        </a>
                    </MenuItem>
                    <MenuItem>
                        <a href="#" className="block px-4 py-2 font-dmsans font-medium text-sm tracking-extra-tight text-grayCustom hover:text-black hover:bg-gray-100">
                        Rating Tertinggi
                        </a>
                    </MenuItem>
                    <MenuItem>
                        <a href="#" className="block px-4 py-2 font-dmsans font-medium text-sm tracking-extra-tight text-grayCustom hover:text-black hover:bg-gray-100">
                        Rating Terendah
                        </a>
                    </MenuItem>
                </div>
            </MenuItems>
        </Menu>
    );
}