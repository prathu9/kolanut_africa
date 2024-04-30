"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const MobileNav = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const handleShowMobileNav = () => {
    setShowMobileNav(true);
  };

  const hideMobileNav = () => {
    setShowMobileNav(false);
  };

  useEffect(() => {
    if(showMobileNav){
        document.body.style.overflowY = "hidden"; 
    }
    else{
        document.body.style.overflowY = "auto";
    }
  },[showMobileNav])
  return (
    <>
      <button
        onClick={handleShowMobileNav}
        className="w-10 h-10 flex lg:hidden justify-center items-center"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 20 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 7.41748H19M1 1.41748H19M1 13.4175H19"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <nav
        className={`pt-[46px] px-4 absolute top-0 right-[100%] w-full h-screen transition-all duration-150 flex flex-col lg:hidden bg-[#1B2327] ${
          showMobileNav ? "translate-x-full" : "translate-x-0"
        }`}
      >
        <div className="flex justify-between items-center">
          <div className="relative z-10 w-[114.52px] h-[44.83px] lg:w-[196px] lg:h-[76.74px]">
            <Link href="/">
              <Image
                src="./mobile-nav-logo.svg"
                sizes="100vw"
                fill
                alt="logo"
              />
            </Link>
          </div>
          <div className="h-[48.16px] flex justify-end">
            <button
              onClick={hideMobileNav}
              className="w-10 h-10 flex justify-center items-center rounded-lg bg-[#FCFCFC]"
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 1L1 11M1 1L11 11"
                  stroke="#AF060D"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="mt-[35.84px]">
            <ul className="flex flex-col items-center py-10">
                <li className="text-base leading-[23.2px] font-normal text-[#F4F2F1]">
                    <Link className="py-5 block w-full h-full text-center" href="/">
                        How it works
                    </Link>
                </li>
                <li className="text-base leading-[23.2px] font-normal text-[#F4F2F1]">
                    <Link className="py-5 block w-full h-full text-center" href="/">
                        Coverage
                    </Link>
                </li>
                <li className="text-base leading-[23.2px] font-normal text-[#F4F2F1]">
                    <Link className="py-5 block w-full h-full text-center" href="/">
                        Claims
                    </Link>
                </li>
                <li className="text-base leading-[23.2px] font-normal text-[#F4F2F1]">
                    <Link className="py-5 block w-full h-full text-center" href="/">
                        About us
                    </Link>
                </li>
                <li className="mt-[120px]">
                    <Link href="/login" className="px-6 py-3 text-lg font-normal leading-[26.1px] text-[#310204] bg-[#F0F0F0] rounded-xl">
                        Log in
                    </Link>
                </li>
                <li className="mt-[64px]">
                    <Link href="/login" className="px-6 py-3 border-2 border-custom-red text-lg font-normal leading-[26.1px] text-white bg-custom-red rounded-xl">
                        Get Started
                    </Link>
                </li>
            </ul>
          </div>
      </nav>
    </>
  );
};

export default MobileNav;
