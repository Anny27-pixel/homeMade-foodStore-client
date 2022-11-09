import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    // console.log(service);
    const { _id, img, name, description, price, rating } = service;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img style={{ height: '300px', width: '300px' }} src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className='text-lg'>{description}</p>
                <div className='flex mb-6 text-xl text-orange-500'>
                    <p>Price: ${price}</p>
                    <p>Ratings:{rating}</p>
                </div>
                <div className="card-actions justify-end">
                    <Link to={`/services/${_id}`}>
                        <button className="btn bg-orange-500">View Details</button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default ServiceCard;