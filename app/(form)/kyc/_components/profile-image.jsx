"use client";
import { WizardContext } from "@/components/wizard-form/wizard-form";
import { useContext } from "react";
import { useForm } from "react-hook-form";

const ProfileImage = () => {
    const {currentStep, nextStep} = useContext(WizardContext);
    const {register, handleSubmit, formState: {isValid}} = useForm();
    
    if(currentStep !== 1){
        return null;
    }

    const onSubmit = (data) => {
        console.log(data);
        nextStep();
    }

    return(
        <div className="mx-[60px]">
            <h4 className="my-6 text-[14px] text-center leading-[20.3px] font-normal text-[#535763]">
                1.Profile image
            </h4>
            <h2 className="text-[32px] leading-[46.4px] font-semibold text-custom-grey text-center">
                Profile image
            </h2>
            <p className="mb-8 text-base leading-[23.2px] text-[#535763] font-normal">
            Please upload a clear image of yourself to proceed to ID verification
            </p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-12 w-[240px] h-[240px]">
                    <input type="file" {...register("photo", {required: true})}/>
                </div>
               
                <input type="submit" disabled={!isValid} value="Continue" className={`mx-auto flex px-6 py-3 rounded-xl text-lg font-normal leading-[26.1px] cursor-pointer ${isValid? "bg-custom-red text-white":"bg-[#E0E0E0] text-[#455A64]"} `} />
            </form>
        </div>
    )
}

export default ProfileImage;