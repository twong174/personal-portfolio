import React from "react";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const BackgroundPage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_4fr] mx-14 md:mx-40 gap-4">
      <div>
        <h1 className="font-semibold text-orange-500 text-lg"> BACKGROUND </h1>
      </div>
      <div className="text-md flex flex-col gap-6">
        <p className="font-light">
          I am a junior at Fordham University, majoring in Computer Science,
          with a passion for building full-stack web applications using the MERN
          stack. I enjoy creating dynamic and efficient solutions that enhance
          user experiences.
        </p>
        <p className="font-light">
          Always eager to expand my skill set, I have taken courses such as Data
          Structures, Computer Organization & Algorithms, and Internet & Web
          Programming, among others. I continuously seek opportunities to learn
          and grow as a developer.
        </p>
        <p className="font-light">
          Outside of coding, you'll often find me biking through Central Park,
          playing basketball, or spending time with friends. I love staying
          active and exploring new experiences beyond the screen.
        </p>
        <h1 className="mt-6 text-md font-semibold transition duration-400 ease-in">
          <a
            href="/resume.pdf"
            target="_blank"
            className="flex items-center gap-1 group"
          >
            Full Resume
            <span className="transition-transform duration-300 ease-in-out group-hover:translate-x-2">
              <ArrowForwardIcon fontSize="sm" />
            </span>
          </a>
        </h1>
      </div>
    </div>
  );
};

export default BackgroundPage;
