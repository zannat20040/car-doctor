import React from "react";
import { MdGroups2 } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { BsFillClockFill } from "react-icons/bs";
import { SiSpringsecurity } from "react-icons/si";
import { TbTruckDelivery } from "react-icons/tb";
import { FaScrewdriverWrench } from "react-icons/fa6";
const WhyChoose = () => {
  return (
    <div className="container mx-auto mb-32">
      <div className="mt-28 mb-8 text-center w-1/2  mx-auto">
        <span className="font-medium text-[#FF3811]">Team</span>
        <h1 className="text-5xl font-bold">Meet Our Team</h1>
        <p className="py-4 capitalize text-[#737373]">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
      </div>

      <div className=" grid grid-cols-6 gap-3">
        <div className="border-2 rounded-md  hover:bg-[#FF3811]">
          <div className="card-body p-3 items-center text-center text-black  hover:text-white">
       <MdGroups2 className="font-extrabold text-7xl hover:text-white"></MdGroups2>
            <h2 className="card-title">Expert Team!</h2>
          </div>
        </div>
        <div className="border-2 rounded-md  hover:bg-[#FF3811]">
          <div className="card-body p-3 items-center text-center text-black  hover:text-white">
       <BsFillClockFill className="font-extrabold text-7xl hover:text-white"></BsFillClockFill>
            <h2 className="card-title">Timely Delivery</h2>
          </div>
        </div>
        <div className="border-2 rounded-md  hover:bg-[#FF3811]">
          <div className="card-body p-3 items-center text-center text-black  hover:text-white">
       <BiSupport className="font-extrabold text-7xl hover:text-white"></BiSupport>
            <h2 className="card-title">24/7 Support</h2>
          </div>
        </div>
        <div className="border-2 rounded-md  hover:bg-[#FF3811]">
          <div className="card-body p-3 items-center text-center text-black  hover:text-white">
       <FaScrewdriverWrench className="font-extrabold text-7xl hover:text-white"></FaScrewdriverWrench>
            <h2 className="card-title">Best Equipment</h2>
          </div>
        </div>
        <div className="border-2 rounded-md  hover:bg-[#FF3811]">
          <div className="card-body p-3 items-center text-center text-black  hover:text-white">
       <SiSpringsecurity  className="font-extrabold text-7xl hover:text-white"></SiSpringsecurity>
            <h2 className="card-title">100% Guranty</h2>
          </div>
        </div>
        <div className="border-2 rounded-md  hover:bg-[#FF3811]">
          <div className="card-body p-3 items-center text-center text-black  hover:text-white">
       <TbTruckDelivery className="font-extrabold text-7xl hover:text-white"></TbTruckDelivery>
            <h2 className="card-title">Timely Delivery</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
