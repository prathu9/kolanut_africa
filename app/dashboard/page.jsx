import BellIcon from "@/icons/bell-icon";
import DocumentUploadStatus from "./_component/document-upload-status";
import Referrals from "./_component/referrals";

const DashboardPage = () => {
  return (
    <div>
      <header className="w-full px-10 py-[39px] flex justify-between items-center">
        <h2 className="text-[14px] leading-[20.3px] font-normal">Dashboard</h2>
        <div className="relative basis-[26.78%] min-w-[312px] h-[44px] bg-[#FBF9F9]">
          <div className="absolute top-[10px] left-4">
            <svg
              className="w-[21px] h-[21px]"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.5 19L13.5001 13M15.5 8C15.5 11.866 12.366 15 8.5 15C4.63401 15 1.5 11.866 1.5 8C1.5 4.13401 4.63401 1 8.5 1C12.366 1 15.5 4.13401 15.5 8Z"
                stroke="#777575"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Seach  insurance policy,quote"
            className="w-full h-full pl-12"
          />
        </div>
        <div className="flex gap-10 items-center">
          <div className="px-[11px] py-[9px]">
            <BellIcon />
          </div>
          <button className="px-6 py-3 text-white text-lg leading-[26.1px] bg-custom-red rounded-xl">
            Insure property
          </button>
        </div>
      </header>
      <div className="px-10 py-[38px] flex gap-10">
        <div className="basis-[62%]">
            <DocumentUploadStatus />
        </div>
       <div className="basis-[26%]">
            <Referrals />
       </div>
      </div>
    </div>
  );
};

export default DashboardPage;
