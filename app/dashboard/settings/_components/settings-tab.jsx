"use client";
import { useState } from "react";
import Profile from "./profile";
import PersonId from "./person-id";
import UpdatePassword from "./update-password";
import Notifications from "./notifications";

const SettingsTab = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const handleTabSelect = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="flex">
      <div className="pr-10">
        <ul className="w-[362px] py-4 border-[0.5px] border-[#CACACA] bg-[#FCFCFC] rounded-3xl">
          <li className="border-b-[0.5px] border-[#CACACA]">
            <span
              onClick={() => handleTabSelect("profile")}
              className={`w-full h-full px-6 py-2 inline-block cursor-pointer ${
                activeTab === "profile" ? "text-custom-red" : "text-[777575]"
              }`}
            >
              Profile
            </span>
          </li>
          <li className="border-b-[0.5px] border-[#CACACA]">
            <span
              onClick={() => handleTabSelect("id")}
              className={`w-full h-full px-6 py-2 inline-block cursor-pointer ${
                activeTab === "id" ? "text-custom-red" : "text-[777575]"
              }`}
            >
              ID
            </span>
          </li>
          <li className="border-b-[0.5px] border-[#CACACA]">
            <span
              onClick={() => handleTabSelect("password")}
              className={`w-full h-full px-6 py-2 inline-block cursor-pointer ${
                activeTab === "password" ? "text-custom-red" : "text-[777575]"
              }`}
            >
              Password
            </span>
          </li>
          <li>
            <span
              onClick={() => handleTabSelect("notifications")}
              className={`w-full h-full px-6 py-2 inline-block cursor-pointer ${
                activeTab === "notification"
                  ? "text-custom-red"
                  : "text-[777575]"
              }`}
            >
              Manage notification
            </span>
          </li>
        </ul>
      </div>
      <div className="basis-[63%]">
        {activeTab === "profile" && <Profile />}
        {activeTab === "id" && <PersonId />}
        {activeTab === "password" && <UpdatePassword />}
        {activeTab === "notifications" && <Notifications />}
      </div>
    </div>
  );
};

export default SettingsTab;
