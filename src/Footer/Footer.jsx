import React from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope,FaPhoneAlt,FaGlobe } from "react-icons/fa";

const Footer = () => {
    const emailAddress = 'example@example.com';
    const phoneNumber = '+1234567890';
    const websiteUrl = 'https://www.example.com';
    
    return (
        <footer className="footer p-10 bg-base-300 text-base-content">
            <aside>
                <h1 className='text-5xl font-serif font-bold'>Our School</h1>
                <p className='text-left mb-2 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum laboriosam quibusdam accusamus magnam odit, similique nostrum dolor error molestiae laudantium dolore nesciunt eaque veritatis nulla asperiores quo</p>
                <p className='flex items-center gap-5'><FaEnvelope className='text-xl'></FaEnvelope> <Link className=' font-serif ' to={`mailto:${emailAddress}`}>Info@unico.com</Link></p>
                <p className='flex items-center gap-5'><FaPhoneAlt className='text-xl'></FaPhoneAlt> <Link className=' font-serif' to={`tel:${phoneNumber}`}>+1234567890</Link> </p>
                <p className='flex items-center gap-5'><FaGlobe className='text-xl'></FaGlobe> <Link to={websiteUrl} target="_blank" rel="noopener noreferrer">www.unicoit.com</Link> </p>
            </aside>
            <nav>
                <header className="footer-title">Navigation </header>
                <Link to="/" className="link link-hover">Message From Chairman</Link>
                <Link to='/' className="link link-hover">Message From Principal</Link>
                <Link to='/' className="link link-hover">Governing Body</Link>
                <Link to='/' className="link link-hover">Teacher</Link>
                
               
            </nav>
            <nav>
                <header className="footer-title">Important Links</header>
                <Link to='/' className="link link-hover">About us</Link>
                <Link to='/' className="link link-hover">Contact</Link>
                <Link to='/' className="link link-hover">Noticebord</Link>
                <Link to='/' className="link link-hover">Academic Calender</Link>
                <Link to='/' className="link link-hover">Facilities</Link>
                <Link to='/' className="link link-hover">Health Care</Link>
                <Link to='/' className="link link-hover">Deess Code</Link>
                <Link to='/' className="link link-hover">Branch</Link>
                <Link to='/' className="link link-hover">Library</Link>
                <Link to='/' className="link link-hover">Courses</Link>
                
            </nav>
            <nav className='w-full'>
                <header className="footer-title">Google Map</header>
                <div className='w-full'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.874887033629!2d90.41394687447229!3d23.787469187353892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c71ce580cc5b%3A0x628f58a3f261f98f!2sUnico%20IT%20Limited!5e0!3m2!1sen!2sbd!4v1698910892821!5m2!1sen!2sbd" className='h-72 w-full' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;