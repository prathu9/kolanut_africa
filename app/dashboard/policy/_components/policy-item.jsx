import DotMenuIcon from "@/icons/dot-menu";
import SafeHomeIcon from "@/icons/safe-home";
import Image from "next/image";

const PolicyItem = () => {
  return (
    <div className="flex justify-between gap-6 px-5 py-[25px] border border-[#DEDEDE] bg-[#FCFCFC] rounded-lg">
      <div className="flex gap-6">
        <div className="w-[40px] h-[40px] p-2 bg-[#FEEBEB] rounded-full">
          <SafeHomeIcon />
        </div>
        <div>
          <h2 className="mb-[19px] text-lg font-medium text-[#444444] leading-[26px]">
            Home Insurance
          </h2>
          <ul className="flex flex-col gap-2">
            <li className="text-sm font-normal leading-[17.64px]">
              <span>Coverage</span>
              <span>Fire, burglary &Natural disaster</span>
            </li>
            <li className="text-sm font-normal leading-[17.64px]">
              <span>Premium:</span>
              <span className="ml-1 text-[#141F37] font-bold">₦620,000</span>
            </li>
            <li className="flex gap-6 text-sm font-normal leading-[17.64px]">
              <div>
                <span>Next premium payment: </span>
                <span className="ml-1 text-[#141F37] font-bold">
                  March 23rd
                </span>
              </div>
              <div>
                <span>Expiry Date: </span>
                <span className="ml-1 text-custom-red font-bold">
                  28-04-2026
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col justify-between">
        <div className="flex gap-10 justify-between">
          <div>
            <Image
              src="/homepage/partner-1.png"
              width={86.75}
              height={29.47}
              alt="brand"
            />
          </div>
          <div className="flex items-center">
                <span className="mr-2 w-2 h-2 bg-[#38A320] rounded-full"></span>
                <span className="text-xs leading-[15.12px] text-[#38A320]">Active</span>
              </div>
          <div>
            <DotMenuIcon />
          </div>
        </div>
        <div className="flex gap-10">
          <button className="px-[10px] py-[5px] rounded bg-custom-red text-[#FAFBFF] text-sm font-normal">Make a claim</button>
          <button className="px-[10px] py-[5px] text-custom-red border border-custom-red rounded">Download certificate</button>
        </div>
      </div>
    </div>
  );
};

export default PolicyItem;
