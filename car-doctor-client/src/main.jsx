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
// import AuthenticationNav from "./components/AuthenticationNav";
import AuthProvider from "./AuthProvider/AuthProvider";
import Details from "./pages/Details";
import Checkout from "./layout/Checkout";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import AddServices from "./layout/AddServices";
import ErrorPage from "./pages/ErrorPage";
import Authentication from "./pages/Authentication";
import OrderReviewPage from "./pages/OrderReviewPage";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
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
        path: "/checkout/:id",
        element:  <PrivateRoute><Checkout></Checkout></PrivateRoute>,
        loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
      },
      {
        path: "/addservices",
        element:  <PrivateRoute><AddServices></AddServices></PrivateRoute>,
      },
    ],
  },
  {
    path: "/user",
    errorElement: <ErrorPage></ErrorPage>,
    element: <Authentication></Authentication>,
    children: [
      {
        path: "/user/login",
        element: <LoginForm></LoginForm>,
      },
      {
        path: "/user/signup",
        element: <SignUpForm></SignUpForm>,
      },
      {
        path: "/user/orderreview",
        element: <PrivateRoute><OrderReviewPage></OrderReviewPage></PrivateRoute>,
        loader: ()=> fetch('http://localhost:5000/orderreview')
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
