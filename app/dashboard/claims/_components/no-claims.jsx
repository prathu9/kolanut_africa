import CoinsHand from "@/icons/coins-hand";
import Link from "next/link";

const NoClaims = () => {
    return(
        <div className="flex flex-col justify-center">
              <div className="mx-auto mb-6 flex items-center justify-center w-[300px] h-[300px] rounded-full bg-[#FEF0F1]">
                <CoinsHand />
              </div>
               <h2 className="mb-2 text-[32px] text-center leading-[46.4px] font-semibold text-custom-grey">No claim settlement</h2>
               <p className="mx-auto mb-10 max-w-[595px] text-base text-center leading-[23.2px] text-[#535763] font-normal">
               You currently have not applied for a claim settlement, click on the “Make a claim” button below to make a claim settlement in the event of an unexpected risk occurrence.
               </p>
               <Link href="/claim-settlement" className="mx-auto px-6 py-3 bg-custom-red text-white rounded-xl">
                Make a claim
               </Link>
            </div>
    )
}

export default NoClaims;