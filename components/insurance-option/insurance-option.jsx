import LikeHeart from "@/icons/like-heart";
import RightArrow from "@/icons/right-arrow";
import Image from "next/image";

const InsuranceOption = ({ handleSelect, optionStyle }) => {
  return (
    <div className={`mb-6 px-6 py-4 flex gap-[97px] justify-between rounded-3xl ${optionStyle}`}>
      <div className="flex gap-4 basis-[62.53%] items-center">
        <div className="relative w-[140px] h-12">
          <Image
            src="/insurance/option-image.png"
            sizes="100%"
            fill
            alt="option"
          />
        </div>
        <div className="basis-3/4">
          <h2 className="text-xl leading-[29px] font-semibold">
            Leadway Assurance
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam,{" "}
          </p>
        </div>
      </div>
      <div className="relative flex gap-6 items-center">
        <span className="text-lg leading-[26.1px] text-custom-grey font-medium">
          ₦540,000
        </span>
        <button
          onClick={handleSelect}
          className="flex gap-2 justify-between px-4 py-2 rounded-xl border-2 border-custom-red"
        >
          <span className="text-lg leading-[26.1px] font-normal text-custom-red">
            Select
          </span>
          <RightArrow />
        </button>
        <LikeHeart />
      </div>
    </div>
  );
};

export default InsuranceOption;
