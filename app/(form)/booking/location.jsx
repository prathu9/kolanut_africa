"use client";
import { WizardContext } from "@/components/wizard-form/wizard-form";
import { useContext } from "react";

const LocationInfo = () => {
    const {currentStep,nextStep} = useContext(WizardContext);

    const onSubmit = () => {
        nextStep();
    }

    if(currentStep !== 2){
        return null;
    }

    return(
        <form onSubmit={onSubmit} className="w-full h-fit p-10">
            <input className="h-10" type="text"/>
            <input type="submit"/> 
        </form>
    )
}

export default LocationInfo;