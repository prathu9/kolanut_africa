"use client";
import { WizardContext } from "@/components/wizard-form/wizard-form";
import { useContext, useState } from "react";
import IDVerificationOptionBtn from "./id-verification-option-btn";
import Nin from "./id-verification-forms/nin";
import DriverLicense from "./id-verification-forms/driver-license";
import InternationalPassport from "./id-verification-forms/international-passport";

const IDVerification = () => {
    const {currentStep} = useContext(WizardContext);
    const [selectedForm, setSelectedForm] = useState("");
    
    if(currentStep !== 2){
        return null;
    }

    const selectForm = (formId) => {
        setSelectedForm(formId);
    }

    if(selectedForm === "nin"){
        return(
            <Nin />
        )
    }

    if(selectedForm === "license"){
        return (
            <DriverLicense />
        )
    }

    if(selectedForm === "passport"){
        return(
            <InternationalPassport />
        )
    }

    return(
        <div>
            <h4 className="my-6 text-[14px] text-center leading-[20.3px] font-normal text-[#535763]">
                2. ID verification
            </h4>
            <h2 className="text-[32px] leading-[46.4px] font-semibold text-custom-grey text-center">
                ID verification
            </h2>
            <p className="mx-[60px] mb-8 text-base leading-[23.2px] text-[#535763] font-normal">
            Please  provide an ID card to  confirm your personal information
            </p>
            <div className="mx-4">
                <h3 className="mb-10">Select means of identification</h3>
                <div className="flex flex-col gap-4 relative">
                    <span className="px-4 py-[2px] absolute top-0 left-[35px] -translate-y-1/2 rounded-lg bg-[#FCE7E5] text-custom-red">Recommended</span>
                    <IDVerificationOptionBtn formId="passport" selectForm={selectForm}>
                        Internationals Passport
                    </IDVerificationOptionBtn>
                    <IDVerificationOptionBtn formId="license" selectForm={selectForm}>
                        Driver’s  License 
                    </IDVerificationOptionBtn>
                    <IDVerificationOptionBtn formId="nin" selectForm={selectForm}>
                        National Identification  Card (NIN)
                    </IDVerificationOptionBtn>
                </div>
            </div>
        </div>
    )
}

export default IDVerification;