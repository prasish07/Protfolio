import React from "react";
import styles, { layout } from "../style";
import Edu_comp from "../components/Edu_comp";
import { education, experience } from "../constants";
import Epx_comp from "../components/Epx_comp";

const Edu_Exp = () => {
  return (
    <div className={`${styles.flexStart} ${styles.paddingX}`}>
      <div className={styles.boxWidth}>
        <div className="flex flex-col mt-[50px] mb-[200px]">
          <h2 className="sm:text-[40px] text-[30px] font-poppins font-semibold text-center m-10">
            Education
          </h2>
          {education.map((item) => {
            return <Edu_comp {...item} key={item.id} />;
          })}
          <h2 className="sm:text-[40px] text-[30px] font-poppins font-semibold text-center mb-10">
            Experience
          </h2>
          {experience.map((item) => {
            return <Epx_comp {...item} key={item.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Edu_Exp;
