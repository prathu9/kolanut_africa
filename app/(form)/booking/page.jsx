"use client";
import WizardForm, {
  WizardContext,
} from "@/components/wizard-form/wizard-form";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import PropertyInfoOwner from "./_components/property-info-owner";
import LocationInfo from "./_components/location";
import PersonalInfo from "./_components/personal-info";
import PropertyInfoRent from "./_components/property-Info-rent";
import EmailVerification from "./_components/email-verification";
import HouseOwnerOption from "./_components/house-owner-option";

const BookingPage = () => {
  const [showWizard, setShowWizard] = useState(false);
  const [accommodationType, setAccommodationType] = useState();
  const [showEmailVerification, setShowEmailVerification] = useState();

  return (
    <div className="relative z-10 w-fit h-fi=">
      {showWizard ? (
        <WizardForm steps={4}>
          {accommodationType === "own" ? (
            <PropertyInfoOwner />
          ) : (
            <PropertyInfoRent />
          )}
          <LocationInfo />
          <PersonalInfo setShowEmailVerification={setShowEmailVerification} setShowWizard={setShowWizard} />
        </WizardForm>
      ) :
      showEmailVerification?
      (
        <EmailVerification />
      ):
      (
        <HouseOwnerOption
          setShowWizard={setShowWizard}
          setAccommodationType={setAccommodationType}
        />
      )}
    </div>
  );
};

export default BookingPage;
