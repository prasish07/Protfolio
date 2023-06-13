import React from "react";
import { socialMedia } from "../constants";

const Footer = () => {
  return (
    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45] p-5">
      <p className="font-poppins font-normal text-center text-white text-[18px] leading-[27px]">
        Copyright © 2021. All Rights Reserved.
      </p>
      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, i) => (
          <img
            src={social.icon}
            alt="icons"
            key={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              i === socialMedia.length - 1 ? "mr-0" : "mr-6"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Footer;
