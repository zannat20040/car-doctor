import React from "react";
import error from "../assets/404-errors.png";
import AuthenticationNav from "../components/AuthenticationNav";
const ErrorPage = () => {
  return (
    <>
      <AuthenticationNav></AuthenticationNav>
      <div className="flex justify-center items-center h-screen">
        <img src={error} alt="" className="" />
      </div>
    </>
  );
};

export default ErrorPage;
