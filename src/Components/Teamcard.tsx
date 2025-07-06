import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa6";

interface TeamCardProps {
  profileUrl: string;
  name: string;
  role: string;
  linkedinUrl?: string;
  githubUrl?: string;
  instagramUrl?: string;
}

const TeamCard: React.FC<TeamCardProps> = ({
  profileUrl,
  name,
  role,
  linkedinUrl,
  githubUrl,
  instagramUrl,
}) => {
  const [hovered, setHovered] = useState(false);

  return (
<div
  onMouseEnter={() => setHovered(true)}
  onMouseLeave={() => setHovered(false)}
  className="relative w-[320px] h-[420px]
    bg-[rgba(85,123,176,0.10)] backdrop-blur-[12px]
    outline outline-[1px] outline-[#ffffff20]
    rounded-[16px] shadow-xl flex flex-col items-center
    px-0 pt-8 pb-6 text-white overflow-hidden hover-tilt"
>

      {/* Inner Glow on Hover */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            key="inner-glow"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 0.4, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="absolute inset-0 pointer-events-none z-0"
            style={{
              background:
                "radial-gradient(circle at center 175%, rgba(128,128,200,0.25) 0%, transparent 70%)",
              filter: "blur(20px)",
            }}
          />
        )}
      </AnimatePresence>

      {/* Content */}
      <div className="flex flex-col items-center gap-4 flex-grow relative z-10">
        <img
          src={profileUrl}
          alt={name}
          className="w-[240px] h-[240px] object-cover rounded-md"
        />

        {/* Name and Role with motion fontWeight */}
        <div className="text-center px-4">
          <motion.h2
            className="text-2xl"
            animate={{ fontWeight: hovered ? 650 : 600 }}
            transition={{ type: "spring", stiffness: 250, damping: 15 }}
          >
            {name}
          </motion.h2>

          <motion.p
            className="text-base text-gray-500"
            animate={{ fontWeight: hovered ? 500 : 400 }}
            transition={{ type: "spring", stiffness: 250, damping: 18 }}
          >
            {role}
          </motion.p>
        </div>
      </div>

      {/* Social Icons with animated gap */}
<div className="flex items-center justify-center mt-auto relative z-10">
  {linkedinUrl && (
    <motion.a
      href={linkedinUrl}
      target="_blank"
      rel="noopener noreferrer"
      animate={{ marginLeft: hovered ? 14 : 10, marginRight: hovered ? 14 : 10 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <FaLinkedin className="text-gray-500 hover:text-white text-xl transition" />
    </motion.a>
  )}
  {githubUrl && (
    <motion.a
      href={githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      animate={{ marginLeft: hovered ? 14 : 10, marginRight: hovered ? 14 : 10 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <FaGithub className="text-gray-500 hover:text-white text-xl transition" />
    </motion.a>
  )}
  {instagramUrl && (
    <motion.a
      href={instagramUrl}
      target="_blank"
      rel="noopener noreferrer"
      animate={{ marginLeft: hovered ? 14 : 10, marginRight: hovered ? 14 : 10 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <FaInstagram className="text-gray-500 hover:text-white text-xl transition" />
    </motion.a>
  )}
</div>



    </div>
  );
};

export default TeamCard;
