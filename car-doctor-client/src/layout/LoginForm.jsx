import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn, FaGoogle } from "react-icons/fa";
import { AuthContext } from '../AuthProvider/AuthProvider';

const LoginForm = () => {
  const {check } = useContext(AuthContext)
  console.log(check)
    return (
        <form className="card-body">
            <h1 className="text-5xl font-semibold text-center mb-8 ">Login</h1>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Email</span>
              </label>
              <input
                type="email"
                name='email'
                placeholder="Your email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Password</span>
              </label>
              <input
                type="password"
                name='password'
                placeholder="Your password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn  border-0  bg-[#FF3811] hover:text-[#FF3811]  text-white  font-medium">
                Login
              </button>
            </div>
            <span className="mt-6 block text-center text-base">
              Or Sign In with
            </span>

            <div className=" text-2xl flex gap-4 justify-center  mt-5">
              <Link className="h-14 w-14 rounded-[50%] text-white bg-[#FF3811] flex items-center justify-center ">
                <FaGoogle></FaGoogle>
              </Link>
              <Link className="h-14 w-14 rounded-[50%] text-white bg-[#FF3811] flex items-center justify-center ">
                <FaFacebookF></FaFacebookF>
              </Link>
              <Link className="h-14 w-14 rounded-[50%] text-white bg-[#FF3811] flex items-center justify-center ">
                <FaLinkedinIn></FaLinkedinIn>
              </Link>
            </div>

            <span className="mt-6 block text-center text-base">
              New to Car Doctor? 
              <Link className=" ml-2 font-semibold text-[#FF3811]" to='/user/signup'>Sign Up</Link>
            </span>
          </form>
    );
};

export default LoginForm;