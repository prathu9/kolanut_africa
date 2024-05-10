import SafeHomeIcon from "@/icons/safe-home";
import Image from "next/image";

const SavedClaim = () => {
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
        <div>
          <div className="mb-2 text-sm leading-[17.64px] text-[#444444] font-normal">
            14 Ajao estate , off Meran road Abule- egba, Lagos nigeria
          </div>
          <div className="text-sm leading-[17.64px] text-[#444444]">
            <span className="font-medium">Coverage: </span>
            <span>Fire, burglary &Natural disaster</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between items-end">
        <Image
          src="/dashboard/brand-image.png"
          width={86.75}
          height={28.47}
          alt="brand"
        />
        <button className="px-4 py-2 text-white bg-custom-red rounded-lg ">
          Make a claim
        </button>
      </div>
    </div>
  );
};

export default SavedClaim;
