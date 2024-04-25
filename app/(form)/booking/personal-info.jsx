"use client";
import { WizardContext } from "@/components/wizard-form/wizard-form";
import Image from "next/image";
import { useContext } from "react";
import { useForm } from "react-hook-form";

const PersonalInfo = () => {
  const { currentStep, nextStep } = useContext(WizardContext);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    nextStep();
  };

  if (currentStep !== 3) {
    return null;
  }
  return (
    <div className="px-[60px]">
      <h1 className="mb-8 text-[32px] leading-[46.1px] text-center text-custom-grey font-semibold">
        Personal info
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[588px] h-fit flex flex-col"
      >
        <label>First name</label>
        <input
          type="text"
          {...register("firstname")}
          className="mt-2 mb-4 w-full h-12 px-6 border border-[#C5C4C4] rounded-xl"
        />
        <label>Middle name</label>
        <input
          type="text"
          {...register("middlename")}
          className="mt-2 mb-4 w-full h-12 px-6 border border-[#C5C4C4] rounded-xl"
        />
        <label>Last name</label>
        <input
          type="text"
          {...register("lastname")}
          className="mt-2 mb-4 w-full h-12 px-6 border border-[#C5C4C4] rounded-xl"
        />
        <label>Email</label>
        <input
          type="email"
          {...register("email")}
          className="mt-2 mb-4 w-full h-12 px-6 border border-[#C5C4C4] rounded-xl"
        />
        <div className="flex gap-6">
          <div className="basis-1/2">
            <label>Phone</label>
            <div className="mt-2 mb-4 basis-1/2 relative">
              <span className="absolute top-1/2 left-6 -translate-y-1/2 text-base">
                +234
              </span>
              <input
                className="w-full h-12 pl-16 pr-6 border border-[#C5C4C4] rounded-xl"
                type="text"
                {...register("property-value")}
              />
            </div>
          </div>
          <div className="basis-1/2">
            <label>Alternative phone number</label>
            <div className="mt-2 mb-4 relative">
              <span className="absolute top-1/2 left-6 -translate-y-1/2 text-base">
                +234
              </span>
              <input
                className="w-full h-12 pl-16 pr-6 border border-[#C5C4C4] rounded-xl"
                type="text"
                {...register("property-value")}
              />
            </div>
          </div>
        </div>
        <div className="basis-1/2">
            <label>Date of birth</label>
            <div className="mt-2 mb-4 relative">
              <input
                className="w-full h-12 pl-6 pr-16 border border-[#C5C4C4] rounded-xl"
                type="text"
                {...register("property-value")}
              />
              <span className="absolute top-1/2 right-6 -translate-y-1/2 text-base">
                <Image src="/form/calendar.svg" width={24} height={24} alt="calendar"/>
              </span>
            </div>
          </div>
          <div className="basis-1/2">
            <label>Password</label>
            <div className="mt-2 mb-4 relative">
              <input
                className="w-full h-12 pl-6 pr-16 border border-[#C5C4C4] rounded-xl"
                type="text"
                {...register("property-value")}
              />
              <span className="absolute top-1/2 right-6 -translate-y-1/2 text-base">
                <Image src="/form/eye-slash.svg" width={24} height={24} alt="calendar"/>
              </span>
            </div>
            </div>
            <input
          type="submit"
          value="continue"
          className="w-[127px] h-[50px] mt-12 mx-auto px-6 py-3 bg-custom-red text-white rounded-xl"
        />
      </form>
    </div>
  );
};

export default PersonalInfo;
