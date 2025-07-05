import React from "react";
import BookCard2 from "../../Components/BookCard";
import Spacer from "../../Components/Spacer";
const Booklistings = () => {
  return (
    <div style={{ position: "relative", zIndex: 500 }}>
      <Spacer height={150} />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(360px,1fr))] gap-x-12 gap-y-8 px-4 max-w-[1440px] mx-auto">
        <BookCard2
          postedBy="Saunok Roy"
          title="Lorem ipsum dolor sit"
          category1="TextBook"
          category2="Probability & Statistics"
          validUntil="16/02/2025"
        />
        <BookCard2
          postedBy="Jane Doe"
          title="Advanced Algorithms"
          category1="TextBook"
          category2="CS Theory"
          validUntil="12/01/2026"
        />
        <BookCard2
          postedBy="Jane Doe"
          title="Advanced Algorithms"
          category1="TextBook"
          category2="CS Theory"
          validUntil="12/01/2026"
        />
        <BookCard2
          postedBy="Jane Doe"
          title="Advanced Algorithms"
          category1="TextBook"
          category2="CS Theory"
          validUntil="12/01/2026"
        />
        <BookCard2
          postedBy="Jane Doe"
          title="Advanced Algorithms"
          category1="TextBook"
          category2="CS Theory"
          validUntil="12/01/2026"
        />
      </div>
    </div>
  );
};

export default Booklistings;
