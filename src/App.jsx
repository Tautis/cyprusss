import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css'
import NavBar from './pages/components/navbar/navbar'
import Home from './pages/home/home'
import Apartaments from './pages/apartaments/apartaments'
import Footer from './pages/components/footer/footer'
import RecentlyVisitedStorage from '../../recentStorage';
function App() {
  return (
    <>
    <RecentlyVisitedStorage />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/apartaments' element={<Apartaments/>}/>
      </Routes>
    </>
  )
}

export default App
