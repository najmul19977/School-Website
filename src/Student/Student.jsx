import React from 'react';
import img1 from '../assets/Image/student-1.jpg';

const Student = () => {
    return (
        <div className='md:grid grid-cols-2 items-center mx-auto mt-20 mb-20 gap-10'>
            <div data-aos="flip-right">
                <h1 className='text-4xl font-bold text-left ml-10'>Children must be taught how to think, not what to </h1>
                <p className='text-2xl mt-5'>_ Margaret Mead</p>

            </div>
            <div>
                <img className=' image-zoom w-96 h-96 rounded-full'data-aos="flip-left" src={img1} alt="" />

            </div>
            
        </div>
    );
};

export default Student;