import React, { useEffect, useState } from "react";
import img1 from "../assets/Image/group-img2.webp";
import { FaArrowCircleRight } from 'react-icons/fa';
import { json, useLoaderData } from "react-router-dom";
import BranchesCard from "../BranchesCard/BranchesCard";

const Branches = () => {
    const [branches,setBranches] = useState([]);

    useEffect(() => {
        fetch('branches.json')
          .then((res) => res.json())
          .then((data) => setBranches(data))
          
        
      }, []);
  return (
    <div className="mt-20">
      <h1 className="text-5xl font-bold" data-aos="fade-up">Our Branches</h1>
      
      <div className="md:grid grid-cols-3">
        {
            branches.map(branch =><BranchesCard
            key={branch._id}
            branch={branch}
            ></BranchesCard>)
        }
      </div>
    </div>
  );
};

export default Branches;
