"use client";
import WizardForm from "@/components/wizard-form/wizard-form";
import ProfileImage from "./_components/profile-image";
import IDVerification from "./_components/id-verification";
import PropertyDocument from "./_components/property-document";
import { useState } from "react";
import UploadSuccess from "./_components/upload-success";

const KycPage = () => {
  const [showUploadSucces, setShowUploadSuccess] = useState(false);

  const onSuccess = () => {
    setShowUploadSuccess(true);
  };

  return (
    <div>
      {showUploadSucces ? (
        <UploadSuccess />
      ) : (
        <WizardForm steps={3}>
          <ProfileImage />
          <IDVerification />
          <PropertyDocument onSuccess={onSuccess} />
        </WizardForm>
      )}
    </div>
  );
};

export default KycPage;
