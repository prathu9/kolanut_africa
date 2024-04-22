import Image from "next/image";

const Header = () => {
    return(
        <div className="mx-auto flex justify-between align-middle max-w-[1440px] px-[100px] py-[24px]">
            <div>
                <Image src="./logo.svg" width={196} height={76.74} alt="logo" />
            </div>
            <nav className="flex items-center">
                <ul className="flex gap-10 w-[435px] h-[39px]">
                    <li className="w-fit h-[23px] font-[400] text-base text-[#535763]">
                        How it works
                    </li>
                    <li className="w-fit h-[23px] font-[400] text-base text-[#535763]">
                        Coverage
                    </li>
                    <li className="w-fit h-[23px] font-[400] text-base text-[#535763]">
                        Claims
                    </li>
                    <li className="w-fit h-[23px] font-[400] text-base text-[#535763]">
                        About us
                    </li>
                </ul>
            </nav>
            <div className="flex gap-10 h-[50px]">
                <button className="px-6 py-3 bg-[#F0F0F0]">
                    Log in
                </button>
                <button className="px-6 py-3 text-custom-red border-2 border-custom-red rounded-xl">
                    Get started
                </button>
            </div>
        </div>
    )
}

export default Header;