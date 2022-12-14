import React, { useEffect, useState } from 'react';


import ReviewRow from '../ReviewRow';


const MyReviews = ({ serviceName, handleDelete }) => {
    const [myReviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`https://homemade-foodstore-server.vercel.app/reviews?serviceName=${serviceName}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [serviceName]);





    return (
        <div className="overflow-x-auto w-full mr-12">
            <h2>Reviews: {myReviews.length}</h2>
            <table className="table w-full mr-12">

                <thead>
                    <tr>
                        <th>Delete</th>
                        <th>Name</th>

                        <th>Review</th>
                        <th>Ratings</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myReviews.map(review => <ReviewRow
                            key={review._id}
                            review={review}
                            handleDelete={handleDelete}
                        ></ReviewRow>)
                    }
                </tbody>


            </table>


        </div>
    );
};

export default MyReviews;