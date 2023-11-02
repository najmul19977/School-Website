import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const EventCard = ({ e }) => {
  console.log(e);
  const { name, date, description, images } = e;
  return (
    <div className="mt-20 mx-auto" data-aos="fade-left" >
      <div className="card w-72 h-96 bg-base-100 shadow-xl">
        <figure>
          <img className="image-zoom" src={images} alt="Shoes" />
        </figure>
        <p>{date}</p>

        <h2 className="card-title text-left">{name}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <button className="btn btn-primary " data-aos="fade-up"> <Link to='/newsdetails'>Learm More </Link> <FaArrowCircleRight></FaArrowCircleRight></button>
       
      </div>
    </div>
  );
};

export default EventCard;
