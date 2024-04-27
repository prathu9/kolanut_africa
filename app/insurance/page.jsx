"use client";
import FilterAccordion from "./_components/filter-accordion";
import Image from "next/image";
import CustomCheckBox from "./_components/custom-checkbox";
import InsuranceOption from "./_components/insurance-option";
import { useRouter } from "next/navigation";

const insuranceDurationOptions = [
    {
        inputId: "24-months",
        name: "insurance-duration",
        content: "24 months"
    },
    {
        inputId: "18-months",
        name: "insurance-duration",
        content: "18 months"
    },
    {
        inputId: "12-months",
        name: "insurance-duration",
        content: "12 months"
    },
    {
        inputId: "6-months",
        name: "insurance-duration",
        content: "6 months"
    },
    {
        inputId: "3-months",
        name: "insurance-duration",
        content: "3 months"
    },
]

const InsuranceOptions = () => {

  const router = useRouter();

  const handleSelect = () => {
    router.push("/payment");
  }

  return (
    <div className="p-20">
      <div className="flex min-h-[1348px] bg-[#FAFAFA]">
        <div className="pt-[181px] pl-10 pr-[99px] border-r-2">
          <h3 className="mb-8 flex gap-3">
            <Image
              src="/insurance/filter-icon.svg"
              width={24}
              height={24}
              alt="filter"
            />
            <span className="text-[22px] leading-[31.9px] font-semibold">
              Filter
            </span>
          </h3>
          <div className="mb-10">
            <FilterAccordion title="Coverage options">
            <div className="flex flex-col gap-9">
                <CustomCheckBox inputId="fire-coverage" name="coverage">
                  Fire & Natural disaster
                </CustomCheckBox>
                <CustomCheckBox inputId="burglary" name="coverage">
                  Burglary
                </CustomCheckBox>
              </div>
            </FilterAccordion>
          </div>
          <div className="mb-10">
            <FilterAccordion title="Insurance duration">
            <div className="flex flex-col gap-9">
                {
                    insuranceDurationOptions.map(option => (
                     <CustomCheckBox key={option.inputId} inputId={option.inputId} name={option.name}>
                        {option.content}
                      </CustomCheckBox>
                    ))
                }
              </div>
            </FilterAccordion>
          </div>
          <div>
            <FilterAccordion title="Premium price">
                
            </FilterAccordion>
          </div>
        </div>
        <div className="basis-3/4 mx-10">
            <div className="mb-[75.94px] ml-[263px] mt-[39.77px]">
                <Image src="/insurance-page-logo.svg" width={196} height={76.29} alt="logo"/>
            </div>
            <div className="flex justify-between">
                <h2 className="text-4xl">Quote</h2>
                <div>
                    <h4 className="mb-4 text-base leading-[23.2px] font-medium text-custom-grey">Companies</h4>
                    <select className="w-[301px] h-12 px-6 text-custom-grey rounded-xl leading-[23.2px] font-normal text-base">
                        <option>All companies</option>
                    </select>
                </div>
            </div>
            <div className="mt-10">
              <InsuranceOption handleSelect={handleSelect} />
              <InsuranceOption handleSelect={handleSelect}/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default InsuranceOptions;
