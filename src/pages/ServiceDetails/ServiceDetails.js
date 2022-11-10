import React from 'react';
import { useLoaderData } from 'react-router-dom';
import MyReviews from './MyReviews/MyReviews';
import Review from './Review';

const ServiceDetails = () => {
    const { _id, img, name, description, price, rating } = useLoaderData();
    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
                <div className="card card-compact  bg-base-100 shadow-xl ml-12">
                    <figure><img style={{ height: '300px', width: '300px' }} src={img} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{name}</h2>
                        <p className='text-lg'>{description}</p>
                        <div className='flex mb-6 text-xl text-orange-500'>
                            <p>Price: ${price}</p>
                            <p>Ratings:{rating}</p>
                        </div>
                    </div>
                </div>
                <MyReviews
                    serviceName={name}
                ></MyReviews>
            </div>
            <div>
                <Review
                    _id={_id}
                    serviceName={name}
                ></Review>
            </div>
        </div>
    );
};

export default ServiceDetails;