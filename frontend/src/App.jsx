import React, { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home } from './pages'

function App() {

  return (
    <div>
      <Routes>
        <Route path="/doctors/:pageNumber" element={<Home />} />
        <Route path="/doctors" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
