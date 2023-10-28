import React from "react";
import logo from "../assets/logo.svg";
import FormCard from "./FormCard";

const AuthenticationNav = () => {
  return (
    <div className="container mx-auto">
      <div className="navbar bg-base-100 py-5">
        <div className="flex-1">
          <img src={logo} alt="" />
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 text-base font-medium">
            <li><a>Order</a></li>
            <li><a>Order Review</a></li>
            <li><a>Manage</a></li>
            <li><a>Inventory </a></li>
            <li><a>Login </a></li>
          </ul>
        </div>
      </div>

      <FormCard></FormCard>
    </div>
  );
};

export default AuthenticationNav;
