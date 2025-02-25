/* eslint-disable no-unused-vars */
import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import HeroSection from './components/pages/HeroSection'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import FacultyDashboard from './components/pages/FacultyDashboard';
import ToggleRegister from './components/pages/ToggleRegister';
import AdminRegister from './components/admin/AdminRegister';
import AdminDashboard from './components/admin/AdminDashboard';
import AdminLogin from './components/admin/AdminLogin';
import Login from './components/pages/Login';
import About from './components/pages/About';
import Contact from './components/pages/Contact';

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' Component={HeroSection} />
      <Route path='/dashboard' Component={FacultyDashboard}/>
      <Route path='/register' Component={ToggleRegister}/>
      <Route path='/adminregister' Component={AdminRegister}/>
      <Route path='/admindashboard' Component={AdminDashboard}/>
      <Route path='/adminlogin' Component={AdminLogin}/>
      <Route path='/login' Component={Login}/>
      <Route path='/about' Component={About}/>
      <Route path='/contact' Component={Contact}/>

    </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App