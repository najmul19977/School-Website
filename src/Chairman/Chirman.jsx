import React from 'react';
import img from '../assets/Image/c-img.jpg';
import { FaFacebookSquare,FaInstagramSquare,FaTwitterSquare } from "react-icons/fa";

const Chirman = () => {
    return (
        <div>
            <div className='bg-slate-200'>
                <h2 className='text-5xl font-bold pt-5 pb-5'>Message from Chairman</h2>
            </div>
            <div>
                <img className='img-fluid  w-80  h-96 mx-auto mt-20 mb-5 image-zoom rounded-xl' src={img} alt="" />
                <p className='text-2xl font-bold '>Md:Saiful Islam </p>
                <p className=' flex  justify-center mb-10'><FaFacebookSquare className='text-4xl'></FaFacebookSquare> <FaInstagramSquare className='text-4xl'></FaInstagramSquare> <FaTwitterSquare className='text-4xl'></FaTwitterSquare></p>
            </div>
            <div>
                <p className='text-justify mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio iste maiores fuga earum, magni nam culpa laborum eligendi sapiente atque ipsa, alias inventore sed tempora fugit minus facilis ut accusamus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Non distinctio excepturi, sapiente cum atque, rem animi perspiciatis tempore incidunt sit blanditiis sequi similique tenetur maiores sed delectus laudantium quidem Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quis a corrupti voluptatum odit minima ipsam nemo consequuntur possimus, incidunt porro odio adipisci suscipit laboriosam sapiente provident accusantium alias eius Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint libero nulla error in ratione. Et a eum maiores? Hic, explicabo aperiam dolor cum ab fugiat? Doloribus ullam hic commodi excepturi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam rem quisquam possimus aperiam atque tempora tenetur. Consequatur officia quos officiis. Accusantium quisquam quas quae molestiae perspiciatis consequatur, iste iure. Architecto. </p>
            </div>
            
        </div>
    );
};

export default Chirman;