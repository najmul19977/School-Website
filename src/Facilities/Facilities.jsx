import React, { useEffect } from "react";
import img1 from "../assets/Image/studen-img-1.jpg";
import img2 from "../assets/Image/small-kids-1.jpg";
import icon from "../assets/Image/icon.png";
import bus from "../assets/Image/school-bus.png";
import lab from "../assets/Image/lab.png";
import library from "../assets/Image/library.png";
import club from "../assets/Image/book-club.png";
import e from '../assets/Image/e-kids.png';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Facilities = () => {
  useEffect(()=>{
    AOS.init({duration:2000})
},[]);
   
  return (
    <div className="mt-20">
      <h2 className="text-5xl font-bold" data-aos="fade-up">Our Facilities </h2>
      <p className="text-xl font-semibold"data-aos="fade-up">Why we are the best</p>
      <div className="md:grid grid-cols-2 mt-20 items-center" >
        <div className="w-full" data-aos="flip-right">
          <img className="rounded-full h-96 w-96 image-zoom " src={img1} alt="" />
        </div>
        <div className="mt-5 mb-5">
          <div className="grid grid-cols-3 " data-aos="flip-left">
            <div className="bg-slate-300 p-4" data-aos="fade-up">
              <img className="p-5" src={icon} alt="" />
              <h1 className="text-xl font-serif font-bold mt-5">Day Care</h1>
            </div>
            <div className="bg-slate-200 p-4" data-aos="flip-up">
              <img className="p-5" src={bus} alt="" />
              <h1 className="text-xl font-serif font-bold mt-5">Safe Transport</h1>
            </div>
            <div className="bg-slate-300 p-4" data-aos="flip-up">
              <img className="p-5" src={lab} alt="" />
              <h1 className="text-xl font-serif font-bold mt-5">STEM Labs</h1>
            </div>
            <div className="bg-slate-200 p-4"data-aos="flip-up">
              <img className="p-5" src={library} alt="" />
              <h1 className="text-xl font-serif font-bold mt-5">Libraries</h1>
            </div>
            <div className="bg-slate-300 p-4" data-aos="flip-up">
              <img className="p-5" src={club} alt="" />
              <h1 className="text-xl font-serif font-bold mt-5">Clubs Facilities</h1>
            </div>
            <div className="bg-slate-200 p-4" data-aos="flip-up">
              <img className="p-5" src={e} alt="" />
              <h1 className="text-xl font-serif font-bold mt-5">E-Kides</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
