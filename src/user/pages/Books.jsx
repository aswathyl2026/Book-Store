import React, { useEffect, useState ,useContext} from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { getAllBookAPI } from '../../services/allAPI'
import { searchContext } from '../../contextAPI/ShareContext'
function Books() {
  const{searchKey,setSearchKey}=useContext(searchContext)
  const [toggle,setToggle]=useState(false)
  const [token,setToken]=useState("")
  const [allBooks,setAllBooks]=useState([])
  const [categoryList,setCategoryList]=useState([])
  const [dummyAllBooks,setDummyAllBooks]=useState([])
console.log(categoryList);

  useEffect(()=>{
    const userToken=sessionStorage.getItem("token")
    setToken(userToken)
    getBooks()
  },[searchKey])

  const getBooks=async()=>{
    const result=await getAllBookAPI(searchKey)
    if(result.status==200){
      setAllBooks(result.data)
      setDummyAllBooks(result.data)
      const tempCategory=result.data.map(item=>item.category)
      setCategoryList([...new Set(tempCategory)])
    }
  }
  const filterBook=(category)=>{
    if(category!='all'){
   setAllBooks(dummyAllBooks?.filter(book=>book.category==category))
    }
  else{
    getBooks()
  }
  }
  return (
    <>
      <Header />
      {
        token ?
        <>
        {/*header*/}
        <div className="flex flex-col justify-center items-center my-5">
          <h1 className="text-3xl font-bold my-5">All Books</h1>
          <div className="flex my-5">
            <div className="flex my-5">
              <input value={searchKey} onChange={(e)=>setSearchKey(e.target.value)} type="text" className="p-2 border birder-gray-200 w-100" placeholder='Search By Book Title' />
              <button  className="p-2 bg-blue-800 text-white">Search</button>
            </div>
          </div>
        </div>
        {/*grid filter and book card*/}
        <div className="md:grid grid-cols-4 p-5 md:px-40 mb-10">
          {/*filter*/}
          <div className="col-span-1">
            <div className="flex justify-between">
              <h1 className="text-2xl font-bold">Filter</h1>
              <button onClick={()=>setToggle(!toggle)} className="font-bold text-2xl md:hidden"><FaBars /></button>
            </div>
            {/*filter item*/}
            <div className={toggle?"block":"hidden md:block"}>
              <div className="mt-3">
                <input onClick={()=>filterBook(('all'))} type="radio" name="filter" id="no-filter" />
                <label className='ms-3' htmlFor="no-filter">All</label>
              </div>
              {/*duplicate filter item*/}
              {
                categoryList?.map(category=>(
                  <div className="mt-3">
                <input onClick={()=>filterBook((category))}  type="radio" name="filter" id={category}/>
                <label className='ms-3' htmlFor={category}>{category}</label>
              </div>
                ))
              }
            </div>

          </div>
          {/*book card*/}
          <div className="col-span-3">
                <div className="md:grid grid-cols-4 mt-5 w-full md:mt-0">
          {/*duplicate according to book*/}
          {
            allBooks.length>0 ?
            allBooks?.map(book=>(
              <div className="shadow rounded p-3 m-4 md:mb-2">
            <img style={{ width: '100%', height: '300px' }} src={book?.imageURL} alt="img" />
            <div className="flex flex-col justify-center items-center mt-4">
              <h2 className="font-bold text-blue-700 text-xl">{book?.author}</h2>
              <h3 className="text-lg">{book?.title}</h3>
              <Link to={`/books/${book?._id}`} className="font-bold bg-blue-800 text-white p-2 mt-2">View Book</Link>
            </div>
          </div>
            ))
            :
            <div className="text-center my-5 font-bold">Book Not Found !!!!</div>
          }
          
        </div>
          </div>
        </div>
      </>
      :
      <div className="w-full h-screen flex justify-center items-center flex-col">
        <img className='w-50' src="https://cdn.pixabay.com/animation/2023/06/13/15/12/15-12-30-710_512.gif" alt="login icon" />
        <p className="text-lg font-bold my-15">Please<Link to={'/login'} className='text-blue-500 underline'>Login </Link> to Explore More...</p>
      </div>
      }
      <Footer />

    </>
  )
}

export default Books
