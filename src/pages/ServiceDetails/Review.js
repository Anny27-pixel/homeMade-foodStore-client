import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const Review = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <form>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mx-auto max-w-6xl mb-6'>
                    <input type="text" placeholder="reviewer name" className="input input-bordered w-full" />
                    <input type="text" placeholder="Reviewer image" className="input input-bordered w-full " />
                    <input type="text" placeholder="service ratings" className="input input-bordered w-full " />
                    <input type="text" placeholder="Reviewer email" defaultValue={user?.email} className="input input-bordered w-full " />
                </div>
                <div className='max-w-screen-md  mx-auto'>
                    <textarea style={{ height: '200px', width: '800px' }} className="textarea textarea-bordered " placeholder="Review"></textarea>
                </div>
            </form>
        </div>
    );
};

export default Review;