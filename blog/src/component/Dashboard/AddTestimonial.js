import React from 'react';

const AddTestimonial = () => {
    return (
        <div className='px-16 py-10'>
            <h1 className='text-5xl font-bold px-5 py-10'>Add Testimonial</h1>
            <form>
                <div className="form-control w-full">
                    <input type="text" placeholder="Enter title" className="my-6 input input-bordered input-info w-full bg-white text-black" name='title' required />
                    <input type="text" placeholder="Enter Location" className="my-6 input input-bordered input-info w-full bg-white text-black" name='location' required />
                    <input type="text" placeholder="Enter image link" className="my-6 input input-bordered input-info w-full bg-white text-black" name='imagelink' required />
                    <textarea name="" id="" cols="30" rows="16" className='py-16 my-6 input input-bordered input-info w-full bg-white text-black'></textarea>
                  
                    <button className="btn bg-[#dc7672] hover:bg-[#dc7672] text-white btn-outline w-full btn-[#dc7672] my-6" type='submit'>Add Article</button>
                </div>
            </form>
        </div>
    );
};

export default AddTestimonial;