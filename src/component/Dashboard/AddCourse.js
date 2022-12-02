import React from 'react';

const AddCourse = () => {
    return (
        <div className='px-16 py-10'>
            <h1 className='text-5xl font-bold px-5 py-10'>Add Course</h1>
            <form>
                <div className="form-control w-full">
                    <input type="text" placeholder="Enter title" className="my-6 input input-bordered input-info w-full bg-white text-black" name='title' required />
                    <input type="text" placeholder="Enter video link" className="input input-bordered input-info w-full bg-white text-black" name='vediolink' required />
                    <select name="" id="" className="my-6 input input-bordered input-info w-full bg-white text-black">
                        <option value="">select one</option>
                        <option value="english">English Course</option>
                        <option value="math">Math Course</option>
                    </select>
                  
                    <button className="btn bg-[#dc7672] hover:bg-[#dc7672] text-white btn-outline w-full btn-[#dc7672] my-6" type='submit'>Add Course</button>
                </div>
            </form>
        </div>
    );
};

export default AddCourse;