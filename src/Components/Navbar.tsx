import React from "react";
import NavPill from "./NavPill";

const Header: React.FC = () => {
  return (
    <div className="flex flex-col w-full z-[1000]">
      <div className="fixed top-0 left-0 w-full z-[1000] flex justify-center items-center h-[160px] bg-transparent">
        <div className="flex items-center justify-between gap-[48px] px-[56px] w-full max-w-[1600px]">
          <div className="flex items-center px-[56px] w-full max-w-[1600px]">
            {/* Logo (Hidden on mobile) */}
            <div className="hidden sm:flex items-center mr-6 group hover:cursor-pointer transition-all duration-300">
              <img
                src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JlrVfmBSPK/sh9s220s_expires_30_days.png"
                alt="Logo"
                className="w-[52px] h-[52px] object-fill mr-[16px] transform transition-transform duration-300 group-hover:rotate-[0deg]"
              />
              <span className="text-white text-[40px] font-bold transform transition-transform duration-300 group-hover:scale-x-110 origin-left">
                BookLease
              </span>
            </div>

            {/* Nav Pills + Sign In */}
            <div className="flex items-center gap-4 ml-auto">
              <div className="flex items-center gap-[64px] bg-[rgba(85,123,176,0.10)] backdrop-blur-[12px] rounded-[215px] px-[48px] py-[24px]">
                <NavPill text="Home" url="/" />
                <NavPill text="Listings" url="/listings" />
                <NavPill text="Team" url="/team" />
              </div>
              <button
                onClick={() => {}}
                className="bg-[#2DA77C] rounded-full px-[48px] py-[24px] hover:-translate-y-2 transition-all text-white text-[15px]"
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
