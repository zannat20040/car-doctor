import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Main from './layout/Main';
import Home from './layout/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path:'/',
        element:<Home></Home>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='container mx-auto '>
    <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
  </div>
)