import React from 'react'
import Home from '../pages/Home'
import { Route, Routes } from 'react-router-dom'
import Layout from '../components/Layout'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Lost from '../pages/Lost'
import Found from '../pages/Found'
import ContactAdmin from '../pages/ContactAdmin'
// import Header from '../components/Header'
// import About from '../pages/About'
// import Services from '../pages/Services'

function AppRoutes() {
  return (
    <>
    {/* <Header/> */}
     <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/sign-in" element={<Login/>} />
         <Route path="/sign-up" element={<Register/>}/> 
         <Route path="/lostItem" element = {<Lost/>}/>
         <Route path="/foundItem" element = {<Found/>}/>
         <Route path="/contact" element={<ContactAdmin/>}/>
         <Route path="layout/*" element={<Layout />} /> 
       </Routes>   

    </>
  )
}

export default AppRoutes