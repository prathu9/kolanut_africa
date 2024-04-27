const IDVerificationOptionBtn = ({formId, selectForm, children}) => {

    const handleClick = () => {
        selectForm(formId);
    }
    return(
        <button onClick={handleClick} className="mx-auto w-full max-w-[598px] h-[72px] px-6 py-2 flex justify-between items-center border-[0.5px] border-[#C5C4C4] bg-[#FCFCFC] rounded-xl">
            <span className="text-base leading-[23.2px] text-custom-grey font-normal">{children}
            </span>
            <span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.94922 4.07992L15.4692 10.5999C16.2392 11.3699 16.2392 12.6299 15.4692 13.3999L8.94922 19.9199"
                  stroke="#AF060D"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
    )
}

export default IDVerificationOptionBtn;