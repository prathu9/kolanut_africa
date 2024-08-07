"use client";
import Reimbursement from "@/icons/reimbursement";
import { useState } from "react";

const ClaimCompensation = () => {
  const [activeOption, setActiveOption] = useState("reimbursement");

  const handleUpdateActiveOption = (optionId) => {
    setActiveOption(optionId);
  };

  return (
    <div className="mx-auto w-11/12 p-5 rounded-2xl bg-white lg:max-w-[670px] lg:w-4/5 sm:p-8">
      <div className="mb-[41px] flex gap-2 justify-center md:gap-8">
        <button
          className={`px-4 py-2 rounded-2xl text-sm leading-[21px] font-normal md:text-base md:leading-6 ${
            activeOption === "reimbursement"
              ? "bg-[#1ECA4E] text-white"
              : "bg-white text-[#263238]"
          }`}
          onClick={() => handleUpdateActiveOption("reimbursement")}
        >
          Reimbursement
        </button>
        <button
          className={`px-4 py-2 rounded-2xl  text-sm leading-[21px] font-normal md:text-base md:leading-6 ${
            activeOption === "replacement"
              ? "bg-[#1ECA4E] text-white"
              : "bg-white text-[#263238]"
          }`}
          onClick={() => handleUpdateActiveOption("replacement")}
        >
          Replacement
        </button>
      </div>
      {activeOption === "reimbursement" ? (
        <div className="p-4 border-[0.3px] border-[#5B5B5B] rounded-2xl sm:p-8">
          <div className="w-10 h-10 mb-6 flex justify-center items-center rounded-lg bg-[#FBFBFB] border border-[#DFDFDF] shadow-[0_2px_4px_0_rgba(0,0,0,0.15)]">
            <Reimbursement />
          </div>
          <p className="text-sm leading-[21px] font-normal text-[#444444] md:text-base md:leading-6">
            Receive financial compensation for the value of your lost or damaged
            items. This method offers flexibility, allowing you to use the funds
            as needed for replacements, repairs or other expenses. It provides
            you with the freedom to make decisions based on your individual
            circumstance and preferences
          </p>
        </div>
      ) : (
        <div className="p-4 border-[0.3px] border-[#5B5B5B] rounded-2xl sm:p-8">
           <div className="w-10 h-10 mb-6 flex justify-center items-center rounded-lg bg-[#FBFBFB] border border-[#DFDFDF] shadow-[0_2px_4px_0_rgba(0,0,0,0.15)]">
            <Reimbursement />
          </div>
          <p className="text-sm leading-[21px] font-normal text-[#444444] md:text-base md:leading-6">
            Receive financial compensation for the value of your lost or damaged
            items. This method offers flexibility, allowing you to use the funds
            as needed for replacements, repairs or other expenses. It provides
            you with the freedom to make decisions based on your individual
            circumstance and preferences
          </p>
        </div>
      )}
    </div>
  );
};

export default ClaimCompensation;
