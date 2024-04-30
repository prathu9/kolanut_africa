"use client";
import { WizardContext } from "@/components/wizard-form/wizard-form";
import { useContext } from "react";
import { useForm } from "react-hook-form";

const PropertyDocument = ({onSuccess}) => {
  const { currentStep } = useContext(WizardContext);
  const {register, handleSubmit, formState: {isValid}} = useForm();

  if (currentStep !== 3) {
    return null;
  }
console.log(isValid)
  const onSubmit = (data) => {
    console.log(data);
    onSuccess();
  }

  return (
    <div className="mx-[60px]">
      <h4 className="mx-[52.5px] my-6 text-[14px] text-center leading-[20.3px] font-normal text-[#535763]">
        3. Property document
      </h4>
      <h2 className="mx-[52.5px] text-[32px] leading-[46.4px] font-semibold text-custom-grey text-center">
        Property document
      </h2>
      <p className="mx-[52.5px] mb-8 text-base leading-[23.2px] text-[#535763] font-normal">
        Please provide the required information on the insured property
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <h3 className="mb-2 font-medium leading-[20.16px] text-base text-[#444444]">
          Proof of property ownership
        </h3>
        <p className="text-[14px] leading-[17.64px] font-normal text-[#5B5B5B]">
          Upload a scanned copy of your property deed or purchase agreement.
        </p>
        <div>
          <label
            htmlFor="ownership-proof"
            className="mt-2 mb-4 py-6 flex flex-col gap-3 justify-center items-center bg-[#FAFAFA] border border-[#CACACA] border-dashed rounded-xl select-none"
          >
            <input
              id="ownership-proof"
              type="file"
              {...register("ownership-proof", { required: true })}
              className="hidden"
            />
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 16.7422C2.79401 15.935 2 14.5602 2 13C2 10.6564 3.79151 8.73129 6.07974 8.51937C6.54781 5.67213 9.02024 3.5 12 3.5C14.9798 3.5 17.4522 5.67213 17.9203 8.51937C20.2085 8.73129 22 10.6564 22 13C22 14.5602 21.206 15.935 20 16.7422M8 16.5L12 12.5M12 12.5L16 16.5M12 12.5V21.5"
                stroke="#838282"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h4>
              <span className="text-custom-red text-[14px] font-semibold leading-[20.3px]">
                Click to upload
              </span>{" "}
              or drag and drop
            </h4>
            <p className="text-[#535763] leading-[17.4px] text-[12px] font-normal">
              PNG, JPG ,PDF (max. 800x400px)
            </p>
          </label>
        </div>
      </div>
      <div>
        <h3 className="mb-2 font-medium leading-[20.16px] text-base text-[#444444]">
            Photos of property
        </h3>
        <p className="text-[14px] leading-[17.64px] font-normal text-[#5B5B5B]">
            Upload clear photos of your property&apos;s interior and exterior.
        </p>
        <div>
          <label
            htmlFor="property-photo"
            className="mt-2 mb-4 py-6 flex flex-col gap-3 justify-center items-center bg-[#FAFAFA] border border-[#CACACA] border-dashed rounded-xl select-none"
          >
            <input
              id="property-photo"
              type="file"
              {...register("property-photo", { required: true })}
              className="hidden"
            />
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 16.7422C2.79401 15.935 2 14.5602 2 13C2 10.6564 3.79151 8.73129 6.07974 8.51937C6.54781 5.67213 9.02024 3.5 12 3.5C14.9798 3.5 17.4522 5.67213 17.9203 8.51937C20.2085 8.73129 22 10.6564 22 13C22 14.5602 21.206 15.935 20 16.7422M8 16.5L12 12.5M12 12.5L16 16.5M12 12.5V21.5"
                stroke="#838282"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h4>
              <span className="text-custom-red text-[14px] font-semibold leading-[20.3px]">
                Click to upload
              </span>{" "}
              or drag and drop
            </h4>
            <p className="text-[#535763] leading-[17.4px] text-[12px] font-normal">
              PNG, JPG ,PDF (max. 800x400px)
            </p>
          </label>
        </div>
      </div>
      <div>
        <h3 className="mb-2 font-medium leading-[20.16px] text-base text-[#444444]">
            Recent renovation receipts (Optional)
        </h3>
        <p className="text-[14px] leading-[17.64px] font-normal text-[#5B5B5B]">
            If you&apos;ve made any recent renovations, upload receipts for the work done.
        </p>
        <div>
          <label
            htmlFor="renovation-receipt"
            className="mt-2 mb-12 py-6 flex flex-col gap-3 justify-center items-center bg-[#FAFAFA] border border-[#CACACA] border-dashed rounded-xl select-none"
          >
            <input
              id="renovation-receipt"
              type="file"
              {...register("renovation-receipt")}
              className="hidden"
            />
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 16.7422C2.79401 15.935 2 14.5602 2 13C2 10.6564 3.79151 8.73129 6.07974 8.51937C6.54781 5.67213 9.02024 3.5 12 3.5C14.9798 3.5 17.4522 5.67213 17.9203 8.51937C20.2085 8.73129 22 10.6564 22 13C22 14.5602 21.206 15.935 20 16.7422M8 16.5L12 12.5M12 12.5L16 16.5M12 12.5V21.5"
                stroke="#838282"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h4>
              <span className="text-custom-red text-[14px] font-semibold leading-[20.3px]">
                Click to upload
              </span>{" "}
              or drag and drop
            </h4>
            <p className="text-[#535763] leading-[17.4px] text-[12px] font-normal">
              PNG, JPG ,PDF (max. 800x400px)
            </p>
          </label>
        </div>
      </div>
      <input 
        type="submit"
        value="Upload document"
        disabled={!isValid}
        className={`mx-auto flex px-6 py-3 rounded-xl text-lg font-normal leading-[26.1px] ${isValid?"text-white bg-custom-red":"bg-[#E0E0E0] text-[#455A64]"}`}
      />
      </form>
    </div>
  );
};

export default PropertyDocument;
