const NotificationOption = () => {
    return(
        <div className="mt-8 px-6 py-3 flex justify-between border-[0.5px] border-[#CACACA]">
                <div>
                    <h2 className="mb-2 text-lg leading-[26.1px] font-medium text-custom-grey">New updates</h2>
                    <p className="max-w-[269px] text-sm leading-[20.3px] text-[#777575] font-normal">
                        These are notifications for new offers and update available for you on the app
                    </p>
                </div>
                <div className="flex flex-col gap-4">
                    <div>
                        <span className="text-base leading-[23.2px] font-semibold text-custom-grey">Push</span>
                    </div>
                    <div>
                        <span className="text-base leading-[23.2px] font-semibold text-custom-grey">Email</span>
                    </div>
                    <div>
                        <span className="text-base leading-[23.2px] font-semibold text-custom-grey">SMS</span>
                    </div>
                </div>
            </div>
    )
}

export default NotificationOption;