import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const AddService = () => {
    const { user } = useContext(AuthContext);
    const handleAddService = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = user?.email || 'unregistered';
        const img = form.img.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const description = form.description.value;




        const addService = {
            name,
            email,
            img,
            price,
            rating,
            description
        }

        fetch('https://homemade-foodstore-server.vercel.app/addService', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addService)
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(e => console.error(e));

    }


    return (
        <div>
            <h1 className='text-4xl text-orange-500 font-bold ml-12 mt-6'>Add a Service</h1>
            <form onSubmit={handleAddService}>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mx-auto ml-12 my-6'>
                    <input name='name' type="text" placeholder="service name" className="input input-bordered w-1/2" required />
                    <input name='img' type="text" placeholder="service image" className="input input-bordered w-1/2 " />
                    <input name='rating' type="text" placeholder="service ratings" className="input input-bordered w-1/2 " />
                    <input name='price' type="text" placeholder="service price" className="input input-bordered w-1/2 " />
                    <input name='email' type="text" placeholder="Reviewer email" defaultValue={user?.email} className="input input-bordered w-1/2 " required />
                </div>
                <textarea name='description' className="textarea textarea-bordered w-1/2 ml-12 " placeholder="description" required></textarea>
                <input className='btn bg-orange-500 ml-12 my-3 ' type="submit" value="AddService" />
            </form>
        </div>
    );
};

export default AddService;