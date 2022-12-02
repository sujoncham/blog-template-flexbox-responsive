import React from 'react';
import Galleries from './Galleries';
import LatestPost from './LatestPost';

const Sidebar = () => {
    return (
        <div>
            <h1>Side bar</h1>
            <div className='flex'>
                <input type="text" placeholder='search' className='w-full px-3 py-3 border-2' />
                <button className='btn bg-purple-400 px-3 py-2'>Search</button>
            </div>
            <h1 className='bg-purple-500 py-3 px-2'>Latest Post</h1>
            <LatestPost />
            <h1 className='bg-purple-500 py-3 px-2'>Latest Galleries</h1>
            <Galleries />
        </div>
    );
};

export default Sidebar;