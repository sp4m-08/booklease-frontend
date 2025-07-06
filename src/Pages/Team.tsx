import React from "react";
import TeamCard from "../Components/Teamcard";

const Team = () => {
  return (
    <div className="relative z-[510] min-h-screen w-full flex flex-col items-center justify-center px-6 py-12">
      {/* Heading */}
      <h2 className="text-gray-300 text-3xl mb-12 text-center">
        Behind the Build
      </h2>

      {/* Cards */}
      <div className="flex flex-wrap items-center justify-center gap-8">
        <TeamCard
          profileUrl="https://media.licdn.com/dms/image/v2/D5603AQGHzw8wCmogkw/profile-displayphoto-shrink_200_200/B56ZdP7hxQHUAY-/0/1749392694882?e=1757548800&v=beta&t=5ZJsZKe7Png11YGK1gK9vGC07XteEbnbNLKXlP39ZRc"
          name="Niggesh Kumar"
          role="Frontend Developer"
          linkedinUrl="https://linkedin.com/in/janedoe"
          githubUrl="https://github.com/janedoe"
          instagramUrl="https://instagram.com/janedoe"
        />

        <TeamCard
          profileUrl="https://media.licdn.com/dms/image/v2/D5603AQGHzw8wCmogkw/profile-displayphoto-shrink_200_200/B56ZdP7hxQHUAY-/0/1749392694882?e=1757548800&v=beta&t=5ZJsZKe7Png11YGK1gK9vGC07XteEbnbNLKXlP39ZRc"
          name="Niggesh Kumar"
          role="Frontend Developer"
          linkedinUrl="https://linkedin.com/in/janedoe"
          githubUrl="https://github.com/janedoe"
          instagramUrl="https://instagram.com/janedoe"
        />
      </div>
    </div>
  );
};

export default Team;
