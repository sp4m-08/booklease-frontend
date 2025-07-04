import React from "react"



interface bookprops{
    title:string
    postedby:string
    type:string
    subject:string
    valid_until:string
}

const BookCard: React.FC<bookprops> = (props) => {
    return <>
        {props.title}
        {props.title}
        {props.title}
        {props.title}
        {props.title}
        </>
};


interface BookCardProps {
  postedBy: string;
  title: string;
  category1: string;
  category2: string;
  validUntil: string;
}

const BookCard2: React.FC<BookCardProps> = ({
  postedBy,
  title,
  category1,
  category2,
  validUntil,
}) => {
  return (
    <div className="flex flex-col w-[90%] sm:w-[440px] mx-auto my-10">
      <div className="h-[470px] p-3 w-full flex flex-col items-start bg-gradient-to-tr from-[#0c0c22] via-[#101024] to-[#14142a] rounded-2xl transition duration-300 ease-in-out transform hover:rotate-x-6 hover:rotate-y-6 hover:shadow-[inset_-6px_-6px_12px_#0a0a18,_-3px_-3px_6px_#181832] hover:bg-gradient-to-tr hover:from-[#11112e] hover:via-[#101024] hover:to-[#111127]">
        <div className="h-[230px] w-full bg-[#060010] border border-[#060010] rounded-[5px]"></div>
        
        <div className="flex flex-col items-start">
        <span className="text-white text-[38px] ">{title}</span>
        <span className="text-white text-sm mb-6">Posted by {postedBy}</span>

        <div className="flex items-start mb-6 gap-[13px]">
          <button
            className="flex flex-col items-start bg-transparent border border-[#267358] rounded-[129px] px-[13px] py-[5px] text-left flex-shrink-0"
            onClick={()=>{}}
          >
            <span className="text-white text-sm">{category1}</span>
          </button>
          <button
            className="flex flex-col items-start bg-transparent border border-[#267358] rounded-[129px] px-[13px] py-[5px] text-left flex-shrink-0"
            onClick={() => {}}
          >
            <span className="text-white text-sm">{category2}</span>
          </button>
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