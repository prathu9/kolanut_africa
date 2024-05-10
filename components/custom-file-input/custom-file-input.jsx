const CustomFileInput = ({id, register, className}) => {
  return (
    <label
      htmlFor={id}
      className={className}
    >
      <input
        id={id}
        type="file"
        {...register}
        className="hidden"
      />
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 16.7422C2.79401 15.935 2 14.5602 2 13C2 10.6564 3.79151 8.73129 6.07974 8.51937C6.54781 5.67213 9.02024 3.5 12 3.5C14.9798 3.5 17.4522 5.67213 17.9203 8.51937C20.2085 8.73129 22 10.6564 22 13C22 14.5602 21.206 15.935 20 16.7422M8 16.5L12 12.5M12 12.5L16 16.5M12 12.5V21.5"
          stroke="#838282"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <h4>
        <span className="text-custom-red text-[14px] font-semibold leading-[20.3px]">
          Click to upload
        </span>{" "}
        or drag and drop
      </h4>
      <p className="text-[#535763] leading-[17.4px] text-[12px] font-normal">
        PNG, JPG ,PDF (max. 800x400px)
      </p>
    </label>
  );
};


export default CustomFileInput;