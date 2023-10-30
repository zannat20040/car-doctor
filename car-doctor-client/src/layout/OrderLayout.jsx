import React, { useContext } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { AuthContext } from "../AuthProvider/AuthProvider";
const OrderLayout = ({ item }) => {
  const { user } = useContext(AuthContext);

 
  return (
    <div className="container mx-auto mt-10">
      <div className="overflow-x-auto">
        <table className="table">
          <tbody>
            {/* row 1 */}
            <tr>
              <th>
                <label>
                  <AiFillCloseCircle className="text-3xl"></AiFillCloseCircle>
                </label>
              </th>
              <td className="w-2/5 break-words">
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={item.img}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{item.title}</div>
                    <div className="text-sm opacity-50">{item.price}</div>
                  </div>
                </div>
              </td>
              <td className="w-2/5 break-words">
              <span className="badge badge-ghost badge-sm">
                  {item.name}
                </span>
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
                <button className="btn btn-ghost btn-xs bg-[orangered] text-white">
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
