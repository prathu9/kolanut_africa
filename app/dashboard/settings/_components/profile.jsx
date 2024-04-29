import Image from "next/image";
import { useForm } from "react-hook-form";

const Profile = () => {
  const { register, handleSubmit, formState: {isValid} } = useForm();


  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <div className="w-full bg-[#FCFCFC]">
      <h2 className="mb-8 text-center text-[28px] leading-[40.6px] text-custom-grey font-semibold">
        Personal info
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col">
          <div className="mb-10 relative mx-auto w-[240px] h-[240px] overflow-hidden rounded-full">
            <Image
              src="/dashboard/profile-pic.jpg"
              sizes="100vw"
              fill
              className="object-cover rounded-full"
              alt="profile"
            />
          </div>
          <label className="mb-2 text-base leading-[23.2px] text-custom-grey font-medium">
            First name
          </label>
          <input
            className="mb-4 px-6 py-[13px] text-base font-normal leading-[23.2px] text-[#535763] border border-[#CACACA] rounded-xl"
            {...register("firstname", { required: true })}
            type="text"
          />
          <label className="mb-2 text-base leading-[23.2px] text-custom-grey font-medium">Middle name</label>
          <input
            className="mb-4 px-6 py-[13px] text-base font-normal leading-[23.2px] text-[#535763] border border-[#CACACA] rounded-xl"
            {...register("middlename", { required: true })}
            type="text"
          />
          <label className="mb-2 text-base leading-[23.2px] text-custom-grey font-medium">Last name</label>
          <input
            className="mb-4 px-6 py-[13px] text-base font-normal leading-[23.2px] text-[#535763] border border-[#CACACA] rounded-xl"
            {...register("lastname", { required: true })}
            type="text"
          />
          <label className="mb-2 text-base leading-[23.2px] text-custom-grey font-medium">Email</label>
          <input
            className="mb-4 px-6 py-[13px] text-base font-normal leading-[23.2px] text-[#535763] border border-[#CACACA] rounded-xl"
            {...register("email", { required: true })}
            type="text"
          />
          <div className="flex gap-6">
            <div className="w-full flex flex-col">
              <label className="mb-2 text-base leading-[23.2px] text-custom-grey font-medium">Phone number</label>
              <input
                className="mb-4 px-6 py-[13px] text-base font-normal leading-[23.2px] text-[#535763] border border-[#CACACA] rounded-xl"
                {...register("phoneNumber", { required: true })}
                type="text"
              />
            </div>
            <div className="w-full flex flex-col">
              <label className="mb-2 text-base leading-[23.2px] text-custom-grey font-medium">Alternative phone number</label>
              <input
                className="mb-4 px-6 py-[13px] text-base font-normal leading-[23.2px] text-[#535763] border border-[#CACACA] rounded-xl"
                {...register("alternateNumber", { required: true })}
                type="text"
              />
            </div>
          </div>
          <label className="mb-2 text-base leading-[23.2px] text-custom-grey font-medium">Date of birth</label>
          <input
            className="mb-4 px-6 py-[13px] text-base font-normal leading-[23.2px] text-[#535763] border border-[#CACACA] rounded-xl"
            {...register("dateOfBirth", { required: true })}
            type="text"
          />
          <input type="submit" disabled={!isValid} value="Save changes" className={`mt-12 mr-auto px-6 py-3 rounded-xl bg-[#E0E0E0] text-lg leading-[26.1px] font-normal  ${isValid? "text-white bg-custom-red":"text-[#455A64] bg-[#E0E0E0]"}`} />
        </div>
      </form>
    </div>
  );
};

export default Profile;
