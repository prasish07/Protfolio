import React from "react";
import { skills } from "../constants";
import styles from "../style";

const Skills = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="font-poppins font-semibold  sm:text-[40px] text-[24px]  text-blue-600 border-b-2 mb-4">
        Skills
      </h2>
      <div className="flex flex-wrap m-4 w-full mb-10 ">
        {skills.map((skill, index) => {
          return (
            <div
              key={skill.id}
              className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-4 filter-white`}
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="sm:w-[192px] w-[100px] h-auto cursor-pointer"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
