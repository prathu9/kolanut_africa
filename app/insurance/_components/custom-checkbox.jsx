const CustomCheckBox = ({ inputId, name, children }) => {
  return (
    <div className="flex gap-3 items-center">
      <input
        id={inputId}
        type="checkbox"
        name={name}
        className="peer hidden"
      />
      <label
        htmlFor={inputId}
        className="w-11 h-11 rounded-lg peer-checked:bg-[#FC9CA0] border border-[#C5C4C4] select-none cursor-pointer"
      >
        <span className="invisible peer-checked:visible">Ch</span>
      </label>
      <span className="text-base text-custom-grey font-normal text-center leading-[20.16px]">
        {children}
      </span>
    </div>
  );
};

export default CustomCheckBox;
