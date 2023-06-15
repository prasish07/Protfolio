import React from "react";
import styles, { layout } from "../style";
import { CV, prasish } from "../assets";
import Button from "../components/Button";

const Aboutme = () => {
  return (
    <div className={`${styles.flexStart} ${styles.paddingX}`}>
      <div className={styles.boxWidth}>
        <div
          className={`${layout.sectionReverse} sm:justify-start justify-center sm:items-start items-center mb-10`}
        >
          <div className="flex flex-1  flex-col justify-center">
            <h2
              className={`font-poppins font-semibold sm:text-[40px] vss:text-[30px] text-[22px] mb-3`}
            >
              About me
            </h2>
            <p className={`${styles.paragraph} max-w-[750px] text-justify`}>
              I am currently a Bachelor of Computer Science student at Herald
              College in Kathmandu, Nepal, and I am extremely enthusiastic about
              the world of software and web development. My primary objective is
              to gain practical experience in these domains and further enhance
              my skills.
              <br />
              <br /> Throughout my academic journey, I have dedicated myself to
              understanding and mastering various technologies. One area in
              which I have developed intermediate-level proficiency is Node.js,
              a powerful JavaScript runtime. With Node.js, I have been able to
              build server-side applications and delve into the world of
              back-end development.
              <br />
              <br /> In addition to Node.js, I have also explored React.js, a
              popular JavaScript library for building user interfaces. Through
              hands-on projects, I have gained a solid understanding of React.js
              and its ability to create dynamic and interactive web
              applications. This knowledge has allowed me to develop
              user-friendly interfaces and enhance the overall user experience.
              <br />
              <br /> What sets me apart is my determination to learn and grow by
              taking the initiative to work on self-projects. By independently
              building applications and websites, I have not only strengthened
              my theoretical knowledge but also acquired invaluable practical
              experience. These projects have challenged me to think critically,
              problem-solve, and apply my skills in real-world scenarios.
              <br />
              <br /> As I continue my education, my focus remains on expanding
              my skill set and working on more complex projects. I am determined
              to stay up-to-date with the latest advancements in software and
              web development, as well as explore new technologies that can
              further enhance my abilities.
              <br />
              <br /> My ultimate goal is to pursue a fulfilling career where I
              can contribute my expertise in software and web development. I
              aspire to be part of innovative teams that create cutting-edge
              solutions and make a positive impact in the industry. With my
              passion, dedication, and the solid foundation I have built in
              Node.js and React.js, I am confident in my ability to excel in
              this field and make significant contributions to the world of
              technology.
            </p>

            <div className="mt-4">
              <a
                href={CV}
                target="_blank"
                className="btn flex justify-center items-center"
                rel="noreferrer"
              >
                <span>Download CV</span>
              </a>
            </div>
          </div>
          <img
            src={prasish}
            alt="my image"
            className="sm:w-[40%] h-[60%] w-[70%] rounded-full mt-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
