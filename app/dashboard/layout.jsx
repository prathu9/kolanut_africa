import Image from "next/image";
import SideNav from "./_component/side-nav";
import Link from "next/link";

const DashboardLayout = ({ children }) => {

  return (
    <div className="flex">
      <div className="pt-10 pl-10 pr-[35px] bg-[#FCFCFC] border border-[#EAEAEA]">
        <Link href="/" className="mb-[40.26px] flex">
          <Image
            src="/dashboard/dashboard-logo.svg"
            width={196}
            height={76.74}
            alt="logo"
          />
        </Link>
        <div>
          <SideNav />
        </div>
      </div>
      <div className="w-full">
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
