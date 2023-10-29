import React from 'react';
import RouteLocationBanner from '../components/RouteLocationBanner';
import { useLoaderData } from 'react-router-dom';
import ServiceDetails from '../components/ServiceDetails';

const Details = () => {
    const service = useLoaderData()
    return (
        <div>
            <RouteLocationBanner></RouteLocationBanner>
            <ServiceDetails service={service}></ServiceDetails>
        </div>
    );
};

export default Details;