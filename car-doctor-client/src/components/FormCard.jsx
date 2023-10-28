import React from "react";
import icon from "../assets/images/login/login.svg";
import LoginForm from "../layout/LoginForm";
import { Outlet } from "react-router-dom";

const FormCard = () => {
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-row flex justify-between w-full">
        <div className="text-center lg:text-left">
          <img src={icon} alt="" />
        </div>

        <div className="card flex-shrink-0  w-1/2 bg-base-100 border p-8">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default FormCard;
