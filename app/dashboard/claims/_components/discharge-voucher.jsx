import CloseIcon from "@/icons/close-icon";

const DischargeVoucher = () => {
  return (
    <div className="absolute top-0 left-0 w-screen h-screen flex justify-center items-center bg-[rgba(0,0,0,0.2)]">
      <div className="w-[758px] h-[664px] p-6 bg-[#ffffff] rounded-2xl border-[0.5px] border-[#E0E0E0]">
        <div className="ml-auto mr-0 w-[40px] h-[40px] right-0 flex justify-center items-center">
          <CloseIcon />
        </div>
        <div className="px-20">
          <h2 className="mt-[53px] mb-3 text-[32px] leading-[46.4px] font-semibold text-[#444444] text-center">
            Discharge voucher
          </h2>
          <div className="max-h-80 overflow-y-auto">
            <p className="mb-10">
              I JOHN DOE MICHEAL HEREBY AGREE TO ACCEPT TWO HUNDRED AND
              EIGHTY-EIGHT THOUSAND NIGERIAN NAIRA., ZERO KOBO ONLY
              (₦288,000.00). IN FULL AND FINAL SETTLEMENT OF ALL CLAIMS
              WHATSOEVER IN RESPECT OF MOTHERBOARD DAMAGE TO MACBOOK PRO M1
              2020, 13 INCH, M1 16GB RAM/500GB ON 11/04/2024 I/
            </p>
            <p className="mb-10">
              WE DECLARE THAT WE HAVE NO FURTHER CLAIM WHATSOEVER AGAINST NOOR
              TAKAFUL INSURANCE LIMITED NOW OR IN FUTURE TO MANIFEST DIRECTLY OR
              INDIRECTLY ON MOTHERBOARD DAMAGE TO MACBOOK PRO M1 2020, 13 INCH,
              M1 16GB RAM/500GB ON 11/04/2024
            </p>
            <p>
              IN CONSIDERATION of such payment I hereby assign to the said
              Company all rights to the articles in respect of which I have
              received payment and which shall, in the event of their recovery
              be held to be the property of the said Company who shall be at
              once advised of such recovery.
            </p>
          </div>
          <div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default DischargeVoucher;
