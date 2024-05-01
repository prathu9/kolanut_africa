"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Footer = () => {
  const [inputValue, setInputValue] = useState();

  const handleChange = (event) => {
    const value = event.target.value;
    console.log(value);
    setInputValue(value);
  };

  return (
    <footer className="pt-[64px] px-5 text-white bg-[#282828] min-h-[523px] lg:px-24 md:pt-[120px]">
      <div className="flex justify-center gap-[56px] flex-wrap md:gap-0 md:justify-between md:flex-nowrap">
        <div className="basis-full md:basis-49% lg:basis-4/5">
          <div className="relative mb-8 w-[146.63px] h-[46px] md:w-[196px] md:h-[76.74px]">
            <Image src="/footer-logo.svg" sizes="100vw" fill className="contain" alt="logo" />
          </div>
          <ul className="flex flex-wrap text-base leading-[22.68px] font-medium gap-6 md:mb-[70px] md:flex-nowrap lg:gap-8 lg:text-lg">
            <li className="basis-full md:basis-[auto]">
              <Link className="whitespace-nowrap" href="/about">
                About
              </Link>
            </li>
            <li className="basis-full md:basis-[auto]">
              <Link className="whitespace-nowrap" href="/services">
                Services
              </Link>
            </li>
            <li className="basis-full md:basis-[auto]">
              <Link className="whitespace-nowrap" href="/">
                Insurance plans
              </Link>
            </li>
            <li className="basis-full md:basis-[auto]">
              <Link className="whitespace-nowrap" href="/">
                FAQs
              </Link>
            </li>
          </ul>
          <ul className="hidden gap-[18.07px] md:flex">
            <li className="w-[24.92px] h-[24.92px] pt-[2.33px] pr-[2.07px] pb-[1.92px] pl-[2.08px]">
              <a href="#">
                <Image
                  src="/social-icon/facebook.svg"
                  width={20.77}
                  height={20.77}
                  alt="facebook"
                />
              </a>
            </li>
            <li className="w-[24.92px] h-[24.92px] pt-[3.37px] pr-[3.12px] pb-[2.86px] pl-[3.11px]">
              <a href="#">
                <Image
                  src="/social-icon/instagram.svg"
                  width={18.69}
                  height={18.69}
                  alt="instagram"
                />
              </a>
            </li>
            <li className="w-[24.92px] h-[24.92px] pt-[4.4px] pr-[3.12px] pb-[3.9px[ pl-[3.11px]">
              <a href="#">
                <Image
                  src="/social-icon/x.svg"
                  width={18.69}
                  height={16.61}
                  alt="x"
                />
              </a>
            </li>
            <li className="w-[24.92px] h-[24.92px] pt-[3.37px] pr-[3.12px] pb-[2.86px] pl-[3.11px]">
              <a href="#">
                <Image
                  src="/social-icon/linkedin.svg"
                  width={18.69}
                  height={18.69}
                  alt="linkedin"
                />
              </a>
            </li>
          </ul>
        </div>
        <div className="basis-full md:basis-49% lg:basis-1/5">
          <h3 className="mb-1 text-2xl font-bold leading-[42px] lg:text-[32px] lg:leading-[42px]">
            Stay in the loop
          </h3>
          <p className="flex mb-10 text-sm font-normal leading-[18.62px] font-sans sm:hidden">
            By subscribing you agree to with our Privacy Policy
          </p>
          <div className="flex gap-4 flex-wrap sm:flex-nowrap">
            <input
              value={inputValue}
              onChange={handleChange}
              className="w-[232px] h-[45px] p-3 rounded text-[#505050]"
              type="text"
            />
            <button className="px-4 py-[11] rounded text-base leading-[20.26px] bg-custom-red w-[127px] h-[45px] lg:px-8 lg:w-[152px] lg:text-lg">
              Subscribe
            </button>
          </div>
          <p className="hidden mt-4 text-sm font-normal leading-[18.62px] font-sans sm:flex">
            By subscribing you agree to with our Privacy Policy
          </p>
        </div>
        <ul className="flex gap-[18.07px] basis-full md:hidden">
          <li className="w-[24.92px] h-[24.92px] pt-[2.33px] pr-[2.07px] pb-[1.92px] pl-[2.08px]">
            <a href="#">
              <Image
                src="/social-icon/facebook.svg"
                width={20.77}
                height={20.77}
                alt="facebook"
              />
            </a>
          </li>
          <li className="w-[24.92px] h-[24.92px] pt-[3.37px] pr-[3.12px] pb-[2.86px] pl-[3.11px]">
            <a href="#">
              <Image
                src="/social-icon/instagram.svg"
                width={18.69}
                height={18.69}
                alt="instagram"
              />
            </a>
          </li>
          <li className="w-[24.92px] h-[24.92px] pt-[4.4px] pr-[3.12px] pb-[3.9px[ pl-[3.11px]">
            <a href="#">
              <Image
                src="/social-icon/x.svg"
                width={18.69}
                height={16.61}
                alt="x"
              />
            </a>
          </li>
          <li className="w-[24.92px] h-[24.92px] pt-[3.37px] pr-[3.12px] pb-[2.86px] pl-[3.11px]">
            <a href="#">
              <Image
                src="/social-icon/linkedin.svg"
                width={18.69}
                height={18.69}
                alt="linkedin"
              />
            </a>
          </li>
        </ul>
      </div>
      <div className="flex justify-between mt-12 pt-8 border-t border-white flex-wrap gap-y-12">
        <ul className="flex gap-6 text-sm leading-[17.64px] flex-wrap">
          <li className="basis-full md:basis-1/6">
            <Link className="whitespace-nowrap" href="/">Privacy Policy</Link>
          </li>
          <li className="basis-full md:basis-1/6">
            <Link className="whitespace-nowrap" href="/">Terms of Service</Link>
          </li>
          <li className="basis-full md:basis-1/6">
            <Link className="whitespace-nowrap" href="/">Cookies Settings</Link>
          </li>
        </ul>
        <p className="font-normal text-sm leading-[17.64px]">
          © 2024. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
