import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './SchoolCardSection.css';

const SchoolCardSection = ({ school }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleReadMore = () => {
        setIsExpanded(!isExpanded);
    };
    useEffect(()=>{
        AOS.init({duration:2000})
    },[]);
    //console.log(school);
    const { name, description, images } = school;
    return (
        <div className='mx-auto'>
            <div className="card w-72 bg-slate-200 shadow-xl" data-aos="flip-left"  data-aos-anchor-placement="top-center">
                <figure className="">
                    <img src={images} alt="school" className="rounded-xl image-zoom" />
                </figure>
                <div className=" items-center text-center">
                    <h2 className="card-title mt-2 mb-2">{name}</h2>
                    <p className='text-left'>
                        {isExpanded
                            ? "This section covers classes from Playgroup to Kindergarten 2. Students of this section are in their first stage of learning where they begin their preschool and early learning. Children being very young at this stage have impressionable minds that need a caring environment. Starting with training to hold a pencil through games, songs, storytelling and a lot of innovativeness, they end up being capable and confident pupils who can clearly express themselves both in speech and in writing"
                            : 'This section covers classes from Playgroup to Kindergarten 2. Students of this section are in their first stage of learning where they begin their preschool and early learning.  '}
                        <button className='btn btn-primary'data-aos="fade-up" onClick={toggleReadMore}>
                            {isExpanded ? 'Read Less' : 'Read More...'}
                        </button>
                    </p>
                  {/*   <div className="card-actions">
                        <button className="btn btn-primary">Read More</button>
                    </div>  */}
                </div>
            </div>
        </div>
    );
};

export default SchoolCardSection;