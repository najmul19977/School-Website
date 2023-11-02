import React from "react";
import { FaPhone } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './TeacherCard.css';


const TeacherCard = ({ teacher }) => {
  //console.log(teacher);
  const { images, name, subjects, email, phone } = teacher;
  return (
    <div className="mt-10">
      <div className="card w-72 h-96 bg-base-100 shadow-xl items-center " data-aos="fade-right">
        <figure>
          <img className="  image-zoom" src={images} alt="Shoes" />
        </figure>

        
          <h2 className="text-2xl font-bold mt-2 m-2">{name}</h2>
          <p>Subject: {subjects}</p>
          <div className="flex items-center text-center gap-2">
            
            <span><FaEnvelope></FaEnvelope></span><span> <Link to = "mailto: abc123@gmail.com" target="_blank">{email}</Link></span>
          </div>
          

          <div className="flex items-center text-center ">
            <span>
              <FaPhone></FaPhone>
            </span>
            <span><Link to = "tel:+1230000000 " target="_blank">{phone}</Link></span>{" "}
          </div>
        
      </div>
    </div>
  );
};

export default TeacherCard;
