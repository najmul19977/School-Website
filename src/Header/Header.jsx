import React from 'react';
import backgroundImage1 from '../assets/Image/kids-img-1.jpg';
import backgroundImage2 from '../assets/Image/kids-img-2.jpg';
import backgroundImage3 from '../assets/Image/kids-img-3.jpg';
import backgroundImage4 from '../assets/Image/kids-img-4.jpg';

const Header = () => {
    return (
        <div className=''>
            <div className="carousel w-full">
                <div style={{ backgroundImage: `url(${backgroundImage1})` }} id="item1" className="carousel-item w-full  min-h-screen">
                    <div className="mt-52 ml-96 " data-aos="fade-up" >

                        <h1 className='text-5xl text-white font-bold '>Child Is Yours, <br /> Endeavour Is Our</h1>
                        <p className='mt-4 text-secondary-focus'>Let's Build Up Together</p>
                        <button className='btn btn-primary mt-4'>Campus Care</button>

                    </div>
                    {/*  <img src={} className="w-full h-auto " /> */}
                </div>
                <div style={{ backgroundImage: `url(${backgroundImage2})` }} id="item2" className="carousel-item w-full min-h-screen">
                    <div className="mt-52 ml-96 ">

                        <h1 className='text-5xl text-primary-focus font-bold '>We Nurture The <br /> Future Leaders</h1>
                        <p className='mt-4 text-secondary-focus'>Let's Build Up Together</p>
                        <button className='btn btn-primary mt-4'>Campus Care</button>

                    </div>
                    {/* <img src={img2} className="w-full" /> */}
                </div>
                <div style={{ backgroundImage: `url(${backgroundImage3})` }} id="item3" className="carousel-item w-full h-screen">
                    <div className="mt-52 ml-96 ">

                        <h1 className='text-5xl text-white font-bold '>Child Is Yours, <br /> Endeavour Is Our</h1>
                        <p className='mt-4 text-secondary-focus'>Let's Build Up Together</p>
                        <button className='btn btn-primary mt-4'>Campus Care</button>

                    </div>
                    {/*  <img src="/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" /> */}
                </div>
                <div style={{ backgroundImage: `url(${backgroundImage4})` }} id="item4" className="carousel-item w-full h-screen">
                    <div className="mt-52 ml-96 ">

                        <h1 className='text-5xl text-black font-bold '>Child Is Yours, <br /> Endeavour Is Our</h1>
                        <p className='mt-4 text-secondary-focus'>Let's Build Up Together</p>
                        <button className='btn btn-primary mt-4'>Campus Care</button>

                    </div>
                    {/* <img src="/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" /> */}
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>

        </div>
    );
};

export default Header;