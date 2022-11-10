import React, { useEffect, useState } from 'react';

import ReviewRow from '../ReviewRow';

const MyReviews = ({ serviceName }) => {
    const [myReviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?serviceName=${serviceName}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [serviceName]);


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