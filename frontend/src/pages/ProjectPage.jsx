import React from "react";

import ProjectWidget from "../widgets/ProjectWidget";

const ProjectPage = () => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-[1fr_4fr] mx-14 md:mx-40">
      <div>
        <h1 className="font-semibold text-orange-500 text-lg mb-4"> PROJECTS </h1>
      </div>
      <div className="flex flex-col gap-6">
        <ProjectWidget
          projectTitle={"Cryptocurrency Trader Dashboard"}
          projectDesc={
            "Responsive trading dashboard to track cryptocurrency prices, market trends, and portfolio performance."
          }
          projectLink={"https:/google.com"}
          techStack={["React", "Node.js", "Express.js", "MongoDB", "HTML", "CSS", "CoinMarketCap API"]}
        />
        <ProjectWidget
          projectTitle={"PopcornPix E-Commerce Store"}
          projectDesc={
            "Movie e-commerce store using OMDb API, treating movies as products. Implemented authentication using passport.js and bcrypt to secure user info."
          }
          projectLink={"https:/google.com"}
          techStack={["React", "Node.js", "Express.js", "MongoDB", "HTML", "TailwindCSS", "Bcrypt", "OMDb API"]}
        />{" "}
        <ProjectWidget
          projectTitle={"Internship Search Optimzer"}
          projectDesc={
            "Automates internship searches using the Custome Search JSON API, optimizing efficiency with asynchronous queries and a dynamic, responsive frontend."
          }
          projectLink={"https:/google.com"}
          techStack={["React", "Node.js", "Express.js", "HTML", "TailwindCSS", "Custom Search JSON API"]}
        />{" "}
       
      </div>
    </div>
  );
};

export default ProjectPage;
