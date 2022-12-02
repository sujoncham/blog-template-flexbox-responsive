import React from 'react';
import { FaFileMedical, FaFileSignature, FaFileVideo, FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Sidebar = ({openTab, setOpenTab, show}) => {
    return (
        <div className="flex flex-col h-screen">
            <div onClick={() => setOpenTab(1)}
                className={` ${openTab === 1 ? "bg-[#eebb76] px-5 py-3 text-[#3B3442]" : " px-5 py-3 text-[#dc7672]"} flex justify-start items-center gap-2 cursor-pointer border-b-[1px]`}>
                    <FaHome size={20} className='' />
                    {!show ? <Link to='/dashboard'>Dashboard</Link>: ""}
            </div>
            <div onClick={() => setOpenTab(2)}
                className={` ${openTab === 2 ? "bg-[#eebb76] px-5 py-3 text-[#3B3442]" : " px-5 py-3 text-[#dc7672]"} flex justify-start items-center gap-2 cursor-pointer border-b-[1px]`}>
                    <FaFileVideo size={20} className='' />
                    {!show ? <Link to='/dashboard/addCourse'>Add Course</Link>: ""}
            </div>
            <div onClick={() => setOpenTab(3)}
                className={` ${openTab === 3 ? "bg-[#eebb76] px-5 py-3 text-[#3B3442]" : " px-5 py-3 text-[#dc7672]"} flex justify-start items-center gap-2 cursor-pointer border-b-[1px]`}>
                    <FaFileSignature size={20} className='' />
                    {!show ? <Link to='/dashboard/addArticle'>Add Article</Link>: ""}
            </div>
            <div onClick={() => setOpenTab(4)}
                className={` ${openTab === 4 ? "bg-[#eebb76] px-5 py-3 text-[#3B3442]" : " px-5 py-3 text-[#dc7672]"} flex justify-start items-center gap-2 cursor-pointer border-b-[1px]`}>
                    <FaFileMedical size={20} className='' />
                    {!show ? <Link to='/dashboard/addTestimonial'>Add Testimonial</Link>: ""}
            </div>
            <div onClick={() => setOpenTab(5)}
                className={` ${openTab === 5 ? "bg-[#eebb76] px-5 py-3 text-[#3B3442]" : " px-5 py-3 text-[#dc7672]"} flex justify-start items-center gap-2 cursor-pointer border-b-[1px]`}>
                    <FaFileMedical size={20} className='' />
                    {!show ? <Link to='/dashboard/allPost'>All Post</Link>: ""}
            </div>
    </div>
    );
};

export default Sidebar;