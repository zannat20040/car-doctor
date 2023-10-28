import React from "react";
import { BsInstagram, BsLinkedin, BsTwitter, BsFacebook } from "react-icons/bs";
import member1 from "../assets/4.jpg";
import member2 from "../assets/1.jpg";
const Team = () => {
  return (
    <div className="container mx-auto">
      <div className="mt-28 mb-8 text-center w-1/2  mx-auto">
        <span className="font-medium text-[#FF3811]">Team</span>
        <h1 className="text-5xl font-bold">Meet Our Team</h1>
        <p className="py-4 capitalize text-[#737373]">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
      </div>

      <div className=" grid grid-cols-3 gap-10 mb-20">
        <div className="card bg-base-100 shadow-xl rounded-md">
          <figure className="px-5 pt-5">
            <img src={member1} alt="Shoes" className="rounded-md" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Car Engine Plug</h2>
            <p className="text-[#737373]">Engine Expert</p>
            <div className="flex justify-center gap-3 mt-5">
              <BsFacebook className="text-[#FF3811] text-2xl"></BsFacebook>
              <BsTwitter className="text-[#FF3811] text-2xl"></BsTwitter>
              <BsLinkedin className="text-[#FF3811] text-2xl"></BsLinkedin>
              <BsInstagram className="text-[#FF3811] text-2xl"></BsInstagram>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl rounded-md">
          <figure className="px-5 pt-5">
            <img src={member2} alt="Shoes" className="rounded-md" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Car Engine Plug</h2>
            <p className="text-[#737373]">Engine Expert</p>
            <div className="flex justify-center gap-3 mt-5">
              <BsFacebook className="text-[#FF3811] text-2xl"></BsFacebook>
              <BsTwitter className="text-[#FF3811] text-2xl"></BsTwitter>
              <BsLinkedin className="text-[#FF3811] text-2xl"></BsLinkedin>
              <BsInstagram className="text-[#FF3811] text-2xl"></BsInstagram>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl rounded-md">
          <figure className="px-5 pt-5">
            <img src={member1} alt="Shoes" className="rounded-md" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Car Engine Plug</h2>
            <p className="text-[#737373]">Engine Expert</p>
            <div className="flex justify-center gap-3 mt-5">
              <BsFacebook className="text-[#FF3811] text-2xl"></BsFacebook>
              <BsTwitter className="text-[#FF3811] text-2xl"></BsTwitter>
              <BsLinkedin className="text-[#FF3811] text-2xl"></BsLinkedin>
              <BsInstagram className="text-[#FF3811] text-2xl"></BsInstagram>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
