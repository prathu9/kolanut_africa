import Image from "next/image";

const PropertyRiskManagement = () => {
  return (
    <div className="flex mt-9 pb-[51px] justify-center lg:ml-[80px] md:pb-[151px] md:ml-[40px] md:mt-[118px]">
      <div>
        <div className="max-w-[522px] mb-6 md:mb-10">   
          <h3 className="mb-2 animate-[colorChange_16s_4s_ease-in_infinite] text-custom-red text-lg font-semibold leading-[21.6px] md:leading-[28.8px] md:text-2xl">
            Personal Properties
          </h3>
          <p className="mb-6 text-sm leading-[21px] text-[#67696D] font-normal md:text-lg md:leading-[27px]">
            Safeguard your home against  losses from unforeseen events such as
            fire, theft, and natural disasters.
          </p>
        </div>
        <div className="max-w-[522px] mb-6 md:mb-10">
          <h3 className="mb-2 animate-[colorChange_16s_8s_ease-in_infinite] text-custom-grey text-lg font-semibold leading-[21.6px] md:leading-[28.8px] md:text-2xl">
            Commercial Properties
          </h3>
          <p className="mb-6 text-sm leading-[21px] text-[#67696D] font-normal md:text-lg md:leading-[27px]">
            From inventory protection to liability coverage, we ensure that your
            place of business is secure, allowing you to focus on serving your
            customers with confidence
          </p>
        </div>
        <div className="max-w-[522px] mb-6 md:mb-10">
          <h3 className="mb-2 animate-[colorChange_16s_12s_ease-in_infinite] text-custom-grey text-lg font-semibold leading-[21.6px] md:leading-[28.8px] md:text-2xl">
            Industrial Properties
          </h3>
          <p className="mb-6 text-sm leading-[21px] text-[#67696D] font-normal md:text-lg md:leading-[27px]">
            Specially crafted to provide robust protection for big industries
            and warehouses.. From equipment breakdown to liability risks
            associated with large-scale operations and warehousing, we guarantee
            you the necessary coverage to navigate complexities
          </p>
        </div>
        <div className="max-w-[522px] mb-6 md:mb-10">
          <h3 className="mb-2 animate-[colorChange_16s_16s_ease-in_infinite] text-custom-grey text-lg font-semibold leading-[21.6px] md:leading-[28.8px] md:text-2xl">
            Corporate Properties
          </h3>
          <p className="mb-6 text-sm leading-[21px] text-[#67696D] font-normal md:text-lg md:leading-[27px]">
            From construction risks to ensuring quality standards, our insurance
            solutions are designed to support property developers in delivering
            secure and reliable homes to their client
          </p>
        </div>
        <button className="mt-8 px-6 py-3 border-2 border-custom-red text-custom-red rounded-xl md:mt-10">
          Learn more
        </button>
      </div>
      <div className="max-w-[808px] basis-2/3 relative hidden md:block">
        <Image
          className="absolute right-0 animate-[showAndHide_16s_4s_ease-in_infinite]"
          src="/homepage/property-1.png"
          width={594}
          height={643}
          alt="property"
        />
         <Image
          className="absolute right-0 animate-[showAndHide_16s_8s_ease-in_infinite]"
          src="/homepage/property-2.png"
          width={594}
          height={643}
          alt="property"
        />
         <Image
          className="absolute right-0 animate-[showAndHide_16s_12s_ease-in_infinite]"
          src="/homepage/property-3.png"
          width={594}
          height={643}
          alt="property"
        />
         <Image
          className="absolute right-0 animate-[showAndHide_16s_16s_ease-in_infinite]"
          src="/homepage/property-1.png"
          width={594}
          height={643}
          alt="property"
        />
      </div>
    </div>
  );
};

export default PropertyRiskManagement;
