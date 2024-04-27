import Image from "next/image";
import SideNav from "./_component/side-nav";

const DashboardLayout = ({children}) => {
    return(
        <div className="flex">
            <div className="pt-10 pl-10 pr-[35px] bg-[#FCFCFC] border border-[#EAEAEA]">
                <div className="mb-[40.26px]">
                    <Image src="/dashboard/dashboard-logo.svg" width={196} height={76.74} alt="logo" />
                </div>
                <div>
                    <SideNav />
                </div>
            </div>
            <div>
                <div>
                    <h2>Dashboard</h2>
                </div>
                <div>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout;