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
      className={`px-10 py-[11px] rounded-2xl text-lg focus:outline-none
        ${
          isActive
            ? "bg-[#455A64] text-[#FAFBFF]"
            : "bg-transparent text-[#535763]"
        }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const TabPanelComponent = ({ isActive, title,content }) => {
  return (
    <div className={`mt-[53px] ${isActive ? "block" : "hidden"}`}>
      <div className="flex gap-[55px] justify-center">
        <div className="max-w-[645px]">
          <h2 className="mb-[19px] text-[#2E3342] font-semibold text-[32px] leading-[40.32px]">
            {title}
          </h2>
          <p className="text-lg font-normal leading-[26.1px]">
            {content.para}
          </p>
          <h3 className="mt-[60px] mb-4 text-2xl leading-[34.8px] text-[#2E3342] font-medium">
            {content.subtitle1}
          </h3>
          <p className="text-lg leading-[26.1px] font-normal text-[#2E3342]">
            {content.para1}
          </p>
          <h3 className="mt-[38px] mb-[19px] text-2xl leading-[34.8px] font-medium text-[#2E3342]">
            {content.subtitle2}
          </h3>
          <div className="mb-[76px] flex max-w-[637px] h-[142px] gap-6">
            <div className="basis-2/6 flex flex-col justify-center items-center border-[1.5px] border-[#EBEBEB] rounded-xl">
              <Image
                src="/coverage/fire.svg"
                width={42}
                height={42}
                alt="fire"
              />
              <span>Lorem ipsum dolor</span>
            </div>
            <div className="basis-2/6 flex flex-col justify-center items-center border-[1.5px] border-[#EBEBEB] rounded-xl">
              <Image
                src="/coverage/fire.svg"
                width={42}
                height={42}
                alt="fire"
              />
              <span>Lorem ipsum dolor</span>
            </div>
            <div className="basis-2/6 flex flex-col justify-center items-center border-[1.5px] border-[#EBEBEB] rounded-xl">
              <Image
                src="/coverage/fire.svg"
                width={42}
                height={42}
                alt="fire"
              />
              <span>Lorem ipsum dolor</span>
            </div>
          </div>
          <h3 className="mt-[13px] text-2xl leading-[34.8px] font-medium text-[#2E3342]">
            {content.subtitle3}
          </h3>
          <p className="text-base text-[#2E3342] leading-[23.2px] font-normal">
           {content.para2}
          </p>
        </div>
        <div className="max-w-[573px] h-[794px] bg-[#FAFAFA] rounded-3xl overflow-hidden">
        <Image className="shadow-[0_57.82_88.14_0_rgba(0 0 0/15)" src={content.image} width={553.66} height={645} alt="coverage detail"/>
        </div>
      </div>
      <Link className="mx-auto w-[165px] h-[50px] mt-12 block text-white rounded-xl bg-custom-red px-6 py-3 text-lg leading-[26.1px] text-center" href="/">
        Get Insured
      </Link>
    </div>
  );
};

export default TabSection;
