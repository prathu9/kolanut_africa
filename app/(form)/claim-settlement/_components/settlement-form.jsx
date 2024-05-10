"use client";

import CustomRadioButton from "@/components/custom-radiobutton/custom-radiobutton";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const initialFormValue = {
    incidentDescribe: "",
    itemDetails: "",
    stepsTakenToRecover: "",
    guardStatement: "",
    repairEstimate: "",
    anySuspect: "yes"
}

const SettlementForm = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm({
    defaultValues: initialFormValue 
  });

  const router = useRouter();


  const onSubmit = (data) => {
    console.log(data);
    router.push("/claim-settlement/document-upload");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <label className="mb-2 text-base leading-[23.2px] text-custom-grey font-medium">Describe the full circumstance of the incident</label>
        <input className="mb-4 px-6 py-3 h-[120px] text-base leading-[23.2px] text-[#535763] border border-[#777575] rounded-xl" type="text" {...register("incidentDescribe", {required: true})}/>
        <label className="mb-2 text-base leading-[23.2px] text-custom-grey font-medium">Give full details of  items stolen  or damaged</label>
        <input className="mb-4 px-6 py-3 h-[120px] text-base leading-[23.2px] text-[#535763] border border-[#777575] rounded-xl" type="text" {...register("itemDetails", {required: true})} />
        <label className="mb-2 text-base leading-[23.2px] text-custom-grey font-medium">What other steps was taken to recover the property</label>
        <input className="mb-4 px-6 py-3 h-[120px] text-base leading-[23.2px] text-[#535763] border border-[#777575] rounded-xl" type="text" {...register("stepsTakenToRecover", {required: true})}/>
        <label className="mb-2 text-base leading-[23.2px] text-custom-grey font-medium">Statement of guard on duty (optional)</label>
        <input className="mb-4 px-6 py-3 h-[120px] text-base leading-[23.2px] text-[#535763] border border-[#777575] rounded-xl" type="text" {...register("guardStatement", {required: true})}/>
        <label className="mb-2 text-base leading-[23.2px] text-custom-grey font-medium">The repair estimate of the damaged building</label>
        <input className="mb-4 px-6 py-3 h-12 text-base leading-[23.2px] text-[#535763] border border-[#777575] rounded-xl" type="text" {...register("repairEstimate", {required: true})}/>
        <label className="mb-2 text-lg leading-[26.1px] text-custom-grey font-medium">
            Do you suspect any person?
        </label>
        <div className="flex gap-x-6">  
            <CustomRadioButton id="yes" type="radio" value="yes" register={{...register("anySuspect", {required: true})}} className="px-4 py-3 w-[55px] h-[44px] relative z-10 opacity-60 rounded-lg peer-checked:bg-[#FC9CA0] border border-[#C5C4C4] select-none cursor-pointer">Yes</CustomRadioButton>
            <CustomRadioButton id="no" type="radio" value="no" register={{...register("anySuspect", {required: true})}} className="px-4 py-3 w-[55px] h-[44px] relative z-10 opacity-60 rounded-lg peer-checked:bg-[#FC9CA0] border border-[#C5C4C4] select-none cursor-pointer">No</CustomRadioButton>
        </div>
       <input type="Submit" defaultValue="Continue" disabled={!isValid} className={`mx-auto mt-12 px-6 py-3 max-w-[127px] rounded-xl cursor-pointer ${isValid? "bg-custom-red text-white":"text-[#535763] bg-[#E0E0E0]"}`}/>
    </form>
  );
};

export default SettlementForm;
