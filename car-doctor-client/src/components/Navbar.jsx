import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { BsHandbag } from "react-icons/bs";

const Navbar = () => {
  const navlist = (
    <>
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/service">Service</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 container mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-base font-medium"
          >
            {navlist}
          </ul>
        </div>
        <div className="flex flex-col items-center">
          <img src="https://i.ibb.co/rsDP7t7/Group-1.jpg" alt="" />
          <span className="text-2xl font-medium">Car Doctor</span>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1  text-base font-medium">
          {navlist}
        </ul>
      </div>
      <div className="navbar-end gap-3">
        <BsHandbag className="text-xl"></BsHandbag>
        <AiOutlineSearch className="text-xl" />
        <Link
          to="/appointment"
          className="btn border-2 border-orange-500 bg-white text-orange-500"
        >
          Appointment
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
