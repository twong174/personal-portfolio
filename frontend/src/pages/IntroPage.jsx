import React from "react";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const IntroPage = () => {
  return (
    <div className="w-2/3 p-15 grid grid-rows-[auto_1fr_auto] gap-18">
      <h1 className="text-5xl font-light"> Welcome! </h1>
      <p className="text-5xl font-light">
        I'm <span className="font-semibold"> Tyler Wong</span>, computer science
        student @ Fordham University & aspiring web developer.
      </p>

      <p className="text-xl font-light">
        {" "}
        Reach out <ArrowForwardIcon fontSize="sm" />{" "}
        <span className="border-b-2 border-orange-500 px-1 transition duration-600 ease-out hover:text-white hover:bg-orange-500">
          twong33@fordham.edu{" "}
        </span>
      </p>
    </div>
  );
};

export default IntroPage;
