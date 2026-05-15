import React, { useEffect, useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import { ToastContainer, toast } from 'react-toastify';
import { bookUploadAPI, getAIBookAPI } from '../../services/allAPI';
import useDebounce from '../../hooks/useDebounce';

function Upload() {
    const [bookDetails, setBookDetails] = useState({
        title: "", author: "", imageURL: "", pages: "", price: "", discountPrice: "", abstract: "", publisher: "", isbn: "", language: "", category: "", uploadImages: []
    })
    const [preview, setPreview] = useState("")
    const [previewList, setPreviewList] = useState([])
    const debounceTitle=useDebounce(bookDetails.title,1000)
    useEffect(()=>{
     if(debounceTitle){
        console.log("gemini api call"); 
        getAIAbstract()
     }
    },[debounceTitle])
    const getAIAbstract=async()=>{
      const result=  await getAIBookAPI(debounceTitle)
      setBookDetails({...bookDetails,abstract:result.data.content})
    }
   // console.log(bookDetails);
    const handleUploadBook = (e) => {
        const imageFile = e.target.files[0]
        const uploadBookImageArray = bookDetails.uploadImages
        uploadBookImageArray.push(imageFile)
        setBookDetails({ ...bookDetails, uploadImages: uploadBookImageArray })
        const url = URL.createObjectURL(imageFile)
        setPreview(url)
        const demoPreviewList = previewList
        demoPreviewList.push(url)
        setPreviewList(demoPreviewList)
    }
    const resetForm = () => {
        setBookDetails({
            title: "", author: "", imageURL: "", pages: "", price: "", discountPrice: "", abstract: "", publisher: "", isbn: "", language: "", category: "", uploadImages: []
        })
        setPreview("")
        setPreviewList([])
    }
    const uploadBook = async () => {
        const { title, author, imageURL, pages, price, discountPrice, abstract, publisher, isbn, language, category, uploadImages } = bookDetails

        if (!title || !author || !imageURL || !pages || !price || !discountPrice || !abstract || !publisher || !isbn || !language || !category || uploadImages.length == 0) {
            toast.info("Fill the form completely")
        } else {
            //api
            const reqBody = new FormData()
            for (let key in bookDetails) {
                if (key !== "uploadImages") {
                    reqBody.append(key, bookDetails[key])
                } else {
                    bookDetails.uploadImages.forEach(imageFile => {
                        reqBody.append("uploadImages", imageFile)
                    })


                }
            }
            const result=await bookUploadAPI(reqBody)
            console.log(result);
            if(result.status==201){
              toast.success("book uploaded successfully")
            }else{
              toast.warning(result.response)
            }
           resetForm() 
        }
    }
    return (
        <div className='bg-gray-200 mx-5 p-10 my-20'>
            <h1 className="text-3xl font-medium text-center">
                Upload Book Details
            </h1>
            <div className="md:grid grid-cols-2 w-full mt-10">
                <div className="px-3">
                    <div className="mb-3">
                        <input value={bookDetails.title} onChange={e => setBookDetails({ ...bookDetails, title: e.target.value })} type="text" placeholder='Book Title' className="w-full p-2 rounded bg-white" />
                    </div>
                    <div className="mb-3">
                        <input value={bookDetails.author} onChange={e => setBookDetails({ ...bookDetails, author: e.target.value })} type="text" placeholder='Author' className="w-full p-2 rounded bg-white" />
                    </div>
                    <div className="mb-3">
                        <input value={bookDetails.imageURL} onChange={e => setBookDetails({ ...bookDetails, imageURL: e.target.value })} type="text" placeholder='Book Cover Image URL' className="w-full p-2 rounded bg-white" />
                    </div>
                    <div className="mb-3">
                        <input value={bookDetails.pages} onChange={e => setBookDetails({ ...bookDetails, pages: e.target.value })} type="text" placeholder='Total Pages' className="w-full p-2 rounded bg-white" />
                    </div>
                    <div className="mb-3">
                        <input value={bookDetails.price} onChange={e => setBookDetails({ ...bookDetails, price: e.target.value })} type="text" placeholder='Orginal Price' className="w-full p-2 rounded bg-white" />
                    </div>
                    <div className="mb-3">
                        <input value={bookDetails.discountPrice} onChange={e => setBookDetails({ ...bookDetails, discountPrice: e.target.value })} type="text" placeholder='Discount Price' className="w-full p-2 rounded bg-white" />
                    </div>
                    <div className="mb-3">
                        <textarea value={bookDetails.abstract} onChange={e => setBookDetails({ ...bookDetails, abstract: e.target.value })} rows={5} placeholder='Abstract' className=" w-full p-2 rounded bg-white" />
                    </div>
                </div>
                <div className="px-3">
                    <div className="mb-3">
                        <input value={bookDetails.publisher} onChange={e => setBookDetails({ ...bookDetails, publisher: e.target.value })} type="text" placeholder='Publisher' className="w-full p-2 rounded bg-white" />
                    </div>
                    <div className="mb-3">
                        <input value={bookDetails.language} onChange={e => setBookDetails({ ...bookDetails, language: e.target.value })} type="text" placeholder='Language' className="w-full p-2 rounded bg-white" />
                    </div>
                    <div className="mb-3">
                        <input value={bookDetails.isbn} onChange={e => setBookDetails({ ...bookDetails, isbn: e.target.value })} type="text" placeholder='ISBN' className="w-full p-2 rounded bg-white" />
                    </div>
                    <div className="mb-3">
                        <input value={bookDetails.category} onChange={e => setBookDetails({ ...bookDetails, category: e.target.value })} type="text" placeholder='Category' className="w-full p-2 rounded bg-white" />
                    </div>
                    <div className="mb-5 flex justify-center items-center">
                        <label htmlFor="upload">
                            <input onChange={e => handleUploadBook(e)} type="file" hidden id='upload' />
                            <img style={{ height: '250px', width: '250px' }} src={preview ? preview : "/Upload-Transparent.png"} alt="" className='cursor-pointer' />
                        </label>
                    </div>

                    {/*preview*/}
                    {
                        preview &&
                        <div className=" flex justify-center items-center">
                            {
                                previewList?.map((imageURL, index) => (
                                    <img key={`${imageURL}-${index}`} style={{ height: '70px', width: '70px' }} src={imageURL} alt="" className='cursor-pointer mx-2' />
                                ))
                            }
                            {
                                previewList.length < 3 &&
                                <label htmlFor="bookupload">
                                    <input onChange={e => handleUploadBook(e)} type="file" hidden id='bookupload' />
                                    <FaPlus className='text-3xl ms-2 cursor-pointer' />
                                </label>
                            }
                        </div>
                    }
                </div>
            </div>
            <div className="flex md:justify-end justify-center mt-5 px-5 w-full">
                <button onClick={resetForm} className="bg-gray-600 text-white py-2 px-3 rounded">
                    RESET
                </button>
                <button onClick={uploadBook} className="bg-blue-600 text-white py-2 ms-2 px-3 rounded">
                    Add Book Details
                </button>
            </div>
            <ToastContainer position='top-center' theme='colored' autoClose='3000' />
        </div>
    )
}

export default Upload
