"use client";
import Image from "next/image";
import { useState } from "react";

const FilterAccordion = ({title, children}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSelect = () => {
        setIsOpen(!isOpen);
    }
    return(
        <div>
            <button onClick={toggleSelect} className="mb-6 flex gap-6 text-lg leading-[26.1px] text-[#10192C] font-normal">
                <span>{title}</span>
                <span className={`transition-transform duration-150 ${isOpen?"rotate-0":"-rotate-90"}`}>
                    <Image src="/insurance/arrow-down.svg" width={24} height={24} alt="chevron" />
                </span>
            </button>
            <div className={`transition-all ease-in-out duration-150 overflow-hidden ${isOpen?"max-h-full h-fit": "h-0"}`}>
                {children}
            </div>
        </div>
    )
}

export default FilterAccordion;