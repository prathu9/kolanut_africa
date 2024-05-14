"use client";
import SafeHomeIcon from "@/icons/safe-home";
import Image from "next/image";
import { useState } from "react";
import DischargeVoucher from "./discharge-voucher";

const ActiveClaim = () => {
  const [claimStatus, setClaimStatus] = useState("approved");
  const [showDischargeVoucher, setShowDischargeVoucher] = useState(false);
  
  return (
    <div className="flex justify-between px-6 py-4 border border-[#CACACA] bg-[#FCFCFC] rounded-lg">
      <div>
        <div className="mb-4 flex">
          <h2 className="flex items-center gap-x-[14px] mr-20 text-lg leading-[26px] font-medium text-[#444444]">
            <span className="w-10 h-10 flex justify-center items-center bg-[#FEEBEB] rounded-full">
              <SafeHomeIcon />
            </span>
            <span>Residential property</span>
          </h2>
          <h3 className="text-sm leading-[17.64px] font-normal text-[#444444]">
            Claim ID: 729902BJD99288
          </h3>
        </div>
        <div className="mb-6">
          <div className="mb-2 text-sm leading-[17.64px] text-[#444444] font-normal">
            14 Ajao estate , off Meran road Abule- egba, Lagos nigeria
          </div>
          <div className="text-sm leading-[17.64px] text-[#444444]">
            <span className="font-medium">Coverage: </span>
            <span>Fire, burglary &Natural disaster</span>
          </div>
        </div>
        {claimStatus === "review" && (
          <p className="max-w-[457px] px-3 py-2 text-sm font-normal leading-[17.64px] rounded-lg text-custom-red bg-[#FDF1E3]">
            We&apos;re currently reviewing claim reequst and verifying the
            incident.
          </p>
        )}
        {claimStatus === "approved" && (
          <p className="px-3 py-1 text-sm leading-[17.64px] rounded-lg font-normal text-[#38A320] bg-[#EBFAEF]">
            Claim settlement approved. Discharge voucher issued
          </p>
        )}
      </div>
      <div className="flex flex-col justify-between items-end">
        <Image
          src="/dashboard/brand-image.png"
          width={86.75}
          height={28.47}
          alt="brand"
        />
         {claimStatus === "approved" && 
        <button className="px-4 py-2 text-white bg-custom-red rounded-lg ">
          Discharge voucher
        </button>}
      </div>
      {
        showDischargeVoucher &&
        <DischargeVoucher />
      }
    </div>
  );
};

export default ActiveClaim;
