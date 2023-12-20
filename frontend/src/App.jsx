import React, { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home, Service } from './pages'

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Service />} />
        <Route path="/doctors/:pageNumber" element={<Home />} />
        <Route path="/doctors" element={<Home />} />
        <Route path="/Hospital" element={<Service />} />
        <Route path="/About" element={<Service />} />
        <Route path="/Contact" element={<Service />} />
      </Routes>
    </div>
  )
}

export default App
