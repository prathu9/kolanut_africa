"use client";
import { Children, useEffect, useState } from "react";
import { createContext } from "react";

export const WizardContext = createContext({
    currentStep: 0,
    nextStep: () => {}
})

const WizardForm = ({steps, children}) => {
    const [progressWidth, setProgressWidth] = useState(0);
    const [currentStep, setCurrentStep] = useState(1);

    const nextStep = () => {
        setCurrentStep(currentStep+1);
    }

    const contextValue = {
        currentStep,
        nextStep
    }
   
    useEffect(() => {
        const width = ((currentStep) / steps)*100;
        setProgressWidth(width);
    }, [currentStep, steps]);

    return(
        <div className="w-full max-w-[756px] px-6 pb-10 h-fit rounded-3xl bg-white overflow-hidden">
            <div className="w-full h-3">
                <div className={`w-[${progressWidth}%] h-full bg-gradient-to-r from-[#F93434] to-[#D50A13] rounded-lg transition-all duration-150`}  style={{ width: `${progressWidth}%` }}></div>
            </div>
            <div>

            </div>
            <WizardContext.Provider value={contextValue}>
                {children}
            </WizardContext.Provider>
        </div>
    )
}

export default WizardForm;