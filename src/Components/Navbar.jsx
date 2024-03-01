import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" bg-slate-900 p-4  flex flex-row items-center justify-center gap-20">
      <div className=" relative">
        <span className=" absolute left-2 top-1">
          <i className="fa-solid fa-magnifying-glass"></i>
        </span>
        <input type="text" className=" rounded-md p-1" />
      </div>
      <div className="text-white">
        <ul className="flex gap-10">
          <li className=" text-lg">Category</li>
          <li className=" text-lg">Website Builder</li>
          <li className=" text-lg">Today's deals</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
