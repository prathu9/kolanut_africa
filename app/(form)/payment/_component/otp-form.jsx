"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import PaymentSuccess from "./payment-success";

const OTPForm = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    setShowSuccessMessage(true);
  };

  return (
    <div className="w-fit px-6 py-10 bg-white border-[0.5px] border-[#E0E0E0] rounded-3xl shadow-[0_12_24_-1_rgba(0,0,0,0.1)]">
      {showSuccessMessage ? (
        <PaymentSuccess />
      ) : (
        <div className="w-full max-w-[504px]">
          <h1 className="mt-[58.5px] mb-3 text-[32px] font-semibold leading-[46.4px] text-center">
            OTP
          </h1>
          <p className="mx-[44px] mb-[28.5px] text-base leading-[23.2px] text-[#535763]font-normal">
            Please enter 4-digit code sent to you by your bank to confirm the
            payment of <strong>₦51.160.00</strong>
          </p>
          <h3 className="mx-[44px] mb-2 text-base font-medium leading-[23.2px] text-custom-grey">
            4-digit code
          </h3>
          <form onSubmit={handleSubmit(onSubmit)} className="mx-[44px] mb-12">
            <div className="flex justify-between">
              <input
                {...register("firstDigit", { required: true })}
                className="w-12 h-12 text-center rounded-xl border border-[#777575]"
                type="text"
              />
              <input
                {...register("secondDigit", { required: true })}
                className="w-12 h-12 text-center rounded-xl border border-[#777575]"
                type="text"
              />
              <input
                {...register("thirdDigit", { required: true })}
                className="w-12 h-12 text-center rounded-xl border border-[#777575]"
                type="text"
              />
              <input
                {...register("fourDigit", { required: true })}
                className="w-12 h-12 text-center rounded-xl border border-[#777575]"
                type="text"
              />
            </div>
            <input
              disabled={!isValid}
              className={`mt-12 mx-auto px-6 py-3 block rounded-xl leading-[26.1px] cursor-pointer ${
                isValid ? "bg-custom-red text-white" : "bg-[#EFEFEF] text-[#777575]"
              }`}
              type="submit"
              value="Confirm payment"
            />
          </form>
        </div>
      )}
    </div>
  );
};

export default OTPForm;
