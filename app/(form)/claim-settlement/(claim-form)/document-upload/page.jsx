"use client";
import CustomFileInput from "@/components/custom-file-input/custom-file-input";
import BackArrowIcon from "@/icons/back-arrow-icon";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const DocumentUpload = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm();

  const router = useRouter();

  const onSubmit = (data) => {
    console.log(data);
    router.push("/claim-settlement/upload-success");
  };

  return (
    <div className="relative">
      <Link
        href="/claim-settlement"
        className="absolute -top-[140px] flex gap-x-6 justify-center items-center text-custom-red"
      >
        <BackArrowIcon />
        <span>Previous</span>
      </Link>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <label className="mb-2 text-base leading-[23.2px] font-medium text-custom-grey">
          Police report
        </label>
        <CustomFileInput
          id="police-report"
          register={{ ...register("policeReport", { required: true }) }}
          className="mt-2 mb-4 py-6 flex flex-col gap-3 justify-center items-center bg-[#FAFAFA] border border-[#CACACA] border-dashed rounded-xl select-none"
        />
        <label className="mb-2 text-base leading-[23.2px] font-medium text-custom-grey">
          Photographs taken at the scene
        </label>
        <CustomFileInput
          id="images"
          register={{ ...register("images", { required: true }) }}
          className="mt-2 mb-4 py-6 flex flex-col gap-3 justify-center items-center bg-[#FAFAFA] border border-[#CACACA] border-dashed rounded-xl select-none"
        />
        <label className="mb-2 text-base leading-[23.2px] font-medium text-custom-grey">
          Receipt of stolen items
        </label>
        <CustomFileInput
          id="receipt"
          register={{ ...register("receipt", { required: true }) }}
          className="mt-2 mb-12 py-6 flex flex-col gap-3 justify-center items-center bg-[#FAFAFA] border border-[#CACACA] border-dashed rounded-xl select-none"
        />
        <input type="submit" defaultValue="Make a claim" disabled={!isValid} className={`max-w-[157px] mx-auto px-6 py-3 text-lg leading-[26.1px] rounded-xl ${isValid?"bg-custom-red text-[#FCFCFC]":"bg-[#E0E0E0] text-[#455A64]"}`} />
      </form>
    </div>
  );
};

export default DocumentUpload;
