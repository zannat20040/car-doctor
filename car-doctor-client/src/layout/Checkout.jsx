import React, { useEffect } from "react";
import RouteLocationBanner from "../components/RouteLocationBanner";
import serviceImg from "../assets/images/checkout/checkout.png";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import swal from "sweetalert";
import { useLoaderData } from "react-router-dom";

const Checkout = () => {
  const { user } = useContext(AuthContext);

  const  productDetails = useLoaderData()
  const {img,title, price} = productDetails
  console.log(img,title, price)

  const { email, displayName } = user;



  const HandleOrder = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const message = form.message.value;
    const email = form.email.value;
    const number = form.number.value;

    console.log(name, message, number, email);

    const orderInfo = {
      name: name,
      message: message,
      email: email,
      number: number,
      title: title,
      price:price,
      img:img,

    };

    fetch("http://localhost:5000/orderreview", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          swal("Good job!", "You order has been placed", "success");
        }
      })
      
  };


  return (
    <>
      <RouteLocationBanner
        img={serviceImg}
        title={"Checkout"}
      ></RouteLocationBanner>
      <div className="container mx-auto my-32">
        <form
          className="card-body bg-gray-100 rounded-md p-20 "
          onSubmit={HandleOrder}
        >
<div className="grid grid-cols-2 gap-3">
<div className="form-control">
            <input
              type="name"
              name="name"
              placeholder="Your full name"
              className="input input-bordered bg-white border-0"
              required
              defaultValue={displayName}
            />
          </div>
            <div className="form-control">
              <input
                type="text"
                name="id"
                placeholder="Your Product ID"
                className="input input-bordered bg-white border-0"
                required
                defaultValue={title}
              />
            </div>
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
                defaultValue={email}
              />
            </div>
          </div>
          <div className="form-control">
            <textarea
              className="textarea textarea-bordered h-56 bg-white border-0"
              placeholder="Your Message"
              name="message"
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
