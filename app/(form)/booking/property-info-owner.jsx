"use client";
import { WizardContext } from "@/components/wizard-form/wizard-form";
import Image from "next/image";
import { useContext } from "react";
import { useForm } from "react-hook-form";

const PropertyInfoOwner = () => {
  const { currentStep, nextStep } = useContext(WizardContext);
  const { register, handleSubmit, watch } = useForm();

  const insureContent = watch("insureContent");

  const onSubmit = (data) => {
    console.log(data);
    nextStep();
  };

  if (currentStep !== 1) {
    return null;
  }

  return (
    <div className="px-[60px]">
      <h1 className="mb-8 text-[32px] leading-[46.1px] text-center text-custom-grey font-semibold">
        Property info
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[588px] h-fit flex flex-col"
      >
        <label className="mb-2 text-base leading-[23.2px] text-custom-grey font-medium">
          Type of property
        </label>
        <select
          className="h-12 px-6 border border-[#10192C] rounded-xl"
          {...register("property-type")}
        >
          <option value="bungalow">Bungalow</option>
          <option value="bungalow">Flat</option>
          <option value="bungalow">Tent</option>
          <option value="bungalow">Hotel</option>
        </select>
        <label className="mt-4 mb-2 text-base leading-[23.2px] text-custom-grey font-medium">
          Property usage
        </label>
        <select
          className="h-12 px-6 border border-[#10192C] rounded-xl"
          {...register("usage-type")}
        >
          <option value="residential">Residental</option>
          <option value="rent">Rent</option>
        </select>
        <label className="mt-4 mb-2">Property value</label>
        <div className="w-full relative">
          <span className="absolute top-1/2 left-6 -translate-y-1/2 text-base">
            ₦
          </span>
          <input
            className="w-full h-12 pl-10 pr-6 text-base font-normal leading-[23.2px] text-[#535763] border border-[#10192C] rounded-xl"
            type="text"
            {...register("property-value")}
          />
        </div>
        <label className="mt-4 mb-2 text-base leading-[23.2px] text-custom-grey font-medium">
          Insurance duration
        </label>
        <select
          className="h-12 px-6 border border-[#10192C] rounded-xl"
          {...register("insurance-duration")}
        >
          <option value="12 months">12 months</option>
          <option value="24 months">24 months</option>
        </select>
        <label className="my-4 text-lg leading-[23.2px] text-custom-grey font-medium">
          Select the risk you are insuring against
        </label>
        <div className="mb-3 flex items-center gap-3">
          <span className="w-12 h-12 flex items-center justify-center bg-[#F8F7F7] rounded-full">
            <Image src="/form/fire.svg" width={32} height={32} alt="fire" />
          </span>
          <div className="basis-[82%] max-w-[462px]">
            <h3 className="mb-2 text-base font-medium leading-[23.2px] text-custom-grey">
              Fire& natural disaster
            </h3>
            <p className="text-[14px] text-[#535763] font-normal leading-[20.3px]">
              Insure property against fire and natural disasters like Lightning,
              explosion, thunderbolt and subterranean fire, Bursting or
              overflowing of water tanks, aircraft dropped therefrom. Hurricane,
              cyclone, tornado, windstorm. earthquake and volcanic eruption ,
              flood
            </p>
          </div>
          <div>
            <label className="inline-flex items-center cursor-pointer">
              <input
                {...register("risk")}
                type="checkbox"
                value="fire"
                className="sr-only peer"
              />
              <div className="relative w-12 h-6 bg-[#E0E0E0] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-0 after:start-0 after:bg-white  peer-checked:after:bg-[#F63C44] after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-[#FCE7E5]"></div>
            </label>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-12 h-12 flex items-center justify-center bg-[#F8F7F7] rounded-full">
            <Image src="/form/unlock.svg" width={32} height={32} alt="unlock" />
          </span>
          <div className="basis-[82%] max-w-[462px]">
            <h3 className="mb-2 text-base font-medium leading-[23.2px] text-custom-grey">
              Burglary
            </h3>
            <p className="text-[14px] text-[#535763] font-normal leading-[20.3px]">
              Insure property against theft of property and damages and risk
              incurred caused by theft
            </p>
          </div>
          <div>
            <label className="inline-flex items-center cursor-pointer">
              <input
                {...register("risk")}
                type="checkbox"
                value="burglary"
                className="sr-only peer"
              />
              <div className="relative w-12 h-6 bg-[#E0E0E0] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-0 after:start-0 after:bg-white  peer-checked:after:bg-[#F63C44] after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-[#FCE7E5]"></div>
            </label>
          </div>
        </div>
        <div className="mt-4">
          <label className="text-lg leading-[26.1px] font-medium text-custom-grey">
            Do you want to insure content in the building
          </label>
          <div className="mt-4 flex gap-6">
            <label
              htmlFor="yes"
              className={`relative w-[59px] h-[44px] rounded-xl flex justify-center items-center cursor-pointer   ${
                insureContent === "yes"
                  ? "bg-[#FC9CA0] text-black"
                  : "bg-[#FAF9F9]"
              }`}
            >
              <input
                className="invisible"
                id="yes"
                type="radio"
                value="yes"
                {...register("insureContent")}
              />
              <span className="absolute">Yes</span>
            </label>
            <label
              htmlFor="no"
              className={`relative w-[59px] h-[44px] rounded-xl flex justify-center items-center cursor-pointer   ${
                insureContent === "no"
                  ? "bg-[#FC9CA0] text-black"
                  : "bg-[#FAF9F9]"
              }`}
            >
              <input
                className="invisible"
                id="no"
                type="radio"
                value="no"
                {...register("insureContent")}
              />
              <span className="absolute">No</span>
            </label>
          </div>
        </div>
        {insureContent === "yes" ? (
          <div className="mt-4">
            <label>Static property value(Furniture, Electronics)</label>
            <div className="mt-2 mb-4 w-full relative">
              <span className="absolute top-1/2 left-6 -translate-y-1/2 text-base">
                ₦
              </span>
              <input
                className="w-full h-12 pl-10 pr-6 border border-[#C5C4C4] rounded-xl"
                type="text"
                {...register("property-value")}
              />
            </div>
            <label>
              Luxury mobile property value (Jewelries, Expensive wrist watch )
            </label>
            <div className="mt-2 mb-4 w-full relative">
              <span className="absolute top-1/2 left-6 -translate-y-1/2 text-base">
                ₦
              </span>
              <input
                className="w-full h-12 pl-10 pr-6 border border-[#C5C4C4] rounded-xl"
                type="text"
                {...register("property-value")}
              />
            </div>
            <label>Fully mobile property value (Laptops, Phones)</label>
            <div className="mt-2 mb-4 w-full relative">
              <span className="absolute top-1/2 left-6 -translate-y-1/2 text-base">
                ₦
              </span>
              <input
                className="w-full h-12 pl-10 pr-6 border border-[#C5C4C4] rounded-xl"
                type="text"
                {...register("property-value")}
              />
            </div>
          </div>
        ) : null}

        <input
          type="submit"
          value="continue"
          className="w-[127px] h-[50px] mt-12 mx-auto px-6 py-3 bg-custom-red text-white rounded-xl cursor-pointer"
        />
      </form>
    </div>
  );
};

export default PropertyInfoOwner;
