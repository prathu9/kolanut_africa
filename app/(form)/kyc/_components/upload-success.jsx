import Link from "next/link";

const UploadSuccess = () => {
  return (
    <div className="px-[35px] py-10 max-w-[636px] border-0.5 border-[#E0E0E0] bg-white rounded-3xl shadow-[0_12_24_-1_rgba(0,0,0,0.1)]">
      <div className="pt-[53px] px-[56px] pb-[41px] flex flex-col items-center">
        <div className="mb-6">
          <svg
            width="86"
            height="86"
            viewBox="0 0 86 86"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M77.2557 38.4835L72.3823 32.8219C71.4507 31.7469 70.6982 29.7402 70.6982 28.3069V22.2152C70.6982 18.4169 67.5807 15.2994 63.7823 15.2994H57.6907C56.2932 15.2994 54.2507 14.5469 53.1757 13.6152L47.514 8.74187C45.0415 6.62771 40.9923 6.62771 38.484 8.74187L32.8582 13.651C31.7832 14.5469 29.7407 15.2994 28.3432 15.2994H22.144C18.3457 15.2994 15.2282 18.4169 15.2282 22.2152V28.3427C15.2282 29.7402 14.4757 31.7469 13.5798 32.8219L8.74234 38.5194C6.66401 40.9919 6.66401 45.0052 8.74234 47.4777L13.5798 53.1752C14.4757 54.2502 15.2282 56.2569 15.2282 57.6544V63.7819C15.2282 67.5802 18.3457 70.6977 22.144 70.6977H28.3432C29.7407 70.6977 31.7832 71.4502 32.8582 72.3819L38.5198 77.2552C40.9923 79.3694 45.0415 79.3694 47.5498 77.2552L53.2115 72.3819C54.2865 71.4502 56.2932 70.6977 57.7265 70.6977H63.8182C67.6165 70.6977 70.734 67.5802 70.734 63.7819V57.6902C70.734 56.2927 71.4865 54.2502 72.4182 53.1752L77.2915 47.5135C79.3698 45.041 79.3698 40.956 77.2557 38.4835ZM57.9057 36.226L40.5982 53.5335C40.0965 54.0352 39.4157 54.3219 38.699 54.3219C37.9823 54.3219 37.3015 54.0352 36.7998 53.5335L28.1282 44.8619C27.089 43.8227 27.089 42.1027 28.1282 41.0635C29.1673 40.0244 30.8873 40.0244 31.9265 41.0635L38.699 47.836L54.1073 32.4277C55.1465 31.3885 56.8665 31.3885 57.9057 32.4277C58.9448 33.4669 58.9448 35.1869 57.9057 36.226Z"
              fill="#55CA6F"
            />
          </svg>
        </div>
        <h2 className="mb-[10px] text-[21px] text-[#444444] font-bold leading-[26.46px]">Documents Uploaded Successfully!</h2>
        <p className="max-w-[454px] text-center text-[14px] font-normal text-[#5B5B5B]">
          Thank you for uploading your documents. Our team is currently
          reviewing them to verify your information and activate your policy.
          You&apos;ll receive an email notification once your policy is active.
        </p>
        <Link href="/dashboard" className="mt-10 px-6 py-3 bg-custom-red rounded-xl text-lg text-white leading-[26.1px] font-normal">
            Go to dashboard
        </Link>
      </div>
    </div>
  );
};

export default UploadSuccess;
