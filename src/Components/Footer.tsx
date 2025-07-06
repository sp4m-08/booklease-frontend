import React from "react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#060010] py-10 px-6 text-white">
        <div className="w-full h-1 bg-[#101025] my-7" />
        <div className="w-full h-3" />
      <div
        style={{ maxWidth: "1500px" }}
        className="mx-auto flex justify-between items-start flex-col md:flex-row gap-8"
      >
        {/* Left - VIT Info */}
        <div className="flex flex-col space-y-2">
          <h3 className="font-semibold text-lg">VIT University</h3>
          <p className="text-sm text-white/80">Vellore, Tamil Nadu</p>
          <p className="text-sm text-white/80">India - 632014</p>

          <div className="mt-4 space-y-1">
            <a
              href="mailto:iste@vit.ac.in"
              className="text-white underline hover:text-[#2DA77C] text-sm"
            >
              iste@vit.ac.in
            </a>
            <p className="text-sm text-white/80">+91 83289 26213</p>
          </div>
        </div>

        {/* Right - ISTE love + social */}
        <div className="flex flex-col items-start md:items-end space-y-4">
          <div className="flex items-center space-x-1 text-white/80 text-sm">
            <span>Made with</span>
            <span className="text-red-500 text-base">❤️</span>
            <span>by ISTE</span>
          </div>

          <div className="flex space-x-4 text-white text-xl">
            <a
              href="https://x.com/iste_vitvellore"
              aria-label="Twitter/X"
              className="hover:text-[#2DA77C] transition-colors"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://github.com/ISTE-VIT"
              aria-label="GitHub"
              className="hover:text-[#2DA77C] transition-colors"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.youtube.com/c/istevitvellore"
              aria-label="YouTube"
              className="hover:text-[#2DA77C] transition-colors"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.linkedin.com/company/indian-society-for-technical-education/posts/?feedView=all"
              aria-label="LinkedIn"
              className="hover:text-[#2DA77C] transition-colors"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/iste_vit_vellore/?hl=en"
              aria-label="Instagram"
              className="hover:text-[#2DA77C] transition-colors"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
