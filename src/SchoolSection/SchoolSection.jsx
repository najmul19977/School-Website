import { Link, useLoaderData } from "react-router-dom";
import SchoolCardSection from "../SchoolCardSection/SchoolCardSection";
import AOS from 'aos';
import { useEffect } from "react";


const SchoolSection = () => {
    

    const data =[
        {
            "_id":"01",
            "name":"Pro School",
            "description":"This section covers classes from Playgroup to Kindergarten 2. Students of this section are in their first stage of learning where they begin their preschool and early learning. Children being very young at this stage have impressionable minds that need a caring environment. Starting with training to hold a pencil through games, songs, storytelling and a lot of innovativeness, they end up being capable and confident pupils who can clearly express themselves both in speech and in writing",
            "images":"https://i.ibb.co/4JnRHWb/pexels-cdc-3992949.jpg"
            
            
            
        },
        {
            "_id":"02",
            "name":"Junior Sections",
            "description":"This section covers classes from Playgroup to Kindergarten 2. Students of this section are in their first stage of learning where they begin their preschool and early learning. Children being very young at this stage have impressionable minds that need a caring environment. Starting with training to hold a pencil through games, songs, storytelling and a lot of innovativeness, they end up being capable and confident pupils who can clearly express themselves both in speech and in writing",
            "images":"https://i.ibb.co/4JnRHWb/pexels-cdc-3992949.jpg"
            
            
            
        },
        {
            "_id":"03",
            "name":"Middle Sections",
            "description":"This section covers classes from Playgroup to Kindergarten 2. Students of this section are in their first stage of learning where they begin their preschool and early learning. Children being very young at this stage have impressionable minds that need a caring environment. Starting with training to hold a pencil through games, songs, storytelling and a lot of innovativeness, they end up being capable and confident pupils who can clearly express themselves both in speech and in writing",
            "images":"https://i.ibb.co/4JnRHWb/pexels-cdc-3992949.jpg"
            
            
            
        },
        {
            "_id":"04",
            "name":"Senior Sections",
            "description":"This section covers classes from Playgroup to Kindergarten 2. Students of this section are in their first stage of learning where they begin their preschool and early learning. Children being very young at this stage have impressionable minds that need a caring environment. Starting with training to hold a pencil through games, songs, storytelling and a lot of innovativeness, they end up being capable and confident pupils who can clearly express themselves both in speech and in writing",
            "images":"https://i.ibb.co/4JnRHWb/pexels-cdc-3992949.jpg"
            
            
            
        }
        
    ]
    /* const schools = useLoaderData(); */



    return (
        <div >
            <div className=" md:flex items-center justify-between" data-aos="flip-left">
                <div className="text-left">
                    <h2 className="text-5xl font-bold mt-10">Academic Sections </h2>
                    <p className="mt-6 mb-6">Explore Our Comprehensive Academic Program, Catering to the Educational Needs of Students.</p>

                </div>
                <div>
                    <button className="btn btn-primary mt-5"><Link to='/application'>Apply Now</Link></button>
                </div>


            </div>
            <div className=" card md:grid grid-cols-4 gap-5 mt-5 mx-auto ">
                {
                data.map(school => <SchoolCardSection
                        key={school._id}
                        school={school}
                    >

                    </SchoolCardSection>)
                }

            </div>


        </div>
    );
};

export default SchoolSection;