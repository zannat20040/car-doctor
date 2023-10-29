import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Main from "./pages/Main";
import Home from "./pages/Home";
import SignUpForm from "./layout/SignUpForm";
import LoginForm from "./layout/LoginForm";
import AuthenticationNav from "./components/AuthenticationNav";
import AuthProvider from "./AuthProvider/AuthProvider";
import Details from "./pages/Details";
import Checkout from "./layout/Checkout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/details/:id",
        element: <Details></Details> ,
        loader:({params}) => fetch(`http://localhost:5000/services/${params.id}`)
      },
      {
        path: "/checkout",
        element:  <Checkout></Checkout>,
      },
    ],
  },
  {
    path: "/user",
    element: <AuthenticationNav></AuthenticationNav>,
    children: [
      {
        path: "/user/login",
        element: <LoginForm></LoginForm>,
      },
      {
        path: "/user/signup",
        element: <SignUpForm></SignUpForm>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
