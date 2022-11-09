import React from 'react';
import './Banner.css';
import img1 from '../../../assets/images/banner/img1.jpg';
import img2 from '../../../assets/images/banner/img2.jpg';
import img3 from '../../../assets/images/banner/img3.jpg';
import img4 from '../../../assets/images/banner/img4.jpg';
import img5 from '../../../assets/images/banner/img5.jpg';
import img6 from '../../../assets/images/banner/img6.jpg';





const Banner = () => {
    return (
        <div className="carousel w-full" style={{ height: '500px' }} >
            <div id="slide1" className="carousel-item relative w-full">
                <div id="slide1" className="banner-img carousel-item relative w-full">
                    <img src={img1} alt="" className="w-full" />
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-28 right-5 top-1/4">
                    <h1 className='text-4xl mb-6 font-bold text-white'>
                        Home Made <br />
                        Healthy <br />
                        Food Collection</h1>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 w-2/5 left-28 right-5 top-1/2">
                    <p className='text-white text-xl'>Deliver healthy and testy food . We deliver home made food from our fields to your doorstep.</p>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 w-2/5 left-28 right-5 top-3/4">
                    <button className="btn bg-orange-500 px-12">Services</button>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide6" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <div id="slide2" className="banner-img carousel-item relative w-full">
                    <img src={img2} alt="" className="w-full" />
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-28 right-5 top-1/4">
                    <h1 className='text-4xl mb-6 font-bold text-white'>
                        Home Made <br />
                        Healthy <br />
                        Food Collection</h1>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 w-2/5 left-28 right-5 top-1/2">
                    <p className='text-white text-xl'>Deliver healthy and testy food . We deliver home made food from our fields to your doorstep.</p>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 w-2/5 left-28 right-5 top-3/4">
                    <button className="btn bg-orange-500 px-12">Services</button>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <div id="slide3" className="banner-img carousel-item relative w-full">
                    <img src={img3} alt="" className="w-full" />
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-28 right-5 top-1/4">
                    <h1 className='text-4xl mb-6 font-bold text-white'>
                        Home Made <br />
                        Healthy <br />
                        Food Collection</h1>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 w-2/5 left-28 right-5 top-1/2">
                    <p className='text-white text-xl'>Deliver healthy and testy food . We deliver home made food from our fields to your doorstep.</p>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 w-2/5 left-28 right-5 top-3/4">
                    <button className="btn bg-orange-500 px-12">Services</button>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <div id="slide4" className="banner-img carousel-item relative w-full">
                    <img src={img4} alt="" className="w-full" />
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-28 right-5 top-1/4">
                    <h1 className='text-4xl mb-6 font-bold text-white'>
                        Home Made <br />
                        Healthy <br />
                        Food Collection</h1>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 w-2/5 left-28 right-5 top-1/2">
                    <p className='text-white text-xl'>Deliver healthy and testy food . We deliver home made food from our fields to your doorstep.</p>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 w-2/5 left-28 right-5 top-3/4">
                    <button className="btn bg-orange-500 px-12">Services</button>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide5" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
                <div id="slide5" className="banner-img carousel-item relative w-full">
                    <img src={img5} alt="" className="w-full" />
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-28 right-5 top-1/4">
                    <h1 className='text-4xl mb-6 font-bold text-white'>
                        Home Made <br />
                        Healthy <br />
                        Food Collection</h1>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 w-2/5 left-28 right-5 top-1/2">
                    <p className='text-white text-xl'>Deliver healthy and testy food . We deliver home made food from our fields to your doorstep.</p>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 w-2/5 left-28 right-5 top-3/4">
                    <button className="btn bg-orange-500 px-12">Services</button>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide6" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full">
                <div id="slide6" className="banner-img carousel-item relative w-full">
                    <img src={img6} alt="" className="w-full" />
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-28 right-5 top-1/4">
                    <h1 className='text-4xl mb-6 font-bold text-white'>
                        Home Made <br />
                        Healthy <br />
                        Food Collection</h1>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 w-2/5 left-28 right-5 top-1/2">
                    <p className='text-white text-xl'>Deliver healthy and testy food . We deliver home made food from our fields to your doorstep.</p>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 w-2/5 left-28 right-5 top-3/4">
                    <button className="btn bg-orange-500 px-12">Services</button>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide5" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>

        </div>
    );
};

export default Banner;