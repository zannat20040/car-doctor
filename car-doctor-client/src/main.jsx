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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
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
