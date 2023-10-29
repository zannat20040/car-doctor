import React, { useContext } from "react";
import logo from "../assets/logo.svg";
import FormCard from "./FormCard";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import swal from "sweetalert";

const AuthenticationNav = () => {
  const { setUser, user, signOutProfile } = useContext(AuthContext);
  const SignOut = () => {
    signOutProfile()
      .then(() => {
        setUser(null)
        swal("Good job!", "You successfully logged out", "success");
      })
      .catch((error) => {
        console.log(error.message)
      });
  };
  return (
    <div className="container mx-auto">
      <div className="navbar bg-base-100 py-5">
        <div className="flex-1">
          <Link to='/'><img src={logo} alt="" /></Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 text-base font-medium">
            <li>
              <a>Order</a>
            </li>
            <li>
              <a>Order Review</a>
            </li>
            <li>
              <a>Manage</a>
            </li>
            <li>
              <a>Inventory </a>
            </li>

            <li>
              {user ? (
                <Link onClick={SignOut} to="/user/signup">
                  Logout
                </Link>
              ) : (
                <Link to="/user/login">Login</Link>
              )}
            </li>
          </ul>
        </div>
      </div>

      <FormCard></FormCard>
    </div>
  );
};

export default AuthenticationNav;
