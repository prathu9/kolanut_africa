import Image from "next/image";

const PaymentButton = ({iconUrl, handleClick, children}) => {
    return(
        <button onClick={handleClick} className="mb-6 mx-auto w-full max-w-[598px] h-[56px] px-6 py-2 flex justify-between items-center border-[0.5px] border-[#E7E4E4] bg-[#FAFAFA] rounded-xl">
            <span className="flex gap-3 items-center text-base leading-[23.2px] text-custom-grey font-normal">
              <span className="p-2">
                <Image
                  src={iconUrl}
                  width={24}
                  height={24}
                  alt="bank"
                />
              </span>
              <span>{children}</span>
            </span>
            <span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.94922 4.07992L15.4692 10.5999C16.2392 11.3699 16.2392 12.6299 15.4692 13.3999L8.94922 19.9199"
                  stroke="#AF060D"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </button>
    )
}

export default PaymentButton;