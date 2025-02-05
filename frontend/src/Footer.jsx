import React from "react";

const Footer = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="px-1 font-semibold">Design inspired by Brittany Chiang</div>
      <div className="flex justify-between gap-10 font-semibold text-orange-500">
        <a href = "mailto:twong33@fordham.edu "className="px-1 border-b-2 border-transparent transition duration-400 ease-in hover:border-b-1 hover:border-orange-500">
          EMAIL
        </a>
        <a href = "https://github.com/twong174" target="_blank" className="px-1 border-b-2 border-transparent transition duration-400 ease-in hover:border-b-1 hover:border-orange-500">
          GITHUB
        </a>
        <a href = "https://www.linkedin.com/in/tyler-wong-b5567322a" target="_blank" className="px-1 border-b-2 border-transparent transition duration-400 ease-in hover:border-b-1 hover:border-orange-500">
          LINKEDIN
        </a>
      </div>
    </div>
  );
};

export default Footer;
