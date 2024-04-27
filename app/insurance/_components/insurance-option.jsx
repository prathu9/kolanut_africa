import Image from "next/image";

const InsuranceOption = ({handleSelect}) => {
  return (
    <div className="mb-6 px-6 py-4 flex gap-[97px] justify-between rounded-3xl bg-white">
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
        <button onClick={handleSelect} className="flex gap-2 justify-between px-4 py-2 rounded-xl border-2 border-custom-red">
          <span className="text-lg leading-[26.1px] font-normal text-custom-red">
            Select
          </span>
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.4297 6.42969L20.4997 12.4997L14.4297 18.5697"
              stroke="#AF060D"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3.5 12.5H20.33"
              stroke="#AF060D"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <svg
        className="absolute right-0 -top-1 "
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_1164_13998)">
            <path
              d="M16.5 3C14.76 3 13.09 3.81 12 5.09C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.42 2 8.5C2 12.28 5.4 15.36 10.55 20.04L12 21.35L13.45 20.03C18.6 15.36 22 12.28 22 8.5C22 5.42 19.58 3 16.5 3ZM12.1 18.55L12 18.65L11.9 18.55C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5C9.04 5 10.54 5.99 11.07 7.36H12.94C13.46 5.99 14.96 5 16.5 5C18.5 5 20 6.5 20 8.5C20 11.39 16.86 14.24 12.1 18.55Z"
              fill="#323232"
            />
          </g>
          <defs>
            <clipPath id="clip0_1164_13998">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default InsuranceOption;
