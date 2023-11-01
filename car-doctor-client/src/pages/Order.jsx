import React, { useContext, useEffect, useState } from "react";
import RouteLocationBanner from "../components/RouteLocationBanner";
import serviceImg from "../assets/images/checkout/checkout.png";
import { AuthContext } from "../AuthProvider/AuthProvider";
import OrderLayout from "../layout/OrderLayout";
import axios from "axios";

const Order = () => {
  const [allConfirmOrder, setConfirmOrder] = useState([]);
  const { user } = useContext(AuthContext);



  useEffect(() => {

      axios.get('http://localhost:5000/order', {withCredentials:true} )
  .then(res=>{
    const data = res.data 
    if (user) {
      const userOrder = data.filter((item) => user.email === item.email);
      setConfirmOrder(userOrder);
    }
  })




    // fetch("http://localhost:5000/order", {withCredentials:true})
    //   .then((res) => res.json())
    //   .then((data) => {
    //     if (user) {
    //       const userOrder = data.filter((item) => user.email === item.email);
    //       setConfirmOrder(userOrder);
    //     }
    //   });
  }, []);

  // console.log(allConfirmOrder);

  const HandleDelete = (id) => {
    // console.log(id)

    axios.delete(`http://localhost:5000/order/${id}`)
    .then(res=>{
      console.log(res.data)
      if (res.data.deletedCount >0) {
            swal("Good job!", "This order has been deleted", "success");
            const remaining = allConfirmOrder.filter((item) => item._id !== id);
            setConfirmOrder(remaining);
          }
    })
     
    };
  

  return (
    <div>
      <RouteLocationBanner
        img={serviceImg}
        title={"Manage Confirm Orders"}
      ></RouteLocationBanner>

      <div>
        {allConfirmOrder.length !== 0 ? (
          allConfirmOrder.map((item) => (
            <OrderLayout key={item._id} item={item} HandleDelete={HandleDelete}></OrderLayout>
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
