import Add from "@/icons/add";
import Image from "next/image";

const PersonId = () => {
    return(
        <div className="pl-[44px] pr-[56px] bg-[#FCFCFC]">
            <h2 className="mb-10 text-center text-[28px] leading-[40.6px] font-semibold text-custom-grey">ID card</h2>
            <h3 className="mb-2 text-lg leading-[26.1px] font-medium text-custom-grey">
            Current means of Identification
            </h3>
            <h4 className="mb-4 text-sm leading-[20.3px] text-[#777575]font-normal">International Passport</h4>
            <div className="mb-6 relative w-full h-[192px] bg-[#F0F0F0]"> 
                <Image src="/dashboard/card-id.png" sizes="100vw" fill className="object-full" alt="card" />
            </div>
            <button className="flex gap-2 px-6 py-3 rounded-xl border-2 border-custom-red">
                <span>
                    <Add />
                </span>
                <span className="text-lg leading-[26.1px] font-normal text-custom-red">New ID</span>
            </button>
        </div>
    )
}

export default PersonId;