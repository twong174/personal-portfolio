import React from "react";

const SkillsPage = () => {
  return (
    <div className=" grid grid-cols-[1fr_4fr] mx-40">
      <div>
        <h1 className="font-semibold text-orange-500 text-lg"> SKILLS </h1>
      </div>
      <div className="grid grid-cols-3">
        <div>
          <p className="font-semibold text-lg"> LANGUAGES</p>

          <ul className="flex flex-col gap-1 font-light text-md mt-2">
            <li> Javascript (ES6)</li>
            <li> HTML</li>
            <li> CSS</li>
            <li> Python</li>
            <li> SQL </li>
          </ul>
        </div>

        <div>
          <p className="font-semibold"> FRAMEWORKS</p>
          <ul className="flex flex-col gap-1 font-light text-md mt-2">
            <li> React.js</li>
            <li> Node.js</li>
            <li> Express.js</li>
            <li> TailwindCSS</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold"> TOOLS</p>
          <ul className="flex flex-col gap-1 font-light text-md mt-2">
            <li> MongoDB</li>
            <li> Git</li>
            <li> GitHub</li>
            <li> Postman</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
