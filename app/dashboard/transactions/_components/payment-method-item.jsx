import MasterCardIcon from "@/icons/master-card";

const PaymentMethodItem = () => {
    return(
        <div className="w-full p-5 flex items-center border border-[#DEDEDE] bg-[#FCFCFC] rounded">
            <div className="w-10 h-10">
                <MasterCardIcon />
            </div>
            <div className="flex flex-col gap-1 font-normal leading-6">
                <span className="text-base text-[#49473D]">0874**************</span>
                <span className="text-sm text-[#535763]">Expiry  06/2024</span>
            </div>
            <div className="ml-auto">
                <button className="px-[10px] py-[5px] rounded text-custom-red text-sm leading-[17.64px] font-normal">
                    Remove payment
                </button>
            </div>
        </div>
    )
}

export default PaymentMethodItem;