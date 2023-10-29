import React from "react";
// import serviceImg from "../assets/5.jpg";

const RouteLocationBanner = ({img,title}) => {
  return (
    <div className="container mx-auto my-8 ">
      <div className=" rounded-md carousel-item relative w-full  items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] ">
        <img
          src={img}
          alt=""
          className="w-full h-[300px] -z-10 rounded-md "
        />

        <div className="absolute text-white max-w-lg p-10">
          <h1 className="text-5xl ml-6 font-bold">{title}</h1>
          
        </div>
      
        <div className="absolute bg-[#FF3811]  p-5 bottom-0 left-0 right-0 mx-auto w-fit text-lg text-white tracking-wide">
            <p>Home/{title}</p>
          </div>
      </div>
    </div>
  );
};

export default RouteLocationBanner;
