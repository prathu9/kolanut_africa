import BellIcon from "@/icons/bell-icon";
import PaymentMethodItem from "./_components/payment-method-item";
import Add from "@/icons/add";
import SearchIcon from "@/icons/search-icon";

const transactionData = [
    {
        invoice: "Premium payment 1",
        date: "12/03/2024",
        amount: "₦13,567.00",
        status: "successful"
    },
    {
        invoice: "Premium payment 2",
        date: "12/03/2024",
        amount: "₦13,567.00",
        status: "failed"
    }
]

const TransactionsPage = () => {
  return (
    <div>
      <header className="w-full px-10 py-[39px] flex justify-between items-center">
        <h2 className="text-[14px] leading-[20.3px] font-normal">
          Transaction History
        </h2>
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
      <div className="px-10">
        <h2 className="mb-[17px] text-[22px] font-semibold leading-[27.72px] text-[#444444]">
          Payment methods
        </h2>
        <div className="flex flex-col">
          <PaymentMethodItem />
          <button className="flex items-center gap-2 max-w-[228px] mt-6 px-4 py-3 text-custom-red text-lg leading-[26.1px] rounded-xl border-2 border-custom-red">
            <span>
              <Add />
            </span>
            <span>Payment Method</span>
          </button>
        </div>
        <div className="mt-16">
            <h2 className="mb-2 text-[22px] text-[#444444] font-semibold leading-[27.72px]">Billing History</h2>
            <p className="mb-7 text-base leading-[20.16px] text-[#444444] font-normal">Access your previous invoice</p>
            <table className="w-full text-left rounded-xl border-[0.5px] border-[#CACACA] bg-[#FCFCFC]">
                <tr>
                    <th className="px-8 py-6 border-[0.5px]">Invoice</th>
                    <th className="px-8 py-6 border-[0.5px]">Date</th>
                    <th className="px-8 py-6 border-[0.5px]">Amount</th>
                    <th className="px-8 py-6 border-[0.5px]">Status</th>
                </tr>
                {
                    transactionData.map(data => (
                        <tr key={data.invoice}>
                            <td className="px-8 py-6 border-[0.5px]">{data.invoice}</td>
                            <td className="px-8 py-6 border-[0.5px]">{data.date}</td>
                            <td className="px-8 py-6 border-[0.5px]">{data.amount}</td>
                            <td className="px-8 py-6 border-[0.5px]">
                                <span className={`px-3 py-1 rounded-lg text-xs font-normal leading-[15.12px] ${data.status === "successful"? "bg-[#92E3A9] text-[#0A3416]":"bg-[#FCDEDE] text-[#E30E0E]"}`}>{data.status}</span>
                            </td>
                        </tr>
                    ))
                }
            </table>
        </div>
      </div>
    </div>
  );
};

export default TransactionsPage;
