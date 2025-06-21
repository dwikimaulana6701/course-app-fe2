import React from 'react'

export default function CardCourse({
    imageCourse,
    title,
    description,
    asmenImg,
    asmenName,
    asmenTitle,
    price
}) {
    return (
        <div className="card bg-white hover:bg-gray-100 p-4 md:p-5">
            <div className="flex flex-row md:block">
                <img
                className="w-[82px] grow rounded-x object-cover md:mx-auto md:h-[193px] md:w-full"
                src={imageCourse}
                alt="card-1"
                />
                <div className="pl-3 w-full md:pl-0 md:pt-4">
                    <h6 className="font-poppins font-semibold text-base md:text-lg">
                        {title}
                    </h6>
                    <p className="text-grayCustom font-dmsans font-medium text-base tracking-extra-tight hidden md:line-clamp-2">
                        {description}
                    </p>
                    <div className="flex items-center pt-2">
                        <img
                        className="w-9 h-9 rounded-x md:w-10 md:h-10"
                        src={asmenImg}
                        alt="instructor"
                        />
                        <div className="pl-x md:w-full">
                            <span className="font-dmsans font-medium text-sm tracking-extra-tight md:text-base">
                                {asmenName}
                            </span>
                            <p className="font-dmsans font-normal tracking-extra-tight text-xs text-grayCustom md:text-sm">
                                {asmenTitle}{" "}
                                <span className="hidden md:inline">di </span>
                                <span className="font-bold text-sm text-grayCustom hidden md:inline">
                                Gojek
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-between pt-2">
                <div className="flex items-center gap-2">
                <img
                    className="w-[90px] h-[18px]"
                    src="pict/Rating.png"
                    alt="rate"
                />
                <span className="font-dmsans font-medium text-xs tracking-extra-tight text-grayCustom md:text-sm">
                    3.5 (86)
                </span>
                </div>
                <h5 className="font-bold text-xl text-green-500 md:text-2xl">
                {`Rp ${price}K`}
                </h5>
            </div>
        </div>
    )
}