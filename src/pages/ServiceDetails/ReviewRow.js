import React, { useEffect, useState } from 'react';

const ReviewRow = ({ review, handleDelete }) => {
    const { _id, Reviewer, image, rating, message, Service, email } = review;
    const [reviewService, setReviewService] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/services/${Service}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setReviewService(data);

            })
    }, [Service])




    return (



        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-ghost btn-xs">Delete</button>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{Reviewer}</div>
                        <div className="text-sm opacity-50">{email}</div>
                    </div>
                </div>
            </td>

            <td>
                {message}
            </td>
            <td>{rating}</td>
            <th>
                <button className="btn btn-ghost btn-xs">Edit</button>
            </th>
        </tr>


    );
};

export default ReviewRow;