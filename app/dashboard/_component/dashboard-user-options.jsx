import ArrowRight from "@/icons/arrow-right";
import Link from "next/link";
import DotMenuIcon from "@/icons/dot-menu";
import Image from "next/image";
import SafeHomeIcon from "@/icons/safe-home";

const DashboardUserOption = () => {
  return (
    <div>
      <h2 className="mb-[15px] text-2xl leading-[30.24px] font-semibold text-[#444444]">
        Quick links
      </h2>
      <div className="flex gap-x-[18px]">
        <Link
          href="/dashboard"
          className="basis-[31%] px-4 py-[21.5px] flex items-center bg-[#EDF3FB]"
        >
          <div className="max-w-[167px]">
            <h3 className="mb-2 text-lg font-medium leading-[22.68px] text-custom-grey">
              View policy
            </h3>
            <p className="text-sm leading-[17.64px] text-[#7A7D86] font-normal">
              All active and past insurance policies.
            </p>
          </div>
          <div>
            <ArrowRight />
          </div>
        </Link>
        <Link
          href="/dashboard"
          className="basis-[31%] px-4 py-[21.5px] flex items-center bg-[#E6FDE1]"
        >
          <div className="max-w-[167px]">
            <h3 className="mb-2 text-lg font-medium leading-[22.68px] text-custom-grey">
              Make a claim
            </h3>
            <p className="text-sm leading-[17.64px] text-[#7A7D86] font-normal">
              Initiates a new claim.
            </p>
          </div>
          <div>
            <ArrowRight />
          </div>
        </Link>
        <Link
          href="/dashboard"
          className="basis-[31%] px-4 py-[21.5px] flex items-center bg-[#F9FFD7]"
        >
          <div className="max-w-[167px]">
            <h3 className="mb-2 text-lg font-medium leading-[22.68px] text-custom-grey">
              Get a Quote
            </h3>
            <p className="text-sm leading-[17.64px] text-[#7A7D86] font-normal">
              Get a quote for a new home Insurance.
            </p>
          </div>
          <div>
            <ArrowRight />
          </div>
        </Link>
      </div>
      <div className="mt-[26px]">
        <h3 className="mb-[18px] text-lg leading-[22.68px] text-[#444444] font-semibold">Policy</h3>
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
                  <span className="ml-1 text-[#141F37] font-bold">
                    ₦620,000
                  </span>
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
            </div>
            <div className="flex gap-10">
              <button className="px-[10px] py-[5px] text-sm leading-[17.64px] text-custom-red border border-custom-red rounded">
                Download certificate
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardUserOption;
