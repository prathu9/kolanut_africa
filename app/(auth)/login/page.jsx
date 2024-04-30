import Image from "next/image";
import LoginForm from "./_component/login-form";

const LoginPage = () => {
    return(
       <div className="pt-[138px]">
            <div className="mx-auto w-[171px]">
                <Image src="/auth-logo.svg" width={171} height={64} alt="logo"/>
            </div>
            <LoginForm />
       </div>
    )
}

export default LoginPage;