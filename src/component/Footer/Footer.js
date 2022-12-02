import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer class="relative bg-purple-200">
            <div class="container mx-auto px-4 py-16">
                <div class="flex flex-wrap text-left lg:text-left">
                <div class="w-full lg:w-6/12 px-4">
                    <h4 class="text-3xl fonat-semibold text-blueGray-700">Let's keep in touch!</h4>
                    <h5 class="text-lg mt-0 mb-2 text-blueGray-600">
                    Find us on any of these platforms, we respond 1-2 business days.
                    </h5>
                    <div class="mt-6 lg:mb-0 mb-6">
                        <ul className='flex justify-start items-center gap-5'>
                            <li><Link to="/"> <FaFacebookF /> </Link> </li>
                            <li><Link to="/"> <FaTwitter /> </Link> </li>
                            <li><Link to="/"> <FaInstagram /> </Link></li>
                            <li> <Link to="/"> <FaLinkedinIn /> </Link></li>
                        </ul>
                    </div>
                </div>
                <div class="w-full lg:w-6/12 px-4">
                    <div class="flex flex-wrap items-top mb-6">
                        <div class="w-full lg:w-4/12 px-4 ml-auto">
                            <span class="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Useful Links</span>
                            <ul class="list-unstyled">
                                <li>
                                    <Link class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" to="/">About Us</Link>
                                </li>
                                <li>
                                    <Link class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" to="/">Blog</Link>
                                </li>
                                <li>
                                    <Link class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2" to="/">Github</Link>
                                </li>
                                <li>
                                    <Link class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" to="/">Free Products</Link>
                                </li>
                            </ul>
                        </div>
                        <div class="w-full lg:w-4/12 px-4">
                            <span class="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Other Resources</span>
                            <ul class="list-unstyled">
                                <li>
                                    <Link class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" to="/">MIT License</Link>
                                </li>
                                <li>
                                    <Link class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" to="/">Terms &amp; Conditions</Link>
                                </li>
                                <li>
                                    <Link class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" to="/">Privacy Policy</Link>
                                </li>
                                <li>
                                    <Link class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" to="/">Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                </div>
                <hr class="my-6 border-blueGray-300" />
                <div class="flex flex-wrap items-center md:justify-between justify-center">
                    <div class="w-full md:w-4/12 px-4 mx-auto text-center">
                        <div class="text-sm text-blueGray-500 font-semibold py-1">
                        Copyright © <span id="get-current-year">2021</span>
                        <Link to="/" class="text-blueGray-500 hover:text-gray-800" target="_blank" rel="noreferrer"> Notus JS by </Link>
                        <Link to="/" class="text-blueGray-500 hover:text-blueGray-800">Creative Tim</Link>.
                        </div>
                    </div>
                </div>
            </div>
            </footer>
    );
};

export default Footer;