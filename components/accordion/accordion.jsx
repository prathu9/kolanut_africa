"use client";
import { useState } from "react";

const Accordion = ({accordionItems}) => {

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleActiveIndex = (index) => {
        setActiveIndex(activeIndex === index?null:index);
    }

    return(
        <div>
           {accordionItems.map(({title, description}, index) => (
            <div className="mt-6 mb-6 px-10 border-b-2 border-[#F0F0F0]" key={title}>
                <button className="w-full mb-[22px] pt-[22px] flex justify-between font-semibold text-[28px] leading-[40.6px] text-custom-grey" onClick={() => toggleActiveIndex(index)}>
                    <span>{title}</span>
                <svg
              className={`h-6 w-6 transition-transform duration-300 transform ${
                activeIndex === index ? "rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={"M19 9l-7 7-7-7"}
              />
                </svg>
                </button>
                <div className={`max-w-[843px] mt-2 text-[#535763] text-lg leading-[26.1px] font-normal overflow-hidden transition-all ease-in-out duration-300 ${activeIndex === index? `max-h-96 mb-[22px]`:"max-h-0 mb-0"}`}>{description}</div>
            </div>
           ))}
        </div>
    )
}

export default Accordion;