import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
        <div className='bg-purple-500 py-3'>
            <div class="container mx-auto px-10">
              <div class="flex justify-between items-center">
                    <div class="top-sect">
                        <span>Phone : +88012457855 </span>||
                        <span> Email : support@info.com</span>
                    </div>
                    <ul className='flex justify-start items-center gap-5'>
                        <li>
                            <Link to="/">
                                <FaFacebookF />
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                            <FaTwitter />
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                            <FaInstagram />
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                            <FaLinkedinIn />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className='bg-purple-400 py-5 sticky top-0 z-40'>
                <div class="container mx-auto px-10">
                    <div class="flex justify-between items-center">
                        <div class="logo">
                            <Link to="/">Logo</Link>
                        </div>
                        <div class="menu">
                        <ul className='flex justify-start items-center gap-5'>
                            <li><Link class="active" to="/">Home</Link></li>
                            <li><Link to="about.html">About Us</Link></li>
                            <li><Link to="services.html">Services</Link></li>
                            <li><Link to="bloging.html">Health</Link></li>
                            <li><Link to="bloging.html">Politics</Link></li>
                            <li><Link to="bloging.html">Sports</Link></li>
                            <li><Link to="bloging.html">Food</Link></li>
                            <li><Link to="bloging.html">Travel</Link></li>
                            <li><Link to="bloging.html">Tech</Link></li>
                            <li><Link to="bloging.html">Business</Link></li>
                            <li><Link to="news.html">Science</Link></li>
                            <li><Link to="news.html">Gallery</Link></li>
                            <li><Link to="news.html">War</Link></li>
                            <li><Link to="news.html">LifeStyle</Link></li>
                            <li><Link to="/dashboard">Dashborad</Link></li>
                        </ul>
                        </div>
                    </div>
                </div>
        </div>
        </>
    );
};

export default Header;