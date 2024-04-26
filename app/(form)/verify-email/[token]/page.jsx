import Link from "next/link";

const { default: Image } = require("next/image");

const EmailVerifiedPage = () => {
  return (
    <div className="px-6 py-10 max-w-[636px] max-h-[543px] bg-white rounded-3xl shadow-[0_12_24_-1_rgba(0,0,0,0.1)]">
      <div className="flex flex-col items-center">
        <div className="mb-8 w-[240px] h-[240px] flex items-center justify-center">
          <Image
            src="/form/verified-icon.svg"
            width={200}
            height={200}
            alt="email sent"
          />
        </div>
        <h1 className="mb-3 text-[32px] leading-[46.4px] text-center text-custom-grey font-semibold">
          Email verified
        </h1>
        <p className="text-base leading-[23.2px] text-[#535763] font-normal">
          Your email john 44@gmail.com has been verified , you will redirected
          to continue in 30 seconds, click on the “Continue” button to continue
          to sign up
        </p>
        <Link href="/insurance-options" className="w-[127px] h-[50px] mt-12 mx-auto px-6 py-3 bg-custom-red text-white rounded-xl cursor-pointer">
          Continue
        </Link>
      </div>
    </div>
  );
};

export default EmailVerifiedPage;
