import React from 'react'
import { FaPlus } from 'react-icons/fa'

function Upload() {
    return (
        <div className='bg-gray-200 mx-5 p-10 my-20'>
            <h1 className="text-3xl font-medium text-center">
                Upload Book Details
            </h1>
            <div className="md:grid grid-cols-2 w-full mt-10">
                <div className="px-3">
                    <div className="mb-3">
                        <input type="text" placeholder='Book Title' className="w-full p-2 rounded bg-white" />
                    </div>
                    <div className="mb-3">
                        <input type="text" placeholder='Author' className="w-full p-2 rounded bg-white" />
                    </div>
                    <div className="mb-3">
                        <input type="text" placeholder='Book Cover Image URL' className="w-full p-2 rounded bg-white" />
                    </div>
                    <div className="mb-3">
                        <input type="text" placeholder='Total Pages' className="w-full p-2 rounded bg-white" />
                    </div>
                    <div className="mb-3">
                        <input type="text" placeholder='Orginal Price' className="w-full p-2 rounded bg-white" />
                    </div>
                    <div className="mb-3">
                        <input type="text" placeholder='Discount Price' className="w-full p-2 rounded bg-white" />
                    </div>
                    <div className="mb-3">
                        <textarea rows={5} placeholder='Abstract' className=" w-full p-2 rounded bg-white" />
                    </div>
                </div>
                <div className="px-3">
                    <div className="mb-3">
                        <input type="text" placeholder='Publisher' className="w-full p-2 rounded bg-white" />
                    </div>
                    <div className="mb-3">
                        <input type="text" placeholder='Language' className="w-full p-2 rounded bg-white" />
                    </div>
                    <div className="mb-3">
                        <input type="text" placeholder='ISBN' className="w-full p-2 rounded bg-white" />
                    </div>
                    <div className="mb-3">
                        <input type="text" placeholder='Category' className="w-full p-2 rounded bg-white" />
                    </div>
                    <div className="mb-5 flex justify-center items-center">
                        <label htmlFor="upload">
                            <input type="file" hidden id='upload' />
                            <img style={{ height: '250px', width: '250px' }} src="/Upload-Transparent.png" alt="" className='cursor-pointer' />
                        </label>
                    </div>

                    {/*preview*/}
                    <div className=" flex justify-center items-center">
                        <img style={{ height: '70px', width: '70px' }} src="/author.png" alt="" className='cursor-pointer' />
                        <label htmlFor="bookupload">
                            <input type="file" hidden id='bookupload' />
                            <FaPlus className='text-3xl ms-2 cursor-pointer' />
                        </label>
                    </div>
                </div>
            </div>
            <div className="flex md:justify-end justify-center mt-5 px-5 w-full">
                     <button className="bg-gray-600 text-white py-2 px-3 rounded">
                        RESET
                     </button>
                         <button className="bg-blue-600 text-white py-2 ms-2 px-3 rounded">
                      Add Book Details
                     </button>
                   </div>
        </div>
    )
}

export default Upload
