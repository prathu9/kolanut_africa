import Image from "next/image";
import Link from "next/link";
import MobileNav from "./mobile-nav";

const Header = () => {
    return(
        <div className="mx-auto relative flex justify-between align-middle max-w-[1920px] px-4 py-10 lg:px-[100px] lg:py-[24px]">
            <div className="relative w-[114.52px] h-[44.83px] lg:w-[196px] lg:h-[76.74px]">
                <Link href="/">
                    <Image src="./logo.svg" sizes="100vw" fill alt="logo" />
                </Link>
            </div>
            <nav className="items-center hidden lg:flex">
                <ul className="flex gap-10 items-center w-[435px] h-[39px]">
                    <li className="my-2 flex w-fit h-[23px] font-[400] text-base text-[#535763]">
                        How it works
                    </li>
                    <li className="w-fit h-[23px] font-[400] text-base text-[#535763]">
                        <Link href="/coverage">
                            Coverage
                        </Link>
                    </li>
                    <li className="w-fit h-[23px] font-[400] text-base text-[#535763]">
                        Claims
                    </li>
                    <li className="w-fit h-[23px] font-[400] text-base text-[#535763]">
                        <Link href="/about-us">
                            About us
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="gap-10 h-[50px] hidden lg:flex">
                <Link href="/login" className="bg-[#F0F0F0] rounded-xl px-4 py-3 lg:px-6">
                    Log in
                </Link>
                <Link href="/booking" className="text-custom-red border-2 border-custom-red rounded-xl px-4 py-3 lg:px-6">
                    Get started
                </Link>
            </div>
            <MobileNav />
        </div>
    )
}

export default Header;