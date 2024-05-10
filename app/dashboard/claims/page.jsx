"use client";
import BellIcon from "@/icons/bell-icon";
import CoinsHand from "@/icons/coins-hand";
import SearchIcon from "@/icons/search-icon";
import Link from "next/link";
import { useState } from "react";
import ActiveClaim from "./_components/active-claim";
import SavedClaim from "./_components/saved-claim";
import NoClaims from "./_components/no-claims";

const ClaimsPage = () => {
  const [activeClaims, setActiveClaims] = useState(null);
  const [savedClaims, setSavedCLaims] = useState(null);

  return (
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
        {activeClaims && (
          <div className="mb-[56px]">
            <h3 className="mb-[17px] text-lg leading-[22.68px] font-semibold text-[#444444]">
              Saved claims
            </h3>
            <ActiveClaim />
          </div>
        )}

        {savedClaims && (
          <div>
            <h3 className="mb-[17px] text-lg leading-[22.68px] font-semibold text-[#444444]">
              Saved claims
            </h3>
            <SavedClaim />
          </div>
        )}
        {!activeClaims && !savedClaims && (
          <div className="px-10 py-10">
            <NoClaims />
          </div>
        )}
      </div>

      <div className="px-10 py-10"></div>
    </div>
  );
};

export default ClaimsPage;
