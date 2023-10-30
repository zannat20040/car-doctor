import React from 'react';
import AuthenticationNav from '../components/AuthenticationNav';
// import FormCard from '../components/FormCard';
import { Outlet } from 'react-router-dom';

const Authentication = () => {
    return (
        <div>
            <AuthenticationNav></AuthenticationNav>
            <Outlet></Outlet>
        </div>
    );
};

export default Authentication;