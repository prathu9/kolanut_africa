"use client";
import { WizardContext } from "@/components/wizard-form/wizard-form";
import { useContext } from "react";
import { useForm } from "react-hook-form";

const LocationInfo = () => {
  const { currentStep, nextStep } = useContext(WizardContext);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    nextStep();
  };

  if (currentStep !== 2) {
    return null;
  }

  return (
    <div className="px-[60px]">
      <h1 className="mb-8 text-[32px] leading-[46.1px] text-center text-custom-grey font-semibold">
        Location
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="w-[588px] h-fit flex flex-col">
        <label>House number</label>
        <input
          type="number"
          {...register("houseNumber")}
          className="mt-2 mb-4 w-full h-12 px-6 border border-[#0E1626] rounded-xl"
        />
        <label>Street</label>
        <input
          type="text"
          {...register("street")}
          className="mt-2 mb-4 w-full h-12 px-6 border border-[#0E1626] rounded-xl"
        />
        <label>Estate name (optional)</label>
        <input
          type="text"
          {...register("estate-name")}
          className="mt-2 mb-4 w-full h-12 px-6 border border-[#0E1626] rounded-xl"
        />
        <label>City</label>
        <select
          className="mt-2 mb-4 h-12 px-6 border border-[#10192C] rounded-xl"
          {...register("city")}
        >
          <option value="new york">New york</option>
          <option value="paris">Paris</option>
        </select>
        <label>LGA</label>
        <select
          className="mt-2 mb-4 h-12 px-6 border border-[#10192C] rounded-xl"
          {...register("lga")}
        >
          <option value="ikeja">ikeja</option>
          <option value="llm">llm</option>
        </select>
        <label>Postal code</label>
        <input
          type="number"
          {...register("postalCode")}
          className="mt-2 mb-4 w-full h-12 px-6 border border-[#0E1626] rounded-xl"
        />
        <input
          type="submit"
          value="continue"
          className="mb-4 w-[127px] h-[50px] mt-12 mx-auto px-6 py-3 bg-custom-red text-white rounded-xl"
        />
      </form>
    </div>
  );
};

export default LocationInfo;
