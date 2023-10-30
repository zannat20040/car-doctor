import React, { useContext, useEffect, useState } from 'react';
import RouteLocationBanner from "../components/RouteLocationBanner";
import serviceImg from "../assets/images/checkout/checkout.png";
import { useLoaderData, useParams } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import OrderLayout from '../layout/OrderLayout';

const OrderReviewPage = () => {

    const [allOrder, setAlLOrders] = useState([])
    const {user} = useContext(AuthContext)
    // console.log(user)
    const allOrders = useLoaderData()
    console.log(allOrders)

    useEffect(()=>{
        if(user){
            const userOrder =  allOrders.filter(item=> user.email === item.email )
            setAlLOrders(userOrder)
           }
    },[])
   

    return (
        <div>
            <RouteLocationBanner
        img={serviceImg}
        title={"Manage All Orders"}
      ></RouteLocationBanner>

      <div>
        {
            allOrder.length!==0 ? (

                allOrder.map(item=>(
                    <OrderLayout key={item.id} item={item}></OrderLayout>
                ))
            ) :  
             <p className='container mx-auto text-center p-28'>You dont have order yet</p>

        }
      </div>
        </div>
    );
};

export default OrderReviewPage;