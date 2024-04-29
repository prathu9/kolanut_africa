import { useForm } from "react-hook-form";

const UpdatePassword = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="pt-6 pl-[49px] pr-[50px]">
      <h2 className="text-[28px] leading-[40.6px] font-semibold text-custom-grey text-center">
        Password
      </h2>
      <h3 className="text-base lading-[23.2px] font-normal text-[#777575] text-center">
        Please provide your current password to change your password
      </h3>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <label className="mb-2 text-base leading-[23.2px] font-medium text-custom-grey">
          Current Password
        </label>
        <input
          {...register("currentPassword", { required: true })}
          type="text"
          className="mb-4 px-6 py-[13px] border border-[#CACACA] rounded-xl"
        />
        <label className="mb-2 text-base leading-[23.2px] font-medium text-custom-grey">
          New Password
        </label>
        <input
          {...register("newPassword", { required: true })}
          type="text"
          className="mb-2 px-6 py-[13px] border border-[#CACACA] rounded-xl"
        />
        <p className="mb-4 text-sm leading-[20.3px] text-[#535763] font-normal">
          Password must be at least 8 characters
        </p>
        <label className="mb-2 text-base leading-[23.2px] font-medium text-custom-grey">
          Confirm new password
        </label>
        <input
          {...register("confirmPassword", { required: true })}
          type="text"
          className="mb-6 px-6 py-[13px] border border-[#CACACA] rounded-xl"
        />
        <input
          type="submit"
          disabled={!isValid}
          value="Save changes"
          className={`mr-auto px-6 py-3 rounded-xl bg-[#E0E0E0] text-lg leading-[26.1px] font-normal  ${
            isValid ? "text-white bg-custom-red" : "text-[#455A64] bg-[#E0E0E0]"
          }`}
        />
      </form>
    </div>
  );
};

export default UpdatePassword;
