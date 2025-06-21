import React from 'react'
import { useState } from 'react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

export default function FilterSide({icon, title, items, type}) {
    const [isOpen, setIsOpen] = useState(true)
    return (
        <div className="border border-gray-200 rounded-md py-3 px-4 mb-4">
        {/* Header Section */}
        <div className="flex items-center justify-between cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            <div className="flex items-center gap-4 text-grinPrimary md:pr-4 font-semibold text-sm">
                <span className='inline-block size-6'>{icon}</span>
                <span className='font-dmsans font-medium text-base tracking-extra-tight'>{title}</span>
            </div>
            <ChevronUpIcon
                className={`size-6 text-grinPrimary transition-transform ${isOpen ? '' : 'rotate-180'}`}
            />
        </div>

        {/* List Items */}
        {isOpen && (
            <div className="mt-3 space-y-3">
            {items.map((item, index) => (
                <label key={index} className="flex items-center text-sm text-grayCustom gap-2">
                    <input
                        type={type}
                        name={title}
                        className="accent-grinPrimary w-4 h-4"
                    />
                    <span className='pl-3 font-normal font-dmsans text-base tracking-extra-tight'>{item}</span>  
                </label>
            ))}
            </div>
        )}
    </div>
    )
}
