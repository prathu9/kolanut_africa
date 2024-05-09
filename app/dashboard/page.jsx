"use client";
import BellIcon from "@/icons/bell-icon";
import DocumentUploadStatus from "./_component/document-upload-status";
import Referrals from "./_component/referrals";
import Image from "next/image";
import DashboardUserOption from "./_component/dashboard-user-options";
import { useState } from "react";

const DashboardPage = () => {
  const [showDocumentStatus, setShowDocumentStatus] = useState(false);
  return (
    <div>
      <header className="w-full px-10 py-[39px] flex justify-between items-center">
        <h2 className="text-[14px] leading-[20.3px] font-normal">Dashboard</h2>
        <div className="relative basis-[26.78%] min-w-[312px] h-[44px] bg-[#FBF9F9]">
          <div className="absolute top-[10px] left-4">
            <svg
              className="w-[21px] h-[21px]"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.5 19L13.5001 13M15.5 8C15.5 11.866 12.366 15 8.5 15C4.63401 15 1.5 11.866 1.5 8C1.5 4.13401 4.63401 1 8.5 1C12.366 1 15.5 4.13401 15.5 8Z"
                stroke="#777575"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
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
      <div className="mx-10 my-[38px] flex gap-10">
        <div className="basis-[62%]">
          {showDocumentStatus ? (
            <DocumentUploadStatus />
          ) : (
            <DashboardUserOption />
          )}
        </div>
        <div className="basis-[26%]">
          <Referrals />
        </div>
      </div>
      <div className="flex mx-10 mb-[90px] gap-x-[25px]">
        <div className="basis-[63%]">
          <h3 className="mb-4 text-lg leading-[22.68px] font-semibold text-[#444444]">
            Important
          </h3>
          <div className="flex flex-col gap-y-4">
            <div className="p-5 rounded-lg border border-[#DEDEDE]">
              <h4 className="mb-[6px]text-base leading-[20.16px] font-medium text-custom-red">
                Introducing Our New Mobile App!
              </h4>
              <p className="text-sm leading-[17.64px] text-[#5B5B5B] font-normal">
                We&apos;re excited to announce the launch of our brand new
                mobile app! Now you can manage your insurance policies, file
                claims, and make payments conveniently on the go.
              </p>
            </div>
            <div className="p-5 rounded-lg border border-[#DEDEDE]">
              <h4 className="mb-[6px]text-base leading-[20.16px] font-medium text-custom-red">
                Coverage reviews
              </h4>
              <p className="text-sm leading-[17.64px] text-[#5B5B5B] font-normal">
                Haven&apos;t reviewed your home insurance policy in a while?
                Take some time to ensure your coverage reflects your current
                needs.
              </p>
            </div>
            <div className="p-5 rounded-lg border border-[#DEDEDE]">
              <h4 className="mb-[6px]text-base leading-[20.16px] font-medium text-custom-red">
                Brief Service Interruption!
              </h4>
              <p className="text-sm leading-[17.64px] text-[#5B5B5B] font-normal">
                We&apos;re performing scheduled maintenance on our systems from
                6pm to 10pm on 18th of this month . During this time, you may
                experience limited access to certain features on your dashboard.
              </p>
            </div>
          </div>
        </div>
        <div className="basis-[26%]">
          <div className="w-[314px] h-[341px] relative rounded-lg overflow-hidden after:absolute after:w-full after:h-full after:bg-gradient-to-t after:from-[#1A1A1A] after:from-2%">
            <Image
              src="/dashboard/dashboard-person.png"
              sizes="100vw"
              fill
              alt="person"
            />
            <span className="w-[80%] absolute left-[29px] bottom-[49px] z-10 text-[20px] leading-[25.2px] font-extrabold text-white">Get 10% off<br/> your home Insurance when you renew online.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
