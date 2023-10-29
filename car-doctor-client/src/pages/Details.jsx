import React from 'react';
import RouteLocationBanner from '../components/RouteLocationBanner';
import { useLoaderData } from 'react-router-dom';
import ServiceDetails from '../components/ServiceDetails';
import serviceImg from "../assets/5.jpg";

const Details = () => {
    const service = useLoaderData()
    return (
        <div>
            <RouteLocationBanner img={serviceImg} title={'Service Details'}></RouteLocationBanner>
            <ServiceDetails service={service}></ServiceDetails>
        </div>
    );
};

export default Details;