import React, { useContext } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {

    const location = useLocation()
    console.log(location.pathname)
    const {user,loading} = useContext(AuthContext)

    if(user){
        return  children
    }
    
    return  <Navigate state={{ redirectTo: location.pathname }} to="/user/login"></Navigate>;
};

export default PrivateRoute;