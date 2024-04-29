import NotificationOption from "./notification-option";

const Notifications = () => {
    return(
        <div className="mb-2 pt-6 pl-[49px] pr-[50px] bg-[#FCFCFC]">
            <h2 className="text-[28px] leading-[40.6px] font-semibold text-custom-grey text-center">Manage notification</h2>
            <p className="max-w-[588px] mx-auto text-base leading-[23.2px] font-normal text-[#777575] text-center">
            We may still send you important information about your account outside of our notification settings
            </p>
            <div>
                <NotificationOption/>
            </div>
            
        </div>
    )
}

export default Notifications;