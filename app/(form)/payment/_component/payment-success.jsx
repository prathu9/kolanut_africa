import Image from "next/image";
import Link from "next/link";

const PaymentSuccess = () => {
  return (
    <div className="flex flex-col items-center w-[588px] max-w-[588px]">
      <div className="mb-8 w-[240px] h-[240px] flex items-center justify-center">
        <Image
          src="/form/verified-icon.svg"
          width={200}
          height={200}
          alt="email sent"
        />
      </div>
      <h2 className="mb-3 text-[32px] font-semibold leading-[46.4px] text-custom-grey">
      Payment successful
      </h2>
        <p className="mb-12 text-base leading-[23.2px] font-normal text-[#535763]">
      The payment of ₦15,670.00  for premium was successful, please provide the required document for the insurance policy to be made active.
      </p>
      <div className="flex gap-12">
        <Link href="/" className="px-6 py-3 rounded-xl bg-[#C7C7C7] text-lg leading-[26.1px] font-normal">Back to homepage</Link>
        <Link href="/kyc" className="px-6 py-3 rounded-xl bg-custom-red text-white text-lg leading-[26.1px] font-normal">Proceed to document upload</Link>
      </div>
    </div>
  );
};

export default PaymentSuccess;
