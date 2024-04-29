import BellIcon from "@/icons/bell-icon";
import SearchIcon from "@/icons/search-icon";
import SettingsTab from "./_components/settings-tab";

const SettingsPage = () => {
    return(
        <div>
        <header className="w-full px-10 py-[39px] flex justify-between items-center">
          <h2 className="text-[14px] leading-[20.3px] font-normal">Settings</h2>
          <div className="relative basis-[26.78%] min-w-[312px] h-[44px] bg-[#FBF9F9]">
            <div className="absolute top-[10px] left-4">
             <SearchIcon />
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
        <div className="px-10 py-10">
            <h2 className="mb-6 text-[28px] font-semibold leading-[40.6px] text-custom-grey">Settings</h2>
            <SettingsTab />
        </div>
        </div>
    )
}

export default SettingsPage;