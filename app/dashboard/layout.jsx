import Image from "next/image";
import SideNav from "./_component/side-nav";
import Link from "next/link";
import ProfileLink from "./_component/profile-link";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex">
      <div className="relative">
        <div className="sticky top-0 left-0 flex flex-col py-10 h-screen overflow-hidden overflow-y-auto bg-[#FCFCFC] border border-[#EAEAEA]">
          <Link href="/" className="mb-[40.26px] pl-10 pr-[35px] flex">
            <Image
              src="/dashboard/dashboard-logo.svg"
              width={196}
              height={76.74}
              alt="logo"
            />
          </Link>
          <div className="pl-10 pr-[35px]">
            <SideNav />
          </div>
          <div className="mt-auto">
            <ProfileLink />
          </div>
        </div>
      </div>

      <div className="w-full">{children}</div>
    </div>
  );
};

export default DashboardLayout;
