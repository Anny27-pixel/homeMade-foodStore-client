import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../../../assets/image.jpg';
const Contact = () => {
    return (
        <div>
            <h2 className='text-4xl text-center my-6 text-orange-500 font-bold'>Contact us</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-28 my-10 '>
                <div>
                    <figure><img src={image} alt="Shoes" /></figure>
                </div>
                <div>
                    <h2 className='text-lg font-bold'>Location</h2>
                    <p className='mb-3'>Dinajpur</p>
                    <h2 className='text-lg font-bold'>Contact</h2>
                    <p>017417574582</p>
                    <p className='mb-3'>016725987893</p>
                    <h2 className='text-lg font-bold'>Email</h2>
                    <Link>homemadefood@gmail.com</Link> <br />
                    <Link>ayan@gmail.com</Link>

                </div>
            </div>
        </div>
    );
};

export default Contact;