import Image from "next/image";
import Link from "next/link";

const BackgroundOverlay = ({children}) => {
    return(
        <div className="min-h-[1024px] h-fit pt-[127.5px] pb-[159.5px] relative flex justify-center items-center bg-black/20 mix-blend-darken">
            <div className="absolute top-10 left-10">
                <Link href="/">
                    <Image src="/logo-black.svg" width={196} height={76.51} alt="logo"/>
                </Link>
            </div>
            <div className="absolute top-[145px] left-10 mix-blend-darken">
                <div className="mb-5 w-[204px] h-[36px] bg-[#F4F2F1]"/>
                <div className="mb-5 flex gap-4">
                    <div className="w-9 h-9 rounded-full bg-[#F4F2F1]"></div>
                    <div className="w-[152px] h-9 bg-[#F4F2F1]"></div>
                </div>
                <div className="flex gap-4">
                    <div className="w-9 h-9 rounded-full bg-[#F4F2F1]"></div>
                    <div className="w-[152px] h-9 bg-[#F4F2F1]"></div>
                </div>
            </div>
            <div className="flex gap-10 absolute top-[53px] right-[182px] mix-blend-darken">
                <div className="w-[184px] h-7 bg-[#F4F2F1]"></div>
                <div className="w-[184px] h-7 bg-[#F4F2F1]"></div>
            </div>
            {children}
        </div>
    )
}

export default BackgroundOverlay;