import InsuranceOption from "@/components/insurance-option/insurance-option";
import LikeHeart from "@/icons/like-heart";
import Image from "next/image";

const CoveragePanel = () => {
  return (
    <div>
        <div className="mt-6 flex gap-6 flex-col">
            <InsuranceOption optionStyle="bg-[#FCFCFC] border-[0.5px] border-[#CACACA]" />
            <InsuranceOption optionStyle="bg-[#FCFCFC] border-[0.5px] border-[#CACACA]" />
        </div>
      
    </div>
  );
};

export default CoveragePanel;
