import React from "react";
import img1 from '../assets/Image/programing.jpg';

const Courses = () => {
  return (
    <div>
      <h2 className="text-5xl font-bold text-center mt-10 mb-10">Courses</h2>
      <div className="md:grid grid-cols-2 items-center mx-auto mt-20 mb-20 gap-5 ">
      <div data-aos="fade-down-right">
          <img className="w-full h-96 rounded-2xl " src={img1} alt="" />
        </div>
        <div className="text-left" data-aos="fade-down-left">
          <h1 className="text-3xl font-bold text-left mb-4">Robot for Juniors</h1>
          <p className="text-xl font-semibold">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam iusto architecto ducimus ipsum tempore sed provident, dolores doloremque ut accusantium perferendis modi aspernatur eaque laudantium aliquid reprehenderit! Deserunt, eveniet perferendis.
          </p>
        </div>
        
      </div>
      <div className="md:grid grid-cols-2 items-center mx-auto mt-20 mb-20 gap-5 ">
      
        <div className="text-left" data-aos="fade-down-left">
          <h1 className="text-3xl font-bold text-left mb-4">Python for Juniors</h1>
          <p className="text-xl font-semibold">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas laudantium, odit distinctio natus omnis hic excepturi possimus fugiat explicabo, ipsam perspiciatis, odio labore nemo. Eius quasi dolor excepturi officiis quod.
          </p>
        </div>
        <div data-aos="fade-down-right">
          <img className="w-full h-96 rounded-2xl " src={img1} alt="" />
        </div>
        
      </div>
      <div className="md:grid grid-cols-2 items-center mx-auto mt-20 mb-20 gap-5 ">
      <div data-aos="fade-down-left">
          <img className="w-full h-96 rounded-2xl " src={img1} alt="" />
        </div>
      
        <div className="text-left" data-aos="fade-down-right">
          <h1 className="text-3xl font-bold text-left mb-4">Programming for kids</h1>
          <p className="text-xl font-semibold">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro dignissimos velit necessitatibus! Provident, amet! Consequatur vitae ipsa provident assumenda adipisci veniam reiciendis cum, accusamus iure maiores modi, rem autem nobis.
          </p>
        </div>
      
        
      </div>
    </div>
  );
};

export default Courses;
