const { useForm } = require("react-hook-form");

const HouseOwnerOption = ({setShowWizard, setAccommodationType}) => {
    const { register, handleSubmit, watch } = useForm({
        accommodationType: "",
      });
    
      const accommodationType = watch("accommodationType");
    
      const onSubmit = (data) => {
        console.log(data);
        setShowWizard(true);
        setAccommodationType(accommodationType);
      };

    return(
        <div className="max-w-[488px] h-fit px-[84px] py-10 rounded-3xl bg-white text-black">
          <h1 className="mb-8 text-[32px] leading-[46.4px] text-center text-custom-grey font-semibold">
            House owner?
          </h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex gap-20">
              <label
                htmlFor="own"
                className={`relative w-[120px] h-[120px] rounded-xl flex justify-center items-center cursor-pointer   ${
                  accommodationType === "own"
                    ? "bg-[#FC9CA0] text-black"
                    : "bg-[#FAF9F9]"
                }`}
              >
                <input
                  className="invisible"
                  id="own"
                  type="radio"
                  value="own"
                  {...register("accommodationType")}
                />
                <span className="absolute">Own</span>
              </label>
              <label
                htmlFor="rent"
                className={`relative w-[120px] rounded-xl h-[120px] flex justify-center items-center cursor-pointer  ${
                  accommodationType === "rent"
                    ? "bg-[#FC9CA0] text-black"
                    : "bg-[#FAF9F9]"
                }`}
              >
                <input
                  className="invisible"
                  id="rent"
                  type="radio"
                  value="rent"
                  {...register("accommodationType")}
                />
                <span className="absolute">Rent</span>
              </label>
            </div>

            <input
              className={`mt-12 px-6 mx-auto block py-3 cursor-pointer text-lg rounded-xl leading-[26.1px] text-center font-normal ${
                accommodationType
                  ? "text-white bg-custom-red"
                  : "bg-[#E0E0E0] text-[#535763]"
              }`}
              type="submit"
              value="Request for quotation"
            />
          </form>
        </div>
    )
}

export default HouseOwnerOption;