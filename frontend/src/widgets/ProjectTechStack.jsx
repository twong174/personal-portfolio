import React from "react";

const ProjectTechStack = ({ techStack = []}) => {
  return (
    <div>
      <ul className="text-xs flex gap-2 flex-wrap">
        {techStack.map((tech, index) => (
          <li className = "border p-1 rounded-sm border-orange-500 text-orange-500 font-medium" key={index}>{tech}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectTechStack;
