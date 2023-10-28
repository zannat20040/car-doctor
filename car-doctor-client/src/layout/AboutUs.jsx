import React from "react";

const AboutUs = () => {
  return (
    <div className="hero py-20">
      <div className="hero-content flex-col lg:flex-row gap-10 p-0">
        <div className="w-1/2 relative">
          <img
            src="https://i.ibb.co/1LxRhZp/7bcd7c1441a37ca010e7b7ecff2e6b85.jpg"
            className="w-3/4  rounded-lg shadow-2xl"
          />
          <img
            src="https://i.ibb.co/2Nwvrf8/76b15ee7b701d4e08223d814bfb5f19f.jpg"
            className=" absolute -bottom-10 right-10 border-8 border-white rounded-lg shadow-2xl"
          />
        </div>
        <div className="w-1/2">
          <span className="font-medium text-[#FF3811]">About Us</span>
          <h1 className="text-5xl font-bold">
            We are qualified & of experience in this field
          </h1>
          <p className="py-4 capitalize text-[#737373]">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p className="capitalize text-[#737373]">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <button className="btn  mt-5 oborder-0  bg-[#FF3811] hover:text-[#FF3811]  text-white  font-medium">
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
