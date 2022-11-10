import React from 'react';

const About = () => {
    return (
        <div>
            <h2 className='text-4xl text-center my-6 text-orange-500 font-bold'>Why Choose Us</h2>
            <div className='bg-orange-300 text-center grid grid-cols-1 py-32 mx-12 rounded-xl '>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn m-1 px-36">100% Healthy Cooking process!!</label>
                    <ul tabIndex={0} className="dropdown-content menu p-2  shadow bg-base-100 rounded-box w-52">
                        <li>Our Cooking Area is very clean. We are a locally owned business that has decades of experience in the field of health and firm roots in the health food industry.</li>
                    </ul>
                </div>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn m-1 px-36">Home Made Testy Food!!</label>
                    <ul tabIndex={0} className="dropdown-content menu p-2  shadow bg-base-100 rounded-box w-52">
                        <li>Our foods are very testy and delicious . We made food different ways.</li>
                    </ul>
                </div>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn m-1 px-36">Fast Free Delivery!!</label>
                    <ul tabIndex={0} className="dropdown-content menu p-2  shadow bg-base-100 rounded-box w-52">
                        <li>Our Delivery system is very Fast.This is our motto and we are experts in delivering the best 100% organic foods on the market. We work with more than 60 farms all over the country.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;