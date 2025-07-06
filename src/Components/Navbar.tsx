import React from "react";
import NavPill from "./NavPill";
import PrimaryButton from "./PrimaryButton";

interface HeaderProps {
  signed_in: boolean;
}

const Header: React.FC<HeaderProps> = ({ signed_in }) => {
  return (
    <div className="flex flex-col w-full z-[1000]">
      <div className="fixed top-0 left-0 w-full z-[1000] flex justify-center items-center h-[160px] bg-transparent">
        <div className="flex items-center justify-between px-[24px] sm:px-[56px] w-full max-w-[1600px]">
          {/* Left: Logo */}
          <div className="hidden sm:flex items-center group hover:cursor-pointer transition-all duration-300">
            <img
              src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JlrVfmBSPK/sh9s220s_expires_30_days.png"
              alt="Logo"
              className="w-[52px] h-[52px] object-fill mr-[16px] transform transition-transform duration-300 group-hover:rotate-[0deg]"
            />
            <span className="text-white text-[40px] font-bold transform transition-transform duration-300 group-hover:scale-x-110 origin-left">
              BookLease
            </span>
          </div>

          {/* Right: NavPills + Button */}
          <div className="flex items-center gap-4 ml-auto w-full sm:w-auto justify-center sm:justify-end">
            <div
              className="relative group flex items-center justify-center gap-[64px]
                bg-[rgba(85,123,176,0.10)] backdrop-blur-[12px]
                rounded-[215px] px-[48px] py-[24px] overflow-hidden
                outline outline-[1px] outline-[#ffffff20]
                w-full sm:w-auto min-w-[320px] mx-auto sm:mx-0"
            >
              <div className="relative z-10 flex items-center gap-[24px] sm:gap-[48px]">
                <NavPill text="Home" url="/" />
                <NavPill text="Listings" url="/listings" />
                <div className="hidden sm:block">
                  <NavPill text="Team" url="/team" />
                </div>
                {signed_in && <NavPill text="Profile" url="/profile" />}
              </div>
            </div>

            {signed_in ? (
              <PrimaryButton
                text="01"
                url="/notifications"
                iconUrl="https://api.iconify.design/mdi:bell-outline.svg?color=white"
              />
            ) : (
              <div className="hidden sm:block">
                <PrimaryButton text="Sign In" url="/signin" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
