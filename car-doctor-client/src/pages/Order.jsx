import React, { useContext, useEffect, useState } from "react";
import RouteLocationBanner from "../components/RouteLocationBanner";
import serviceImg from "../assets/images/checkout/checkout.png";
import { AuthContext } from "../AuthProvider/AuthProvider";
import OrderLayout from "../layout/OrderLayout";

const Order = () => {
  const [allConfirmOrder, setConfirmOrder] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch("http://localhost:5000/order")
      .then((res) => res.json())
      .then((data) => {
        if (user) {
          const userOrder = data.filter((item) => user.email === item.email);
          setConfirmOrder(userOrder);
        }
      });
  }, []);

  console.log(allConfirmOrder);

  return (
    <div>
      <RouteLocationBanner
        img={serviceImg}
        title={"Manage Confirm Orders"}
      ></RouteLocationBanner>

      <div>
        {allConfirmOrder.length !== 0 ? (
          allConfirmOrder.map((item) => (
            <OrderLayout key={item._id} item={item}></OrderLayout>
          ))
        ) : (
          <p className="container mx-auto text-center p-28">
            You did not confirm any order yet
          </p>
        )}
      </div>
    </div>
  );
};

export default Order;
