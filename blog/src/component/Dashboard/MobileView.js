import React from 'react';
import { FaClinicMedical, FaHome, FaWhmcs } from "react-icons/fa";

const MobileView = ({openTab, setOpenTab, show}) => {
    return (
        <div className="flex flex-col shadow-lg absolute w-[180px] top-16 z-40 bg-[#3b3542] lg:hidden">
            <div onClick={() => setOpenTab(1)}
                className={` ${openTab === 1 ? "bg-[#eebb76] px-5 py-3 text-white" : " px-5 py-3"} flex justify-start items-center gap-2 cursor-pointer border-b-[1px]`}>
                    <FaHome size={20} className='text-white' />
                    {show ? <span>Dashboard</span>: ""}
            </div>
                
            <div onClick={() => setOpenTab(2)}
                className={` ${openTab === 2 ? "bg-[#eebb76] px-5 py-3 text-white" : "px-5 py-3"} flex justify-start items-center gap-2 cursor-pointer border-b-[1px]`}>
                    <FaClinicMedical size={20} className='text-white' />
                    {show ? <span>Hero Section</span> :""}
            </div>
            <div onClick={() => setOpenTab(3)}
                className={` ${openTab === 3 ? "bg-[#eebb76] px-5 py-3 text-white" : "px-5 py-3"} flex justify-start items-center gap-2 cursor-pointer border-b-[1px]`}>
                    <FaWhmcs size={20} className='text-white' />
                    {show ? <span>Our Services</span> : ""}
            </div>
            
    </div>
    );
};

export default MobileView;