import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { close, menu } from "../assets";
// import { AiOutlineMenuUnfold } from "react-icons/fa";

import { navLinks } from "../constants";

const Narbar = () => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex py-6 justify-between items-center  navbar">
      <h2 className="font-poppins font-semibold text-black">
        Prasish Shrestha
      </h2>

      <ul className="list-none hidden sm:flex justify-end items-center flex-1">
        {navLinks.map((item, index) => {
          return (
            <li
              onClick={() => navigate(item.goTo)}
              key={item.id}
              className={`font-poppins text-black font-normal cursor-pointer text-[16px] ${
                index === navLinks.length - 1 ? "mr-0" : "mr-10"
              } `}
            >
              {item.title}
            </li>
          );
        })}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="toggle"
          className="cursor-pointer w-[28px] h-[28px] object-contain"
          onClick={() =>
            setToggle((data) => {
              return !data;
            })
          }
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-gray-200 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-center items-center flex-1">
            {navLinks.map((item, index) => {
              return (
                <li
                  key={item.id}
                  className={`font-poppins text-black font-semibold font-normal cursor-pointer text-[16px] ${
                    index === navLinks.length - 1 ? "mb-0" : "mb-4"
                  } `}
                >
                  <a href={`#${item.id}`}>{item.title}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Narbar;
