import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Review from './Review';

const ServiceDetails = () => {
    const { name } = useLoaderData();
    return (
        <div>
            <div>
                <h2>Service Section</h2>
                <h2>{name}</h2>
            </div>
            <div>
                <Review></Review>
            </div>
        </div>
    );
};

export default ServiceDetails;