import React from "react";

interface BookCardProps {
  postedBy: string;
  title: string;
  category1: string;
  category2: string;
  validUntil: string;
  imageUrl?: string; // Optional
}

const BookCard2: React.FC<BookCardProps> = ({
  postedBy,
  title,
  category1,
  category2,
  validUntil,
  imageUrl,
}) => {
  return (
    <div className="flex flex-col w-full max-w-[450px] mx-auto my-10">
      <div className="h-[500px] p-6 w-full flex flex-col items-start bg-gradient-to-tr from-[#0c0c22] via-[#101024] to-[#14142a] rounded-2xl transition duration-300 ease-in-out transform hover:bg-gradient-to-tr hover:from-[#11112e] hover:via-[#101024] hover:to-[#111127] hover-tilt">
        <div
          className="h-[500px] w-full border border-[#060010] rounded-[8px] bg-[#060010] bg-cover bg-center"
          style={imageUrl ? { backgroundImage: `url(${imageUrl})` } : {}}
        />

        <div className="flex flex-col items-start">
          <span className="text-white text-[32px] pt-4">{title}</span>
          <span className="text-white text-sm mb-6">Posted by {postedBy}</span>

          <div className="flex items-start mb-6 gap-[13px]">
            <div
              className="flex flex-col items-start bg-transparent border border-[#267358] rounded-[129px] px-[13px] py-[5px] text-left flex-shrink-0"
              onClick={() => {}}
            >
              <span className="text-white text-sm">{category1}</span>
            </div>
            <div
              className="flex flex-col items-start bg-transparent border border-[#267358] rounded-[129px] px-[13px] py-[5px] text-left flex-shrink-0"
              onClick={() => {}}
            >
              <span className="text-white text-sm">{category2}</span>
            </div>
          </div>

          <span className="text-white text-[18px] mb-10">
            Valid Until: {validUntil}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BookCard2;
