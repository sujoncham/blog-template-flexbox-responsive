import React from 'react';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

const AllBlog = () => {
    return (
        <div>
            <h1>All Post</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                <div>
                    <img src="/images/img2.jpg" alt="" />
                    <p className='text-purple-300'>12 November 2022</p>
                    <h5>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, corrupti!</h5>
                    <span className='bg-purple-400 px-1 py-1'>read more...</span>
                </div>
                <div>
                    <img src="/images/img2.jpg" alt="" />
                    <p className='text-purple-300'>12 November 2022</p>
                    <h5>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, corrupti!</h5>
                    <span className='bg-purple-400 px-1 py-1'>read more...</span>
                </div>
                <div>
                    <img src="/images/img2.jpg" alt="" />
                    <p className='text-purple-300'>12 November 2022</p>
                    <h5>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, corrupti!</h5>
                    <span className='bg-purple-400 px-1 py-1'>read more...</span>
                </div>
                <div>
                    <img src="/images/img2.jpg" alt="" />
                    <p className='text-purple-300'>12 November 2022</p>
                    <h5>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, corrupti!</h5>
                    <span className='bg-purple-400 px-1 py-1'>read more...</span>
                </div>
                <div>
                    <img src="/images/img2.jpg" alt="" />
                    <p className='text-purple-300'>12 November 2022</p>
                    <h5>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, corrupti!</h5>
                    <span className='bg-purple-400 px-1 py-1'>read more...</span>
                </div>
                <div>
                    <img src="/images/img2.jpg" alt="" />
                    <p className='text-purple-300'>12 November 2022</p>
                    <h5>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, corrupti!</h5>
                    <span className='bg-purple-400 px-1 py-1'>read more...</span>
                </div>
                <div>
                    <img src="/images/img2.jpg" alt="" />
                    <p className='text-purple-300'>12 November 2022</p>
                    <h5>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, corrupti!</h5>
                    <span className='bg-purple-400 px-1 py-1'>read more...</span>
                </div>
                <div>
                    <img src="/images/img2.jpg" alt="" />
                    <p className='text-purple-300'>12 November 2022</p>
                    <h5>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, corrupti!</h5>
                    <span className='bg-purple-400 px-1 py-1'>read more...</span>
                </div>
                <div>
                    <img src="/images/img2.jpg" alt="" />
                    <p className='text-purple-300'>12 November 2022</p>
                    <h5>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, corrupti!</h5>
                    <span className='bg-purple-400 px-1 py-1'>read more...</span>
                </div>
                <div>
                    <img src="/images/img2.jpg" alt="" />
                    <p className='text-purple-300'>12 November 2022</p>
                    <h5>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, corrupti!</h5>
                    <span className='bg-purple-400 px-1 py-1'>read more...</span>
                </div>
                <div>
                    <img src="/images/img2.jpg" alt="" />
                    <p className='text-purple-300'>12 November 2022</p>
                    <h5>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, corrupti!</h5>
                    <span className='bg-purple-400 px-1 py-1'>read more...</span>
                </div>
                <div>
                    <img src="/images/img2.jpg" alt="" />
                    <p className='text-purple-300'>12 November 2022</p>
                    <h5>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, corrupti!</h5>
                    <span className='bg-purple-400 px-1 py-1'>read more...</span>
                </div>
                <div>
                    <img src="/images/img2.jpg" alt="" />
                    <p className='text-purple-300'>12 November 2022</p>
                    <h5>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, corrupti!</h5>
                    <span className='bg-purple-400 px-1 py-1'>read more...</span>
                </div>
            </div>
            <div className='py-5 flex gap-2'>
                <button className='bg-purple-500 px-3 py-1 rounded-sm'><FaAngleDoubleLeft /></button>
                <button className='bg-purple-500 px-3 py-1 rounded-sm'>1</button>
                <button className='bg-purple-500 px-3 py-1 rounded-sm'>2</button>
                <button className='bg-purple-500 px-3 py-1 rounded-sm'>3</button>
                <button className='bg-purple-500 px-3 py-1 rounded-sm'>4</button>
                <button className='bg-purple-500 px-3 py-1 rounded-sm'><FaAngleDoubleRight /></button>
            </div>
        </div>
    );
};

export default AllBlog;