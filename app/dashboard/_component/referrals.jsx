const { default: CopySuccess } = require("@/icons/copy-success");

const Referrals = () => {
  return (
    <div>
      <h2 className="mb-4 text-lg font-semibold leading-[22.68px] text-[#444444]">
        Referrals
      </h2>
      <div className="px-6 py-[34px] border border-[#DEDEDE] bg-[#FCFCFC]">
        <h3 className="max-w-[161px] mb-[14px] text-base leading-[20.16px] font-bold">
          Get 30% off when you invite 10 friends.
        </h3>
        <p className="mb-[29px] text-[14px] leading-[17.64px] font-normal text-[#5B5B5B]">
          Invite 10 friends and earn when they Insure their property and get 50%
          off of your next premium payment.
        </p>
        <h4 className="mb-3 text-[14px] leading-[17.64px] font-medium text-[#444444]">
          Share your referral link
        </h4>
        <div className="flex">
          <input className="p-[13px] text-xs text-[#5B5B5B] leading-[15.12px] font-normal border border-[#DEDEDE] rounded" />
          <button className="px-[10px] py-[9px]">
            <CopySuccess />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Referrals;
