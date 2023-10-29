import React from "react";
import RouteLocationBanner from "../components/RouteLocationBanner";
import serviceImg from "../assets/images/checkout/checkout.png";

const Checkout = () => {
  return (
    <>
      <RouteLocationBanner
        img={serviceImg}
        title={"Checkout"}
      ></RouteLocationBanner>
      <div className="container mx-auto my-32">
      <form className="card-body bg-gray-100 rounded-md p-20 ">
            <div className="form-control">
              <input
                type="name"
                name="name"
                placeholder="Your full name"
                className="input input-bordered bg-white border-0"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="form-control">
                <input
                  type="number"
                  name="number"
                  placeholder="Your Phone"
                  className="input input-bordered bg-white border-0"
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  className="input input-bordered bg-white border-0"
                  required
                />
              </div>
            </div>
            <div className="form-control">
              <textarea
                className="textarea textarea-bordered h-56 bg-white border-0"
                placeholder="Your Message"
              ></textarea>
            </div>
            <div className="form-control mt-6">
              <button className="btn  border-0   bg-[#FF3811] hover:text-[#FF3811]  text-white  font-medium">
                Order Confirm
              </button>
            </div>
          </form>
      </div>
    </>
  );
};

export default Checkout;
