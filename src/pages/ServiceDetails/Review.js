import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const Review = ({ _id, serviceName }) => {

    const { user } = useContext(AuthContext);


    const handleReview = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.name.value}`;
        const email = user?.email || 'unregistered';
        const image = `${form.image.value}`;
        const rating = form.rating.value;
        const message = form.message.value;

        const review = {
            Service: _id,
            ServiceName: serviceName,
            Reviewer: name,
            email,
            image,
            rating,
            message
        }
        fetch('https://homemade-foodstore-server.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    alert('Review done successfully');
                    form.reset();
                }
            }
            )
            .catch(e => console.error(e));
    }

    return (
        <div>
            <h1 className='text-4xl text-orange-500 font-bold ml-12 mt-6'>Please Review Our Services</h1>
            <form onSubmit={handleReview}>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mx-auto ml-12 my-6'>
                    <input name='name' type="text" placeholder="reviewer name" className="input input-bordered w-1/2" required />
                    <input name='image' type="text" placeholder="Reviewer image" className="input input-bordered w-1/2 " />
                    <input name='rating' type="text" placeholder="service ratings" className="input input-bordered w-1/2 " />
                    <input name='email' type="text" placeholder="Reviewer email" defaultValue={user?.email} className="input input-bordered w-1/2 " required />
                </div>
                <textarea name='message' className="textarea textarea-bordered w-1/2 ml-12 " placeholder="Review" required></textarea>
                <input className='btn bg-orange-500 ml-12 my-3 ' type="submit" value="Review" />
            </form>
        </div>
    );
};

export default Review;