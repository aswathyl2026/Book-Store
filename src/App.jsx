import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './user/pages/Home'
import Profile from './user/pages/Profile'
import Contact from './user/pages/Contact'
import Books from './user/pages/Books'
import View from './user/pages/View'

import AdminDashboard from './admin/pages/AdminDashboard'
import AdminResource from './admin/pages/AdminResource'
import AdminSettings from './admin/pages/AdminSettings'

import Auth from './pages/Auth'
import Pnf from './pages/Pnf'

import Preloader from './components/Preloader'
import { useState } from 'react'
function App() {
const [isLoading,setIsLoading]=useState(true)
 
setTimeout(() => {
  setIsLoading(false)
}, 1000);


  return (
    <>
      <Routes>
        <Route path='/' element={isLoading?<Preloader/>:<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/books' element={<Books />} />
        <Route path='/login' element={<Auth />} />
        <Route path='/register' element={<Auth insideRegister/>} />

        <Route path='/profile/:id' element={<Profile />} />
        <Route path='/books/:id' element={<Books />} />

       <Route path='/admin' element={isLoading?<Preloader/>:<AdminDashboard />} /> 
        <Route path='/admin/resource' element={<AdminResource />} /> 
         <Route path='/admin/settings' element={<AdminSettings />} /> 

          <Route path='/*' element={<Pnf />} /> 
      </Routes>
      
    </>
  )
}

export default App
