import React from "react";

const Header: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="fixed top-0 left-0 w-full z-[1000] flex justify-center items-center h-[160px]">
        <div className="flex items-center gap-[48px] px-[56px] w-full max-w-screen-xl">
          <img
            src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JlrVfmBSPK/sh9s220s_expires_30_days.png"
            alt="Logo"
            className="w-[52px] h-[52px] object-fill mr-[24px]"
          />
          <span className="text-white text-[40px] font-bold mr-[420px]">
            BookLease
          </span>
          <div className="flex items-center gap-[28px]">
            <div className="flex items-center gap-[64px] bg-[rgba(85,123,176,0.15)] backdrop-blur-[12px] rounded-[215px] px-[48px] py-[26px]">
              <span className="text-white text-[15px]">Home</span>
              <span className="text-white text-[15px]">Listings</span>
              <span className="text-white text-[15px]">Team</span>
            </div>
            <button
              onClick={() => {}}
              className="flex flex-col items-start bg-[#2DA77C] rounded-full px-[30px] py-[25px] hover:-translate-y-2 whitespace-nowrap text-left text-[15px] transition-all  text-white"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
