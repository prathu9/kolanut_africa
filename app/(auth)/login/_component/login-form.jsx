"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";

const LoginForm = () => {

    const {register, handleSubmit, formState: {isValid}} = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }
    return(
        <div className="mt-[47px] mx-auto px-6 py-10 max-w-[758px] bg-white border-[0.5px] border-[#E0E0E0] rounded-3xl shadow-[0_12px_24px_-1px_rgba(0,0,0,0.1)]">
            <h2 className="mb-2 text-[32px] leading-[46.4px] text-custom-grey font-semibold text-center">Sign In</h2>
            <p className="mb-8 text-base leading-[23.2px] font-normal text-[#535763] text-center">Please provide the required information to access your account</p>
            <form onSubmit={handleSubmit(onSubmit)} className="mx-[60px] flex flex-col">
                <label className="mb-2 text-base leading-[23.2px] font-medium text-custom-grey">Email address</label>
                <input type="text" className="mb-4 px-6 py-[13px] border border-[#C5C4C4] rounded-xl"/>
                <label>Password</label>
                <input type="password" className="mb-4 px-6 py-[13px] border border-[#C5C4C4] rounded-xl"/>
                <Link href="/" className="ml-auto text-lg font-medium leading-[26.1px] text-custom-red">Forgot password</Link>
                <input type="submit" value="Login" disabled={!isValid} className={`max-w-[100px] mx-auto mt-12 px-6 py-3 rounded-xl text-lg leading-[26.1px] font-normal ${isValid?"text-white bg-custom-red":"text-[#455A64] bg-[#E0E0E0]"}`}/>
            </form>
            <p className="mt-20 text-center">
                <span className="text-base text-[#535763] leading-[23.2px] font-normal">Don’t have an account?</span>
                <Link href="/" className="text-lg font-semibold text-custom-red leading-[26.1px]"> Create an account</Link>
            </p>
        </div>
    )
}

export default LoginForm;