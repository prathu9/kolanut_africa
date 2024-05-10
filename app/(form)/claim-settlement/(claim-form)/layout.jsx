const ClaimSettlementLayout = ({children}) => {
    return(
        <div className="w-[90%] max-w-[756px] px-6 py-10 bg-white rounded-2xl border-[0.5px] border-[#E0E0E0]">
            <div className="flex justify-end pr-[60px]">
                <button className="ml-auto px-4 py-2 rounded-lg text-custom-red border border-custom-red">Save for later</button>
            </div>
            
            <div className="mt-6 px-[60px]">
                <h2 className="mb-8 text-[32px] text-center leading-[46.4px] font-semibold text-custom-grey">Claim settlement</h2>
                {children}
            </div>
        </div>
    )
}

export default ClaimSettlementLayout;