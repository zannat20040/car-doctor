import React from "react";
import Banner from "../components/banner";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <>
      <Banner></Banner>
      <Outlet></Outlet>
    </>
  );
};

export default Main;
