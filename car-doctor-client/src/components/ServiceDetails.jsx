import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const ServiceDetails = ({ service}) => {
  const { img, title, description, facility,price ,_id} = service;
  // console.log(_id)
  return (
    <div className="container mx-auto mt-20 flex gap-4">
      <div className="w-2/3">
        <div className=" bg-base-100 rounded-md">
          <figure>
            <img src={img} alt="Shoes" className="w-full rounded-md" />
          </figure>
          <div className="card-body px-0">
            <h2 className="card-title text-3xl">{title}</h2>
            <p>{description}</p>
          </div>
        </div>

        <div className=" grid grid-cols-2 gap-5  mt-10">
          {facility.map((item) => (
            <div className="card  bg-gray-200 border-t-8 rounded-md border-[#FF3811]">
              <div className="card-body">
                <h2 className="card-title">{item.name}</h2>
                <p>{item.details}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="card-body px-0">
          <p>{description}</p>
          <h2 className="card-title text-3xl my-5">
            3 Simple Steps to Process
          </h2>
          <p>{description}</p>
        </div>
      </div>

      <div className="flex-grow">
        <div className="  bg-gray-100 rounded-md ">
          <div className="card-body ">
            <h2 className="card-title text-3xl mb-5">Services</h2>
            <div className="flex justify-between items-center text-base py-4 px-5 hover:bg-[orangered] text-[#FF3811] hover:text-white rounded-md">
              <p className="font-medium ">Battery Charge</p>
              <Link>
                <BsArrowRight className=""></BsArrowRight>
              </Link>
            </div>
            <div className="flex justify-between items-center text-base py-4 px-5 hover:bg-[orangered] text-[#FF3811] hover:text-white rounded-md">
              <p className="font-medium ">Full Car Repair</p>
              <Link>
                <BsArrowRight className=""></BsArrowRight>
              </Link>
            </div>
            <div className="flex justify-between items-center text-base py-4 px-5 hover:bg-[orangered] text-[#FF3811] hover:text-white rounded-md">
              <p className="font-medium ">Engine Repair</p>
              <Link>
                <BsArrowRight className=""></BsArrowRight>
              </Link>
            </div>
            <div className="flex justify-between items-center text-base py-4 px-5 hover:bg-[orangered] text-[#FF3811] hover:text-white rounded-md">
              <p className="font-medium ">Automatic Services</p>
              <Link>
                <BsArrowRight className=""></BsArrowRight>
              </Link>
            </div>
            <div className="flex justify-between items-center text-base py-4 px-5 hover:bg-[orangered] text-[#FF3811] hover:text-white rounded-md">
              <p className="font-medium ">Engine Oil Change</p>
              <Link>
                <BsArrowRight className=""></BsArrowRight>
              </Link>
            </div>
          </div>
        </div>

        <div className="card rounded-md text-white mt-10  bg-slate-950 shadow-xl">
  <div className="card-body">
    <h2 className="card-title text-3xl">Price: $ {price}</h2>
    <div className="card-actions justify-end">
      <Link to={`/checkout/${_id}`} className=" w-full  btn border-0 rounded-md mt-8 bg-[orangered]">Proceed Checkout</Link>
      <button className="btn border-0 w-full rounded-md mt-3 bg-[orangered]">Proceed To Cart</button>
    </div>
  </div>
</div>
      </div>
    </div>
  );
};

export default ServiceDetails;
