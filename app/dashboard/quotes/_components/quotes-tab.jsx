"use client";

import { useState } from "react";
import CoveragePanel from "./coverage-panel";
import SettingsBar from "@/icons/settings-bar";

const quotesTabData = [
    {
        title: "Coverage",
        content: <CoveragePanel />
    },
    {
        title: "Insurance duration",
        content: <h1>Insurance duration</h1>
    },
    {
        title: "Type of property",
        content: <h1>Type of property</h1>
    },
    {
        title: "Use of property",
        content: <h1>Use of property</h1>
    },
    {
        title: "Property value",
        content: <h1>Property use</h1>
    }
]

const QuotesTab = () => {
    const [activeTab, setActiveTab] = useState("coverage");

    const changeActiveTab = (tabId) => {
        setActiveTab(tabId);
    }

    return(
        <div>
            <div className="flex gap-8">
                <SettingsBar />
                {
                    quotesTabData.map(({title}) => (
                        <div key={title} onClick={() => changeActiveTab(title)} className={`pb-1 text-base leading-[23.2px] font-normal cursor-pointer border-b-2 ${title.toLowerCase() === activeTab.toLowerCase()? "text-custom-red border-custom-red":"text-[#535763] border-transparent"}`}>
                            {title}    
                        </div>
                    ))
                }
            </div>
            <div>
                {
                    quotesTabData.map(({title, content}) => (
                        <div key={title}>
                            {activeTab.toLowerCase() === title.toLowerCase() && content}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default QuotesTab;