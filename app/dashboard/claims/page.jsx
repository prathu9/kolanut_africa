import BellIcon from "@/icons/bell-icon";
import CoinsHand from "@/icons/coins-hand";
import SearchIcon from "@/icons/search-icon";
import Link from "next/link";

const ClaimsPage = () => {
    return(
        <div>
        <header className="w-full px-10 py-[39px] flex justify-between items-center">
          <h2 className="text-[14px] leading-[20.3px] font-normal">Claims</h2>
          <div className="relative basis-[26.78%] min-w-[312px] h-[44px] bg-[#FBF9F9]">
            <div className="absolute top-[10px] left-4">
              <SearchIcon />
            </div>
            <input
              type="text"
              placeholder="Seach  insurance policy,quote"
              className="w-full h-full pl-12"
            />
          </div>
          <div className="flex gap-10 items-center">
            <div className="px-[11px] py-[9px]">
              <BellIcon />
            </div>
            <button className="px-6 py-3 text-white text-lg leading-[26.1px] bg-custom-red rounded-xl">
              Insure property
            </button>
          </div>
        </header>
        <div className="px-10 py-10">
            <div className="flex flex-col justify-center">
              <div className="mx-auto mb-6 flex items-center justify-center w-[300px] h-[300px] rounded-full bg-[#FEF0F1]">
                <CoinsHand />
              </div>
               <h2 className="mb-2 text-[32px] text-center leading-[46.4px] font-semibold text-custom-grey">No claim settlement</h2>
               <p className="mx-auto mb-10 max-w-[595px] text-base text-center leading-[23.2px] text-[#535763] font-normal">
               You currently have not applied for a claim settlement, click on the “Make a claim” button below to make a claim settlement in the event of an unexpected risk occurrence.
               </p>
               <Link href="/dashboard/claims" className="mx-auto px-6 py-3 bg-custom-red text-white rounded-xl">
                Make a claim
               </Link>
            </div>
        </div>
        </div>
    )
}

export default ClaimsPage;