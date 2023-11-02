import React, { useEffect } from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const BranchesCard = ({ branch }) => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const { name, image } = branch;
  return (
    <div className="mt-20 mx-auto"data-aos="fade-left" >
      <div className="card w-80 bg-base-100 shadow-xl">
        <figure>
          <img className="image-zoom" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>

          <button className="btn btn-primary">
            Read More <FaArrowCircleRight></FaArrowCircleRight>{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BranchesCard;
