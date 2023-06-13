import React from "react";
import styles, { layout } from "../style";
import { prasish } from "../assets";
import Button from "./Button";

const Hero = () => {
  return (
    <div
      id="Home"
      className={`${layout.sectionReverse} sm:justify-start justify-center items-center mb-10`}
    >
      <div className="flex flex-1  flex-col justify-center">
        <h4 className="font-poppins font-semibold text-[18px] text-blue-600  mb:mt-0 mt-7 ">
          Web Developer
        </h4>
        <h2 className={`font-poppins font-semibold sm:text-[50px] text-[30px]`}>
          Hello, my name
          <br /> is Prasish Shrestha
        </h2>
        <p className={`${styles.paragraph} max-w-[465px]`}>
          I am always energetic and eager to learn new skills. Along with that,
          I use a creative approach to solve problems.
        </p>
        <div className="flex ">
          <Button
            styles="mt-4 bg-blue-gradient w-[100px] h-[40px] flex justify-center items-center mr-6"
            text="Linkedin"
          />
          <Button
            styles="mt-4 bg-gray-400 w-[100px] h-[40px] flex justify-center items-center"
            text="GitHub"
          />
        </div>
      </div>
      <img src={prasish} alt="my image" className="w-[40%] rounded-full" />
    </div>
  );
};

export default Hero;
