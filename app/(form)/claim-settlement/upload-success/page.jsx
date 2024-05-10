import UploadSuccessIcon from "@/icons/upload-success-icon";
import Link from "next/link";

const UploadSuccess = () => {
  return (
    <div className="px-[35px] py-10 max-w-[636px] border-0.5 border-[#E0E0E0] bg-white rounded-3xl shadow-[0_12_24_-1_rgba(0,0,0,0.1)]">
      <div className="pt-[53px] px-[56px] pb-[41px] flex flex-col items-center">
        <div className="mb-6">
          <UploadSuccessIcon />
        </div>
        <h2 className="mb-[10px] text-[21px] text-[#444444] font-bold leading-[26.46px]">
          Claim request submitted
        </h2>
        <p className="max-w-[454px] text-center text-[14px] font-normal text-[#5B5B5B]">
          Your claim request has been reqisted and it will be reviewed by the
          team. You will be notified on the claim settlement when the review is
          completed
        </p>
        <Link
          href="/dashboard"
          className="mt-10 px-6 py-3 bg-custom-red rounded-xl text-lg text-white leading-[26.1px] font-normal"
        >
          Go to dashboard
        </Link>
      </div>
    </div>
  );
};

export default UploadSuccess;
