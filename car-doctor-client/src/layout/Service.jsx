import React, { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const Service = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="container mx-auto">
      <div className="mt-20 text-center w-1/2  mx-auto">
        <span className="font-medium text-[#FF3811]">Service</span>
        <h1 className="text-5xl font-bold">Our Service Area</h1>
        <p className="py-4 capitalize text-[#737373]">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-5">
        {services.map((service) => (
          <div className="card bg-base-100 shadow-xl rounded-md" key={service._id}>
            <figure className="px-6 pt-6">
              <img src={service.img} alt="Shoes" className="rounded-md h-52" />
            </figure>
            <div className="card-body ">
              <h2 className="card-title text-lg font-bold">{service.title}</h2>
              <div className="flex justify-between items-center">
                <p className="font-medium text-[#FF3811]">
                  Price: ${service.price}
                </p>
                <Link to={`/details/${service._id}`}>
                  <BsArrowRight className="text-[#FF3811]"></BsArrowRight>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center  mt-10 mb-28">
        <button className="btn btn-outline  border-[#FF3811] text-[#FF3811] rounded-md">
          More Service
        </button>
      </div>
    </div>
  );
};

export default Service;
