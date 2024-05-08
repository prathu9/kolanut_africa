"use client";
import Tabs from "@/components/tabs/tabs";
import Image from "next/image";
import Link from "next/link";
import tabsData from "./tabs-data";

const TabSection = () => {
  return (
    <Tabs
      tabs={tabsData}
      TabComponent={TabComponent}
      TabPanelComponent={TabPanelComponent}
    />
  );
};

const TabComponent = ({ isActive, onClick, children }) => {
  return (
    <button
      className={`max-h-[37px] mt-8 px-6 py-2 rounded-2xl whitespace-nowrap text-sm leading-[21px] focus:outline-none md:max-h-10 md:mt-0 md:px-10 md:py-[8px] md:text-base md:leading-6
        ${
          isActive
            ? "bg-custom-red text-white"
            : "bg-transparent text-custom-red"
        }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const TabPanelComponent = ({ isActive, content }) => {
  return (
    <div className={`mt-[66px] ${isActive ? "block" : "hidden"}`}>
        <div className="max-w-[645px] px-5 pt-5 pb-10 border-[0.3px] border-[#5B5B5B] rounded-2xl">
          <div className="mb-10 w-10 h-10 flex justify-center items-center rounded-full bg-[#F1D4D5]">
            {content.icon}
          </div>
          <p className="mb-10 text-sm font-normal leading-[21px] md:mb-20 md:text-base md:leading-6 md:text-custom-grey">
            {content.para1}
          </p>
          <p className="text-sm font-normal leading-[21px] md:text-base md:leading-6 md:text-custom-grey">
            {content.para2}
          </p>
        </div>
    </div>
  );
};

export default TabSection;
