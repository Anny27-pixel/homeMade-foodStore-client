import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import MyReviews from './MyReviews/MyReviews';
import Review from './Review';

const ServiceDetails = () => {
    const { _id, img, name, description, price, rating } = useLoaderData();
    const [myReviews, setReviews] = useState([]);
    const handleDelete = _id => {
        const proceed = window.confirm('want to delete your review?');
        if (proceed) {
            fetch(`http://localhost:5000/reviews?serviceName=${_id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remaining = myReviews.filter(rev => rev._id !== _id);
                        setReviews(remaining);
                    }
                })
        }
    }
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
                    handleDelete={handleDelete}
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