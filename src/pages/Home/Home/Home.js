import React from 'react';
import Banner from '../Banner/Banner';
import { useEffect, useState } from 'react';
import ServiceCard from '../../Shared/ServiceCard/ServiceCard';
import { Link } from 'react-router-dom';

const Home = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <Banner></Banner>
            <div className='text-center'>
                <p className='text-4xl text-orange-500 my-10 font-bold'>Our Foods </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>

                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
            <div className='text-center my-12'>
                <Link to='/services'><button className="btn bg-orange-500 px-12">See All</button></Link>
            </div>
        </div>
    );
};

export default Home;