import React from 'react';
import { Link } from 'react-router-dom';

const NabSection = () => {
    return (
        <div className="navbar bg-base-100 sticky top-0 z-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2  shadow bg-base-100 rounded-box w-52">
                        <li className='m-4'>
                            <Link to="/">HOME</Link>
                            <a></a>
                        </li>
                        <li className='ms-2' tabIndex={0}>
                            <details>
                                <summary>ABOUT US</summary>
                                <ul className="p-2 m-5 ">
                                    <li><Link to='/chirman'>Message From Chairman</Link></li>
                                    <li><Link to='/principal'>Message From Principal</Link></li>
                                    <li><Link to='/governing'>Governing Body</Link></li>
                                    <li><Link to='/teacher'>Teacher</Link></li>
                                    <li><Link to=''>History</Link></li>

                                </ul>
                            </details>
                        </li>
                        <li className='ms-2' tabIndex={0}>
                            <details>
                                <summary>ACADEMIC</summary>
                                <ul className="p-2 m-5">
                                    <li><Link to='/reacttab'>Noticeboard</Link></li>
                                    <li><Link to='/oath'>Students Oath</Link></li>
                                    <li><Link to='/calendar'>Academic Calendar</Link></li>
                                    <li><Link to='/facilities'>Facilities</Link></li>
                                    <li><Link to='/healthCare'>Health Care</Link></li>
                                    <li><Link to='/dressCode'>Dress Code</Link></li>


                                </ul>
                            </details>
                        </li>
                        {/*  <li className='ms-2' tabIndex={0}>
                            <details>
                                <summary>INFORMATION</summary>
                                <ul className="p-2 m-5">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </details>
                        </li> */}
                        <li className='ms-2' tabIndex={0}>
                            <details>
                                <summary>ADMISSION</summary>
                                <ul className="p-2 m-5">
                                    <li><Link to='/admissionnotice'>Admission Notice</Link></li>
                                    <li><Link to='/branches'>Branches</Link></li>
                                </ul>
                            </details>
                        </li>
                        <li className='ms-2' tabIndex={0}>
                            <details>
                                <summary>CAMPUS LIFE</summary>
                                <ul className="p-2 m-5">
                                    <li><Link to='/photogallery'>Photo Gallery</Link></li>
                                    <li><Link to=''>Video Gallery</Link></li>
                                </ul>
                            </details>
                        </li>
                        <li className='ms-2' tabIndex={0}>
                            <details>
                                <summary>FACILITIES</summary>
                                <ul className="p-2 m-5">
                                    <li><Link to='/library'>Library</Link></li>
                                    <li><Link to='/laboratory'>Laboratory</Link></li>
                                    <li><Link to='/courses'>Courses</Link></li>
                                    <li><Link to='/healthCare'>Health Care</Link></li>
                                </ul>
                            </details>
                        </li>
                        <li className='m-2'><a>CONTACT US</a></li>
                    </ul>
                </div>
                <a className='btn btn-ghost normal-case text-xl' href="">OUR SCHOOL</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li className='ms-2'><Link to="/">HOME</Link></li>
                    <li className='ms-2' tabIndex={0}>
                        <details>
                            <summary>ABOUT US</summary>
                            <ul className="p-2 m-5 w-40">
                                <li><Link to='/chirman'>Message From Chairman</Link></li>
                                <li><Link to='/principal'>Message From Principal</Link></li>
                                <li><Link to='/governing'>Governing Body</Link></li>
                                <li><Link to='/teacher'>Teacher</Link></li>
                                <li><Link to=''>History</Link></li>

                            </ul>
                        </details>
                    </li>
                    <li className='ms-2' tabIndex={0}>
                        <details>
                            <summary>ACADEMIC</summary>
                            <ul className="p-2 m-5 w-40">
                                <li><Link to='/reacttab'>Noticeboard</Link></li>
                                <li><Link to='/oath'>Students Oath</Link></li>
                                <li><Link to='/calendar'>Academic Calendar</Link></li>
                                <li><Link to='/facilities'>Facilities</Link></li>
                                <li><Link to='/healthCare'>Health Care</Link></li>
                                <li><Link to='/dressCode'>Dress Code</Link></li>


                            </ul>
                        </details>
                    </li>
                    {/* <li className='ms-2' tabIndex={0}>
                        <details>
                            <summary>INFORMATION</summary>
                            <ul className="p-2 m-5">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </details>
                    </li> */}
                    <li className='ms-2' tabIndex={0}>
                        <details>
                            <summary>ADMISSION</summary>
                            <ul className="p-2 m-5 w-40">
                                <li><Link to='/admissionnotice'>Admission Notice</Link></li>
                                <li><Link to='/branches'>Branches</Link></li>
                            </ul>
                        </details>
                    </li>
                    <li className='ms-2' tabIndex={0}>
                        <details>
                            <summary>CAMPUS LIFE</summary>
                            <ul className="p-2 m-5 w-40">
                                <li><Link to='/photogallery'>Photo Gallery</Link></li>
                                <li><Link to=''>Video Gallery</Link></li>
                            </ul>
                        </details>
                    </li>
                    <li className='ms-2' tabIndex={0}>
                        <details>
                            <summary> FACILITIES</summary>
                            <ul className="p-2 m-5 w-40">
                                <li><Link to='/library'>Library</Link></li>
                                <li><Link to='/laboratory'>Laboratory</Link></li>
                                <li><Link to='/courses'>Courses</Link></li>
                                <li><Link to='/healthCare'>Health Care</Link></li>
                            </ul>
                        </details>
                    </li>
                    <li className='ms-2'><Link to='/contactform'>CONTACT US</Link></li>
                </ul>
            </div>

        </div>
    );
};

export default NabSection;