"use client";

import { useState } from "react";

const Tabs = ({tabs, TabComponent, TabPanelComponent}) => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    }
    return(
        <div className="max-w-[1280px] mx-auto flex flex-col">
            <div className="max-w-[891px] mx-auto gap-6 flex justify-center bg-[#FAFAFA]">
                {
                    tabs.map((tab, index) => (
                        <TabComponent key={index} isActive={activeTab === index}
                        onClick={() => handleTabClick(index)}>
                            {tab.title}
                        </TabComponent>
                    ))
                }
            </div>
            <div>
                {
                    tabs.map((tab, index) => (
                        <TabPanelComponent key={index} isActive={activeTab === index} content={tab.content} />
                    ))
                }
            </div>
        </div>
    )
}

export default Tabs;