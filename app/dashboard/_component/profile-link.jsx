"use client";
import SignOut from "@/icons/sign-out";
import { useState } from "react";

const ProfileLink = () => {
    const [user, setUser] = useState({
        name: "John Doe",
        email: "johndoe44@gmail.com"
    })
    return(
        <div className="px-6 py-3 flex items-center cursor-pointer">
            <div className="mr-3 w-10 h-10 flex justify-center items-center text-[32px] leading-[46.4px] font-bold bg-[#FCE7E5] rounded-full">
                <span>
                    {user.name.substring(0,1)}
                </span>
            </div>
            <div className="mr-5 max-w-[132px] text-sm text-[#535763] break-words leading-[20.3px]">
                <h4 className="font-semibold">{user.name}</h4>
                <h5 className="font-normal">{user.email}</h5>                
            </div>
            <div className="basis-[7.35%]">
                <SignOut />
            </div>
        </div>
    )
}

export default ProfileLink;