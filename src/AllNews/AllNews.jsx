import React from 'react';

const AllNews = ({item}) => {
    const {title,image,publish,description} = item;
    return (
        <div className='mt-20 mb-5 md:grid grid-cols-2 items-center'>
            <div className='text-left mr-4' data-aos="fade-up-right">
                <div className='text-3xl font-serif mb-2'><h1>{title}</h1></div>
                <div className='text-xl font-serif mb-2'><p>{publish}</p></div>
                <div className='font-serif'>{description}</div>
            </div>
            <div data-aos="fade-up-left">
                <img className='w-full img-fluid p-5' src={image} alt="" />
            </div>
            
        </div>
    );
};

export default AllNews;