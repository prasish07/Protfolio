import React from "react";
import styles, { layout } from "../style";
import { prasish } from "../assets";
import Button from "./Button";
import { CV } from "../assets";
import "./button.css";

const Hero = () => {
  return (
    <div
      id="Home"
      className={`${layout.sectionReverse} sm:justify-start justify-center items-center mb-10`}
    >
      <div className="flex flex-1  flex-col justify-center">
        <h4 className="font-poppins font-semibold text-[18px] text-blue-600  mb:mt-0 mt-7 mb-3">
          Web Developer
        </h4>
        <h2
          className={`font-poppins font-semibold sm:text-[50px] vss:text-[30px] text-[22px] mb-3`}
        >
          Hello, my name
          <br /> is Prasish Shrestha
        </h2>
        <p className={`${styles.paragraph} max-w-[465px]`}>
          I am always energetic and eager to learn new skills. Along with that,
          I use a creative approach to solve problems.
        </p>
        <div className="flex flex-row flex-wrap sm:items-start items-center">
          <a
            href="https://www.linkedin.com/in/prasish-shrestha-8b5336237/"
            target="_blank"
            rel="noreferrer"
          >
            <Button
              styles="bg-blue-gradient w-[120px] h-[40px] flex justify-center items-center mr-6  mt-4"
              text="Linkedin"
            />
          </a>
          <a
            href="https://github.com/prasish07"
            target="_blank"
            rel="noreferrer"
          >
            <Button
              styles="bg-black w-[120px] h-[40px] flex justify-center items-center mr-6 text-white  mt-4"
              text="GitHub"
            />
          </a>
          {/* <a href={CV} target="_blank" rel="noreferrer">
            <Button
              styles="bg-green-300 w-[175px] h-[40px] flex justify-center items-center mr-6 sm:mt-0 mt-6"
              text="Download CV"
            />
          </a> */}
        </div>
      </div>
      <img
        src={prasish}
        alt="my image"
        className="sm:w-[40%] w-[70%] rounded-full mt-10"
      />
    </div>
  );
};

export default Hero;
