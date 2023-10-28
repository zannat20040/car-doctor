import React, { useEffect, useState } from "react";

const Service = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("service.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <div className="mt-20 text-center w-1/2  mx-auto">
        <span className="font-medium text-[#FF3811]">Service</span>
        <h1 className="text-5xl font-bold">
        Our Service Area
        </h1>
        <p className="py-4 capitalize text-[#737373]">
        the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
        </p>
      </div>
      <h1>service length: {services.length}</h1>
    </div>
  );
};

export default Service;
