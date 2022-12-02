import { Editor } from '@tinymce/tinymce-react';
import React, { useRef } from 'react';

const AddArticle = () => {

    const editorRef = useRef(null);
    const log = () => {
      if (editorRef.current) {
        console.log(editorRef.current.getContent());
      }
    };
    
    return (
        <div className='px-16 py-10'>
            <h1 className='text-5xl font-bold px-5 py-5'>Add Article</h1>
            <form>
                <div className="form-control w-full">
                    <input type="text" placeholder="Enter title" className="my-6 py-2 px-3 border-2 input input-bordered input-info w-full bg-white text-black" name='title' required />
                    <input type="text" placeholder="Enter image link" className="input py-2 px-3 border-2 input-bordered input-info w-full bg-white text-black" name='imagelink' required />
                    <select name="" id="" className="my-6 input py-2 px-3 border-2 input-bordered input-info w-full bg-white text-black">
                        <option value="">select one</option>
                        <option value="politics">Politics</option>
                        <option value="health">Health</option>
                        <option value="sports">sports</option>
                        <option value="business">business</option>
                        <option value="movies">Movies</option>
                        <option value="lifestyle">LifeStyle</option>
                        <option value="teck">Tech</option>
                    </select>
                    <select name="" id="" className="my-6 input py-2 px-3 border-2 input-bordered input-info w-full bg-white text-black">
                        <option value="">select one</option>
                        <option value="english">Featured</option>
                        <option value="math">No Featured</option>
                    </select>

                    {/* <textarea name="" id="mytextarea" cols="10" rows="6" className='py-16 px-3 border-2 input input-bordered input-info w-full bg-white text-black'></textarea> */}
                    <Editor
                        apiKey='jhxdmyg6ns806we3v44a44eybkrkp44jifnxgcvgfm5wjmkt'
                        onInit={(evt, editor) => editorRef.current = editor}
                        initialValue="<p>This is the initial content of the editor.</p>"
                        init={{
                        height: 500,
                        menubar: false,
                        plugins: [
                            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                            'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                        ],
                        toolbar: 'undo redo | blocks | ' +
                            'bold italic forecolor | alignleft aligncenter ' +
                            'alignright alignjustify | bullist numlist outdent indent | ' +
                            'removeformat | help',
                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                        }}
                        onClick={log}
      />
                  
                    <button className="py-2 bg-[#dc7672] hover:bg-[#dc7672] text-white btn-outline w-full btn-[#dc7672] my-6" type='submit'>Add Article</button>
                </div>
            </form>
        </div>
    );
};

export default AddArticle;