"use client";
import Link from "next/link";
import { DashboardIcon, PolicyIcon, QuotesIcon, TransactionsIcon, ClaimsIcon, SettingsIcon } from "./sidenav-icons";
import { usePathname } from "next/navigation";

const SideNav = () => {
    const pathname = usePathname();

    const linkStyle = (isActive) => {
        return isActive ? "text-custom-red bg-[#FEF0F1]":"bg-transparent text-[#777575]";
    } 
    return(
        <nav>
            <ul className="flex flex-col gap-10">
                <li>
                    <Link href="/dashboard" className={`px-4 py-2 flex gap-3 items-center text-base font-medium leading-[23.2px] ${linkStyle(pathname === "/dashboard")}`}>
                        <DashboardIcon isActive={pathname === "/dashboard"} />
                        <span>Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link href="/dashboard/policy" className={`px-4 py-2 flex gap-3 items-center text-base font-medium leading-[23.2px] ${linkStyle(pathname === "/dashboard/policy")}`}>
                        <PolicyIcon isActive={pathname === "/dashboard/policy"} />
                        <span>Policy</span>
                    </Link>
                </li>
                <li>
                    <Link href="/dashboard/quotes" className={`px-4 py-2 flex gap-3 items-center text-base font-medium leading-[23.2px] ${linkStyle(pathname === "/dashboard/quotes")}`}>
                        <QuotesIcon isActive={pathname === "/dashboard/quotes"}/>
                        <span>Quotes</span>
                    </Link>
                </li>
                <li>
                    <Link href="/dashboard/transactions" className={`px-4 whitespace-nowrap py-2 flex gap-3 items-center text-base font-medium leading-[23.2px] ${linkStyle(pathname === "/dashboard/transactions")}`}>
                        <TransactionsIcon isActive={pathname === "/dashboard/transactions"} />
                        <span>Transaction History</span>
                    </Link>
                </li>
                <li>
                    <Link href="/dashboard/claims" className={`px-4 py-2 flex gap-3 items-center text-base font-medium leading-[23.2px] ${linkStyle(pathname === "/dashboard/claims")}`}>
                        <ClaimsIcon isActive={pathname === "/dashboard/claims"}/>
                        <span>Claims</span>
                    </Link>
                </li>
                <li>
                    <Link href="/dashboard/settings" className={`px-4 py-2 flex gap-3 items-center text-base font-medium leading-[23.2px] ${linkStyle(pathname === "/dashboard/settings")}`}>
                        <SettingsIcon isActive={pathname === "/dashboard/settings"}/>
                        <span>Settings</span>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default SideNav;