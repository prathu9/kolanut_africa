const CustomRadioButton = ({id, type, register, value, className, children}) => {
  return (
    <div className="relative flex justify-center items-center">
      <input
        {...register}
        id={id}
        type={type}
        value={value}
        className="peer hidden"
      />
      <label
        htmlFor={id}
        className={className}
      ></label>
      <span className="absolute invisible peer-checked:visible">
        {children? children:
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 6.82129L9 17.8213L4 12.8213"
            stroke="#10192C"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        }
      </span>
    </div>
  );
};

export default CustomRadioButton;
