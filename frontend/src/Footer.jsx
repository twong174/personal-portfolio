import React from "react";

import SourceIcon from "@mui/icons-material/Source";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between">
      <div className="px-1 font-semibold text-sm">
        Design inspired by Brittany Chiang
      </div>
      <div className="flex justify-between mt-4 md:mt-0 gap-6 md:gap-10 font-semibold text-orange-500">
        <a
          href="https://github.com/twong174/personal-portfolio"
          target="_blank"
          className="px-1 border-b-2 border-transparent hidden md:block transition duration-400 ease-in hover:border-b-1 hover:border-orange-500"
        >
          SOURCE CODE
        </a>
        <a
          href="mailto:twong33@fordham.edu "
          className="px-1 border-b-2 border-transparent hidden md:block transition duration-400 ease-in hover:border-b-1 hover:border-orange-500"
        >
          EMAIL
        </a>
        <a
          href="https://github.com/twong174"
          target="_blank"
          className="px-1 border-b-2 border-transparent hidden md:block transition duration-400 ease-in hover:border-b-1 hover:border-orange-500"
        >
          GITHUB
        </a>
        <a
          href="https://www.linkedin.com/in/tyler-wong-b5567322a"
          target="_blank"
          className="px-1 border-b-2 border-transparent hidden md:block transition duration-400 ease-in hover:border-b-1 hover:border-orange-500"
        >
          LINKEDIN
        </a>

        <a
          href="https://github.com/twong174/personal-portfolio"
          target="_blank"
          className="block md:hidden text-xl"
        >
          <SourceIcon />
        </a>
        <a
          href="mailto:twong33@fordham.edu"
          className="block md:hidden text-xl"
        >
          <EmailIcon />
        </a>
        <a
          href="https://github.com/twong174"
          target="_blank"
          className="block md:hidden text-xl"
        >
          <GitHubIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/tyler-wong-b5567322a"
          target="_blank"
          className="block md:hidden text-xl"
        >
          <LinkedInIcon />
        </a>
      </div>
    </div>
  );
};

export default Footer;
