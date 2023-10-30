import React, { useContext, useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
const OrderLayout = ({ item,HandleDelete }) => {
  const [approved, setApproved] = useState(false);
  // console.log(allOrder)

  const HandleConfirmOrder = () => {
    console.log(item);
    fetch("http://localhost:5000/order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(item),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setApproved(true);
          swal("Good job!", "This order has been confirmed", "success");
        }
      });
  };

  

  return (
    <div className="container mx-auto mt-10">
      <div className="overflow-x-auto">
        <table className="table">
          <tbody>
            {/* row 1 */}
            <tr>
              <th>
                <label>
                  <Link onClick={()=>HandleDelete(item._id)}>
                    <AiFillCloseCircle className="text-3xl"></AiFillCloseCircle>
                  </Link>
                </label>
              </th>
              <td className="w-2/5 break-words">
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={item.img} alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{item.title}</div>
                    <div className="text-sm opacity-50">{item.price}</div>
                  </div>
                </div>
              </td>
              <td className="w-2/5 break-words">
                <span className="badge badge-ghost badge-sm">{item.name}</span>
                <br />
                {item.message}
              </td>
              <td className="w-2/5 break-words">
                <div>
                  <div className="">{item.email}</div>
                  <div className="text-sm opacity-50">{item.number}</div>
                </div>
              </td>
              <th>
                <button
                  disabled={approved}
                  className="btn btn-ghost btn-xs bg-[orangered] text-white"
                  onClick={HandleConfirmOrder}
                >
                  Approved
                </button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderLayout;
