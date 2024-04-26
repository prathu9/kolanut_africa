const { default: Image } = require("next/image")

const EmailVerified = () => {
    return(
        <div className="px-6 py-10 max-w-[636px] max-h-[543px] bg-white rounded-3xl">
        <div className="flex flex-col items-center">
        <div className="w-[240px] h-[240px] flex items-center justify-center">
          <Image src="/form/verified-icon.svg" width={200} height={200} alt="email sent"/>  
        </div>
        <h1 className="mb-3 text-[32px] leading-[46.4px] text-center text-custom-grey font-semibold">Verify email</h1>
        <p className="text-base leading-[23.2px] text-[#535763] font-normal">
        Click on the verification link sent to your email “johndoe@gmail.com” to verify your account and  view your quote
        </p>
        <p className="mt-16 text-base leading-[23.2px] text-center font-normal">
        Didn’t receive link? <button className="text-custom-red">Resend</button>
        </p>
        </div>
    </div>
    )
}