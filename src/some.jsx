import React from "react";
import "./navbar.scss";

import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
// import TheDownList from "./TheDownlist"
import { navLinksright, navLinksLeft } from "../../constants";
const Navbar = () => {
  const handleonclick = () => {
    return <TheDownList />;
  };
  return (
    <div className="flex justify-between items-center py-4">
      <div className="firstcontainer flex list-none relative">
        {navLinksright.map((nav, index) => (
          <li
            key={index}
            className={`text-white font-poppins hover:bg-gray-700 hover:text-white hover:rounded-xl hover:px-1 cursor-pointer ${
              index === 0 ? "ml-24 text-2xl" : "ml-8 mt-1"
            } ${index === navLinksright.length - 1 ? "last-item" : ""}`}
          >
            <span href={`#${nav.id}`} className="text-white">
              {nav.title}
            </span>
          </li>
        ))}

        <div className="iconcontainer">
          <span className="mt-1 cursor-pointer">About</span>
          <KeyboardArrowDownOutlinedIcon className="mt-1 cursor-pointer" />
        </div>
      </div>
      <div className="mx-64"></div>
      <div className="secondcontainer flex justify-end list-none">
        <LanguageOutlinedIcon className="mt-1 mr-1 w-2 h-4" />
        {navLinksLeft.map((nav, index) => (
          <li
            key={index}
            className="font-poppins cursor-pointer text-white mr-6 mt-1"
          >
            {/* <a href="">{nav.title}</a> */}
            <span>{nav.title}</span>
          </li>
        ))}
        <button className="bg-white rounded-[23px] text-[13px] font-bold border-none hover:bg-slate-100 ">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
