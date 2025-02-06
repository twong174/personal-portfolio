import React from "react";
import ProjectTechStack from "./ProjectTechStack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const ProjectWidget = ({
  projectTitle,
  projectDesc,
  projectLink,
  techStack,
}) => {
  return (
    <div className="flex flex-col mb-2 gap-4">
      <h1 className="text-lg font-semibold transition duration-400 ease-in">
        <a href={projectLink} target="_blank" className="flex items-center gap-1 group">
          {projectTitle}
          <span className="transition-transform duration-300 ease-in-out group-hover:translate-x-2">
            <ArrowForwardIcon fontSize="sm" />
          </span>
        </a>
      </h1>
      <p className="text-md font-light">{projectDesc}</p>
      <ProjectTechStack techStack={techStack} />
    </div>
  );
};

export default ProjectWidget;
