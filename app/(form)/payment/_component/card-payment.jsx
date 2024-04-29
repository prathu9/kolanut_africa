import Image from "next/image";
import { useForm } from "react-hook-form";

const CardPayment = ({setShowOTPForm}) => {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setShowOTPForm(true);
  }

  return (
    <div className="mt-[77.25px] mx-[150px]">
      <h2 className="mt-10 mb-6 text-2xl text-center font-medium leading-[34.8px] text-custom-grey">
        Pay with card
      </h2>
      <div>
        <h3 className="mb-5 flex gap-3 items-center text-base leading-[20.16px] text-[#292D32] font-normal">
          <span>Debit card</span>
          <Image
            src="/insurance/master-card.svg"
            width={24}
            height={24}
            alt="master card"
          />
          <Image src="/insurance/visa.svg" width={24} height={24} alt="visa" />
        </h3>
        <form method="post" onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
          <label className="mb-2 text-base leading-[23.2px] font-medium text-custom-grey">
            Name on card
          </label>
          <input
            {...register("card-name", { required: true })}
            className="w-full h-12 mb-3 px-5 border border-[#C5C4C4] rounded-xl"
          />
          <label className="mb-2 text-base leading-[23.2px] font-medium text-custom-grey">
            Card number
          </label>
          <input
            {...register("card-number", { required: true })}
            className="w-full h-12 mb-3 px-5 border border-[#C5C4C4] rounded-xl"
          />
          <div className="mb-4 flex gap-6">
            <div className="basis-1/2">
              <label className="mb-2 inline-block text-base leading-[23.2px] font-medium text-custom-grey">
                Expiry Date
              </label>
              <input
                {...register("expiry-date", { required: true })}
                className="w-full h-12 mb-3 px-5 border border-[#C5C4C4] rounded-xl"
              />
            </div>
            <div className="basis-1/2">
              <label className="mb-2 inline-block text-base leading-[23.2px] font-medium text-custom-grey">
                CVV
              </label>
              <input
                {...register("cvv", { required: true })}
                className="w-full h-12 mb-3 px-5 border border-[#C5C4C4] rounded-xl"
              />
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <div className="relative w-11 h-11 flex justify-center items-center">
              <input
                {...register("save-for-later", { required: true })}
                id="save-later"
                type="checkbox"
                className="peer hidden"
              />
              <label
                htmlFor="save-later"
                className="w-11 h-11 relative z-10 opacity-60 rounded-lg peer-checked:bg-[#FC9CA0] border border-[#C5C4C4] select-none cursor-pointer"
              ></label>
              <span className="absolute invisible peer-checked:visible">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 6.82129L9 17.8213L4 12.8213"
                    stroke="#10192C"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </div>

            <span className="text-base text-custom-grey font-normal text-center leading-[20.16px]">
              Save for later
            </span>
          </div>
          <input
            type="submit"
            value="Pay now"
            disabled={!isValid}
            className={`mt-10 mx-auto px-6 py-3 max-w-[119px] rounded-xl cursor-pointer  ${
              isValid ? "bg-custom-red text-white" : "bg-[#E0E0E0]"
            }`}
          />
        </form>
      </div>
    </div>
  );
};

export default CardPayment;
