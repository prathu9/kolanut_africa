"use client";
import Image from "next/image";
import { useState } from "react";
import PaymentButton from "./_component/payment-button";
import CardPayment from "./_component/card-payment";
import OTPForm from "./_component/otp-form";

const PaymentPage = () => {
  const [coupon, setCoupon] = useState("");
  const [showDiscountBanner, setShowDiscountBanner] = useState(true);
  const [showCardPayment, setShowCardPayment] = useState(false);
  const [showOTPForm, setShowOTPForm] = useState(false);

  const hideDiscountBanner = () => {
    setShowDiscountBanner(false);
  };

  const handleShowCardPayment = () => {
    setShowCardPayment(true);
  };

  const handleCouponChange = (event) => {
    const value = event.target.value;

    setCoupon(value);
  };

  if(showOTPForm){
    return(
      <OTPForm />
    )
  }

  return (
    <div className="w-full max-w-[946px] px-6 py-10 rounded-3xl bg-white bobrder-[0.5px] border-[#E0E0E0] shadow-[0_12_24_-1_rgba(0,0,0,0.1)]">
      <h1 className="mb-12 text-[32px] text-center font-semibold text-custom-grey leading-[46.4px]">
        Payment
      </h1>
      <div className="mb-6 px-6 py-10 bg-[#FFF5F5] rounded-xl">
        <div className="flex justify-between">
          <h2 className="text-[20px] leading-[29px] font-normal">
            Residential property
          </h2>
          <div className="relative w-[94.19px] h-8">
            <Image
              src="/insurance/option-image.png"
              sizes="100%"
              fill
              alt="brand"
            />
          </div>
        </div>
        <div className="mt-[19px] mb-4 flex justify-between">
          <div className="flex gap-8">
            <div className="flex gap-3">
              <span className="text-base leading-[23.2px] text-[#37474F] font-medium">
                Type:{" "}
              </span>
              <span className="text-base leading-[23.2px] text-[#37474F] font-normal">
                Bungalow
              </span>
            </div>
            <div className="flex gap-3">
              <span className="text-base leading-[23.2px] text-[#37474F] font-medium">
                Coverage:
              </span>
              <span className="text-base leading-[23.2px] text-[#37474F] font-normal">
                Fire & Special perils
              </span>
            </div>
          </div>
          <div className="flex text-base font-normal leading-[23.2px] text-[#37474F]">
            <span>Valued:</span>
            <span>₦400,000,0000.00</span>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center gap-3">
            <span className="text-base font-normal leading-[23.2px] text-[#37474F]">
              Premium:
            </span>
            <span className="font-semibold text-[20px] leading-[29px] text-custom-red">
              ₦56,150.00
            </span>
          </div>
          <div className="flex gap-3">
            <span className="text-base leading-[23.2px] text-[#37474F] font-medium">
              Duration:
            </span>
            <span className="text-base leading-[23.2px] text-[#37474F] font-normal">
              12 months
            </span>
          </div>
        </div>
      </div>
      <div>
        <h3 className="mb-2 text-base leading-[23.2px] font-medium text-custom-grey">
          Coupon/ referral code
        </h3>
        <div className="mb-6 flex gap-8">
          <input
            type="text"
            value={coupon}
            onChange={handleCouponChange}
            className="px-5 basis-[82.18%] h-12 border border-[#C5C4C4] outline-none rounded-xl"
          />
          <button
            className={`w-[128px] h-12 text-base leading-[23.2px] font-normal rounded-xl ${
              coupon.length > 0
                ? "text-white bg-custom-red"
                : "text-[#777575] bg-[#F0F0F0]"
            }`}
          >
            Apply
          </button>
        </div>
        <div className="mb-3 flex justify-between">
          <span className="text-base leading-[23.2px] font-medium text-custom-grey">
            Premium
          </span>
          <span className="text-base font-bold leading-[23.2px]">
            56,150.00
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-base leading-[23.2px] font-medium text-custom-grey">
            Refererral
          </span>
          <span className="text-base font-bold leading-[23.2px] text-[#F71919]">
            -5000.00
          </span>
        </div>
        <div className="mt-[54px] mb-10 flex justify-between">
          <span className="text-xl leading-[29px] text-custom-grey font-medium">
            Total
          </span>
          <span className="text-2xl font-bold leading-[34.8px] text-custom-grey">
            51,150.00
          </span>
        </div>
        {showCardPayment ? (
          <CardPayment />
        ) : (
          <div className="mt-10 mb-[47px]">
            <h2 className="mb-8 text-2xl leading-[34.8px] font-medium text-custom-grey text-center">
              Payment Method
            </h2>
            <PaymentButton iconUrl="/insurance/bank.svg" handleClick={() => {}}>
              Pay with bank transfer
            </PaymentButton>
            <PaymentButton
              iconUrl="/insurance/cards.svg"
              handleClick={handleShowCardPayment}
            >
              Pay with Debit card
            </PaymentButton>
          </div>
        )}
      </div>
      {showDiscountBanner && (
        <div className="w-full max-w-[1115px] fixed left-1/2 bottom-0 -translate-x-1/2 pl-8 py-4 rounded-3xl bg-[#375F90] opacity-0 animate-fadeIn">
          <h2 className="text-[22px] text-center leading-[31.9px] font-semibold text-[#FAFBFF]">
            30% off on 24 months insurance policy
          </h2>
          <p className="mb-6 text-base text-[#DCDDE2] leading-[23.2px] font-normal">
            Insure your property against same risk, same insurance company for
            24 months for a total premium of ₦700,000 against 12 months for{" "}
            <span className="text-[#F97B80]">₦400,000</span>, saving a total of{" "}
            <span className="text-[#F97B80]">₦100,000</span>
          </p>
          <div className="flex justify-center gap-10">
            <button className="px-6 py-3 bg-custom-red rounded-xl text-lg leading-[26.1px] font-normal text-white">
              Insure property for 2 years
            </button>
            <button
              onClick={hideDiscountBanner}
              className="px-6 py-3 bg-white rounded-xl text-lg leading-[26.1px] font-normal text-[#535763]"
            >
              Dismiss
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentPage;
