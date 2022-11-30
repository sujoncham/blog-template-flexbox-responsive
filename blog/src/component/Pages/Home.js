import React from 'react';
import AllBlog from './HomePage/AllBlog';
import Food from './HomePage/Food';
import LifeStyle from './HomePage/LifeStyle';
import Sidebar from './HomePage/Sidebar';
import SportsFeatures from './HomePage/SportsFeatures';
import WorldNews from './HomePage/WorldNews';

const Home = () => {
    return (
        <div className='container mx-auto px-10'>
           <div className='flex gap-10'>
                <div className='w-[30%]'>
                    <Sidebar />
                </div>
                <div className='w-[70%]'>
                    <AllBlog />
                </div>
           </div>
            <SportsFeatures />
            <WorldNews />
            <Food />
            <LifeStyle />
        </div>
    );
};

export default Home;