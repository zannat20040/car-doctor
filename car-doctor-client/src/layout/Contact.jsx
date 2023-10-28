import React from "react";
import { SlLocationPin,SlCallOut,SlCalender } from "react-icons/sl";
const Contact = () => {
  return (
    <div className="container mx-auto bg-slate-950 text-white p-8 rounded-md flex justify-between ">
      <div className="flex items-center">
        <SlCalender className="font-extrabold text-3xl text-[#FF3811]"></SlCalender>
        <div className="card-body">
          <h2 className="">We are open monday-friday</h2>
          <p className="card-title ">7:00 am - 9:00 pm</p>

        </div>
      </div>
      <div className="flex items-center">
        <SlCallOut className="font-extrabold text-3xl text-[#FF3811]"></SlCallOut>
        <div className="card-body">
          <h2 className="">Have a question?</h2>
          <p className="card-title ">+2546 251 2658</p>

        </div>
      </div>
      <div className="flex items-center">
        <SlLocationPin className="font-extrabold text-3xl text-[#FF3811]"></SlLocationPin>
        <div className="card-body">
          <h2 className="">Need a repair? our address</h2>
          <p className="card-title ">Liza Street, New York</p>

        </div>
      </div>
    </div>
  );
};

export default Contact;
